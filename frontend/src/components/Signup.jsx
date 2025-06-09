import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Signup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('signup')

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <form className="bg-white rounded-xl shadow-lg w-full max-w-sm p-8 relative z-10 animate-fade-in">
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2 capitalize">{currState === 'signup' ? 'Sign Up' : 'Login'}</h2>
      <button type="button" className="absolute top-4 right-4 cursor-pointer" onClick={() => setShowLogin(false)}>
        <img src={assets.cross_icon} alt="close" className="w-4 h-4 mt-[2px] mr-[2px]" />
      </button>
      <div className="w-full flex flex-col gap-4 mt-4">
        {currState === 'signup' && (
          <input type="text" placeholder="Your name" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tomato" />
        )}
        <input type="email" placeholder="Your email" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-tomato" />
        <input type="password" placeholder="Password" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-tomato" />
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