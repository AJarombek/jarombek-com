import dynamoose from 'dynamoose';

/**
 * Schema for the Subscribers object in DynamoDB
 * @author Andrew Jarombek
 * @since 6/2/2018
 */

const Schema = dynamoose.Schema;

const SubscribersSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  subscribed: {
    type: Date,
    default: Date.now(),
    required: true
  },
  first: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  },
  created: {
    type: String,
    required: true
  },
  updated: {
    type: String,
    required: true
  },
  verify_cd: {
    type: String,
    required: true
  },
  unsub_cd: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  deleted: {
    type: Boolean,
    default: false
  }
});

export default dynamoose.model('Subscribers', SubscribersSchema);
