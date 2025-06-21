import { orderModel } from "../models/order.model.js";
import { userModel } from "../models/user.model.js";
import Razorpay from "razorpay";

const placeorder = async (req, res) => {
  try {
    const userId = req.user._id;
    const { items, amount, address } = req.body;

    // 1. Create a new order document in your database
    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
    });
    await newOrder.save();

    // 2. Clear the user's cart after placing the order
    await userModel.findByIdAndUpdate(userId, { cartdata: {} });

    // 3. Configure Razorpay
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_API_KEY,
      key_secret: process.env.RAZORPAY_API_SECRET,
    });

    const options = {
      amount: amount * 100, // Amount in the smallest currency unit (paise)
      currency: "INR",
      receipt: newOrder._id.toString(), // Use your internal order ID as the receipt
    };

    // 4. Create the order with Razorpay
    const order = await instance.orders.create(options);

    // 5. Send a success response with the Razorpay order ID
    res.json({ success: true, order });

  } catch (error) {
    console.error("Place Order Error:", error);
    res.status(500).json({ success: false, message: "Error placing order. Please try again." });
  }
};

export { placeorder };