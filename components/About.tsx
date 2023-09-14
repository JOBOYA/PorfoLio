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
    
            <div className="mt-8  max-w-3l mx-auto text-center">
            <p className="text-white text-base md:text-lg leading-tight tracking-tight text-justify">
              🚀 Je suis un développeur front-end passionné, cuisinant des codes bio dans la cuisine numérique. Toujours avide de nouveaux défis, je cherche constamment des recettes inédites pour créer des sites web modernes et innovants.

<br />👨‍🍳 Coder est mon passe-temps préféré, un peu comme un chef qui adore expérimenter en dehors des heures de service. Je suis toujours prêt à apprendre de nouvelles épices de programmation pour enrichir mon palais de compétences.

<br />🍽 Les projets qui suivent sont comme un menu dégustation de ma carrière. Ils montrent un éventail de mes compétences, à travers des plats concrets que j&apos;ai créés.

<br />🗂 Chaque projet est brièvement décrit avec des liens vers mes garde-manger de code. Cela illustre ma capacité à concocter des solutions à des problèmes complexes, à jongler avec une variété d&apos;ingrédients technologiques, et à orchestrer efficacement des projets, comme un chef gère son service.
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
