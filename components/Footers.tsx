import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const controls = useAnimation();
  const [isNearBottom, setIsNearBottom] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsNearBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isNearBottom) {
      controls.start({
        x: 0,
        transition: { type: 'spring', stiffness: 50 }
      });
    }
  }, [controls, isNearBottom]);

  return (
    <footer className="flex items-center justify-center border bg-transparent text-white p-4 sm:p-6 space-x-4 rounded-xl max-w-6xl mx-4 sm:mx-auto mb-8">
      <div className="flex space-x-4">
        <motion.a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
          initial={{ x: -200 }}
          animate={controls}
        >
          <FaGithub className="text-white transition-transform hover:scale-110" size={30} />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer"
          initial={{ x: -200 }}
          animate={controls}
        >
          <FaLinkedin className="text-white transition-transform hover:scale-110" size={30} />
        </motion.a>
        <motion.a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
          initial={{ x: -200 }}
          animate={controls}
        >
          <FaTwitter className="text-white transition-transform hover:scale-110" size={30} />
        </motion.a>
      </div>
      <div className="text-sm">MyPortfolio
        &copy; {currentYear} Tous droits réservés
      </div>
    </footer>
  )
}
