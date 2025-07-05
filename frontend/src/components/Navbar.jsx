import React, { useState, useContext } from 'react';
import '../index.css';
import { Search, ShoppingCart,UserRound, ShoppingBag,LogOut, X } from 'lucide-react';
import { NavLink,useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { assets } from '../assets/assets';

const Navbar = ({ setShowLogin, cartMode }) => {

  const navigate = useNavigate();
  
  const { getTotalCartItems, accesstoken , setaccesstoken, food_list } = useContext(StoreContext);

  // Search state
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const logout = () => {
   localStorage.removeItem("accesstoken");
   setaccesstoken("");
   navigate("/");
  }

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredItems([]);
      return;
    }
    
    const filtered = food_list.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  // Handle search item click
  const handleSearchItemClick = (item) => {
    setShowSearch(false);
    setSearchQuery('');
    setFilteredItems([]);
    // Navigate to menu page with the specific category to highlight the selected food
    navigate(`/menu?category=${encodeURIComponent(item.category)}&highlight=${encodeURIComponent(item._id)}`);
  };

  // Close search when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.search-container')) {
      setShowSearch(false);
      setSearchQuery('');
      setFilteredItems([]);
    }
  };

  // Add click outside listener
  React.useEffect(() => {
    if (showSearch) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showSearch]);
    
  // Original navbar for all other pages
  return (
    <div className={`flex justify-between items-center px-5 mt-8 text-base absolute top-0 left-0 w-full z-50 bg-transparent ${cartMode ? 'text-[#3e2327]' : ' text-white'}`}>
      <div className="flex items-center h-full">
      <NavLink to='/'>
  <div className="relative w-24 h-12  rounded-full overflow-hidden z-50 flex items-center justify-center ">
    {cartMode && (<div className="absolute inset-0 bg-[#2a1a1c] border border-[#2a1a1c] rounded-full z-0" /> )}
    {/* Logo as image (won't be blurred) */}
    <img
      src="/logo.svg"
      alt="logo"
      className="relative z-10 w-22 h-13 object-contain"
    />
    
  </div>
</NavLink>


      </div>
      <div className='navitems'>
  <ul
    className={`flex gap-20 items-center cursor-pointer ml-[100px] ${cartMode ? 'text-[#2a1a1c]' : 'text-[#FAF3E0]'}`}>
    <NavLink to="/" className={({ isActive }) =>`transition-all duration-150 hover:-translate-y-[2px] pb-1 ${isActive ? cartMode ? 'border-b-2 border-[#2a1a1c]' : 'border-b-2 border-[#F3E5AB]': ''}`} >home</NavLink>
    <NavLink to="/menu" className={({ isActive }) =>`transition-all duration-150 hover:-translate-y-[2px] pb-1 ${isActive ? cartMode ? 'border-b-2 border-[#2a1a1c]' : 'border-b-2 border-[#F3E5AB]': ''}`} >menu</NavLink>
    <NavLink to="/app" className={({ isActive }) =>`transition-all duration-150 hover:-translate-y-[2px] pb-1 ${isActive ? cartMode ? 'border-b-2 border-[#2a1a1c]' : 'border-b-2 border-[#F3E5AB]': ''}`}  > App </NavLink>
    <NavLink to="/contactus" className={({ isActive }) =>`transition-all duration-150 hover:-translate-y-[2px] pb-1 ${isActive ? cartMode ? 'border-b-2 border-[#2a1a1c]' : 'border-b-2 border-[#F3E5AB]': ''}`} > contact us </NavLink> 
    </ul> 
    </div>

      <div className="flex items-center gap-4">
        {/* Search Container */}
        <div className="search-container relative">
          <div 
            className="cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search className={`w-5 h-5 ${cartMode ? 'text-black' : 'text-[#FAF3E0]'}`} />
          </div>
          
          {/* Search Dropdown */}
          {showSearch && (
            <div className="absolute top-8 right-0 w-80 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-hidden">
              {/* Search Input */}
              <div className="p-3 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for food, categories..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 text-[#2a1a1c] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F3E5AB] focus:border-transparent"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setFilteredItems([]);
                      }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                    </button>
                  )}
                </div>
              </div>
              
              {/* Search Results */}
              <div className="max-h-64 overflow-y-auto">
                {searchQuery && filteredItems.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    No items found for "{searchQuery}"
                  </div>
                ) : filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <div
                      key={item._id}
                      onClick={() => handleSearchItemClick(item)}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                        <p className="text-sm text-gray-500 truncate">{item.category}</p>
                        <p className="text-sm font-medium text-[#F3E5AB]">₹{item.price}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    Start typing to search for food items...
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <NavLink to='/cart' className="relative">
          <ShoppingCart className={`w-5 h-5 ${cartMode ? 'text-black' : 'text-[#FAF3E0]'}`} />
          {getTotalCartItems() > 0 && (
            <span className={`absolute -top-2 -right-2 text-[#FAF3E0] text-xs rounded-full w-4 h-4 flex items-center justify-center ${cartMode? 'bg-[#3e2327]' : ''}`} >
              {getTotalCartItems()}
            </span>
          )}
        </NavLink>
        {!accesstoken ? (
          <button
          onClick={() => setShowLogin(true)}
          className={`relative group z-10 flex items-center justify-center bg-transparent text-base px-[18px] py-[6px] rounded-full cursor-pointer overflow-hidden transition duration-300 ease-in-out ${cartMode ? 'text-[#0d0e0c] border border-[#0d0e0c] hover:text-[#F3E5AB]' : 'text-gray-200 border border-[#F3E5AB] hover:text-[#0d0e0c]'}  `}>
          <span className="z-10">sign in</span>
          <span className={ `absolute inset-0 m-auto w-[20em] h-[20em] -left-[5em] rounded-full z-0 transition-shadow duration-500 ease-out ${cartMode ? 'group-hover:shadow-[inset_0_0_0_10em_#2a1a1c]' : 'group-hover:shadow-[inset_0_0_0_10em_#F3E5AB]'} `}></span>
        </button>
        
        
        ) : (
          <div className="relative group">
           <UserRound className={ `w-9 h-9 p-1 border-[1px] rounded-4xl cursor-pointer transition-transform duration-200 group-hover:scale-100 ${ cartMode? 'text-[#2a1a1c] border-[#2a1a1c]' : 'text-[#FAF3E0] border-[#FAF3E0]' }` } />
            <ul className="absolute right-0 mt-2 w-28 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-auto transition-all duration-200 z-50">
              <NavLink to='/myorder' className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                <ShoppingBag className='w-5 h-5 text-[#39210a]'/>
                <p className='text-black'>Orders</p>
              </NavLink>
              <hr className="my-1" />
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                <LogOut className='w-5 h-5 text-[#39210a]'/>
                <p className='text-black' onClick={logout} >Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;