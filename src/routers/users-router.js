import express from "express";
import AuthController from "../controllers/users-controller";

const authRouter = express.Router();

authRouter.post('/sign-up', AuthController.signin);

export default authRouter