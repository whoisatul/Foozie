import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken"
import validator from "validator"


const generateAccessAndRefreshTokens = async(userId) => {
    try {
        const user = await userModel.findById(userId)
        if (!user) {
            console.log("User not found for token generation");
            return null;
        }
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}
    } catch (error) {
        console.log("Token generation error:", error)
        return null;
    }
}

const registeruser = async (req, res) => {

    const { name, email, password } = req.body;

    try {
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.json({
                success: false,
                message: "already account exists"
            });
        }

        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Enter a valid email"
            });
        }

        if (password.length < 8) {
            return res.json({
                success: false,
                message: "password must be at least 8 characters"
            });
        }

        const user = await userModel.create({
            name,
            email,
            password
        });

        res.json({
            success: true,
            message: "user registered successfully"
        });

    } catch (error) {
        console.log("user not registered", error);
        res.json({
            success: false,
            message: "something went wrong during registering a user"
        });
    }
};

const loginuser = async(req,res) => {

    const {email, password} = req.body

    if (!email) {
        return res.json({
            success:false, 
            message:"email is required"})
    }

   const user = await userModel.findOne({email}) 

   if(!user){
    return res.json({
        success:false, 
        message:"user not exists"})
   }
   
   const isPasswordValid = await user.isPasswordCorrect(password)

   if(!isPasswordValid){
    return res.json({
        success:false, 
        message:"invalid password"})
   }
   const tokens = await generateAccessAndRefreshTokens(user._id);
   if (!tokens) {
       return res.status(500).json({ success: false, message: "Token generation failed" });
   }
   const { accessToken, refreshToken } = tokens;
   res.json({
    success:true,
    message:"user loggedin successfully",
    accessToken,refreshToken

   })

    
}

export {registeruser,loginuser}