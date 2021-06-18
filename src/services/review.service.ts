import { Review, IReview } from "../models/review.model";
import { IReviewData } from "./constants";

export const createReview = async (reviews: IReviewData): Promise<Boolean> => {
  try {
    const review = new Review(...reviews);
    const isReviewed = await review.save();
    if (!isReviewed) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export const fetchAllReviews = async (): Promise<Array<IReview> | null> => {
  try {
    // TODO: paginate
    const reviews = await Review.find({});
    if (!reviews) return null;
    return reviews;
  } catch (error) {
    return null;
  }
};

export const getReview = async (reviewId: string): Promise<IReview | null> => {
  try {
    const review = await Review.findOne({ _id: reviewId });

    if (!review) return null;
    return review;
  } catch (error) {
    return null;
  }
};

export const updateReview = async (
  reviewId: string,
  review: IReviewData
): Promise<IReview | null> => {
  try {
    const isUpdated = await Review.findOneAndUpdate(
      { _id: reviewId },
      { $set: { ...review } },
      { runValidators: true }
    );
    if (!isUpdated) return false;
    return true;
  } catch (error) {
    return null;
  }
};

export const deleteReview = async (reviewId: string): Promise<Boolean> => {
  try {
    const isDeleted = await Review.findOneAndDelete({ _id: reviewId });

    if (!isDeleted) return false;
    return true;
  } catch (error) {
    return false;
  }
};
