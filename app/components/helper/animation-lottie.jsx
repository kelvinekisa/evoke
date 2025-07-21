"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(
  () => import('lottie-react'),
  { ssr: false }
);

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  // Use state to track client-side status
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Optional: Return a placeholder during SSR
    return <div style={{ width, height: 'auto' }} />;
  }

  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{ width }}
    />
  );
};

export default AnimationLottie;