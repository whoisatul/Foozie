import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const verifyJWT = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, token missing",
      });
    }

    const token = authHeader.split(" ")[1]; // Extract token

    // Verify token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Fetch user
    const user = await userModel.findById(decoded._id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid token, user not found",
      });
    }

    req.user = user; // attach user to request
    next();
  } catch (error) {
    console.error("JWT error:", error);
    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
