import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';



export default function About() {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 300 && !isVisible) { 
            setIsVisible(true);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [isVisible]); 



  return (
    <>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 1 }}
>
     <div className="float-right md:block hidden">
    <Image src="/assets/dot.png" alt="description" width={200} height={100} />
  </div>
    
    <div className="mr-8 mt-20 md:block hidden">
    <Image src="/assets/dot.png" alt="description" width={200} height={100} />
  </div>
 

  <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='section-container about-container'>
          <div id="about" className="px-4 md:px-48 m-8">
            {/* Votre code de titre */}
    
            <div className="mt-8 max-w-3l mx-auto text-center">
  <p className="text-white text-base md:text-lg leading-tight tracking-tight text-justify">
    🚀 Passionné de développement front-end spécialisé en React, je m&apos;efforce de créer des expériences web uniques et performantes.
    
    <br />&#x1F468;&zwj;&#x1F4BB; La programmation n&rsquo;est pas simplement un travail pour moi, mais une passion qui me pousse &agrave; explorer de nouvelles technologies, notamment dans l&rsquo;&eacute;cosyst&egrave;me React.
    
    <br />🏆 Ci-dessous, vous trouverez une sélection soignée de projets que j&apos;ai réalisés, mettant en lumière mon expertise en React et dans d&apos;autres technologies associées.
    
    <br />📂 Pour chaque projet, je fournis une description détaillée ainsi que des liens vers le code source, témoignant de ma capacité à résoudre des problèmes complexes et à conduire un projet du début à la fin.
  </p>
</div>

          </div>
        </div>
      </motion.div>


      {/*className="float-right md:block hidden"*/}
    <div className="float-right md:block hidden" >
    <Image src="/assets/dot.png" alt="description" width={200} height={100} />
  </div>

  <div className="mr-8 mt-20 md:block hidden">
    <Image src="/assets/dot.png" alt="description" width={200} height={100} />
  </div>
  </motion.div>

    </>
  )
}
