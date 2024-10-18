// pet schema here
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 0,
    },
    breed: String,
  });

export default mongoose.model("Pet", petSchema)