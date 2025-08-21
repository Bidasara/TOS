import React, { useEffect, useState, useRef } from 'react';
import SpriteDemo from '../components/AnimationPart/SpriteAnimation.jsx';
import BreakDemo from '../components/AnimationPart/BreakAnimations.jsx';
import { useTheme } from '../contexts/ThemeContext';
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
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const [showBreakAnimation, setShowBreakAnimation] = useState(false);
  const breakTimeoutRef = useRef(null);
  const waitForBreak = useRef(null);
  const ANIMATION_DELAY = pack.pack.break.delay;
  const breakAnimTime = (pack.pack.break.frames / pack.pack.break.fps) * 1000;
  const [loop, setLoop] = useState(true);

  useEffect(() => {
    if (parentRef.current && pack) {
      const parentHeight = parentRef.current.getBoundingClientRect().height;
      setScale(parentHeight * (3 / 11) / pack.pack.break.frameHeight);
    }
  }, [pack]);

  useEffect(() => {
    return () => {
      clearTimeout(breakTimeoutRef.current);
      clearTimeout(waitForBreak.current);
    }
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(waitForBreak.current);
    setCurrentAnimation('attack');
    setLoop(false);

    breakTimeoutRef.current = setTimeout(() => {
      setShowBreakAnimation(true);
      waitForBreak.current = setTimeout(() => {
        setShowBreakAnimation(false);
      }, breakAnimTime);
    }, ANIMATION_DELAY);
  };

  const handleMouseLeave = () => {
    clearTimeout(waitForBreak.current);
    setShowBreakAnimation(false);
    clearTimeout(breakTimeoutRef.current);
    setCurrentAnimation('idle');
    setLoop(true);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex-start flex lg:h-70 lg:w-850 sm:h-80 sm:w-150 bg-gray-100 rounded-md"
      style={{ padding: 'calc(0.5 * var(--unit))' }}
    >
      <div className='w-1/2'>
        <SpriteDemo move={currentAnimation} pack={[pack]} loop={loop} backTo={() => {
          clearTimeout(breakTimeoutRef.current);
          setCurrentAnimation('idle');
          setLoop(true);
        }} />
      </div>
      <div ref={parentRef} className='w-1/2 h-full flex items-center'>
        <div className='relative w-full h-1/5'>
          {!showBreakAnimation ? (
            <div
              className="bg-white z-50 rounded-2xl shadow-md border border-indigo-200 transition-all duration-200 hover:border-indigo-400 flex flex-col sm:flex-row sm:items-center sm:justify-between overflow-hidden"
              style={{
                height: pack.pack.break.frameHeight * scale,
                width: pack.pack.break.frameWidth * scale,
                padding: 'calc(1 * var(--unit))'
              }}
            >
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate" style={{ fontSize: 'var(--text-base)' }}>3 Sum</div>
                <div className="text-gray-500 truncate" style={{ fontSize: 'var(--text-xs)' }}>
                  #15 | Medium | 3Sum
                </div>
              </div>
              <div className="flex items-center flex-shrink-0" style={{ gap: 'calc(0.5 * var(--unit))', marginTop: 'calc(0.5 * var(--unit))' }}>
                <button className="rounded bg-green-100 text-green-800 whitespace-nowrap" style={{ fontSize: 'var(--text-xs)', padding: 'calc(0.25 * var(--unit)) calc(0.5 * var(--unit))' }}>
                  Mark Revised
                </button>
                <a className="text-blue-600 hover:underline whitespace-nowrap" style={{ fontSize: 'var(--text-xs)' }}>
                  View
                </a>
                <button className="rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-500 dark:hover:text-indigo-400 dark:hover:bg-indigo-900/30" style={{ padding: 'calc(0.375 * var(--unit))' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 'calc(1.125 * var(--unit))', height: 'calc(1.125 * var(--unit))' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

const CartButtons = ({ pack, addToCart, cart, removeFromCart, isLoading }) => {
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
        className={`font-semibold rounded-lg transition duration-200 ease-in-out bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{ padding: 'calc(0.75 * var(--unit)) calc(1.5 * var(--unit))' }}
      >
        {isLoading ? 'Removing...' : 'Remove'}
      </button>
    )
  } else {
    return (
      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className={`font-semibold rounded-lg transition duration-200 ease-in-out focus:outline-none bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{ padding: 'calc(0.75 * var(--unit)) calc(1.5 * var(--unit))' }}
      >
        {isLoading ? 'Adding...' : 'Add To Cart'}
      </button>
    )
  }
}

const PricePage = () => {
  const { theme } = useTheme();
  const { cart, addToCart, removeFromCart, isLoading } = useCart();
  const navigate = useNavigate();
  const [animationPacks, setAnimationPacks] = useState([]);
  const [pageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    const fetchPacks = async () => {
      setPageLoading(true);
      const packs = await getAllAnimationPacks();
      setAnimationPacks(packs);
      setPageLoading(false);
    };
    fetchPacks();
  }, []);

  return (
    <>
      <div className={`h-full flex flex-col relative items-center transition-all duration-300 overflow-x-hidden
            ${theme === 'tos' ? 'tos' : 'bg-gray-50'}`}
        style={{ padding: 'calc(2.5 * var(--unit)) calc(1 * var(--unit))' }}>
        <div className="max-w-2xl text-center">
          <h1 className={`font-extrabold ${theme === 'tos' ? 'tos-accent tos-theme-mono' : 'text-indigo-700'}`}
            style={{ fontSize: 'var(--text-4xl)', marginBottom: 'calc(1 * var(--unit))' }}>Animation Packs Store</h1>
          <p className={`${theme === 'tos' ? 'tos-light' : 'text-gray-600'}`}
            style={{ fontSize: 'var(--text-xl)', marginBottom: 'calc(3 * var(--unit))' }}>
            Upgrade your experience! Purchase premium animation packs to unlock special break effects and support development.
          </p>
        </div>

        {pageLoading ? (
          <div style={{ fontSize: 'var(--text-base)' }}>Loading animations...</div>
        ) : (
          <div className="w-full max-w-5xl">
            {animationPacks.map(pack => (
              <div
                key={pack._id}
                className={`w-full flex flex-col md:flex-row items-center md:items-start transition-shadow duration-300
                            ${theme === 'tos' ? 'bg-tos-bg tos-border border-2 rounded-xl shadow-lg hover:tos-shadow' : 'border border-gray-200 rounded-xl bg-white shadow-lg hover:shadow-xl'}`}
                style={{ gap: 'calc(2 * var(--unit))', marginBottom: 'calc(2 * var(--unit))', padding: 'calc(1.5 * var(--unit))' }}
              >
                <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
                  <h2 className={`font-bold ${theme === 'tos' ? 'tos-accent tos-theme-mono' : 'text-indigo-600'}`}
                    style={{ fontSize: 'var(--text-3xl)', marginBottom: 'calc(0.5 * var(--unit))' }}>{pack.title}</h2>
                  <p className={`font-extrabold ${theme === 'tos' ? 'tos-accent' : 'text-indigo-700'}`}
                    style={{ fontSize: 'var(--text-2xl)', marginBottom: 'calc(1.5 * var(--unit))' }}>Rs.{pack.price}</p>
                  <CartButtons pack={pack} addToCart={addToCart} removeFromCart={removeFromCart} isLoading={isLoading} cart={cart} />
                </div>
                <AnimationCard key={pack._id} pack={pack} />
              </div>
            ))}
          </div>
        )}

      </div>
      <div className='rounded-2xl border-2 border-black bg-black absolute cursor-pointer transition-all duration-300 hover:rounded-3xl'
        style={{ bottom: 'calc(0.65 * var(--unit))', right: 'calc(0.75 * var(--unit))', padding: 'calc(0.5 * var(--unit))' }}
        onClick={() => navigate('/checkout')}>
        {cart.length > 0 && <span className='text-white content-center absolute bg-red-500 rounded-2xl'
          style={{ fontSize: 'var(--text-xs)', bottom: 'calc(2 * var(--unit))', left: 'calc(2.125 * var(--unit))', width: 'calc(1 * var(--unit))', height: 'calc(1 * var(--unit))' }}></span>}
        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#ffffff"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
      </div>
    </>
  );
};

export default PricePage;
