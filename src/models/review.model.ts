import { model, Document, Schema, Types } from "mongoose";
import { User } from "./user.model";
import { Store } from "./store.model";

const ReviewSchema = new Schema({
  reviewer: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  storeId: {
    type: Types.ObjectId,
    ref: "Store",
    required: true,
  },
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
  reviewer: string;
  storeId: string;
  review: string;
  rating: number;
  createdAt?: string;
}

export const Review = model<IReview>("Review", ReviewSchema);
