import { ApiErrorCodes, ApiErrorMessages } from "./constants";

export default class UnauthorizedError extends Error {
  public statusCode: number;
  constructor() {
    super();
    this.statusCode = ApiErrorCodes.UNAUTHORIZED;
    this.message = ApiErrorMessages.UNAUTHORIZED_MESSAGE;
  }
}
