import { Store, IStore } from "../models/store.model";
import { IStoreDetails } from "./constants";
// name
// vendor

export const createStore = async (details: IStoreDetails): Promise<Boolean> => {
  try {
    const store = new Store({ ...details });
    const isSaved = await store.save();
    if (!isSaved) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export const getStores = async (): Promise<Array<IStore> | null> => {
  try {
    const stores = await Store.find({});
    if (!stores) return null;
    return stores;
  } catch (error) {
    return null;
  }
};

export const getAvailableStores = async (): Promise<Array<IStore> | null> => {
  try {
    const stores = await Store.find({ online: true });
    if (!stores) return null;
    return stores;
  } catch (error) {
    return null;
  }
};

export const getStore = async (storeId: string): Promise<IStore | null> => {
  try {
    const store = await Store.findOne({ _id: storeId });
    if (!store) return null;
    return store;
  } catch (error) {
    return null;
  }
};
