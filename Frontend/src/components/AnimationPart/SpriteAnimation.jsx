import { useState, useEffect } from 'react';// A reusable sprite animation component
const SpriteAnimation = ({
  spriteSheet,       // Path to sprite sheet OR array of individual sprite paths
  frameWidth,        // Width of each frame (if using sprite sheet)
  frameHeight,       // Height of each frame (if using sprite sheet)
  frameCount,        // Total number of frames
  fps = 12,          // Frames per second (animation speed)
  direction = 'vertical', // 'horizontal' or 'vertical' (for sprite sheets)
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
  const {isPlaying,setIsPlaying} = useTheme();
  // Use external control if provided
  const playing = externalIsPlaying !== undefined ? externalIsPlaying : isPlaying;
  const {setAnimationUp} = useTheme();

  useEffect(()=>{
    setCurrentFrame(0);
  },[spriteSheet,frameCount,direction,row])
  // Debug: log prop changes
  useEffect(() => {
    if (!playing) return;

    const intervalId = setInterval(() => {
      setCurrentFrame(prevFrame => {
        const nextFrame = (prevFrame + 1) % frameCount;

        // Check if animation completed
        if (nextFrame === 0 && !loop) {
          setAnimationUp(false);
            clearInterval(intervalId);
          setIsPlaying(false);
          if (onComplete) onComplete();
          return prevFrame;
        }

        return nextFrame;
      });
    }, 1000 / fps);

    return () => clearInterval(intervalId);
  }, [playing, frameCount, fps, loop, onComplete, spriteSheet, direction, row]);

  const getStyle = () => {
    // Calculate the background position based on the current frame and row
    const backgroundPosition = direction === 'horizontal'
      ? `-${currentFrame * frameWidth * scale}px -${row * frameHeight * scale}px`
      : `-${row * frameWidth * scale}px -${currentFrame * frameHeight * scale}px`;

    const backgroundSize =
      direction === 'horizontal'
        // W  = frameCount × frameWidth
        ? `${frameWidth * total_frames * scale}px`
        // H  = frameCount × frameHeight
        : `${frameWidth * scale}px ${frameHeight * frameCount * scale}px`;

    // Combine flipping and translation in transform
    let transform = '';
    if (flipped) transform += 'scaleX(-1) ';
    transform += `translateX(${translateX}) translateY(${translateY})`;

    return {
      width: `${frameWidth * scale}px`, // scaled frame width
      height: `${frameHeight * scale}px`, // scaled frame height
      backgroundImage: `url(${spriteSheet})`,
      backgroundPosition,
      backgroundRepeat: 'no-repeat',
      backgroundSize,
      imageRendering: 'pixelated',
      zIndex: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      transform,
      objectFit: 'none',
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

// import { idleShinobi, attackShinobi } from '../../assets/Shinobi/All.jsx';
// import { idleMage, attackMage } from '../../assets/Lightning_Image/All.jsx';
// import { idleDemon, attackDemon } from '../../assets/Demon/All.jsx';
// import { idleKnight, attackKnight } from '../../assets/Knight/All.jsx';
// import { idleWizard, attackWizard } from '../../assets/Wizard/All.jsx';
import { useTheme } from '../../contexts/ThemeContext.jsx';
// import { rabbit } from '../../assets/Rabbit/All.jsx'; // Importing Rabbit sprite

// Usage example component
const SpriteDemo = ({move=null,pack=null,scale:scaleTo,loop=true}) => {
  const {triggerAttack,currentAnimation,setCurrentAnimation,isPlaying,setIsPlaying,setAnimationUp,currCharacter,setCurrCharacter} = useTheme();
  
  // Example sprite data - you would replace these with your actual sprites
  // const animations = {
  //   characters: {
  //     Rabbit: {
  //       translateY: '50%',
  //       scale: 2,
  //       idle: {
  //         spriteSheet: rabbit,
  //         frameWidth: 128,
  //         frameHeight: 128,
  //         frameCount: 20,
  //         direction: 'vertical',
  //         fps: 12
  //       }, 
  //       attack_1: {
  //         spriteSheet: rabbit,
  //         frameWidth: 128,
  //         frameHeight: 128,
  //         frameCount: 20,
  //         direction: 'vertical',
  //         fps: 12,
  //       },
  //     },
  //     Shinobi: {
  //       translateX: '-10%',
  //       scale: 3,
  //       idle: {
  //         spriteSheet: idleShinobi,
  //         frameWidth: 95,
  //         frameHeight: 80,
  //         frameCount: 6,
  //         direction: 'vertical',
  //         fps: 8
  //       },
  //       attack_1: {
  //         spriteSheet: attackShinobi,
  //         frameWidth: 95,
  //         frameHeight: 80,
  //         frameCount: 5,
  //         direction: 'vertical',
  //         fps: 5,
  //       },
  //     },
  //     Mage: {
  //       translateX: '-30%',
  //       scale: 4,
  //       idle: {
  //         spriteSheet: idleMage,
  //         frameWidth: 128,
  //         frameHeight: 86,
  //         frameCount: 7,
  //         direction: 'vertical',
  //         fps: 8
  //       },
  //       attack_1: {
  //         spriteSheet: attackMage,
  //         frameWidth: 128,
  //         frameHeight: 86,
  //         frameCount: 10,
  //         direction: 'vertical',
  //         fps: 10,
  //       },
  //     },
  //     Demon: {
  //       translateX: '10%',
  //       scale: 3,
  //       flipped: true,
  //       idle: {
  //         spriteSheet: idleDemon,
  //         frameWidth: 182,
  //         frameHeight: 118,
  //         frameCount: 6,
  //         direction: 'vertical',
  //         fps: 8
  //       },
  //       attack_1: {
  //         spriteSheet: attackDemon,
  //         frameWidth: 182,
  //         frameHeight: 118,
  //         frameCount: 15,
  //         direction: 'vertical',
  //         fps: 8
  //       },
  //     },
  //     Knight: {
  //       translateX: '30%',
  //       translateY: '40%',
  //       scale: 3,
  //       idle: {
  //         spriteSheet: idleKnight,
  //         frameWidth: 80,
  //         frameHeight: 95,
  //         frameCount: 15,
  //         direction: 'vertical',
  //         fps: 8
  //       },
  //       attack_1: {
  //         spriteSheet: attackKnight,
  //         frameWidth: 80,
  //         frameHeight: 95,
  //         frameCount: 16,
  //         direction: 'vertical',
  //         fps: 10
  //       },
  //     },
  //     Wizard: {
  //       translateX: '15%',
  //       translateY: '50%',
  //       scale: 3,
  //       idle: {
  //         spriteSheet: idleWizard,
  //         frameWidth: 150,
  //         frameHeight: 80,
  //         frameCount: 6,
  //         direction: 'vertical',
  //         fps: 6
  //       },
  //       attack_1: {
  //         spriteSheet: attackWizard,
  //         frameWidth: 150,
  //         frameHeight: 80,
  //         frameCount: 9,
  //         direction: 'vertical',
  //         fps: 6
  //       },
  //     }
  //   }
  // };
  const backToIdle = () => {
    setCurrentAnimation('idle');
    setIsPlaying(true);
    setAnimationUp(false);  
    return;
  }
  const characterChosen = (pack!=null && pack.length === 1) ? pack[0].title : currCharacter;
  const moveChosen = move || currentAnimation;
  // Get the current animation data from the animations object
  const { sprite, frameWidth, frameHeight, frames, fps } = pack?.filter(p=> p.title === characterChosen)[0].pack[moveChosen] || {};
  console.log("filtered",pack?.filter(p=> p.title === characterChosen)[0].pack[moveChosen]);
  if (!sprite) {
    console.warn(`No sprite found for character "${characterChosen}" and move "${moveChosen}"`);
    return null; // If no sprite is found, return null
  }
  // Get character properties with defaults
  let scale = pack?.filter(p=> p.title === characterChosen)[0].scale || 1;
  if(scaleTo) {
    scale = scaleTo;
  }

  const allCharacters = pack?.map(p => p.title);

  return (
    <div className='flex flex-col justify-between h-full gap-4 py-3 pl-2'>

      <div className='h-9/12 relative'>
        {sprite && (
          <SpriteAnimation
            spriteSheet={sprite}
            frameWidth={frameWidth}
            frameHeight={frameHeight}
            frameCount={frames}
            fps={fps}
            scale={scale}
            className=""
            onComplete={backToIdle}
            loop={loop}
          />
        )}
      </div>
      {(pack!=null && pack.length > 1) && (
        <div className='h-3/12 flex flex-row flex-wrap gap-2 items-center'>
          {allCharacters?.map(chars => (
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
      )}
    </div>
  );
};

export default SpriteDemo;