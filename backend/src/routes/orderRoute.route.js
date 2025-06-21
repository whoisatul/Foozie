import { Router } from "express";
import { placeorder } from "../controllers/ordercon.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/checkout").post(verifyJWT,placeorder)

export default router;