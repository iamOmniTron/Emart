import { model, Document, Schema, Types } from "mongoose";
import { User } from "./user.model";
import { Product } from "./product.model";
import { Review } from "./review.model";
import { NEW_STORE_VALIDITY as STORE_VALIDITY } from "../config/config";

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
  active: {
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
  storeValidity: {
    type: Date,
    default: parseInt(STORE_VALIDITY),
  },
});

export interface IStore extends Document {
  name: string;
  vendor: string;
  createdAt: string;
  active?: boolean;
  reviews?: Array<string>;
  products?: Array<string>;
  storeValidity?: number;
}

export const Store = model<IStore>("Store", StoreSchema);
