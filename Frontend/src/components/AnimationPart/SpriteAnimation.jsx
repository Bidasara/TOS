import { useState, useEffect } from 'react';

const SpriteAnimation = ({
    spriteSheet,
    frameWidth,
    frameHeight,
    frameCount,
    fps = 12,
    loop = true,
    className = '',
    onComplete,
    scale = 1,
}) => {
    const [currentFrame, setCurrentFrame] = useState(0);

    // This effect resets the animation if the sprite itself changes
    useEffect(() => {
        setCurrentFrame(0);
    }, [spriteSheet, frameCount]);

    // This is the main animation loop effect
    useEffect(() => {
        // Don't start the animation if there are no frames to animate
        if (frameCount <= 1) return;

        const intervalId = setInterval(() => {
            // We use the direct value of currentFrame, not the updater function
            const nextFrame = (currentFrame + 1) % frameCount;

            // 1. First, update the child's state. This is a clean, single action.
            setCurrentFrame(nextFrame);
            
            // 2. THEN, as a separate step, check if the animation just finished.
            //    We check if the *new* frame is 0 and the animation isn't set to loop.
            if (nextFrame === 0 && !loop) {
                // Since this check is now outside of the state updater, it is safe to call onComplete.
                if (onComplete) {
                    onComplete();
                }
            }
        }, 1000 / fps);

        // Cleanup: Stop the interval if the component unmounts or props change
        return () => clearInterval(intervalId);

    // We depend on `currentFrame` now to run the interval on each new frame
    }, [currentFrame, frameCount, fps, loop, onComplete, spriteSheet]);


    const style = {
        width: `${frameWidth * scale}px`,
        height: `${frameHeight * scale}px`,
        backgroundImage: `url(${spriteSheet})`,
        backgroundPosition: `0px -${currentFrame * frameHeight * scale}px`,
        backgroundSize: `${frameWidth * scale}px ${frameHeight * frameCount * scale}px`,
        imageRendering: 'pixelated',
        position: 'absolute',
        bottom: 0,
        left: 0,
    };

    return <div className={className} style={style} />;
};

import { useSpriteAnimation } from '../../contexts/SpriteAnimationContext.jsx';

const SpriteDemo = ({move=null,pack=null,scale:scaleTo,loop=true}) => {
  const {currentAnimation,setCurrentAnimation,currCharacter,setCurrCharacter,backToIdle} = useSpriteAnimation();
  
  const characterChosen = (pack!=null && pack.length === 1) ? pack[0].title : currCharacter;
  const moveChosen = move || currentAnimation;
  // Get the current animation data from the animations object
  const { sprite, frameWidth, frameHeight, frames, fps } = pack?.filter(p=> p.title === characterChosen)[0]?.pack?.[moveChosen] || {};
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
            onComplete={loop?()=>{}:backToIdle}
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