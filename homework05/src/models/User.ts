import mongoose from "mongoose";
import collections from "../dbCollectionsNames/dbCollectionsName";

const { users } = collections;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: String, required: true },
});

export const User = mongoose.model(users, UserSchema);
