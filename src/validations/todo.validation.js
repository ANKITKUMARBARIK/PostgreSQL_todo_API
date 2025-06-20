import Joi from "joi";

export const createTodoSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    content: Joi.string().max(1000).allow(""),
});

export const updateTodoSchema = Joi.object({
    title: Joi.string().min(3).max(100),
    content: Joi.string().max(1000).allow(""),
});
