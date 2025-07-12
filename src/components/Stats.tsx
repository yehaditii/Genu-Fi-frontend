
import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    users: 0,
    certificates: 0,
    partners: 0
  });

  const finalCounts = {
    users: 50000,
    certificates: 25000,
    partners: 150
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      const intervals = Object.keys(finalCounts).map(key => {
        const finalValue = finalCounts[key as keyof typeof finalCounts];
        const increment = finalValue / steps;
        let currentValue = 0;

        return setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(intervals.find(i => i === interval));
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(currentValue) }));
        }, stepTime);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isVisible]);

  const statsData = [
    {
      number: counts.users.toLocaleString(),
      label: "Active Learners",
      suffix: "+"
    },
    {
      number: counts.certificates.toLocaleString(),
      label: "Certificates Issued",
      suffix: "+"
    },
    {
      number: counts.partners.toLocaleString(),
      label: "Partner Institutions",
      suffix: "+"
    }
  ];

  return (
    <section id="stats" className="section-padding bg-gradient-to-b from-cool-blue/20 to-deep-navy">
      <div id="stats-section" className="container mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-16">
          <span className="gradient-text">Our Impact</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-4xl lg:text-6xl font-bold text-neon mb-4 animate-counter-up">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-xl text-soft-neon/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-soft-neon/80 mb-8">
            Join thousands of learners who are already building their future with GenuFi
          </p>
          <button className="btn-primary">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
