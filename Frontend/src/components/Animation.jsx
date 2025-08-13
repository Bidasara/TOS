import React, { useEffect, useState, useCallback } from 'react'; // Import useState and useCallback
import SpriteDemo from './AnimationPart/SpriteAnimation';
import { useSpriteAnimation } from '../contexts/SpriteAnimationContext';
import { useTheme } from '../contexts/ThemeContext';
import api from '../api';
import { getAccessToken } from '../authToken';

const Animation = () => {
  // Use useState to manage animationPacks as component state
  const [animationPacks, setAnimationPacks] = useState(null); // Initialize with null, or an empty array []
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error messages

  const { loop, setCurrCharacter } = useSpriteAnimation();
  const { theme } = useTheme();

  // Use useCallback to memoize the data fetching function
  const fetchAnimationData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const storedUserAnimations = localStorage.getItem('userAnimations');
      const storedPacks = localStorage.getItem('animationPacks');

      // If both are found in localStorage, use them and exit the function early.
      if (storedUserAnimations && storedPacks) {
        const parsedUserAnimations = JSON.parse(storedUserAnimations);
        const parsedPacks = JSON.parse(storedPacks);

        setAnimationPacks([...parsedUserAnimations, ...parsedPacks]);
        if (parsedPacks && parsedPacks.length > 0) {
          setCurrCharacter(parsedPacks[0].title);
        }
        const allAnimations = [...parsedUserAnimations,...parsedPacks];
        localStorage.setItem('allAnimations',JSON.stringify(allAnimations));
        setLoading(false);
        return; // Exit the function here
      }

      // If localStorage is empty, proceed to fetch data from the API
      const response1 = await api.get('/animation/anim', {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      });
      const userAnimations = response1.data.data;
      if(userAnimations != [] && userAnimations!= undefined)
      localStorage.setItem('userAnimations', JSON.stringify(userAnimations));

      const response2 = await api.get('/animation/allAnim', {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      });
      const generalAnimations = response2.data.data;
      localStorage.setItem('animationPacks', JSON.stringify(generalAnimations));

      // Set the character title after fetching
      if (generalAnimations && generalAnimations.length > 0) {
        setCurrCharacter(generalAnimations[0].title);
      }
      if(userAnimations!=[] && userAnimations!=undefined){
        localStorage.setItem('allAnimations',JSON.stringify([...userAnimations,...generalAnimations]));
        setAnimationPacks([...userAnimations, ...generalAnimations]);
      }
      else {
        localStorage.setItem('allAnimations',JSON.stringify(generalAnimations));
        setAnimationPacks(generalAnimations);
      }

    } catch (err) {
      console.error("Error fetching animation packs:", err);
      setError("Failed to load animations. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [setCurrCharacter]); // Dependency: setCurrCharacter from context

  // useEffect to call the data fetching function on component mount
  useEffect(() => {
    fetchAnimationData();
  }, [fetchAnimationData]);

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
  return (
    <div className={` h-full w-1/4 rounded-xl transition-all duration-300
      ${theme === 'tos' ? 'tos tos-border' : theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-cyan-400' : 'bg-gray-300 dark:bg-gray-800'} ${loop ? 'z-1' : 'z-50'}`}>
      <SpriteDemo loop={loop} pack={animationPacks} />
    </div>
  );
};

export default Animation;