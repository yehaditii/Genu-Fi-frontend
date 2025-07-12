
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Stats />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
