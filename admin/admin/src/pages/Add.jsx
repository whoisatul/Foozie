import React, { useState } from 'react';
import '../index.css';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const url = "http://localhost:8000";

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image); // ✅ fixed

    try {
      const response = await axios.post(`${url}/api/v1/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad"
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        console.log("Server responded with success: false", response.data);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        alert(error.response.data.message || "Backend error");
      } else if (error.request) {
        alert("No response from server");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="p-8 w-1/2 ml-[200px]">
      <form className="max-w-xl mx-auto bg-white p-6" onSubmit={onSubmitHandler}>
        {/* Upload Section */}
        <div className="mb-6">
          <h1 className="text-lg font-semibold mb-2">Upload Image</h1>
          <label htmlFor="image" className="block cursor-pointer border border-dashed border-gray-400 p-4 text-center">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload"
              className="w-20 h-18 mx-auto mb-2 mt-[10px]"
            />
            <span className="text-gray-500">Choose File</span>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Product Name</label>
          <input
            onChange={onChangeHandler}
            name="name"
            value={data.name}
            type="text"
            placeholder="Type here"
            className="w-full border px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Product Description</label>
          <textarea
            onChange={onChangeHandler}
            name="description"
            value={data.description}
            placeholder="Write content here"
            rows="4"
            className="w-full border px-3 py-2"
          ></textarea>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="w-1/2">
            <label className="block font-medium mb-1">Product Category</label>
            <select
              onChange={onChangeHandler}
              name="category"
              value={data.category}
              className="appearance-none w-full border-1 px-4 py-2 pr-10 bg-white text-gray-700"
            >
              <option>Salad</option>
              <option>Rolls</option>
              <option>Desert</option>
              <option>Sandwich</option>
              <option>Cake</option>
              <option>Pure veg</option>
              <option>Pasta</option>
              <option>Noodles</option>
            </select>
          </div>

          <div className="w-1/2">
            <label className="block font-medium mb-1">Product Price</label>
            <input
              onChange={onChangeHandler}
              name="price"
              value={data.price}
              type="text"
              placeholder="₹20"
              className="w-full border px-3 py-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-500 text-white py-2 hover:bg-black transition"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
