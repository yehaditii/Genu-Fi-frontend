
import React from 'react';

const RotatingCube = () => {
  return (
    <div className="relative w-32 h-32">
      <div className="cube-3d absolute inset-0 mx-auto">
        <div className="cube-face"></div>
        <div className="cube-face"></div>
        <div className="cube-face"></div>
        <div className="cube-face"></div>
        <div className="cube-face"></div>
        <div className="cube-face"></div>
      </div>
    </div>
  );
};

export default RotatingCube;
