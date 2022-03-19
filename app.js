// external imports are here
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const internal = require("stream");
dotenv.config();
const app = express();
const loginRouter = require("./routers/loginRouter");
const usersRouter = require("./routers/usersRouter");
const inboxRouter = require("./routers/inboxRouter");

// internal imports are here
const {
  errorHandler,
  notFoundHandler,
} = require("./middlewares/common/errorHandler");

// Database connection here
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful!"))
  .catch((err) => console.log(err));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup here
app.use(loginRouter);
app.use(usersRouter);
app.use(inboxRouter);

// 404 error handler here
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

// run app initialy here
app.listen(process.env.PORT, () => {
  console.log(`App is running on http://localhost:${process.env.PORT}`);
});
