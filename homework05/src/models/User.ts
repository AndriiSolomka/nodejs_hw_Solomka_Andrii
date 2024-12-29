import mongoose from "mongoose";
import collections from "../dbCollectionsNames/dbCollectionsName";

const { users } = collections;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

export const User = mongoose.model(users, UserSchema);
