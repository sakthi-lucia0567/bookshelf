import mongoose from "mongoose";

export const user = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
});
