import { ObjectId } from "mongodb";

import mongoose from "mongoose";
import collections from "../dbCollectionsNames/dbCollectionsName";

const { posts } = collections;
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    authorId: { type: ObjectId, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
export const Post = mongoose.model(posts, PostSchema);
