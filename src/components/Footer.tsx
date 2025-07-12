
import React from 'react';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Stats", href: "#stats" }
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Github size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Mail size={20} />, href: "mailto:hello@genufi.com" }
  ];

  return (
    <footer className="bg-gradient-to-t from-deep-navy to-cool-blue/20 section-padding border-t border-aqua-neon/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-neon">
              GenuFi
            </div>
            <p className="text-soft-neon/80 leading-relaxed">
              Revolutionizing education with blockchain-verified credentials. 
              Learn something real, earn something rare.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-aqua-neon">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-soft-neon/80 hover:text-aqua-neon transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-aqua-neon">Connect</h3>
            <p className="text-soft-neon/80">
              Ready to transform your learning journey?
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-aqua-neon hover:text-soft-neon hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-aqua-neon/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-soft-neon/60">
            © 2024 GenuFi. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-soft-neon/60 hover:text-aqua-neon transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-soft-neon/60 hover:text-aqua-neon transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
