import { useState, useEffect } from 'react';
const BreakAnimation = ({
    spriteSheet,       // Path to sprite sheet OR array of individual sprite paths
    frameWidth,        // Width of each frame (if using sprite sheet)
    frameHeight,       // Height of each frame (if using sprite sheet)
    frameCount,        // Total number of frames
    fps = 12,          // Frames per second (animation speed)
    direction = 'vertical', // 'horizontal' or 'vertical' (for sprite sheets)
    className = '',    // Additional CSS classes
    row = 0,
    scale=1,
    delay
}) => {
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        setCurrentFrame(1);
    }, [spriteSheet, frameCount, row])

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
        // Each frame is (100 / frameCount)% of the height
        backgroundPosition = `0px -${currentFrame * scale * frameHeight}px`;
        backgroundSize = `${scale*frameWidth}px ${scale*frameCount * frameHeight}px`;
        return {
            width: `${scale * frameWidth}px`,
            height: `${scale * frameHeight}px`,
            backgroundImage: `url(${spriteSheet})`,
            backgroundPosition,
            backgroundRepeat: 'no-repeat',
            backgroundSize,
            imageRendering: 'pixelated',
            zIndex: 100,
            top: 0,
            left: 0,
        };
    };
    return (
        <div
            className={`${className}`}
            style={getStyle()}
        />
    );
};

// Usage example component
const BreakDemo = ({ pack,scale }) => {
    const { sprite, frameWidth, frameHeight, frames, fps } = pack.pack.break || {};
    if (!sprite) return null;
    return (
        <div>
            <BreakAnimation
                delay={pack.pack.break.delay}
                spriteSheet={sprite}
                frameWidth={frameWidth}
                frameHeight={frameHeight}
                frameCount={frames}
                fps={fps}
                scale={scale}
            />
        </div>
    );
};

export default BreakDemo;