import { IProduct, Product } from "../models/product.model";
import { IProductDetails, ProductCategories as Categories } from "./constants";

const productSelection = {
  storeValidity: 0,
  googleId: 0,
  vendor: 0,
  store: 0,
  credits: 0,
  rti: 0,
  __v: 0,
  storeId: 0,
  createdAt: 0,
};

export const createProduct = async (
  productDetail: IProductDetails
): Promise<boolean> => {
  try {
    const product = new Product({ ...productDetail });
    const isSaved = await product.save();
    if (!isSaved) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export const fetchAllProducts = async (): Promise<Array<IProduct> | null> => {
  try {
    const products = await Product.find({})
      .populate(["storeId", "seller"])
      .select(productSelection);
    if (!products || products == null) return null;

    return products;
  } catch (error) {
    return null;
  }
};

export const fetchProduct = async (
  productId: string
): Promise<IProduct | null> => {
  try {
    const product = await Product.findOne({ _id: productId })
      .populate(["storeId", "seller"])
      .select(productSelection);
    if (!product || product == null) return null;
    return product;
  } catch (error) {
    return null;
  }
};

export const fetchByCategory = async (
  category: Categories
): Promise<Array<IProduct> | null> => {
  try {
    let products: Array<IProduct> | null;
    switch (category) {
      case Categories.SHOES:
        products = await Product.find({ category: "shoe" })
          .populate(["storeId", "seller"])
          .select(productSelection);
        return products;
        break;
      case Categories.BAGS:
        products = await Product.find({ category: "bag" })
          .populate(["storeId", "seller"])
          .select(productSelection);
        return products;
        break;
      case Categories.DRESS:
        products = await Product.find({ category: "dress" })
          .populate(["storeId", "seller"])
          .select(productSelection);
        return products;
        break;

      default:
        products = null;
        break;
    }
    return products;
  } catch (error) {
    return null;
  }
};

export const fetchByStore = async (
  storeId: string
): Promise<Array<IProduct> | null> => {
  try {
    const products = await Product.find({ storeId })
      .populate(["storeId", "seller"])
      .select(productSelection);
    if (!products) return null;
    return products;
  } catch (error) {
    return null;
  }
};
