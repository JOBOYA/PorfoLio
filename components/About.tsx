import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='section-container'>
        <div id="about" className="px-4 md:px-48 m-8">
          <h1 id="projects" className="relative right-8 text-white text-4xl font-bold mb-4 md:mb-0 md:mr-4 text-left">
            <span className="text-pink-500">#</span>A propos
            <span style={{ position: 'absolute', left: '220px', bottom: '20px', height: '1px', width: '33.33%', backgroundColor: '#D946EF' }}></span>
          </h1>
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-white text-sm text-justify">
                Je suis un développeur front-end passionné par le nouvelles technologies. J&apos;adore relever des défis et je suis toujours à la recherche de nouvelles façons de créer des sites web modernes et innovants.
              <br/>Mon objectif est de fournir des expériences utilisateur exceptionnelles en utilisant les dernières technologies.
              <br/>🚀 Mon passe-temps préféré est de coder et je suis toujours prêt à apprendre de nouvelles choses pour améliorer mes compétences en programmation.
              <br/>🌟 Travaillons ensemble pour créer des projets incroyables !
              <br/>Les projets suivants mettent en valeur mes compétences et mon expérience à travers des exemples concrets de mon travail.
              <br/>Chaque projet est brièvement décrit avec des liens vers des référentiels de code et des démonstrations en direct.
              Cela reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer efficacement des projets.

            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
