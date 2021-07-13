import { ApiErrorCodes, ApiErrorMessages } from "./constants";

export default class NotfoundError extends Error {
  public statusCode: number;
  constructor() {
    super();
    this.statusCode = ApiErrorCodes.NOT_FOUND;
    this.message = ApiErrorMessages.NOT_FOUND_MESSAGE;
  }
}
