import { loginuser, registeruser } from "../controllers/usercon.controller.js";
import { Router } from "express";

const router = Router();

router.route("/register").post(registeruser)
router.route("/login").post(loginuser)


export default router;