import { Router } from "express";
import { listorder, placeorder, updatestatus, userOrder } from "../controllers/ordercon.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/checkout").post(verifyJWT,placeorder)
router.route("/myorder").post(verifyJWT,userOrder)
router.route("/listorder").get(listorder)
router.route("/updatestatus").post(updatestatus)

export default router;