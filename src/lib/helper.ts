import { IProduct } from "../models/product.model";

export const isExistElement = (arr: Array<any>, element: any): boolean => {
  return arr.includes(element);
};

export const transverseStore = (
  stores: Array<string>,
  products: Array<IProduct>
): Array<string> => {
  try {
    let flag: boolean;
    for (let i = 0; i < stores.length; i++) {
      for (let j = 0; j < products.length; length++) {
        //if a store is matched, break the loop
        if (stores[i] == products[j].storeId) {
          break;
        } else {
          if (j == products.length - 1) {
            //remove stores[i] from stores
            return (stores = stores.filter((store) => store !== stores[i]));
          }
        }
      }
    }
    return stores;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const extractField = (array: Array<any>, field: any): Array<any> => {
  const fields: Array<any> = [];
  // array.forEach((element) => {
  //   if (!element["field"]) {
  //     return [];
  //     break;
  //   }
  //   fields.push(element[field]);
  // });
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (!element[field]) {
      return [];
      break;
    }
    fields.push(element[field]);
    index++;
  }
  return fields;
};

export const extractPhoneNumber = (str: string): string => {
  try {
    const pattern = /(?:[-+()]*\d){10,13}/gm;
    const number = str.match(pattern)!.map((res) => res.trim())[0];
    if (typeof number == null) {
      return "";
    }
    return number;
  } catch (error) {
    return "";
  }
};

export const calcDiscount = (amount: number, discount: number): number => {
  try {
    const percentage = parseInt((discount / 100).toString());
    return amount * percentage;
  } catch (error) {
    throw new Error(error.message);
  }
};
