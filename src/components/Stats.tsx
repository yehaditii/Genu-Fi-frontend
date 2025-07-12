import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({
    users: 0,
    ratings: 0,
    institutions: 0,
  });

  useEffect(() => {
    const targetCounts = {
      users: 258000,
      ratings: 4.9,
      institutions: 258000,
    };

    const intervals = Object.keys(targetCounts).map(key => {
      const finalValue = targetCounts[key];
      let currentValue = 0;
      const increment = finalValue / 200; // total steps
      const stepTime = 10; // in ms

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(interval); // ✅ Correct way
        }
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(currentValue),
        }));
      }, stepTime);

      return interval;
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="text-white text-center py-10">
      <div>Total Users: {counts.users}+</div>
      <div>Rating: {counts.ratings}</div>
      <div>Institutions: {counts.institutions}+</div>
    </div>
  );
};

export default Stats;

