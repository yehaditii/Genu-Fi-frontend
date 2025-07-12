
import React from 'react';

const LaptopIllustration = () => {
  return (
    <div className="laptop-3d relative">
      <div className="relative w-96 h-64">
        {/* Laptop Base */}
        <div className="absolute bottom-0 w-full h-6 bg-gradient-to-r from-cool-blue to-aqua-neon rounded-lg neon-glow"></div>
        
        {/* Laptop Screen */}
        <div className="absolute bottom-6 w-full h-56 bg-gradient-to-br from-deep-navy via-cool-blue to-aqua-neon rounded-t-lg neon-glow p-4">
          {/* Screen Content */}
          <div className="w-full h-full bg-deep-navy/90 rounded p-4 relative overflow-hidden">
            {/* Code Lines Animation */}
            <div className="space-y-2">
              <div className="h-2 bg-aqua-neon/60 rounded animate-pulse" style={{width: '80%'}}></div>
              <div className="h-2 bg-cool-blue/60 rounded animate-pulse delay-100" style={{width: '60%'}}></div>
              <div className="h-2 bg-aqua-neon/60 rounded animate-pulse delay-200" style={{width: '90%'}}></div>
              <div className="h-2 bg-cool-blue/60 rounded animate-pulse delay-300" style={{width: '70%'}}></div>
            </div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-4 w-2 h-2 bg-aqua-neon rounded-full animate-ping"></div>
              <div className="absolute top-12 right-8 w-1 h-1 bg-soft-neon rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-4 w-1.5 h-1.5 bg-aqua-neon rounded-full animate-bounce"></div>
            </div>

            {/* GenuFi Logo on Screen */}
            <div className="absolute bottom-4 right-4 text-aqua-neon text-sm font-bold">
              GenuFi
            </div>
          </div>
        </div>

        {/* Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-aqua-neon/20 to-transparent rounded-lg blur-xl -z-10"></div>
      </div>
    </div>
  );
};

export default LaptopIllustration;
