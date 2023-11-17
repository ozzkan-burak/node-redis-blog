const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = mongoose.connect(process.env.MONGODB);
    console.log((await connection).connection.host);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.export = connectDB;
