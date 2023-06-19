'use client'
import { Loading } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import Nav from '../components/NavBar';
import Header from '../components/Header';
import Project from '../components/Projects';
import Skills from '../components/skills';
import Abouts from '../components/About';
import Footer from '../components/Footers';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdClose, MdArrowUpward } from 'react-icons/md';
import { motion } from 'framer-motion';
import './globals.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isIconsVisible, setIsIconsVisible] = useState(true);

  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  }

  const iconVariants = {
    hidden: { opacity: 0, y: -500 },
    visible: { opacity: 1, y: 0 },
  }

  const checkMobile = () => {
    if (window.innerWidth < 1170) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  const toggleIconsVisibility = () => {
    setIsIconsVisible(!isIconsVisible);
  }

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    }
  }, []);

  useEffect(() => {
    // Simulate a 2 second loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <Loading style={{ textIndent: '-9999px' }}>Loading</Loading>
        </div>
      ) : (
        <>
          {!isMobile && (
            <>
              <motion.div className="absolute flex flex-col items-start ml-12"
                initial="hidden"
                animate={isIconsVisible ? "visible" : "hidden"}
                variants={iconVariants}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <div className="h-60 w-0.5 bg-gray-400"></div>
                <div className="flex flex-col items-start space-y-4 ml-[-14px] py-3">
                  <FaGithub className="text-white transition-transform hover:scale-110" size={30} />
                  <FaLinkedin className="text-white transition-transform hover:scale-110" size={30} />
                  <div className="flex items-center">
                    <FaTwitter className="text-white transition-transform hover:scale-110" size={30} />
                    <MdClose onClick={toggleIconsVisibility} className="text-white ml-3 cursor-pointer" size={30} />
                  </div>
                </div>
              </motion.div>
              {!isIconsVisible && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  className="absolute flex flex-col items-start ml-12 mb-10 py-16"
                >
                  <div onClick={toggleIconsVisibility} className="cursor-pointer">
                    <MdArrowUpward className="text-white transform rotate-180 flipped-arrow animate-arrow" size={40} />
                  </div>
                </motion.div>
              )}
            </>
          )}
          <Nav />
          <Header text="Frontend Developer React | TypeScript" imageUrl="/assets/joseph1.png" />
          <div style={{ margin: '10rem' }}>
            <Project />
          </div>
          <Skills />
          <Abouts />
          <Footer />
        </>
      )}
    </>
  )
}