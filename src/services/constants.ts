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
  gender?: string;
  seller?: string;
}

export enum ProductCategories {
  SHOES = "shoes",
  BAGS = "bags",
  EARRINGS = "earrings",
  DRESS = "dress",
}
