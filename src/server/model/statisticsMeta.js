import mongoose from "mongoose";

/**
 * Schema for the StatisticsMeta object in MongoDB
 * @author Andrew Jarombek
 * @since 9/18/2021
 */

const Schema = mongoose.Schema;

const StatisticsMetaSchema = new Schema({
  updated: {
    type: Date,
    required: true,
  },
});

export default mongoose.model(
  "StatisticsMeta",
  StatisticsMetaSchema,
  "statisticsMeta",
);
