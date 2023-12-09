const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }
    await mongoose.connect("mongodb://127.0.0.1:27017/next-shop");
    console.log("Connected!");
  } catch (error) {
    console.log("not connect", error);
  }
};

export default connectToDB;
