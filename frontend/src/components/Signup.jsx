import React, { useState,useContext } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { StoreContext } from '../context/StoreContext';

const Signup = ({ setShowLogin }) => {

  const url = "http://localhost:8000";

  const{setaccesstoken} = useContext(StoreContext)

  const [currState, setCurrState] = useState('signup')
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event) => {
   
    const name = event.target.name;
    const value = event.target.value;
    setData(data=> ({...data, [name]: value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currState==="login") {
    newUrl += "/api/v1/user/login"
    }
    else{
    newUrl += "/api/v1/user/register"
    }
    const response = await axios.post(newUrl,data)  

    if(response.data.success){
      setaccesstoken(response.data.accessToken)
      localStorage.setItem("accesstoken", response.data.accessToken)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  
    }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <form className="bg-white rounded-xl shadow-lg w-full max-w-sm p-8 relative z-10 animate-fade-in" onSubmit={onSubmitHandler}>
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2 capitalize">{currState === 'signup' ? 'Sign Up' : 'Login'}</h2>
      <button type="button" className="absolute top-4 right-4 cursor-pointer" onClick={() => setShowLogin(false)}>
        <img src={assets.cross_icon} alt="close" className="w-4 h-4 mt-[2px] mr-[2px]" />
      </button>
      <div className="w-full flex flex-col gap-4 mt-4">
        {currState === 'signup' && (
          <input type="text" name='name' value= {data.name} onChange={onChangeHandler} placeholder="Your name" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tomato" />
        )}
        <input type="email" name='email' value= {data.email} onChange={onChangeHandler} placeholder="Your email" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-tomato" />
        <input type="password" name='password' value= {data.password} onChange={onChangeHandler} placeholder="Password" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-tomato" />
        <button type="submit" className="bg-[tomato] text-white font-semibold rounded-md py-2 mt-2 hover:bg-[#e5532d] transition-all">
          {currState === 'signup' ? 'Create account' : 'Login'}
        </button>
        <div className="flex items-center gap-2 mt-2">
          <input type="checkbox" required className="accent-[#ff5133]" />
          <span className="text-xs text-gray-600">By continuing, I agree to the terms of use & privacy policy.</span>
        </div>
        <div className="text-center mt-2 text-sm">
          {currState === 'signup' ? (
            <p>
              Already have an account?{' '}
              <span
                className="text-[tomato] font-semibold cursor-pointer hover:underline"
                onClick={() => setCurrState('login')}
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create a new account?{' '}
              <span
                className="text-[tomato] font-semibold cursor-pointer hover:underline"
                onClick={() => setCurrState('signup')}
              >
                Signup here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  </form>
</div>

  )
}

export default Signup