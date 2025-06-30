import { orderModel } from "../models/order.model.js";
import { userModel } from "../models/user.model.js";
import Razorpay from "razorpay";

const placeorder = async (req, res) => {
  try { // Debug log
    const userId = req.user._id;
    const { items, amount, address, payment, razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    // Only create order if payment is true
    if (!payment) {
      return res.status(400).json({ success: false, message: "Payment not confirmed" });
    }

    // 1. Create a new order document in your database
    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
      payment: true,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature // set payment to true
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

const userOrder = async(req,res) => {

  try {
    const userId = req.user._id;
    const order = await orderModel.find({ userId });
    res.json({ success:true, data:order })
  } catch (error) {
    console.log(error)
    res.json({ success:false, message: "user order error"})
  }
}

const listorder = async(req,res) => {

  try {
    const orders = await orderModel.find({});
    res.json({success:true,data:orders});
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"list not fetched"})
  }

}

const updatestatus = async(req,res) => {

  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {status:req.body.status})
    res.json ({success: true,message:"Status Updated" })
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"status not updated"})
  }

}

export { placeorder,userOrder,listorder,updatestatus };