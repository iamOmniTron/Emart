import { ICoupon, Coupon } from "../models/coupons.model";

// TODO: install package to generate coupon codes
//3 days
const COUPON_VALIDITY = 259200000;

export const createCoupon = async (
  user: string,
  discount: number
): Promise<boolean> => {
  try {
    // TODO: autogenerate this
    const code = "hafnafvaava";
    const coupon = new Coupon({
      code: code,
      discount: discount,
      expiry: COUPON_VALIDITY,
      user: user,
    });

    const isSaved = await coupon.save();
    if (!isSaved) return false;
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchAllCoupon = async (
  user: string
): Promise<Array<ICoupon> | []> => {
  try {
    const coupons = await Coupon.find({ user });
    return coupons;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCoupon = async (
  user: string,
  couponId: string
): Promise<ICoupon | null> => {
  try {
    const coupon = await Coupon.findOne({ _id: couponId, user: user });
    return coupon;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCouponDiscount = async (
  couponCode: ICoupon["code"]
): Promise<ICoupon["discount"] | null> => {
  try {
    const coupon = await Coupon.findOne({ code: couponCode });
    return coupon!.discount;
  } catch (error) {
    throw new Error(error.message);
  }
};
