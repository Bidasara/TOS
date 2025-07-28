import React, { useState } from 'react';
import SpriteDemo from '../components/AnimationPart/SpriteAnimation.jsx';
import BreakDemo from '../components/AnimationPart/BreakAnimations.jsx';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import api from '../api';
import { getAccessToken } from '../authToken';

const getAllAnimationPacks = async () => {
  try {
    const response = await api.get('/animation/allAnim', {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    });
    console.log("Animation Packs:", response);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching animation packs:", error);
    return [];
  }
}

const animationPacks = await getAllAnimationPacks();

function AnimationCard({ pack }) {
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
      <div className='w-1/2 h-full flex items-center'>
        <div className='relative w-full h-1/5'>
        {currentAnimation === 'idle' ? (
          <div
            className="p-4 h-full w-full bg-white z-50 rounded-2xl shadow-md border border-indigo-200 transition-all duration-200 hover:border-indigo-400 flex flex-col sm:flex-row sm:items-center sm:justify-between overflow-hidden"
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
          ):(
          <BreakDemo scale={4} pack={pack} />
          )} 
        </div>
      </div>
    </div>
  )
}

const PricePage = () => {
  const { getCart, addToCart, removeFromCart } = useAuth();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const { theme } = useTheme();
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  return (
    <div className={`py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center transition-all duration-300 overflow-x-hidden
      ${theme === 'tos' ? 'tos' : 'bg-gray-50'}`}>
      <div className="max-w-2xl text-center">
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
              {cart.some(item => item._id === pack._id) ? <span onClick={() => removeFromCart(pack._id)} className="delete-icon cursor-pointer px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50">Remove</span> : <button onClick={() => addToCart(pack._id)} className={`font-semibold px-6 py-3 rounded-lg transition duration-200 ease-in-out focus:outline-none
                ${theme === 'tos' ? 'tos-border tos-accent tos-theme-mono bg-tos-bg hover:bg-tos-blue hover:text-tos-grey' : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'}`}
              >
                Add To Cart
              </button>}
            </div>
            <AnimationCard key={pack._id} pack={pack} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricePage;