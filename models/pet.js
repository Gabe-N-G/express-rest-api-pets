// pet schema here
import mongoose from "mongoose";

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
  },
  {timestamps: true}
);

export default mongoose.model("Pet", petSchema)