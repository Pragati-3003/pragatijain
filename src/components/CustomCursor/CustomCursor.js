import React, { useEffect, useState } from 'react';
import './customCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isLarge, setIsLarge] = useState(false);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.querySelectorAll('h1, p').forEach(el => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onHoverOut);
    });
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.querySelectorAll('h1, p').forEach(el => {
      el.removeEventListener('mouseenter', onHover);
      el.removeEventListener('mouseleave', onHoverOut);
    });
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseEnter = () => {
    setIsVisible(true);
  };

  const onMouseLeave = () => {
    setIsVisible(false);
  };

  const onHover = () => {
    setIsLarge(true);
  };

  const onHoverOut = () => {
    setIsLarge(false);
  };

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className={`custom-cursor ${isVisible ? 'visible' : ''} ${isLarge ? 'large' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default CustomCursor;
