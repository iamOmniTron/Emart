import { IProduct } from "../models/product.model";
import Cart from "./cart.service";

export interface IUserRegInfo {
  firstname: string;
  lastname: string;
  googleId: string;
  email: string;
  imageUrl?: string;
}

export interface IUserUpdateData {
  firstname?: string;
  lastname?: string;
  phone?: string;
  imageUrl?: string;
}

export interface IProductDetails {
  category: string;
  color: string;
  name: string;
  price: number;
  imageUrl: string;
  storeId: string;
  gender?: string;
  seller?: string;
}

export enum ProductCategories {
  SHOES = "shoes",
  BAGS = "bags",
  EARRINGS = "earrings",
  DRESS = "dress",
}

export interface IReviewData {
  reviewerId: string;
  storeId: string;
  review: string;
  rating: number;
}

export interface IStoreDetails {
  name: string;
  vendor: string;
}

export interface ICartItems {
  items: string | Array<string>;
  price: number;
}

export interface Item {
  product: IProduct;
  unit: number;
}

export interface OrderItems {
  cart: Cart;
  phone?: string;
  couponCode?: string;
  city: string;
  notes?: string;
  street: string;
}
