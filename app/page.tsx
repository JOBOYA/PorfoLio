'use client'

import { useState, useEffect } from 'react';
import Nav from '../components/NavBar';
import Header from '../components/Header';
import Project from '../components/Projects';
import Skills from  '../components/skills';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './globals.css';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  const checkMobile = () => {
    if (window.innerWidth < 1170) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Clean up function
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <>
      {!isMobile && (
        <div className="absolute flex flex-col items-start ml-12">
          <div className="h-60 w-0.5 bg-gray-400"></div>
          <div className="flex flex-col items-start space-y-4 ml-[-14px] py-3">
            <FaGithub className="text-white transition-transform hover:scale-110" size={30} />
            <FaLinkedin className="text-white transition-transform hover:scale-110" size={30} />
            <FaTwitter className="text-white transition-transform hover:scale-110" size={30} />
          </div>
        </div>
      )}
      <Nav />
     
  <Header text="Frontend Developer React | TypeScript" imageUrl="/assets/joseph1.png" />
  <div style={{ margin: '10rem' }}>
  <Project />
</div>


<Skills />


    </>
  )
}
