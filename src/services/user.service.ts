import { IUserDoc, User } from "../models/user.model";
import { IUserRegInfo as RegInfo } from "./constants";

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

export const getUser = async (id: string): Promise<IUserDoc | null> => {
  try {
    const user = await User.findOne({ _id: id });
    if (!user) return null;
    return user;
  } catch (error) {
    return null;
  }
};

export const getVendor = async (id: string): Promise<IUserDoc | null> => {
  try {
    const vendor = await User.findOne({ _id: id, vendor: true });
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
