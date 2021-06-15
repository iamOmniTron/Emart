import { IUserDoc, User } from "../models/user.model";
import {
  IUserRegInfo as RegInfo,
  IUserUpdateData as UpdateData,
} from "./constants";

export const createUser = async (info: RegInfo): Promise<boolean> => {
  try {
    const user = new User({
      ...info,
    });
    const isSaved = await user.save();
    if (!isSaved) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export const getUser = async (userId: string): Promise<IUserDoc | null> => {
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) return null;
    return user;
  } catch (error) {
    return null;
  }
};

export const getVendor = async (userId: string): Promise<IUserDoc | null> => {
  try {
    const vendor = await User.findOne({ _id: userId, vendor: true });
    if (!vendor) return null;
    return vendor;
  } catch (error) {
    return null;
  }
};

export const fetchAllUsers = async (): Promise<Array<IUserDoc> | null> => {
  try {
    const users = await User.find({})
      .sort([["datecreated", 1]])
      .skip(0 * 20)
      .limit(20);
    if (!users) return null;
    return users;
  } catch (error) {
    return null;
  }
};

export const fetchAllVendors = async (): Promise<Array<IUserDoc> | null> => {
  try {
    const vendors = User.find({ vendor: true })
      .sort([["datecreated", 1]])
      .skip(0 * 20)
      .limit(20);
    if (!vendors) return null;
    return vendors;
  } catch (error) {
    return null;
  }
};

export const updateProfile = async (
  userId: string,
  details: UpdateData
): Promise<boolean> => {
  try {
    const updated = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { ...details } },
      { new: true, runValidators: true }
    );
    if (!updated) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export const updateCredit = async (
  userId: string,
  unit: number
): Promise<boolean> => {
  try {
    // TODO: find a way to optimize this
    // const updated = await User.findOneAndUpdate(
    //   { _id: userId },
    //   { $set: { credits: +(this.credits! + unit) } }
    // );
    // if (!updated) return false;
    // return true;
    const user = await User.findOne({ _id: userId });
    if (!user) return false;
    user.credits! += +unit;
    const isSaved = await user.save();
    if (!isSaved) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export const assignStore = async (
  userId: string,
  storeId: string
): Promise<boolean> => {
  try {
    const user = await User.findOne({ _id: userId, store: "" });
    if (!user) return false;
    user.store = storeId;
    const isSaved = await user.save();
    if (!isSaved) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export const removeStore = async (
  userId: string,
  storeId: string
): Promise<boolean> => {
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) return false;
    user.store = "";
    const isSaved = await user.save();
    if (!isSaved) return false;
    return true;
  } catch (error) {
    return false;
  }
};
