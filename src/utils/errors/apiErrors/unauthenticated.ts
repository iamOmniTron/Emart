import { ApiErrorCodes, ApiErrorMessages } from "./constants";

export default class UnauthenticatedError extends Error {
  public statusCode: number;
  constructor() {
    super();
    this.statusCode = ApiErrorCodes.UNAUTHENTICATED;
    this.message = ApiErrorMessages.UNAUTHENTICATED_MESSAGE;
  }
}
