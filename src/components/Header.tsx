
import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-neon">
            GenuFi
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-soft-neon hover:text-aqua-neon transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-soft-neon hover:text-aqua-neon transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-soft-neon hover:text-aqua-neon transition-colors duration-300"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('stats')}
              className="text-soft-neon hover:text-aqua-neon transition-colors duration-300"
            >
              Stats
            </button>
            <button className="btn-primary">
              Get Certified
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-aqua-neon"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-soft-neon hover:text-aqua-neon transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-soft-neon hover:text-aqua-neon transition-colors duration-300 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-soft-neon hover:text-aqua-neon transition-colors duration-300 text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('stats')}
                className="text-soft-neon hover:text-aqua-neon transition-colors duration-300 text-left"
              >
                Stats
              </button>
              <button className="btn-primary mt-2">
                Get Certified
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
