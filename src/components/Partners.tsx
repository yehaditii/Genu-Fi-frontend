
import React from 'react';

const Partners = () => {
  // Placeholder partner logos
  const partners = [
    "TechCorp", "InnovateLab", "FutureEd", "SkillForge", 
    "LearnTech", "CertifyPro", "EduChain", "SmartLearn"
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16">
          <span className="gradient-text">Trusted Partners</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-2xl font-bold text-aqua-neon group-hover:text-soft-neon transition-colors duration-300">
                {partner}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-lg text-soft-neon/80 mb-8">
            Want to partner with us? Let's build the future of education together.
          </p>
          <button className="btn-secondary">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
