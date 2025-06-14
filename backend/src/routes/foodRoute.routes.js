import express from "express"
import { addFood,listfood,removeitem } from "../controllers/foodcon.controller.js"
import { upload } from "../middlewares/multer.middleware.js";
import { Router } from "express";

const router = express.Router();

router.route("/add").post(upload.single("image"),addFood)
router.route("/list").get(listfood)
router.route("/remove").post(removeitem)



export default router;


