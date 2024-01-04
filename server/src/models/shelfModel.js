import mongoose from "mongoose";

export const shelf = mongoose.Schema({
  book: {
    type: String,
    require: true,
  },
});
