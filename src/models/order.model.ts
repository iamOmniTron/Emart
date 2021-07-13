import { model, Document, Schema, Types } from "mongoose";
import { User } from "./user.model";
import { Product } from "./product.model";

const OrderSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      type: Types.ObjectId,
      ref: "Product",
    },
  ],
  price: {
    type: Types.Decimal128,
  },
  phone: {
    type: String,
    min: 9,
    max: 9,
  },
  status: {
    type: String,
    enum: ["created", "pending", "delivered", "cancelled"],
    default: "created",
  },
  total: {
    type: Types.Decimal128,
  },
  orderedAt: {
    type: Date,
    dafault: Date.now,
  },
  totalItem: {
    type: String,
  },
  address: {
    city: {
      type: String,
    },
    street: {
      type: String,
    },
    email: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
});
interface IAddress {
  city: string;
  email: string;
  notes: string;
  street: string;
}
export interface IOrder extends Document {
  user: string;
  phone: string;
  total?: number;
  totalItem: number;
  status?: string;
  products: Array<string>;
  orderedAt?: string;
  address: IAddress;
  price: number;
}

export const Order = model<IOrder>("Order", OrderSchema);
