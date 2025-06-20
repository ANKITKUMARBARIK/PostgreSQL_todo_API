import { Router } from "express";
import {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodoById,
    deleteTodoById,
} from "../controllers/todo.controller.js";
import validate from "../middlewares/validate.middleware.js";
import {
    createTodoSchema,
    updateTodoSchema,
} from "../validations/todo.validation.js";

const router = Router();

router.route("/create-todo").post(validate(createTodoSchema), createTodo);
router.route("/get-all-todos").get(getAllTodos);
router.route("/get-todo/:id").get(getTodoById);
router
    .route("/update-todo/:id")
    .put(validate(updateTodoSchema), updateTodoById);
router.route("/delete-todo/:id").delete(deleteTodoById);

export default router;
