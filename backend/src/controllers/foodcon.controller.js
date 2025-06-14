import { foodModel } from "../models/food.model.js";
import fs from 'fs'
import path from "path";

// add food
const addFood = async (req,res) => {
   let image_filename = `${req.file.filename}`

   const food = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image: image_filename
   })
   try {
    await food.save();
    res.json({
        success:true,
        message:"Food added"
    })
   } catch (error) {
     console.log(error)
     res. json ({
        success: false,
        message: "Error"
    })
   }
};

// display food list
const listfood = async(req,res) => {
  try {
    const foods = await foodModel.find({});
    res.json({success:true,data:foods})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:" food list not found "})
  }

};

// remove food item
const removeitem = async (req, res) => {
    try {
      const food = await foodModel.findById(req.body.id)
      if (!food) {
        return res.json({ success: false, message: "Item not found" })
      }
      // Construct the absolute path to the image
      const imagePath = path.join(process.cwd(), "public", "temp", food.image)
      
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.log("Image deletion error:", err);
        }
      })
  
      await foodModel.findByIdAndDelete(req.body.id)
      res.json({ success: true, message: "Item removed" })
    } catch (error) {
      console.log(error)
      res.json({ success: false, message: "Not removed" })
    }
  };

export{ addFood,listfood,removeitem }