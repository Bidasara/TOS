import { useState, useEffect } from 'react';

// A reusable sprite animation component
const SpriteAnimation = ({
  spriteSheet,       // Path to sprite sheet OR array of individual sprite paths
  frameWidth,        // Width of each frame (if using sprite sheet)
  frameHeight,       // Height of each frame (if using sprite sheet)
  frameCount,        // Total number of frames
  fps = 12,          // Frames per second (animation speed)
  direction = 'horizontal', // 'horizontal' or 'vertical' (for sprite sheets)
  loop = true,       // Whether animation should loop
  autoPlay = true,   // Whether animation should play automatically
  isPlaying: externalIsPlaying, // Optional external control
  className = '',    // Additional CSS classes
  onComplete,        // Callback when animation completes
  scale = 1,
  translateX = '0',
  translateY = '0',
  row = 0,
  total_frames,
  flipped = false, // Whether to flip the sprite horizontally
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Use external control if provided
  const playing = externalIsPlaying !== undefined ? externalIsPlaying : isPlaying;

  useEffect(() => {
    if (!playing) return;

    const intervalId = setInterval(() => {
      setCurrentFrame(prevFrame => {
        const nextFrame = (prevFrame + 1) % frameCount;

        // Check if animation completed
        if (nextFrame === 0 && !loop) {
          clearInterval(intervalId);
          setIsPlaying(false);
          if (onComplete) onComplete();
          return prevFrame;
        }

        return nextFrame;
      });
    }, 1000 / fps);

    return () => clearInterval(intervalId);
  }, [playing, frameCount, fps, loop, onComplete]);

  const getStyle = () => {
    // Calculate the background position based on the current frame and row
    const backgroundPosition = direction === 'horizontal'
      ? `-${currentFrame * frameWidth * scale}px -${row * frameHeight * scale}px`
      : `0px -${currentFrame * frameHeight * scale}px`;

    return {
      width: `${frameWidth * scale}px`, // scaled frame width
      height: `${frameHeight * scale}px`, // scaled frame height
      backgroundImage: `url(${spriteSheet})`,
      backgroundPosition,
      backgroundRepeat: 'no-repeat',
      backgroundSize: `${frameWidth * total_frames * scale}px`,
      imageRendering: 'pixelated',
      zIndex: 10,
      position: 'absolute',
      bottom: translateY,
      left: translateX,
      objectFit: 'none',
      transformOrigin: flipped ? 'botton right':'bottom left',
      transform: flipped ? 'scaleX(-1)' : 'none' // Flip the sprite if needed
    };
  };

  const togglePlay = () => {
    // Only allow manual control if external control is not provided
    if (externalIsPlaying === undefined) {
      setIsPlaying(prev => !prev);
    }
  };

  return (
    <div
      className={`${className}`}
      style={getStyle()}
      onClick={togglePlay}
    />
  );
};

import { idleSprite, runSprite, attackSprite_1, attackSprite_3, walkSprite } from '../../assets/Shinobi/All.jsx';
import { idleMage, runMage, attackMage_1, attackMage_2, walkMage } from '../../assets/Lightning_Image/All.jsx';
import { Demon } from '../../assets/Demon/All.jsx';
import { samuraiAttack, samuraiHurt, samuraiIdle, samuraiRun } from '../../assets/Samurai/All.jsx';
import { knightAttack1, knightAttack2, knightIdle, knightRun, knightWalk } from '../../assets/Knight/All.jsx';

// Usage example component
const SpriteDemo = () => {
  const [currentAnimation, setCurrentAnimation] = useState('idle'); // Default animation

  // Example sprite data - you would replace these with your actual sprites
  const animations = {
    characters: {
      Shinobi: {
        scale: 3,
        idle: {
          spriteSheet: idleSprite, // Placeholder image (would be your actual sprite sheet)
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 6,
          fps: 8
        },
        walk: {
          spriteSheet: walkSprite,
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 8,
          fps: 8
        },
        run: {
          spriteSheet: runSprite, // Placeholder image
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 8,
          fps: 20
        },
        attack_1: {
          // Example with individual frames instead of sprite sheet
          spriteSheet: attackSprite_1,
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 5,
          fps: 5,
        },
        attack_2: {
          spriteSheet: attackSprite_3,
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 4,
          fps: 10,
        },
      },
      Lightning_Mage: {
        scale: 4,
        idle: {
          spriteSheet: idleMage,
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 7,
          fps: 8
        },
        walk: {
          spriteSheet: walkMage,
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 7,
          fps: 8
        },
        run: {
          spriteSheet: runMage, // Placeholder image
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 8,
          fps: 10
        },
        attack_1: {
          spriteSheet: attackMage_1,
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 10,
          fps: 10,
        },
        attack_2: {
          spriteSheet: attackMage_2,
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 4,
          fps: 10,
        },
      },
      Demon: {
        translateX: '150%',
        total_frames: 22,
        scale: 3,
        flipped: true,
        idle: {
          spriteSheet: Demon,
          frameWidth: 288,
          frameHeight: 160,
          frameCount: 6,
          row: 0, // First row in the sprite sheet (0-indexed)
          fps: 8
        },
        walk: {
          spriteSheet: Demon,
          frameWidth: 288,
          frameHeight: 160,
          frameCount: 12,
          row: 1, // Second row in the sprite sheet
          fps: 8
        },
        attack_1: {
          spriteSheet: Demon,
          frameWidth: 288,
          frameHeight: 160,
          frameCount: 15,
          row: 2, // Third row in the sprite sheet
          fps: 8
        },
        dead: {
          spriteSheet: Demon,
          frameWidth: 288,
          frameHeight: 160,
          frameCount: 22,
          row: 4, // Fifth row in the sprite sheet
          fps: 8
        },
      },
      Samurai: {
        scale: 6,
        translateX: '-25%',
        translateY: '-10%',
        idle: {
          spriteSheet: samuraiIdle,
          frameWidth: 96,
          frameHeight: 96,
          frameCount: 10,
          fps: 8
        },
        run: {
          spriteSheet: samuraiRun,
          frameWidth: 96,
          frameHeight: 96,
          frameCount: 16,
          fps: 18
        },
        attack_1: {
          spriteSheet: samuraiAttack,
          frameWidth: 96,
          frameHeight: 96,
          frameCount: 7,
          fps: 8
        },
        hurt: {
          spriteSheet: samuraiHurt,
          frameWidth: 96,
          frameHeight: 96,
          frameCount: 4,
          fps: 8
        },
      },
      Knight: {
        total_frames: 15,
        scale: 3,
        idle: {
          spriteSheet: knightIdle,
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 15,
          row: 7,
          fps: 8
        },
        run: {
          spriteSheet: knightRun,
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 15,
          fps: 20
        },
        attack_1: {
          spriteSheet: knightAttack1,
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 15,
          fps: 10
        },
        attack_2: {
          spriteSheet: knightAttack2,
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 15,
          fps: 12
        },
        walk: {
          spriteSheet: knightWalk,
          frameWidth: 128,
          frameHeight: 128,
          frameCount: 15,
          fps: 12
        },
      }
    }
  };

  const [currCharacter, setCurrCharacter] = useState('Lightning_Mage');

  // Get the current animation data from the animations object
  const { spriteSheet, frameWidth, frameHeight, frameCount, fps, loop = true, row = 0 } = animations.characters[currCharacter][currentAnimation] || {};

  // Get character properties with defaults
  const { scale = 1, translateX = '0', translateY = '0', total_frames = frameCount, flipped } = animations.characters[currCharacter] || {};

  const allCharacters = ['Shinobi', 'Lightning_Mage', 'Demon', 'Knight', 'Samurai'];

  return (
    <div className='flex flex-col justify-between h-full gap-4 py-3 pl-2'>
      <div className='flex gap-2 flex-wrap z-20'>
        <button
          className={`px-4 py-2 rounded text-black transition ${animations.characters[currCharacter]?.idle ? 'bg-gray-400 rounded-full hover:text-white cursor-pointer' : 'bg-gray-350 text-gray-100 cursor-not-allowed'}`}
          disabled={!animations.characters[currCharacter]?.idle}
          onClick={() => setCurrentAnimation('idle')}
        >Idle</button>
        <button
          className={`px-4 py-2 rounded text-black transition ${animations.characters[currCharacter]?.walk ? 'bg-gray-400 rounded-full hover:text-white cursor-pointer' : 'bg-gray-350 text-gray-100 cursor-not-allowed'}`}
          disabled={!animations.characters[currCharacter]?.walk}
          onClick={() => setCurrentAnimation('walk')}
        >Walk</button>
        <button
          className={`px-4 py-2 rounded text-black transition ${animations.characters[currCharacter]?.run ? 'bg-gray-400 rounded-full hover:text-white cursor-pointer' : 'bg-gray-350 text-gray-100 cursor-not-allowed'}`}
          disabled={!animations.characters[currCharacter]?.run}
          onClick={() => setCurrentAnimation('run')}
        >Run</button>
        <button
          className={`px-4 py-2 rounded text-black transition ${animations.characters[currCharacter]?.attack_1 ? 'bg-gray-400 rounded-full hover:text-white cursor-pointer' : 'bg-gray-350 text-gray-100 cursor-not-allowed'}`}
          disabled={!animations.characters[currCharacter]?.attack_1}
          onClick={() => setCurrentAnimation('attack_1')}
        >Attack 1</button>
        <button
          className={`px-4 py-2 rounded text-black transition ${animations.characters[currCharacter]?.attack_2 ? 'bg-gray-400 rounded-full hover:text-white cursor-pointer' : 'bg-gray-350 text-gray-100 cursor-not-allowed'}`}
          disabled={!animations.characters[currCharacter]?.attack_2}
          onClick={() => setCurrentAnimation('attack_2')}
        >Attack 2</button>
        <button
          className={`px-4 py-2 rounded text-black transition ${animations.characters[currCharacter]?.hurt ? 'bg-gray-400 rounded-full hover:text-white cursor-pointer' : 'bg-gray-350 text-gray-100 cursor-not-allowed'}`}
          disabled={!animations.characters[currCharacter]?.hurt}
          onClick={() => setCurrentAnimation('hurt')}
        >Hurt</button>
        <button
          className={`px-4 py-2 rounded text-black transition ${animations.characters[currCharacter]?.dead ? 'bg-gray-400 rounded-full hover:text-white cursor-pointer' : 'bg-gray-350 text-gray-100 cursor-not-allowed'}`}
          disabled={!animations.characters[currCharacter]?.dead}
          onClick={() => setCurrentAnimation('dead')}
        >Dead</button>
      </div>
      <div className='relative h-full'>
        {spriteSheet && (
          <SpriteAnimation
            spriteSheet={spriteSheet}
            frameWidth={frameWidth}
            frameHeight={frameHeight}
            frameCount={frameCount}
            fps={fps}
            loop={loop}
            scale={scale}
            className=""
            translateX={translateX}
            translateY={translateY}
            row={row}
            total_frames={total_frames}
            flipped={flipped}
          />
        )}
      </div>
      <div className='flex flex-row flex-wrap gap-2 items-center'>
        {allCharacters.map(chars => (
          <button
            className={`p-2 rounded-full ${currCharacter === chars ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            key={chars}
            onClick={() => {
              setCurrCharacter(chars);
              setCurrentAnimation('idle'); // Reset to idle when changing character
            }}
          >
            {chars}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpriteDemo;