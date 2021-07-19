import { model, Document, Schema, Types } from "mongoose";
import { User } from "./user.model";

const CouponSchema = new Schema({
  code: {
    type: String,
    min: 6,
  },
  discount: {
    type: Number,
    required: true,
  },
  used: {
    type: Boolean,
    default: false,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  expiry: {
    type: Date,
  },
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
});

export interface ICoupon extends Document {
  code: string;
  discount: number;
  used?: boolean;
  createdOn?: number;
  expiry: number;
  user: string;
}

export const Coupon = model<ICoupon>("Coupon", CouponSchema);
