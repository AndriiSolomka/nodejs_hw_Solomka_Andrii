import Joi from "joi";

export const postBaseSchema = Joi.object({
  title: Joi.string().min(3).max(100).required().messages({
    "string.base": "Title must be a string",
    "string.empty": "Title cannot be empty",
    "string.min": "Title must have at least 3 characters",
    "string.max": "Title must not exceed 100 characters",
    "any.required": "Title is required",
  }),
  content: Joi.string().min(10).required().messages({
    "string.base": "Content must be a string",
    "string.empty": "Content cannot be empty",
    "string.min": "Content must have at least 10 characters",
    "any.required": "Content is required",
  }),
  status: Joi.string()
    .valid("draft", "published", "archived")
    .required()
    .messages({
      "any.only": "Status must be one of ['draft', 'published', 'archived']",
      "any.required": "Status is required",
    }),
});

export const createUsersPostSchema = postBaseSchema.append({
  user_id: Joi.number().integer().required().messages({
    "number.base": "User ID must be a number",
    "any.required": "User ID is required",
  }),
});

export const updateUsersPostSchema = createUsersPostSchema.append({
  title: Joi.string().min(3).max(100).optional(),
  content: Joi.string().min(10).optional(),
  status: Joi.string().valid("draft", "published", "archived").optional(),
  user_id: Joi.number().integer().optional(),
});

export const updatePostSchema = createUsersPostSchema.append({
  title: Joi.string().min(3).max(100).optional(),
  content: Joi.string().min(10).optional(),
  status: Joi.string().valid("draft", "published", "archived").optional(),
});
