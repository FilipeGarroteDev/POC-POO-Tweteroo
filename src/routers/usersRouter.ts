import express from "express";
import { createUserController } from "../useCases/Users/createUser";

const authRouter = express.Router();

authRouter.post("/sign-up", (req, res) =>
	createUserController.handle(req, res)
);

export default authRouter;
