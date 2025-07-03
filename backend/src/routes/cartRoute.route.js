import { addtocart,removefromcart,getcart, deletefromcart } from "../controllers/cartcon.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/add").post(verifyJWT,addtocart)
router.route("/remove").post(verifyJWT,removefromcart)
router.route("/getcart").post(verifyJWT,getcart)
router.route("/delete").post(verifyJWT,deletefromcart)

export default router;