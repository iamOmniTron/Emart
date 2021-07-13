import { IOrder, Order } from "../models/order.model";
import { OrderItems } from "./constants";
import { extractField, extractPhoneNumber } from "../lib/helper";
import { IUserDoc as IUser, User } from "../models/user.model";
import { fetchCouponDiscount } from "./coupon.service";

export const createOrder = async (order: OrderItems): Promise<boolean> => {
  try {
    const { cart, city, notes, street, couponCode } = order;
    const { store, products, totalPrice, totalItem, user: userId } = cart;
    const user: IUser | null = await User.findById(userId);
    if (user == null) {
      throw "invalid user";
    }
    let phone = extractPhoneNumber(notes!);
    let discount: number | null = 0;
    if (couponCode !== undefined) {
      discount = await fetchCouponDiscount(couponCode);
      if (typeof discount !== "number") {
        discount = 0;
      }
    }
    //deduct coupon discount from total price
    const discountedPrice = +(totalPrice - discount);

    const newOrder = new Order({
      user: user,
      store: store,
      products: extractField(products, "_id"),
      price: totalPrice,
      address: {
        city: city,
        email: user.email,
        notes: notes,
        street: street,
      },
      totalItem: totalItem,
      phone: (phone !== "" ? phone : user.phone!).toString(),
      total: discountedPrice,
    });
    const isSaved = await newOrder.save();
    if (!isSaved) return false;
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchFilteredOrders = async (filter: {
  string: string;
}): Promise<Array<IOrder> | null> => {
  try {
    const orders = await Order.find(filter);
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchOrder = async (orderId: string): Promise<IOrder | null> => {
  try {
    const order = await Order.findById(orderId);
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const rejectOrder = async (
  orderId: string,
  userId: string
): Promise<boolean> => {
  try {
    const isModified = await Order.findOneAndUpdate(
      { _id: orderId },
      { $set: { status: "cancelled" } },
      { new: true, runValidators: true }
    );
    if (!isModified) {
      return false;
    }
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deliverOrder = async (
  orderId: string,
  userId: string
): Promise<boolean> => {
  try {
    const order = await Order.findOne({ _id: orderId, user: userId });
    if (!order || order == null) {
      throw "no order found";
    }
    order.status = "delivered";
    const isSaved = await order.save();

    if (!isSaved) return false;
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};
