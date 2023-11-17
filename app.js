const express = require("express");
const expHand = require("express-handlebars");
const mongoose = require("mongoose");
require("dotenv").config({ path: "config/.env" });

const app = express();
const { engine } = expHand;
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

const connectDB = async () => {
  try {
    const connection = mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
    });
    // console.log((await connection).connection.host);
    console.log("DB connected!");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
connectDB();

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
