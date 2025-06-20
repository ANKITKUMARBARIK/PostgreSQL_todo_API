import asyncHandler from "../utils/asyncHandler.util.js";
import ApiError from "../utils/ApiError.util.js";
import ApiResponse from "../utils/ApiResponse.util.js";
import {
    getAllTodosService,
    getTodoByIdService,
    createTodoService,
    updateTodoService,
    deleteTodoService,
} from "../models/todo.model.js";

export const createTodo = asyncHandler(async (req, res) => {
    const { title, content } = req.body;

    const todos = await createTodoService(title, content);
    if (!todos) throw new ApiError(500, "todo not added");

    return res
        .status(201)
        .json(new ApiResponse(201, todos, "added todo successfully"));
});

export const getAllTodos = asyncHandler(async (req, res) => {
    const todo = await getAllTodosService();
    if (!todo) throw new ApiError(500, "todos doesn't fetch");

    return res
        .status(200)
        .json(new ApiResponse(200, todo, "fetched all todos successfully"));
});

export const getTodoById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const todo = await getTodoByIdService(id);
    if (!todo) throw new ApiError(404, "todo not found");

    return res
        .status(200)
        .json(new ApiResponse(200, todo, "fetched todo successfully"));
});

export const updateTodoById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const todo = await updateTodoService(id, title, content);
    if (!todo) throw new ApiError(404, "todo not found");

    return res
        .status(200)
        .json(new ApiResponse(200, todo, "todo updated successfully"));
});

export const deleteTodoById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const todo = await deleteTodoService(id);
    if (!todo) throw new ApiError(404, "todo not found");

    return res
        .status(200)
        .json(new ApiResponse(200, todo, "todo deleted successfully"));
});
