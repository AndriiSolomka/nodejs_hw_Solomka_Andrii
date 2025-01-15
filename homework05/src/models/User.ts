import mongoose from "mongoose";
import collections from "../dbCollectionsNames/dbCollectionsName";

const { users } = collections;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 20 },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  age: { type: Number, required: true, min: 0, max: 120 },
});

export const User = mongoose.model(users, UserSchema);
