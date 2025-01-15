import { ObjectId } from "mongodb";

import mongoose from "mongoose";
import collections from "../dbCollectionsNames/dbCollectionsName";

const { posts } = collections;
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    authorId: { type: ObjectId, required: true },
    title: { type: String, required: true, minlength: 3, maxlength: 100 },
    content: { type: String, required: true, minlength: 15, maxlength: 1000 },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["draft", "published", "archived"],
      },
    },
  },
  {
    timestamps: true,
  },
);
export const Post = mongoose.model(posts, PostSchema);
