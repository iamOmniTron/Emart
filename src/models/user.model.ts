import { model, Document, Schema, Types } from "mongoose";

const UserSchema = new Schema({
  firstname: {
    type: String,
    min: 3,
    required: true,
  },
  lastname: {
    type: String,
    min: 3,
  },
  googleId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  vendor: {
    type: Boolean,
  },
  stores: [
    {
      type: String,
    },
  ],
  credits: {
    type: Number,
  },
  rti: {
    type: Number,
  },
});

export interface IUserDoc extends Document {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  goodleId: string;
  imageUrl?: string;
  vendor?: boolean;
  stores?: string | Array<string>;
  credits?: number;
}

export const User = model<IUserDoc>("User", UserSchema);
