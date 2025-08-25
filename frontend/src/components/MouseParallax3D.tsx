import React, { useEffect } from 'react';

const MouseParallax3D: React.FC = () => {
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const animate = () => {
      // Apply parallax effect to background layers
      const bgElements = document.querySelectorAll('.bg-3d-element');
      bgElements.forEach((element, index) => {
        const depth = (index + 1) * 0.1;
        const moveX = mouseX * depth * 20;
        const moveY = mouseY * depth * 20;
        const rotateX = mouseY * depth * 5;
        const rotateY = mouseX * depth * 5;
        
        (element as HTMLElement).style.transform = `
          translateX(${moveX}px) 
          translateY(${moveY}px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
        `;
      });

      // Apply subtle parallax to cards
      const cards = document.querySelectorAll('.card-3d, .card-3d-dark');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        const distanceX = (cardCenterX - window.innerWidth / 2) / window.innerWidth;
        const distanceY = (cardCenterY - window.innerHeight / 2) / window.innerHeight;
        
        const moveX = mouseX * distanceX * 5;
        const moveY = mouseY * distanceY * 5;
        const rotateX = mouseY * 2;
        const rotateY = mouseX * 2;
        
        (card as HTMLElement).style.transform = `
          translateX(${moveX}px) 
          translateY(${moveY}px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
          translateZ(0px)
        `;
      });

      // Apply parallax to floating objects
      const floatingObjects = document.querySelectorAll('.floating-3d-object');
      floatingObjects.forEach((obj, index) => {
        const depth = (index % 3 + 1) * 0.15;
        const moveX = mouseX * depth * 30;
        const moveY = mouseY * depth * 30;
        const rotateZ = mouseX * depth * 10;
        
        (obj as HTMLElement).style.transform += ` 
          translateX(${moveX}px) 
          translateY(${moveY}px) 
          rotateZ(${rotateZ}deg)
        `;
      });

      animationId = requestAnimationFrame(animate);
    };

    // Device orientation for mobile 3D effects
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        mouseX = e.gamma / 45; // -1 to 1
        mouseY = e.beta / 90;  // -1 to 1
      }
    };

    // Touch parallax for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseX = (touch.clientX / window.innerWidth) * 2 - 1;
        mouseY = (touch.clientY / window.innerHeight) * 2 - 1;
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleDeviceOrientation);
    window.addEventListener('touchmove', handleTouchMove);
    
    // Start animation loop
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return null;
};

export default MouseParallax3D;