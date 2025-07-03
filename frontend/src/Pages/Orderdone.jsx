import React from 'react'

const Orderdone = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center min-h-screen">
      {/* Glassmorphism card */}
      <div className="relative z-20 flex flex-col items-center justify-center w-[370px] p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl animate-fade-in">
        {/* Animated checkmark */}
        <div className="mb-6">
          <svg className="w-20 h-20 text-green-400 animate-pop-in" viewBox="0 0 52 52">
            <circle className="stroke-current text-green-200" cx="26" cy="26" r="25" fill="none" strokeWidth="3" />
            <path className="stroke-current text-green-500 animate-draw-check" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M14 27l7 7 16-16" />
          </svg>
        </div>
        {/* Thank you message */}
        <h2 className="text-2xl font-bold text-[#6f4e37] mb-2 animate-fade-in-up">Thank you for your order!</h2>
        <p className="text-[#6f4e37]/80 mb-6 text-center animate-fade-in-up delay-150">Your order was placed successfully. We appreciate your business and hope you enjoy your meal!</p>
        {/* Order summary placeholder */}
        <div className="w-full mb-6 mt-5 animate-fade-in-up delay-300">
          <div className="bg-white/10 border border-white/10 rounded-lg p-4 text-[#6f4e37] text-sm text-center">
            <span className="font-semibold text-[#6f4e37]">Order #123456</span> <br />
            Estimated delivery: <span className="font-semibold text-[#6f4e37]">30-40 min</span>
          </div>
        </div>
        {/* Button */}
       </div>
      {/* Animations */}
      <style>{`
        @keyframes pop-in {
          0% { transform: scale(0.5); opacity: 0; }
          80% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-in { animation: pop-in 0.7s cubic-bezier(.68,-0.55,.27,1.55) both; }
        @keyframes draw-check {
          0% { stroke-dasharray: 0, 50; }
          100% { stroke-dasharray: 50, 0; }
        }
        /* Slower checkmark animation */
        .animate-draw-check {
          stroke-dasharray: 50, 0;
          stroke-dashoffset: 0;
          animation: draw-check 2.2s 0.2s cubic-bezier(.68,-0.55,.27,1.55) both;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.7s both; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  )
}

export default Orderdone