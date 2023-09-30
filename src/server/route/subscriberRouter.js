/**
 * Routes for the Subscribers API
 * @author Andrew Jarombek
 * @since 4/8/2023
 */

import express from "express";
import moment from "moment";
import { v4 as uuid } from "uuid";
import base64 from "base64-url";

import emails from "../fn/emails";
import SubscribersDao from "../dao/subscribersDao";
import Subscriber from "../model/subscriber";

/**
 * Create the REST API for subscribers
 * @return {*} The express router for subscribers
 */
const routes = () => {
  const subscriberRouter = express.Router();

  /**
   * '/' Route
   */
  baseRoute(subscriberRouter);

  /**
   * '/filter/:email' Route
   */
  filterEmailRoute(subscriberRouter);

  /**
   * '/verify/:code' Route
   */
  verifyCodeRoute(subscriberRouter);

  /**
   * '/unsub/:code' Route
   */
  unsubCodeRoute(subscriberRouter);

  return subscriberRouter;
};

/**
 * Handler for the base routes of the API ('/' endpoints)
 * @param router - the express router for the subscribers API
 */
const baseRoute = (router) => {
  router.route("/").get(getAll).post(create);
};

/**
 * Handler for the email filter routes of the API ('/filter/:email' endpoints)
 * @param router - the express router for the subscribers API
 */
const filterEmailRoute = (router) => {
  router.use("/filter/:email", filterEmailMiddleware);

  router.route("/filter/:email").get(get).delete(deleteOne);
};

/**
 * Handler for the verify code routes of the API ('/verify/:code' endpoints)
 * @param router - the express router for the subscribers API
 */
const verifyCodeRoute = (router) => {
  router.route("/verify/:code").patch(verifyCode);
};

/**
 * Handler for the unsubscribe code routes of the API ('/unsub/:code' endpoints)
 * @param router - the express router for the subscribers API
 */
const unsubCodeRoute = (router) => {
  router.route("/unsub/:code").patch(unsubCode);
};

/**
 * Get all the subscribers in the DynamoDB table
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const getAll = (req, res) => {
  SubscribersDao.getAll().then(
    (subscribers) => {
      res.json(subscribers);
    },
    (reason) => {
      res.status(400).json({
        error: "Failed to Retrieve all subscribers",
        message: reason,
      });
    },
  );
};

/**
 * Create a new subscriber in the database.  If all goes smoothly subscribing,
 * a welcome email is sent to the provided email address.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const create = (req, res) => {
  console.info(`Request Body: ${JSON.stringify(req.body)}`);

  const rawSubscriber = new Subscriber(req.body);
  console.info(`Creating Subscriber: ${rawSubscriber}`);

  if (
    rawSubscriber !== undefined &&
    rawSubscriber.email &&
    rawSubscriber.first &&
    rawSubscriber.last
  ) {
    const verify_code = base64.encode(uuid());
    const unsub_code = base64.encode(uuid());
    const created = moment().format();

    const subscriber = {
      ...rawSubscriber.toObject(),
      subscribed: true,
      created,
      verify_code,
      unsub_code,
    };

    console.info(
      `Subscriber object passed to DynamoDB ${JSON.stringify(subscriber)}`,
    );

    // Insert the new Subscriber
    SubscribersDao.insert(subscriber).then(
      (newSubscriber) => {
        // If the insert succeeds, send a welcome email
        emails.sendWelcomeEmail(newSubscriber.email, verify_code, unsub_code);

        res.status(201).json(newSubscriber);
      },
      (reason) => {
        res.status(400).json({
          error: `Subscriber Creation Failed: ${reason}`,
          message: reason,
        });
      },
    );
  } else {
    res
      .status(500)
      .json({
        error: "Subscriber must have an email, first name, and last name",
      });
  }
};

/**
 * Middleware for routes that contain an email filter.  Find the subscriber with a matching email in the
 * database here and pass it down to further route handlers.
 * @param req - HTTP request body
 * @param res - HTTP response body
 * @param next - the next step on middleware in the router
 */
const filterEmailMiddleware = (req, res, next) => {
  SubscribersDao.getByEmail(req.params.email).then(
    (subscriber) => {
      console.info(`Subscriber with matching email: ${subscriber.email}`);
      req.subscriber = subscriber;
      next();
    },
    (reason) => {
      res.status(404).json({
        error: "No subscriber found with given email",
        message: reason,
      });
    },
  );
};

/**
 * Get a single subscriber.  The object is simply returned as it was retrieved from the table
 * in the middleware step.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const get = (req, res) => {
  res.json(req.subscriber);
};

/**
 * Delete a single subscriber from the database.  The subscriber object comes from the middleware step.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const deleteOne = (req, res) => {
  SubscribersDao.remove(req.subscriber).then(
    () => {
      res.status(204).send();
    },
    (reason) => {
      res.status(400).json({
        error: "Failed to remove subscriber",
        message: reason,
      });
    },
  );
};

/**
 * Verify a subscriber based on a verification code.  The subscriber will be altered if the verification code
 * passed to the DAO matches the one for this subscriber in the database.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const verifyCode = (req, res) => {
  SubscribersDao.verify(req.params.code).then(
    (subscriber) => {
      res.status(200).json(subscriber);
    },
    (reason) => {
      res.status(400).json({
        error: "Failed to Verify subscriber",
        message: reason,
      });
    },
  );
};

/**
 * Unsubscribe based on a verification code.  The subscriber will be removed if the unsub code
 * passed to the DAO matches the one for this subscriber in the database.
 * @param req - HTTP request body
 * @param res - HTTP response body
 */
const unsubCode = (req, res) => {
  SubscribersDao.unsub(req.params.code).then(
    (subscriber) => {
      res.status(200).json(subscriber);
    },
    (reason) => {
      res.status(400).json({
        error: "Failed to Unsubscribe subscriber",
        message: reason,
      });
    },
  );
};

export default routes;
