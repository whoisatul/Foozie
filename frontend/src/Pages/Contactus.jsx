import React from 'react'

const Contactus = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-0 mt-[70px]">
      {/* Section Divider */}
      <div className="flex items-center justify-center mb-12">
        <div className="w-[30%] h-[2px] bg-[#a37b5f]" />
        <img src="/section.png" alt="section" className="h-10 w-10 mx-4" />
        <div className="w-[30%] h-[2px] bg-[#a37b5f]" />
      </div>

      {/* About Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#7a5e3a] via-[#d4af7f] to-[#a9894a] bg-clip-text text-transparent mb-4">About Foozie</h1>
        <p className="text-lg text-gray-700 mb-6">
          Foozie is your go-to destination for mouthwatering street-style snacks, comfort-packed meals, and gourmet desserts. Our mission is to bring your favorite flavors right to your doorstep — fast, fresh, and full of joy. With a passion for quality and a love for food, our experienced chefs craft every dish with care, using only the best ingredients. Whether you're craving a classic cheeseburger, a hearty pasta, or a decadent dessert, Foozie has something for everyone.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-[#f7eee7eb] rounded-lg shadow-md p-6 w-64 border border-[#d7aa81]">
            <h3 className="text-xl font-semibold text-[#7a5e3a] mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Everything you order will be quickly delivered to your door.</p>
          </div>
          <div className="bg-[#f7eee7eb] rounded-lg shadow-md p-6 w-64 border border-[#d7aa81]">
            <h3 className="text-xl font-semibold text-[#7a5e3a] mb-2">Fresh Food</h3>
            <p className="text-gray-600">We use only the best ingredients to cook tasty, fresh meals.</p>
          </div>
          <div className="bg-[#f7eee7eb] rounded-lg shadow-md p-6 w-64 border border-[#d7aa81]">
            <h3 className="text-xl font-semibold text-[#7a5e3a] mb-2">Experienced Chefs</h3>
            <p className="text-gray-600">Our staff consists of chefs and cooks with years of experience.</p>
          </div>
          <div className="bg-[#f7eee7eb] rounded-lg shadow-md p-6 w-64 border border-[#d7aa81]">
            <h3 className="text-xl font-semibold text-[#7a5e3a] mb-2">Variety of Dishes</h3>
            <p className="text-gray-600">Explore a wide variety of dishes, desserts, and drinks.</p>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="flex items-center justify-center mb-12 mt-16">
        <div className="w-[30%] h-[2px] bg-[#a37b5f]" />
        <img src="/section.png" alt="section" className="h-10 w-10 mx-4" />
        <div className="w-[30%] h-[2px] bg-[#a37b5f]" />
      </div>

      {/* Contact Section */}
      <div className="max-w-2xl mx-auto bg-[#f7eee7eb] rounded-xl shadow-lg p-8 border border-[#d7aa81]">
        <h2 className="text-3xl font-bold text-[#7a5e3a] mb-6 text-center">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-left text-[#7a5e3a] font-semibold mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-[#d7aa81] rounded-md focus:outline-none focus:ring-1 focus:ring-[#d4af7f]" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-left text-[#7a5e3a] font-semibold mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-[#d7aa81] rounded-md focus:outline-none focus:ring-1 focus:ring-[#d4af7f]" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-left text-[#7a5e3a] font-semibold mb-1">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-[#d7aa81] rounded-md focus:outline-none focus:ring-1 focus:ring-[#d4af7f]" placeholder="How can we help you?" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-[#7a5e3a] via-[#d4af7f] to-[#a9894a] text-white font-bold py-2 rounded-md shadow-md hover:scale-105 transition-transform duration-300">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contactus