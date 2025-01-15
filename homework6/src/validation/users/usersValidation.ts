import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name must be at least 3 characters",
    "string.max": "Name must not exceed 30 characters",
    "any.required": "Name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "Email must be a string",
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  age: Joi.number().integer().min(18).max(100).required().messages({
    "number.base": "Age must be a number",
    "number.min": "Age must be at least 18",
    "number.max": "Age must not exceed 100",
    "any.required": "Age is required",
  }),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).optional(),
  email: Joi.string().email().optional(),
  age: Joi.number().integer().min(18).max(100).optional(),
});
