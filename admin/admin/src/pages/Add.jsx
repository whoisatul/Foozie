import React, { useState } from 'react';
import '../index.css';
import { assets } from '../assets/assets';
import axios from "axios" 

const Add = () => {
  
  const url = "http://localhost:8000"
  const[image,setimage] = useState(null)
  const[data,setdata] = useState({
  name:"",
  description:"",
  price:"",
  category:"Salad"
  })
  
  const onChangehandler=(e) => {
  const name = e.target.name;
  const value = e.target.value;
  setdata(data=>({...data,[name]:value}))
  }
  
  const onsubmithandler = async (e) => {
  e.preventDefault()
  const formData = new FormData ()
  formData.append("name",data.name)
  formData.append("description",data.description)
  formData.append("price",Number(data.price))
  formData.append("category",data.category)
  formData. append ("image", image)
   
    try {
      const response = await axios.post(`${url}/api/v1/food/add`,formData)
      if(response.data.success){
       setdata({
        name:"",
        description:"",
        price:"",
        category:"Salad"
        })
        setimage(null);
      }else{
        console.log("Server responded with success: false", response.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        console.error("Backend error response:", error.response.data);
        alert(error.response.data.message || "Backend error");
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response from server");
      } else {
        console.error("Error", error.message);
        alert(error.message);
      }
    }
  }

  return (
    <div className="p-8 w-1/2 ml-[200px]">
      <form className="max-w-xl mx-auto bg-white p-6" onSubmit={onsubmithandler}>
        {/* Upload Section */}
        <div className="mb-6">
          <h1 className="text-lg font-semibold mb-2">Upload Image</h1>
          <label htmlFor="image" className="block cursor-pointer border border-dashed border-gray-400 p-4 text-center">
            <img src={image? URL.createObjectURL(image):assets.upload_area} alt="Upload" className="w-20 h-18 mx-auto mb-2 mt-[10px]" />
            <span className="text-gray-500">Choose File</span>
            <input onChange={(e)=>setimage(e.target.files[0])} type="file" id="image" className="hidden" />
          </label>
        </div>

    
        <div className="mb-4">
          <label className="block font-medium mb-1">Product name</label>
          <input onChange={onChangehandler}  name="name" value={data.name} type="text" placeholder="Type here" className="w-full border px-3 py-2 " />
        </div>


        <div className="mb-4">
          <label className="block font-medium mb-1">Product description</label>
          <textarea onChange={onChangehandler} name="description" value={data.description} placeholder="Write content here" rows="4" className="w-full border px-3 py-2"></textarea>
        </div>

       
        <div className="flex gap-4 mb-6">
          <div className="w-1/2">
            <label className="block font-medium mb-1">Product category</label>
            <select onChange={onChangehandler} name="category" value={data.category} className="appearance-none w-full border-1 px-4 py-2 pr-10 bg-white text-gray-700 ">
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
            <label className="block font-medium mb-1">Product price</label>
            <input onChange={onChangehandler} name="price" value={data.price} type="text" placeholder="$20" className="w-full border px-3 py-2" />
          </div>
        </div>

        {/* Submit Button */}
        <button type='submit' className="w-full bg-gray-500 border-1 text-white py-2 hover:bg-black transition">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
