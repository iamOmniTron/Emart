import { ApiErrorCodes, ApiErrorMessages } from "./constants";

export default class BadRequestError extends Error {
  public statusCode: number;
  constructor() {
    super();
    this.statusCode = ApiErrorCodes.BAD_REQUEST;
    this.message = ApiErrorMessages.BAD_REQUEST_MESSAGE;
  }
}
