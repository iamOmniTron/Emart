import { model, Schema, Types, Document } from "mongoose";
import { User } from "./user.model";

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
});

export interface IProduct {
  category: string;
  name: string;
  imageUrl: string;
  price: number;
  color?: string;
  gender?: string;
  seller?: string;
}

export const Product = model<IProduct>("Product", ProductSchema);
