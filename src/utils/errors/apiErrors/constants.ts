export enum ApiErrorCodes {
  BAD_REQUEST = 400,
  UNAUTHENTICATED = 401,
  UNAUTHORIZED = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

export enum ApiErrorMessages {
  BAD_REQUEST_MESSAGE = "bad request",
  UNAUTHENTICATED_MESSAGE = "unauthenticated",
  UNAUTHORIZED_MESSAGE = "unauthorized",
  NOT_FOUND_MESSAGE = "resource not found",
  INTERNAL_ERROR_MESSAGE = "internal server error",
}
