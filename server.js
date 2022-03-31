require("dotenv").config();
const log = require("debug")("fruits:server");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override")
const fruitsController = require("./controllers/fruits.js")
const usersController = require("./controllers/users.js")


const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {}, () => {
  log("connected to mongodb");
});
const app = express();
const PORT = process.env.PORT ?? 2000;

app.use(morgan("tiny"));
app.use(
    session({
      secret: "iamsimon", //process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
      resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
      saveUninitialized: false, // default  more info: https://www.npmjs.com/package/express-session#resave
    })
  );
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use("/fruits", fruitsController);
app.use("/users", usersController);


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  log("express started on " + PORT);
});
