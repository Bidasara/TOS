import { useState, useEffect } from 'react';// A reusable sprite animation component
const BreakAnimation = ({
    spriteSheet,       // Path to sprite sheet OR array of individual sprite paths
    frameWidth,        // Width of each frame (if using sprite sheet)
    frameHeight,       // Height of each frame (if using sprite sheet)
    frameCount,        // Total number of frames
    fps = 12,          // Frames per second (animation speed)
    direction = 'horizontal', // 'horizontal' or 'vertical' (for sprite sheets)
    className = 'border-2 border-black',    // Additional CSS classes
    scale = 1,      // Remove scale, not needed
    translateX = '0',
    translateY = '0',
    row = 0,
    total_frames,
    flipped = false, // Whether to flip the sprite horizontally
}) => {
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        setCurrentFrame(1);
    }, [spriteSheet, frameCount, direction, row])

    useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentFrame(prevFrame => {
            const nextFrame = (prevFrame + 1) % frameCount;
            return nextFrame;
        });
    }, 1000/fps);
    return () => clearInterval(intervalId);
}, [frameCount, fps]);

    const getStyle = () => {
        let backgroundPosition, backgroundSize;
        if (direction === 'horizontal') {
            backgroundPosition = `-${currentFrame * 100}% ${0}%`;
            backgroundSize = `${frameCount * 100}% 100%`;
        } else {
            backgroundPosition = `${0}% ${currentFrame * 10}%`;
            backgroundSize = `100% ${frameCount*100}%`;
        }
        return {
            width: '100%',
            height: '100%',
            backgroundImage: `url(${spriteSheet})`,
            backgroundPosition,
            backgroundRepeat: 'no-repeat',
            backgroundSize,
            imageRendering: 'pixelated',
            zIndex: 100,
            position: 'absolute',
            top: 0,
            left: 0,
            objectFit: 'fill',
            transform: flipped ? 'scaleX(-1)' : 'none'
        };
    };

    return (
        <div
            className={`${className}`}
            style={getStyle()}
        />
    );
};

import { fireAnimation } from '../../assets/Fire/All.jsx';
import { light } from '../../assets/LightningBreak/All.jsx';

// Usage example component
const BreakDemo = ({ animation = "fire", delay=900 }) => {
    // Only fire animation for now, but can be extended
    const animations = {
        fire: {
            spriteSheet: fireAnimation,
            frameWidth: 320,
            frameHeight: 230,
            frameCount: 72,
            fps: 12,
            direction: 'vertical',
            scale: 0.2,
            flipped: true,
        },
        light: {
            spriteSheet: light,
            frameWidth: 82,
            frameHeight: 19,
            frameCount: 10,
            fps: 6,
            direction: 'vertical',
            scale: 1,
            flipped: false,
        }
    };
    const { spriteSheet, frameWidth, frameHeight, frameCount, fps, direction, scale, flipped } = animations[animation] || {};
    if (!spriteSheet) return null;
    return (
        <div className='left-0 top-0' style={{ position: 'absolute', width: "100%", height: "100%" }}>
            <BreakAnimation
                delay={delay}
                spriteSheet={spriteSheet}
                frameWidth={frameWidth}
                frameHeight={frameHeight}
                frameCount={frameCount}
                fps={fps}
                direction={direction}
                scale={scale}
                flipped={flipped}
            />
        </div>
    );
};

export default BreakDemo;