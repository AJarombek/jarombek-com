import dynamoose from "dynamoose";

/**
 * Schema for the Subscribers object in DynamoDB
 * @author Andrew Jarombek
 * @since 6/2/2018
 */

const Schema = dynamoose.Schema;

const SubscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  subscribed: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  first: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
  created: {
    type: String,
    required: true,
  },
  updated: {
    type: String,
    required: true,
  },
  verify_code: {
    type: String,
    required: true,
  },
  unsub_code: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    required: false,
    default: false,
  },
  deleted: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export default dynamoose.model("Subscribers", SubscriberSchema);
