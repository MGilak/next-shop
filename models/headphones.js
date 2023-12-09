const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  off: {
    type: Number,
    required: true,
  },
});

const headphonesModels = mongoose.model("Headphone", schema);

export default headphonesModels;
