import React, { useEffect, useState, useCallback } from 'react'; // Import useState and useCallback
import SpriteDemo from './AnimationPart/SpriteAnimation';
import { useTheme } from '../contexts/ThemeContext';
import api from '../api';
import { getAccessToken } from '../authToken';

const Animation = () => {
  // Use useState to manage animationPacks as component state
  const [animationPacks, setAnimationPacks] = useState(null); // Initialize with null, or an empty array []
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error messages

  const { theme, animationUp, setCurrCharacter } = useTheme();

  // Use useCallback to memoize the data fetching function
  const fetchAnimationData = useCallback(async () => {
    setLoading(true); // Start loading
    setError(null); // Clear previous errors

    try {
      // Try to load user-specific animations from localStorage first
      const storedUserAnimations = localStorage.getItem('userAnimations');
      if (storedUserAnimations) {
        const parsedUserAnimations = JSON.parse(storedUserAnimations);
        if (parsedUserAnimations && parsedUserAnimations.length > 0) {
          setAnimationPacks(parsedUserAnimations);
          setCurrCharacter(parsedUserAnimations[0].title);
          setLoading(false); // Done loading if found in localStorage
          return; // Exit early if data is found locally
        }
      }

      // Fallback: If no user animations, try to load from general animationPacks
      const storedPacks = localStorage.getItem('animationPacks');
      if (storedPacks) {
        const parsedPacks = JSON.parse(storedPacks);
        if (parsedPacks && parsedPacks.length > 0) {
          setAnimationPacks(parsedPacks);
          setCurrCharacter(parsedPacks[0].title);
          setLoading(false); // Done loading if found in localStorage
          return; // Exit early if data is found locally
        }
      }

      // If not in localStorage, fetch from API (fallback)
      const response = await api.get('/animation/anim', {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      });
      const fetchedPacks = response.data.data;
      localStorage.setItem('animationPacks', JSON.stringify(fetchedPacks));
      setAnimationPacks(fetchedPacks); // Update state with fetched data
      if (fetchedPacks && fetchedPacks.length > 0) {
        setCurrCharacter(fetchedPacks[0].title);
      }
    } catch (err) {
      console.error("Error fetching animation packs:", err);
      setError("Failed to load animations. Please try again later."); // Set error message
    } finally {
      setLoading(false); // End loading, regardless of success or failure
    }
  }, [setCurrCharacter]); // Dependency: setCurrCharacter from context

  // useEffect to call the data fetching function on component mount
  useEffect(() => {
    fetchAnimationData();
  }, [fetchAnimationData]); // Dependency array: run when fetchAnimationData changes (which is only on mount due to useCallback)

  // --- Render based on loading/error states ---
  if (loading) {
    return (
      <div className={`w-1/4 h-[calc(100% - 8px)] m-2 rounded-xl p-4 shadow-lg flex items-center justify-center
        ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-gray-300 dark:bg-gray-800'}`}>
        <p>Loading animations...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`w-1/4 h-[calc(100% - 8px)] m-2 rounded-xl p-4 shadow-lg flex items-center justify-center text-red-500
        ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-gray-300 dark:bg-gray-800'}`}>
        <p>{error}</p>
      </div>
    );
  }

  // If no animation packs are found after loading
  if (!animationPacks || animationPacks.length === 0) {
    return (
      <div className={`w-1/4 h-[calc(100% - 8px)] m-2 rounded-xl p-4 shadow-lg flex items-center justify-center
        ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-gray-300 dark:bg-gray-800'}`}>
        <p>No animations available.</p>
      </div>
    );
  }

  // Render SpriteDemo only when animationPacks is loaded and not empty
  // w-1/4 h-[calc(100% - 8px)] m-2 rounded-xl p-4 shadow-lg transition-all duration-300
  return (
    <div className={` h-full w-1/4 rounded-xl transition-all duration-300
      ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-gray-300 dark:bg-gray-800'} ${animationUp ? 'z-50' : 'z-1'}`}>
      <SpriteDemo loop={animationUp?false:true} pack={animationPacks} />
    </div>
  );
};

export default Animation;