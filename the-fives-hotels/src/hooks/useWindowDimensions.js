import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  if (typeof window !== 'undefined') {
    // window is available
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  
  // Default values when window is not available
  return { width: 0, height: 0 };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    if (typeof window !== 'undefined') {
      // Add event listener
      window.addEventListener('resize', handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
    }

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowDimensions;
};

export default useWindowDimensions;