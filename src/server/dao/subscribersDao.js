/**
 * Data Access Object for Subscribers
 * @author Andrew Jarombek
 * @since 4/8/2023
 */

import Subscribers from '../model/subscriber';
import Audit from '../model/audit';
import Subscriber from '../model/subscriber';

class SubscribersDao {
  /**
   * Get all the subscribers in the DynamoDB database
   * @return {Promise<*>} a list of subscribers from DynamoDB
   */
  static getAll = async () => {
    return await Subscribers.scan().exec();
  };

  /**
   * Make a query on the Subscribers table in DynamoDB with a specific email
   * @param email - the email of a subscriber to search for
   * @return {Promise<*>}
   */
  static getByEmail = async (email) => {
    return await Subscribers.query('email').eq(email).exec();
  };

  /**
   * Make a findOne() query on the Subscriber table in DynamoDB with a specific
   * verification code
   * @param code - the verification code of a subscriber to search for
   * @return {Promise<*>}
   */
  static getByVerifyCode = async (code) => {
    return await Subscriber.findOne({ verify_code: code }).exec();
  };

  /**
   * Make a findOne() query on the Subscriber table in DynamoDB with a specific
   * unsubscription code
   * @param code - the unsubscription code of a subscriber to search for
   * @return {Promise<*>}
   */
  static getByUnsubCode = async (code) => {
    return await Subscriber.findOne({ unsub_code: code }).exec();
  };

  /**
   * Insert a new subscriber into the Subscriber table.  A new document will be added to the audit
   * collection noting the new subscriber creation.
   * @param subscriber - an object representing a subscriber
   * @return {Promise<*>} the newly created subscriber once resolved, or an error message on failure
   */
  static insert = async (subscriber) => {
    const existingSubscriber = await SubscribersDao.getByEmail(subscriber.email);

    if (existingSubscriber) {
      throw Error(`Subscriber already exists with email ${subscriber.email}`);
    } else {
      // The email isn't in use, so create the new subscriber!
      const newSubscriber = await Subscriber.create(subscriber);

      // Audit the creation of a new subscriber
      const audit = new Audit({
        item_id: newSubscriber.email,
        type: 'subscriber',
        message: `Created Subscriber ${newSubscriber.email}`,
        source: 'Jarombek.com NodeJS/Express API',
      });

      await Audit.create(audit);

      return newSubscriber;
    }
  };

  /**
   * Remove a subscriber from the database based on the subscriber email.  A new document will be added to
   * the audit collection noting the subscriber removal.
   * @param subscriber - an object representing a subscriber
   * @return {Promise<void>} a promise that resolves once the function finishes
   */
  static remove = async (subscriber) => {
    await subscriber.remove();

    // Should return null if it was successfully deleted
    const deleted = await Subscriber.findOne({
      email: subscriber.email,
    }).exec();

    // Call the catch() function if the subscriber was not deleted
    if (deleted !== null) {
      throw Error('Subscriber Still Exists');
    }

    // Audit the deletion of a subscriber
    const audit = new Audit({
      item_id: subscriber._id,
      type: 'subscriber',
      message: `Deleted Subscriber: ${subscriber.email}`,
      source: 'Jarombek.com NodeJS/Express API',
    });

    await Audit.create(audit);
  };

  /**
   * Unsubscribe a subscriber and audit the update of the subscriber in the database.  Will throw
   * an error if the subscriber was already deleted (unsubscribed) or if the subscriber does not exist with
   * the given unsubscription code.
   * @param code - the subscribers unsubscription code
   * @return {Promise<*>}
   */
  static unsub = async (code) => {
    const subscriber = await SubscribersDao.getByUnsubCode(code);

    // If the subscriber has an email property we can assume it is valid
    if (subscriber.email) {
      if (subscriber.deleted === false) {
        // eslint-disable-next-line no-unused-vars
        const { _id, ...subscriberObject } = subscriber.toObject();

        const deletedSubscriber = {
          ...subscriberObject,
          deleted: true,
        };

        await Subscriber.update(
          {
            email: subscriber.email,
            deleted: false,
          },
          deletedSubscriber,
        ).exec();

        const updatedSubscriber = SubscribersDao.getByEmail(subscriber.email);

        const audit = new Audit({
          item_id: updatedSubscriber.email,
          type: 'subscriber',
          message: `Deleted Subscriber ${updatedSubscriber.email}`,
          source: 'Jarombek.com NodeJS/Express API',
        });

        await Audit.create(audit);

        return updatedSubscriber;
      } else {
        throw `Subscriber already deleted with email: ${subscriber.email}`;
      }
    } else {
      throw `Subscriber does not exist with unsubscription code: ${code}`;
    }
  };

  /**
   * Verify a subscriber and audit the update of the subscriber in the database.  Will throw
   * an error if the subscriber was already verified or if the subscriber does not exist with
   * the given verification code.
   * @param code - the subscriber verification code
   * @return {Promise<*>}
   */
  static verify = async (code) => {
    const subscriber = await SubscribersDao.getByVerifyCode(code);

    // If the subscriber has an email property we can assume it is valid
    if (subscriber.email) {
      if (subscriber.verified === false) {
        // eslint-disable-next-line no-unused-vars
        const { _id, ...subscriberObject } = subscriber.toObject();

        const verifiedSubscriber = {
          ...subscriberObject,
          verified: true,
        };

        await Subscriber.update(
          {
            email: subscriber.email,
            deleted: false,
          },
          verifiedSubscriber,
        ).exec();

        const updatedSubscriber = SubscribersDao.getByEmail(subscriber.email);

        const audit = new Audit({
          item_id: updatedSubscriber.email,
          type: 'subscriber',
          message: `Updated/Verified Subscriber ${updatedSubscriber.email}`,
          source: 'Jarombek.com NodeJS/Express API',
        });

        await Audit.create(audit);

        return updatedSubscriber;
      } else {
        throw `Subscriber already verified with email: ${subscriber.email}`;
      }
    } else {
      throw `Subscriber does not exist with verification code: ${code}`;
    }
  };
}

export default SubscribersDao;
