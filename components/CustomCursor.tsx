import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) {
        setIsVisible(true);
      }
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(false);
      }
    };
    
    const handleMouseLeave = () => {
        setIsVisible(false);
    }

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);
  
  const dotStyle: React.CSSProperties = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    opacity: isVisible ? 1 : 0,
  };
  
  const outlineStyle: React.CSSProperties = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    opacity: isVisible ? 1 : 0,
  };

  return (
    <>
      <div className="cursor-dot" style={dotStyle}></div>
      <div 
        className={`cursor-outline ${isHovering ? 'cursor-hover' : ''}`} 
        style={outlineStyle}
      ></div>
    </>
  );
};

export default CustomCursor;