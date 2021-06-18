import { model, Document, Schema, Types } from "mongoose";
import { User } from "./user.model";
import { Product } from "./product.model";
import { Review } from "./review.model";

const StoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  vendor: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  online: {
    type: Boolean,
  },
  reviews: [
    {
      type: Types.ObjectId,
      ref: "Review",
    },
  ],
  products: [
    {
      type: Types.ObjectId,
      ref: "Product",
    },
  ],
});

export interface IStore extends Document {
  name: string;
  vendor: string;
  createdAt: string;
  online?: boolean;
  reviews?: Array<string>;
  products?: Array<string>;
}

export const Store = model<IStore>("Store", StoreSchema);
