import { model, Schema, Types, Document } from "mongoose";
import { User } from "./user.model";
import { Store } from "./store.model";

const ProductSchema = new Schema({
  category: {
    type: String,
    enum: ["bag", "shoe", "earring", "dress"],
    required: true,
  },
  name: {
    type: String,
    min: 3,
  },
  price: {
    type: Schema.Types.Decimal128,
    default: 0.0,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  seller: {
    type: Types.ObjectId,
    ref: "User",
  },
  storeId: {
    type: String,
    ref: "Store",
  },
});

export interface IProduct extends Document {
  category: string;
  name: string;
  imageUrl: string;
  price: number;
  color?: string;
  gender?: string;
  seller?: string;
  storeId?: string;
}

export const Product = model<IProduct>("Product", ProductSchema);
