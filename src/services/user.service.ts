import { IUserDoc, User } from "../models/user.model";
import {
  IUserRegInfo as RegInfo,
  IUserUpdateData as UpdateData,
} from "./constants";
import paginate from "../utils/paginator";

const userSelection = {
  googleId: 0,
  credits: 0,
  rti: 0,
};
// TODO: find a way to paginate
export const createUser = async (info: RegInfo): Promise<boolean> => {
  try {
    const user = new User({
      ...info,
    });
    const isSaved = await user.save();
    if (!isSaved) return false;
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUser = async (userId: string): Promise<IUserDoc | null> => {
  try {
    const user = await User.findOne({ _id: userId }).select(userSelection);
    if (!user) return null;
    // return paginate(user);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getVendor = async (userId: string): Promise<IUserDoc | null> => {
  try {
    const vendor = await User.findOne({ _id: userId, vendor: true })
      .populate("store")
      .select(userSelection);
    if (!vendor) return null;
    // return paginate(vendor);
    return vendor;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchAllUsers = async (): Promise<Array<IUserDoc> | null> => {
  try {
    const users = await User.find({})
      .sort([["datecreated", 1]])
      .skip(0 * 20)
      .limit(20)
      .select(userSelection);
    if (!users) return null;
    // return paginate(users);
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchAllVendors = async (): Promise<Array<IUserDoc> | null> => {
  try {
    const vendors = User.find({ vendor: true })
      .sort([["datecreated", 1]])
      .skip(0 * 20)
      .limit(20)
      .select(userSelection);
    if (!vendors) return null;
    // return paginate(vendors);
    return vendors;
  } catch (error) {
    throw new Error(error.message);
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
    throw new Error(error.message);
  }
};

export const updateCredit = async (
  userId: string,
  unit: number
): Promise<boolean> => {
  try {
    // TODO: find a way to optimize this
    const updated = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { credits: parseInt("unit") } }
    );
    if (!updated) return false;
    return true;
  } catch (error) {
    throw new Error(error.message);
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
    throw new Error(error.message);
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
    throw new Error(error.message);
  }
};
