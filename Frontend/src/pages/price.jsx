import React, { useEffect, useState, useRef } from 'react';
import SpriteDemo from '../components/AnimationPart/SpriteAnimation.jsx';
import BreakDemo from '../components/AnimationPart/BreakAnimations.jsx';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../hooks/useCart.js';
import api from '../api';
import { getAccessToken } from '../authToken';
import { useNavigate } from 'react-router-dom';

const getAllAnimationPacks = async () => {
  try {
    const response = await api.get('/animation/allAnim', {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching animation packs:", error);
    return [];
  }
}

const animationPacks = await getAllAnimationPacks();

function AnimationCard({ pack }) {
  const parentRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {       // to get how much to scale the breakANimation and height of Problem Div
    if (parentRef.current && pack) {
      const parentHeight = parentRef.current.getBoundingClientRect().height;
      // Calculate scale based on parent height and animation frame height
      setScale(parentHeight * (3 / 11) / pack.pack.break.frameHeight);
    }
  }, [pack]);

  const [currentAnimation, setCurrentAnimation] = useState('idle');
  return (
    <div onMouseEnter={() => {
      setCurrentAnimation('attack');
    }} onMouseLeave={() => {
      setCurrentAnimation('idle');
    }} className="flex-start flex lg:h-70 lg:w-350 sm:h-80 sm:w-150 bg-gray-100 rounded-md p-2">
      <div className='w-1/2'>
        <SpriteDemo move={currentAnimation} pack={[pack]} />
      </div>
      <div ref={parentRef} className='w-1/2 h-full flex items-center'>
        <div className='relative w-full h-1/5'>
          {currentAnimation === 'idle' ? (
            <div
              className="p-4 h-full w-full bg-white z-50 rounded-2xl shadow-md border border-indigo-200 transition-all duration-200 hover:border-indigo-400 flex flex-col sm:flex-row sm:items-center sm:justify-between overflow-hidden"
              style={{
                height: pack.pack.break.frameHeight * scale,
                width: pack.pack.break.frameWidth * scale
              }}
            >
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate max-w-xs sm:max-w-md">3 Sum</div>
                <div className="text-xs text-gray-500 truncate max-w-xs sm:max-w-md">
                  #15 | Medium | 3Sum
                </div>
              </div>
              <div className="flex gap-2 items-center flex-shrink-0 mt-2 sm:mt-0">
                <button
                  className="text-xs px-2 py-1 rounded bg-green-100 text-green-800 whitespace-nowrap"
                >
                  Mark Revised
                </button>
                <a
                  className="text-blue-600 hover:underline text-xs whitespace-nowrap"
                >
                  View
                </a>
                <button
                  className="p-1.5 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-500 dark:hover:text-indigo-400 dark:hover:bg-indigo-900/30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <BreakDemo scale={scale} pack={pack} />
          )}
        </div>
      </div>
    </div>
  )
}
const CartButtons = ({ pack,addToCart,cart,removeFromCart,isLoading }) => {
  const isInCart = cart.some(item => item._id === pack._id);

  const handleAddToCart = () => {
    addToCart(pack._id);
  }
  const handleRemoveFromCart = () => {
    removeFromCart(pack._id);
  }

  if (isInCart) {
    return (
      <button
        onClick={handleRemoveFromCart}
        disabled={isLoading}
        className={`font-semibold px-6 py-3 rounded-lg transition duration-200 ease-in-out bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Removing...' : 'Remove'}
      </button>
    )
  } else {
    return (
      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className={`font-semibold px-6 py-3 rounded-lg transition duration-200 ease-in-out focus:outline-none bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Adding...' : 'Add To Cart'}
      </button>
    )
  }
}

const PricePage = () => {
  const { theme } = useTheme();
  const {cart,addToCart,removeFromCart,isLoading} = useCart();
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const navigate = useNavigate();
  console.log(cart);
  return (
    <div className={`h-9/10 py-10 px-4 sm:px-6 lg:px-8 flex flex-col relative items-center transition-all duration-300 overflow-x-hidden
      ${theme === 'tos' ? 'tos' : 'bg-gray-50'}`}>
      <div className="max-w-2xl text-center">  {/* Heading */}
        <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${theme === 'tos' ? 'tos-accent tos-theme-mono' : 'text-indigo-700'}`}>Animation Packs Store</h1>
        <p className={`text-lg sm:text-xl mb-12 ${theme === 'tos' ? 'tos-light' : 'text-gray-600'}`}>
          Upgrade your experience! Purchase premium animation packs to unlock special break effects and support development.
        </p>
      </div>

      <div className="w-full max-w-5xl">
        {animationPacks.map(pack => (
          <div
            key={pack._id}
            className={`w-full flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 transition-shadow duration-300
              ${theme === 'tos' ? 'bg-tos-bg tos-border border-2 rounded-xl p-6 sm:p-8 shadow-lg hover:tos-shadow' : 'border border-gray-200 rounded-xl p-6 sm:p-8 bg-white shadow-lg hover:shadow-xl'}`}
          >
            {/* Text Content Block */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-2 ${theme === 'tos' ? 'tos-accent tos-theme-mono' : 'text-indigo-600'}`}>{pack.title}</h2>
              {/* <p className={`text-base sm:text-lg mb-4 flex-grow ${theme === 'tos' ? 'tos-light' : 'text-gray-700'}`}>{pack.description}</p> */}
              <p className={`text-2xl sm:text-3xl font-extrabold mb-6 ${theme === 'tos' ? 'tos-accent' : 'text-indigo-700'}`}>Rs.{pack.price}</p>
              <CartButtons pack={pack} addToCart={addToCart} removeFromCart={removeFromCart} isLoading={isLoading} cart={cart} />
            </div>
            <AnimationCard key={pack._id} pack={pack} />
          </div>
        ))}
      </div>
      <div className='rounded-2xl border-2 border-black p-2 bg-black bottom-3 right-3 fixed cursor-pointer transition-all duration-300 hover:rounded-3xl' onClick={()=> navigate('/checkout')}>
        {cart.length>0 && <span className='text-white text-xs content-center absolute bottom-8 bg-red-500 rounded-2xl w-4 h-4 left-8.5'></span>}
        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#ffffff"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
      </div>
    </div>
  );
};

export default PricePage;