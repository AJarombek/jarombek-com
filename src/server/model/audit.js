import mongoose from 'mongoose';

/**
 * Schema for the Audit object in MongoDB
 * @author Andrew Jarombek
 * @since 5/17/2018
 */

const Schema = mongoose.Schema;

const AuditSchema = new Schema(
  {
    time: {
      type: Date,
      default: Date.now(),
      expires: 604800, // Expires after a week
    },
    item_id: Schema.Types.ObjectId,
    type: {
      type: String,
      required: true,
      enum: ['post', 'subscriber'],
    },
    message: {
      type: String,
      default: 'No Attached Message for Event',
    },
    source: String,
  },
  { capped: { size: 8192, max: 100, autoIndexId: true } },
);

AuditSchema.index({ time: 1 });
AuditSchema.index({ item_id: 1 });

export default mongoose.model('Audit', AuditSchema, 'audit');
