import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { clientWidth: width, clientHeight: height } = document.body;

  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = document.body.clientWidth;
      setWidth(width);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};
