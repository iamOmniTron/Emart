import { ApiErrorCodes, ApiErrorMessages } from "./constants";

export default class InternalServerError extends Error {
  public statusCode: number;
  constructor() {
    super();
    this.statusCode = ApiErrorCodes.INTERNAL_ERROR;
    this.message = ApiErrorMessages.INTERNAL_ERROR_MESSAGE;
  }
}
