"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setHasCompleted(true);
          return 100;
        }
      });
    }, 100); // Update progress every 50ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let animationFrameId;
    const duration = 0.5; // Duration for each value transition
    const totalFrames = duration * 60; // Assuming 60 FPS

    const animateProgress = () => {
      const step = Math.ceil(progress / totalFrames);
      if (displayedProgress < progress) {
        setDisplayedProgress(prev => {
          const newValue = Math.min(prev + step, progress);
          if (newValue < progress) {
            animationFrameId = requestAnimationFrame(animateProgress);
          }
          return newValue;
        });
      }
    };

    if (progress !== displayedProgress) {
      animateProgress();
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [progress, displayedProgress]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <motion.div
        className="relative w-full mx-20"
        animate={{
          y: hasCompleted ? -100 : 0, // Moves up by 100 pixels when complete
          opacity: hasCompleted ? 0 : 1, // Fades out when complete
        }}
        transition={{
          duration: 1, // Time in seconds for the animation
          delay: 0.5, // Waits for half a second before starting the transition
        }}
      >
        <motion.div
          className="h-1 bg-gray-300 rounded overflow-hidden"
          style={{ width: '100%' }}
        >
          <motion.div
            className="h-full bg-blue-600 rounded"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <motion.div
          className="absolute -top-10 right-0 text-black px-2 text-sm"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Math.round(displayedProgress)}%
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProgressBar;
