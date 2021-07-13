import { IUserDoc as IUser } from "../models/user.model";
import { IProduct } from "../models/product.model";
import { Item } from "./constants";
import { isExistElement, transverseStore } from "../lib/helper";

export default class Cart {
  public user: IUser["_id"];
  public products: Array<IProduct> = [];
  public store: string = "";
  public totalPrice: number = 0;
  public totalItem: number = 0;

  constructor(user: string) {
    this.user = user;
  }

  public add(item: Item): boolean {
    try {
      const { product, unit } = item;
      const price = +(product.price * unit);
      if ((this.store = "")) {
        this.store = product.storeId!;
      }
      if (this.store != product.storeId) {
        throw "you can only order from one store";
      }
      this.products.push(product);
      this.totalItem += unit;
      this.totalPrice += price;
      return true;
    } catch (error) {
      //return false
      throw new Error(error.message);
    }
  }

  public remove(item: Item): boolean {
    try {
      const { product, unit } = item;
      //checks if product exists in cart
      if (!this.products.includes(product)) {
        throw "item doesn't exist";
      }
      const price = +(product.price * unit);
      if (this.products.length == 1) {
        this.store = "";
      }
      this.products = this.products.filter((prod) => prod !== product);
      this.totalItem -= unit;
      this.totalPrice -= price;
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
