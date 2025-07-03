import { userModel } from "../models/user.model.js";

// add cart

const addtocart = async (req, res) => {

   try {
     const userId = req.user._id; // safer from JWT middleware
     const itemId = req.body.itemId;
 
     const user = await userModel.findById(userId);
     if (!user) {
       return res.status(404).json({ success: false, message: "User not found" });
     }
 
     if (!user.cartdata) user.cartdata = {};
 
     // Initialize or increment item
     if (!user.cartdata[itemId]) {
       user.cartdata[itemId] = 1;
     } else {
       user.cartdata[itemId] += 1;
     }
 
     // Let Mongoose know the nested object changed (if needed)
     user.markModified("cartdata");
 
     await user.save();
 
     res.json({ success: true, message: "Added to cart" });
   } catch (error) {
     console.error("Cart Error:", error);
     res.status(500).json({ success: false, message: "Error adding to cart" });
   }
 };
 
// remove from cart

const removefromcart = async (req, res) => {
    try {
        // Use req.userId set by your auth middleware
        const userId = req.user?._id;
           if (!userId) {
           return res.json({ success: false, message: "User not authenticated" });
           }


        let userdata = await userModel.findById(userId);
        if (!userdata) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartdata = userdata.cartdata || {};
        if (cartdata[req.body.itemId] > 0) {
            cartdata[req.body.itemId] -= 1;
            if (cartdata[req.body.itemId] === 0) {
                delete cartdata[req.body.itemId];
            }
        }

        await userModel.findByIdAndUpdate(userId, { cartdata });
        res.json({ success: true, message: "removed from cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "not removed shows error" });
    }
};

//delete item

const deletefromcart = async (req, res) => {
  try {
      // Use req.userId set by your auth middleware
      const userId = req.user?._id;
      if (!userId) {
          return res.json({ success: false, message: "User not authenticated" });
      }

      let userdata = await userModel.findById(userId);
      if (!userdata) {
          return res.json({ success: false, message: "User not found" });
      }

      let cartdata = userdata.cartdata || {};
      // Remove the item completely
      if (cartdata[req.body.itemId]) {
          delete cartdata[req.body.itemId];
      }

      await userModel.findByIdAndUpdate(userId, { cartdata });
      res.json({ success: true, message: "Item removed completely from cart" });
  } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error removing item from cart" });
  }
};

// get cart

const getcart = async (req, res) => {
    try {
        // Find user by ID from the authenticated token, not the request body
        const userdata = await userModel.findById(req.user._id);

        if (!userdata) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        // Safely return cart data or an empty object if it doesn't exist
        const cartdata = userdata.cartdata || {};
        res.json({ success: true, cartdata });

    } catch (error) {
        console.error("Get Cart Error:", error);
        res.status(500).json({ success: false, message: "Error fetching cart data" });
    }
};

export { addtocart, removefromcart, getcart, deletefromcart  }