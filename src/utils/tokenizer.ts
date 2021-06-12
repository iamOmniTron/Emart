import { verify, sign } from "jsonwebtoken";
import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_LIFETIME,
  REFRESH_TOKEN_LIFETIME,
} from "../config/config";

interface IUserDetail {
  id: string;
  storeId: string;
}

export default class Tokenizer {
  static assignAcessToken(userDetail: IUserDetail): string | null {
    try {
      return sign({ userDetail }, ACCESS_TOKEN_SECRET, {
        expiresIn: +ACCESS_TOKEN_LIFETIME,
      });
    } catch (error) {
      return null;
    }
  }
  static assignRefreshToken(userId: string): string | null {
    try {
      return sign({ userId }, REFRESH_TOKEN_SECRET, {
        expiresIn: +REFRESH_TOKEN_LIFETIME,
      });
    } catch (error) {
      return null;
    }
  }
  static decodeAccessToken(token: string): any {
    try {
      return verify(token, ACCESS_TOKEN_SECRET);
    } catch (error) {
      return null;
    }
  }
  static decodeRefreshToken(token: string): any {
    try {
      return verify(token, REFRESH_TOKEN_SECRET);
    } catch (error) {
      return null;
    }
  }
}
