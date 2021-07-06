import { connect } from "mongoose";
import { MONGO_URI_DEV } from "./config";

module.exports = function () {
  // const MONGO_URI = NODE_ENV === "production" ? MONGO_URI_PROD : MONGO_URI_DEV;
  connect(MONGO_URI_DEV, {
    keepAlive: true,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(`failed to connect to db :${error.message}`));
};
