
import React from 'react';
import { BookOpen, Shield, Trophy } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learn",
      description: "Master cutting-edge technologies with hands-on courses designed by industry experts."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Prove",
      description: "Demonstrate your skills through practical projects and comprehensive assessments."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Own",
      description: "Earn blockchain-verified NFT certificates that truly represent your achievements."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-deep-navy to-cool-blue/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
          <span className="gradient-text">About GenuFi</span>
        </h2>
        
        <p className="text-xl text-soft-neon/80 mb-16 max-w-3xl mx-auto">
          GenuFi revolutionizes digital education by combining authentic learning experiences 
          with blockchain-verified credentials. Our philosophy is simple:
        </p>

        <div className="text-3xl lg:text-5xl font-bold mb-16 text-neon">
          "Learn it. Prove it. Own it."
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-aqua-neon mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-neon mb-4">{feature.title}</h3>
              <p className="text-soft-neon/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
