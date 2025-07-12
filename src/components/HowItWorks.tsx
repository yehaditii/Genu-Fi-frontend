
import React from 'react';
import { User, CheckCircle, Award } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <User className="w-10 h-10" />,
      title: "Learn",
      description: "Choose from our extensive library of cutting-edge courses and start your learning journey with interactive content and real-world projects."
    },
    {
      step: "02", 
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Prove Skills",
      description: "Complete hands-on assessments and practical projects that demonstrate your mastery of the subject matter to industry standards."
    },
    {
      step: "03",
      icon: <Award className="w-10 h-10" />,
      title: "Earn Certificate",
      description: "Receive your blockchain-verified NFT certificate that serves as permanent, tamper-proof evidence of your expertise and achievements."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-soft-neon/80 max-w-2xl mx-auto">
            Your journey from learning to earning verified credentials in three simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number */}
              <div className="text-6xl font-bold text-aqua-neon/20 absolute -top-4 left-4 z-0">
                {step.step}
              </div>

              {/* Content Card */}
              <div className="glass-effect rounded-2xl p-8 relative z-10 hover:scale-105 transition-all duration-300 h-full">
                <div className="text-aqua-neon mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-neon mb-4 text-center">
                  {step.title}
                </h3>
                
                <p className="text-soft-neon/80 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>

              {/* Connection Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-aqua-neon to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
