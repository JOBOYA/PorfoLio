'use client'
import { Loading } from "@nextui-org/react";
import { useState, useEffect, useRef } from 'react';
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
import Link from "next/link";
import { Application } from '@splinetool/runtime';








export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isIconsVisible, setIsIconsVisible] = useState(true);
  


  const canvasRef = useRef(null);


  
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      setTimeout(() => {  // Introduire un délai
        const app = new Application(canvas);
        app.load('https://draft.spline.design/O3QVht8akCWApEUe/scene.splinecode')
          .then(() => {
            setIsLoading(false);
          })
          .catch(error => {
            console.log("Erreur :", error);
          });
      }, 2000);  // 2000 ms = 2 secondes
    }
  }, []);
  

  
  

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
    console.log('toggleIconsVisibility called');
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
          <Loading style={{ textIndent: '-9999px' }}></Loading>
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
                <div className="top-0 h-60 w-0.5 bg-gray-400"></div>
                <div className="flex flex-col items-start space-y-4 ml-[-14px] py-3">
                  <Link href="https://github.com/JOBOYA" target="_blank">
                  <FaGithub className="text-white transition-transform hover:scale-110" size={30} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/joseph-boyadjian-638b83255/" target="_blank">
                  <FaLinkedin className="text-white transition-transform hover:scale-110" size={30} />
                  </Link>
                 
                  <div className="flex items-center">
                  <Link href="https://twitter.com/HOVSEPBOYA" target="_blank">
                    <FaTwitter className="text-white transition-transform hover:scale-110" size={30} />
                    </Link>
                    <MdClose onClick={toggleIconsVisibility} className="text-white ml-3 cursor-pointer z-10" size={30} />
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
                  <div onClick={toggleIconsVisibility} className="cursor-pointer mt-4">
                    <MdArrowUpward className="text-white transform rotate-180 flipped-arrow animate-arrow z-10" size={40} />
                  </div>

                </motion.div>
              )}
            </>
          )}
          <Nav />
          <div className="m-12">
            <Header text="Frontend Developer React | TypeScript" imageUrl="/assets/joseph1.png" />
            </div>
          
         

        
        
          
       

           
            


          

  <div className="opacity-50 absolute top-0 left-0 right-0 bottom-0 z-0">
  <canvas id="canvas3d" ref={canvasRef}></canvas>
</div>
<div>
            <Abouts />
          </div>




          

          <div style={{ marginBottom: '20rem' }}>
            <Project />
          </div>

          <div className="mb-20">
          <Skills />
          </div>
        
         




          <Footer />
          
        </>
      )}
    </>
  )
}