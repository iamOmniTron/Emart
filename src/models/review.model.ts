import { model, Document, Schema, Types } from "mongoose";

const ReviewSchema = new Schema({
  review: {
    type: String,
    min: 5,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export interface IReview extends Document {
  review: string;
  rating: number;
  createdAt: string;
}

export const Review = model<IReview>("Review", ReviewSchema);
