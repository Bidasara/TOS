import { useState, useEffect } from 'react';// A reusable sprite animation component
const BreakAnimation = ({
    spriteSheet,       // Path to sprite sheet OR array of individual sprite paths
    frameWidth,        // Width of each frame (if using sprite sheet)
    frameHeight,       // Height of each frame (if using sprite sheet)
    frameCount,        // Total number of frames
    fps = 12,          // Frames per second (animation speed)
    direction = 'horizontal', // 'horizontal' or 'vertical' (for sprite sheets)
    className = '',    // Additional CSS classes
    scale = 1,
    translateX = '0',
    translateY = '0',
    row = 0,
    total_frames,
    flipped = false, // Whether to flip the sprite horizontally
}) => {
    // Use internal state for playing if not controlled externally
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        setCurrentFrame(0);
    }, [spriteSheet, frameCount, direction, row])
    // Debug: log prop changes
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentFrame(prevFrame => {
                const nextFrame = (prevFrame + 1) % frameCount;

                // Check if animation completed
                if (nextFrame === 0) {
                    clearInterval(intervalId);
                    return prevFrame;
                }

                return nextFrame;
            });
        }, 1000 / fps);

        return () => clearInterval(intervalId);
    }, [ frameCount, fps, spriteSheet, direction, row]);

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



        return {
            width: `${frameWidth * scale}px`, // scaled frame width
            height: `${frameHeight * scale}px`, // scaled frame height
            backgroundImage: `url(${spriteSheet})`,
            backgroundPosition,
            backgroundRepeat: 'no-repeat',
            backgroundSize,
            imageRendering: 'pixelated',
            zIndex: 100,
            position: 'absolute',
            top: translateY,
            left: translateX,
            objectFit: 'none',
            transform: flipped ? 'scaleX(-1)' : 'none' // Flip the sprite if needed
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

// Usage example component
const BreakDemo = ({ animation = "fire" }) => {
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
    };
    const { spriteSheet, frameWidth, frameHeight, frameCount, fps, direction, scale, flipped } = animations[animation] || {};
    if (!spriteSheet) return null;
    return (
        <div style={{ position: 'relative', width: frameWidth, height: frameHeight }}>
            <BreakAnimation
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