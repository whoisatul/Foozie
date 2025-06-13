import express from "express"
import { addFood } from "../controllers/foodcon.controller.js"
import multer from "multer"
import { upload } from "../middlewares/multer.middleware.js";
import { Router } from "express";

const router = Router();

router.route("/add",upload.single("image") ,addFood)



export default router;


