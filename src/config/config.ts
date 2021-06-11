import { config } from "dotenv";
config();
export const { SERVER_PORT } = process.env as {
  [key: string]: string;
};
