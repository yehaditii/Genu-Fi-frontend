import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import RotatingCube from './RotatingCube';
import LaptopIllustration from './LaptopIllustration';
import { useState } from 'react';

const Hero = () => {
  const [status, setStatus] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const walletAddress = accounts[0];
        return walletAddress;
      } catch (err) {
        console.error("User rejected the request");
      }
    } else {
      alert("Please install MetaMask to use this feature.");
    }
  };

  const handleMint = async () => {
    setStatus("Minting...");
    const walletAddress = await connectWallet();
    if (!walletAddress) return;

    const res = await fetch("https://genu-fi-backend.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentAddress: walletAddress,
        studentName: "Aditi Jha",
        courseName: "Web3 Fundamentals"
      }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus(`Minted! View on Polygonscan:\nhttps://amoy.polygonscan.com/tx/${data.txHash}`);
    } else {
      setStatus(`Error: ${data.error}`);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content with Rotating Cube */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="relative">
              {/* Rotating Cube */}
              <div className="absolute -top-20 -left-16 z-0">
                <RotatingCube />
              </div>

              {/* Main Content */}
              <div className="relative z-10">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-neon">Learn</span>{' '}
                  <span className="text-soft-neon">something</span>{' '}
                  <span className="gradient-text">real.</span>
                  <br />
                  <span className="text-neon">Earn</span>{' '}
                  <span className="text-soft-neon">something</span>{' '}
                  <span className="gradient-text">rare.</span>
                </h1>

                <p className="text-xl text-soft-neon/80 leading-relaxed max-w-lg">
                  Master cutting-edge skills, prove your expertise, and earn
                  blockchain-verified certificates that showcase your real abilities.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button onClick={handleMint} className="btn-primary flex items-center justify-center gap-3 group">
                    Get Certified
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </button>

                  {status && (
                    <p className="text-sm text-green-400 mt-4 whitespace-pre-line">
                      {status}
                    </p>
                  )}

                  <button className="btn-secondary flex items-center justify-center gap-3 group">
                    <Play size={20} />
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Laptop */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <LaptopIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
