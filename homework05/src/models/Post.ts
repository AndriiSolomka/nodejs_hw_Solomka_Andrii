import { ObjectId } from "mongodb";

import mongoose from "mongoose";
import collections from "../dbCollectionsNames/dbCollectionsName";

const { posts } = collections;
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  authorId: Object,
  title: String,
  content: String,
  status: String,
  createdAt: Date,
  updatedAt: Date,
});
export const Post = mongoose.model(posts, PostSchema);
