import http, { createServer } from "http";
import { SERVER_PORT as PORT } from "./config/config";
import app from "./app";

createServer(app).listen(PORT, () => {
  console.log(`Mail server started at port ${PORT}`);
});
