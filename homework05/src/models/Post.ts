import { ObjectId } from "mongodb";

import mongoose from "mongoose";
import collections from "../dbCollectionsNames/dbCollectionsName";

const { posts } = collections;
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  authorId: Object,
  title: { typeof: String, required: true },
  content: { typeof: String, required: true },
  status: { typeof: String, required: true },
  createdAt: { typeof: Date, required: true },
  updatedAt: { typeof: Date, required: true },
});
export const Post = mongoose.model(posts, PostSchema);
