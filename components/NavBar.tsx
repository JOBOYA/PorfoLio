'use client'

import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
//TODO  add animation hover navlink

export function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showHome, setShowHome] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showContact, setShowContact] = useState(false);
    

    const [blur, setBlur] = useState(false);  // New state





    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                setIsOpen(false); // Ferme le menu hamburger lorsque la fenêtre est agrandie.
            }
        };

        handleResize(); // Appel initial pour définir le bon état lors du chargement de la page

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile && isOpen) {
            setTimeout(() => setShowHome(true), 100); // Définir le délai d'apparition pour chaque élément
            setTimeout(() => setShowAbout(true), 200);
            setTimeout(() => setShowContact(true), 300);
        } else {
            setShowHome(false); // Réinitialise l'état lorsque le menu est fermé
            setShowAbout(false);
            setShowContact(false);
        }
    }, [isOpen, isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (show !== blur) {
                setBlur(show);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [blur]);

    const navigateToSection = (sectionId: string) => {
        if (window.location.pathname === '/') {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.location.hash = sectionId;  // Ajout de cette ligne
            setIsOpen(false);
        }
    };

    const menuItems = (
        <ul className={isMobile ? "space-y-4" : "space-x-4"}>
            <li className={`${(showHome || !isMobile) ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'} ${isMobile ? "block" : "inline-block"}`}>

                <button onClick={() => navigateToSection('accueil')} className={`${isMobile ? "text-lg uppercase" : ""} text-slate-50 hover:text-purple-500`}>

                    <span className="text-pink-500 mr-2">#</span>
                    {Array.from('accueil').map((letter, index) => (
                        <span key={index} style={{ transitionDelay: `${index * 50}ms` }} className="inline-block">
                            {letter}
                        </span>
                    ))}
                </button>



            </li>

            <li className={`${(showAbout || !isMobile) ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'} ${isMobile ? "block" : "inline-block"}`}>
                <button onClick={() => navigateToSection('projects')} className={`${isMobile ? "text-lg uppercase" : ""} text-slate-50 hover:text-purple-500`}>

                    <span className="text-pink-500 mr-2">#</span>
                    {Array.from('projets').map((letter, index) => (
                        <span key={index} style={{ transitionDelay: `${index * 50}ms` }} className="inline-block">
                            {letter}
                        </span>
                    ))}
                </button>
            </li>
            <li className={`${(showAbout || !isMobile) ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'} ${isMobile ? "block" : "inline-block"}`}>
                <button onClick={() => navigateToSection('skills')} className={`${isMobile ? "text-lg uppercase" : ""} text-slate-50 hover:text-purple-500`}>

                    <span className="text-pink-500 mr-2">#</span>
                    {Array.from('skills').map((letter, index) => (
                        <span key={index} style={{ transitionDelay: `${index * 50}ms` }} className="inline-block">
                            {letter}
                        </span>
                    ))}
                </button>
            </li>
            <li className={`${(showContact || !isMobile) ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'} ${isMobile ? "block" : "inline-block"}`}>
                <button onClick={() => navigateToSection('about')} className={`${isMobile ? "text-lg uppercase" : ""} text-slate-50 hover:text-purple-500`}>

                    <span className="text-pink-500 mr-2">#</span>
                    {Array.from('à\xa0propos').map((letter, index) => (
                        <span key={index} style={{ transitionDelay: `${index * 50}ms` }} className="inline-block">
                            {letter}
                        </span>
                    ))}
                </button>
            </li>
        </ul>
    );

    return (
        <>
            <nav
className={`flex justify-end py-8 pr-40 sticky top-0 bg-transparent ${blur && !isMobile ? 'backdrop-blur' : ''}`}

style={{ zIndex: 1000 }} // ensure navbar is at the top layer
            >
                {isMobile ? (
                    <>

                      <div className="flex justify-end">
                      <button
  className="text-slate-50 hover:text-purple-500 z-10 focus:outline-none"
  style={{ border: '1px solid gray', position: 'absolute', right: '10px', top: '10px', borderRadius: '5px'}}
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
</button>

  </div>

                        {isOpen && <div className=" absolute top-full z-10">{menuItems}</div>}
                    </>
                ) : (
                    menuItems
                )}
            </nav>
            {isOpen && isMobile && <div className={`blur-background ${isOpen ? 'blur-more' : ''}`}></div>}
        </>
    );

}

export default Navbar;