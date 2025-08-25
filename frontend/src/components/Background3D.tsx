import React, { useEffect } from 'react';

const Background3D: React.FC = () => {
  useEffect(() => {
    // Create 3D background elements
    const createBackgroundElements = () => {
      // Remove existing elements
      const existingElements = document.querySelectorAll('.bg-3d-element');
      existingElements.forEach(el => el.remove());

      // Create shapes container
      const shapesContainer = document.createElement('div');
      shapesContainer.className = 'bg-3d-shapes bg-3d-element';
      document.body.appendChild(shapesContainer);

      // Create grid container
      const gridContainer = document.createElement('div');
      gridContainer.className = 'bg-3d-grid bg-3d-element';
      document.body.appendChild(gridContainer);

      // Create particles container
      const particlesContainer = document.createElement('div');
      particlesContainer.className = 'bg-3d-particles bg-3d-element';
      document.body.appendChild(particlesContainer);

      // Create depth layers
      const depthLayer1 = document.createElement('div');
      depthLayer1.className = 'bg-depth-layer-1 bg-3d-element';
      document.body.appendChild(depthLayer1);

      const depthLayer2 = document.createElement('div');
      depthLayer2.className = 'bg-depth-layer-2 bg-3d-element';
      document.body.appendChild(depthLayer2);

      // Create floating 3D objects
      for (let i = 0; i < 8; i++) {
        const floatingObject = document.createElement('div');
        floatingObject.className = 'floating-3d-object bg-3d-element';
        floatingObject.style.cssText = `
          position: fixed;
          width: ${20 + Math.random() * 40}px;
          height: ${20 + Math.random() * 40}px;
          background: linear-gradient(45deg, 
            rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.1),
            rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)
          );
          border-radius: ${Math.random() * 50}% ${Math.random() * 50}% ${Math.random() * 50}% ${Math.random() * 50}%;
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          pointer-events: none;
          z-index: -${3 + i};
          animation: 
            float3dObject${i} ${15 + Math.random() * 10}s ease-in-out infinite,
            rotate3dObject${i} ${20 + Math.random() * 15}s linear infinite;
          transform: translateZ(${Math.random() * 100 - 50}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg);
        `;
        document.body.appendChild(floatingObject);

        // Add unique animations for each object
        const style = document.createElement('style');
        style.textContent = `
          @keyframes float3dObject${i} {
            0%, 100% { 
              transform: translateZ(${Math.random() * 100 - 50}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) translateY(0px); 
            }
            50% { 
              transform: translateZ(${Math.random() * 100 - 50}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) translateY(${-50 - Math.random() * 50}px); 
            }
          }
          @keyframes rotate3dObject${i} {
            0% { 
              transform: translateZ(${Math.random() * 100 - 50}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) rotateZ(0deg); 
            }
            100% { 
              transform: translateZ(${Math.random() * 100 - 50}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) rotateZ(360deg); 
            }
          }
        `;
        document.head.appendChild(style);
      }

      // Create 3D constellation effect
      const constellation = document.createElement('div');
      constellation.className = 'bg-3d-constellation bg-3d-element';
      constellation.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -2;
        transform-style: preserve-3d;
      `;

      // Add constellation points
      for (let i = 0; i < 50; i++) {
        const point = document.createElement('div');
        point.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, ${0.3 + Math.random() * 0.7});
          border-radius: 50%;
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          animation: twinkle3d ${2 + Math.random() * 3}s ease-in-out infinite alternate;
          transform: translateZ(${Math.random() * 200 - 100}px);
          box-shadow: 0 0 ${5 + Math.random() * 10}px rgba(255, 255, 255, 0.5);
        `;
        constellation.appendChild(point);
      }

      document.body.appendChild(constellation);

      // Add twinkle animation
      const twinkleStyle = document.createElement('style');
      twinkleStyle.textContent = `
        @keyframes twinkle3d {
          0% { 
            opacity: 0.3; 
            transform: translateZ(var(--z)) scale(1); 
          }
          100% { 
            opacity: 1; 
            transform: translateZ(var(--z)) scale(1.5); 
          }
        }
      `;
      document.head.appendChild(twinkleStyle);
    };

    createBackgroundElements();

    // Cleanup on unmount
    return () => {
      const elements = document.querySelectorAll('.bg-3d-element');
      elements.forEach(el => el.remove());
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default Background3D;