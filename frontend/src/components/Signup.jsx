import React, { useState,useContext } from 'react'
import { assets } from '../assets/assets'
import { X } from 'lucide-react'
import axios from 'axios';
import { StoreContext } from '../context/StoreContext';

const Signup = ({ setShowLogin }) => {

  const url = "http://localhost:8000";

  const{setaccesstoken} = useContext(StoreContext)

  const [currState, setCurrState] = useState('login')
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

      {/* Glassmorphism effect on the form only */}
      <form className="bg-white/10 backdrop-blur-md border border-white/30 shadow-lg rounded-xl w-[350px] p-6 relative z-10 animate-fade-in" onSubmit={onSubmitHandler}>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-white capitalize tracking-wide">
            {currState === 'signup' ? 'Sign Up' : 'Login'}
          </h2>
          
          <button 
            type="button" 
            className="absolute top-4 right-4 scale-130 text-gray-400 cursor-pointer p-2 hover:text-white transition-all duration-200 " 
            onClick={() => setShowLogin(false)}
          >
            <X alt="close" className="w-4 h-4 " />
          </button>
          
          <div className="w-full flex flex-col gap-5 mt-4">
            {currState === 'signup' && (
              <div className="relative">
                <input 
                  type="text" 
                  name='name' 
                  value={data.name} 
                  onChange={onChangeHandler} 
                  placeholder="Your name" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-transparent backdrop-blur-sm transition-all duration-300" 
                />
              </div>
            )}
            
            <div className="relative">
              <input 
                type="email" 
                name='email' 
                value={data.email} 
                onChange={onChangeHandler} 
                placeholder="Your email" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-transparent backdrop-blur-sm transition-all duration-300" 
              />
            </div>
            
            <div className="relative">
              <input 
                type="password" 
                name='password' 
                value={data.password} 
                onChange={onChangeHandler} 
                placeholder="Password" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-transparent backdrop-blur-sm transition-all duration-300" 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#2c1b15] to-[#4b2e28] text-white font-semibold rounded-xl py-3 mt-4 hover:shadow-[0_0_30px_5px_rgba(255,214,165,0.1)] transition-all duration-300 transform backdrop-blur-sm border border-white/20"
            >
              {currState === 'signup' ? 'Create account' : 'Login'}
            </button>
            
            <div className="flex items-center gap-3 mt-4 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <input type="checkbox" required className="accent-[#996211] w-4 h-4" />
              <span className="text-xs text-white/80">By continuing, I agree to the terms of use & privacy policy.</span>
            </div>
            
            <div className="text-center mt-4 text-sm">
              {currState === 'signup' ? (
                <p className="text-white/80">
                  Already have an account?{' '}
                  <span
                    className="text-white font-semibold cursor-pointer hover:underline transition-all duration-300"
                    onClick={() => setCurrState('login')}
                  >
                    Login here
                  </span>
                </p>
              ) : (
                <p className="text-white/80">
                  Create a new account?{' '}
                  <span
                    className="text-white font-semibold cursor-pointer hover:underline transition-all duration-300"
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