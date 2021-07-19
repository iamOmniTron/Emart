import { Store, IStore } from "../models/store.model";
import { IStoreDetails } from "./constants";

const storeSelection = {
  storeValidity: 0,
  googleId: 0,
  vendor: 0,
  store: 0,
  credits: 0,
  rti: 0,
  __v: 0,
  seller: 0,
  storeId: 0,
  createdAt: 0,
};

export const createStore = async (details: IStoreDetails): Promise<Boolean> => {
  try {
    const store = new Store({ ...details });
    const isSaved = await store.save();
    if (!isSaved) return false;
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getStores = async (): Promise<Array<IStore> | null> => {
  try {
    const stores = await Store.find({})
      .populate(["products", "reviews", "vendor"])
      .select(storeSelection);
    if (!stores) return null;
    return stores;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAvailableStores = async (): Promise<Array<IStore> | null> => {
  try {
    const stores = await Store.find({ online: true })
      .populate(["products", "reviews", "vendor"])
      .select(storeSelection);
    if (!stores) return null;
    return stores;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getStore = async (storeId: string): Promise<IStore | null> => {
  try {
    const store = await Store.findOne({ _id: storeId })
      .populate(["products", "reviews", "vendor"])
      .select(storeSelection);
    if (!store) return null;
    return store;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const subscribe = async (
  userId: string,
  storeId: string
): Promise<boolean> => {
  try {
    const store = await Store.findById(storeId);
    if (!store || store == null) {
      throw "store not found";
    }
    if (userId !== store.vendor) {
      throw "unauthorized to access store";
    }
    //do rent payment logic
    return false;
  } catch (error) {
    throw new Error(error.message);
  }
};
