'use client'

import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
//TODO add responsive navbar and transition 
export function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showHome, setShowHome] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showContact, setShowContact] = useState(false);

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


    const navigateToSection = (sectionId: string) => {
        if (window.location.pathname === '/') {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.location.href = `/#${sectionId}`;
        }
    };

    const menuItems = (
        <ul className={isMobile ? "space-y-4" : "space-x-4"}>
            <li className={`${(showHome || !isMobile) ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'} ${isMobile ? "block" : "inline-block"}`}>
                <button onClick={() => navigateToSection('/')} className="text-slate-50 hover:text-purple-500" >
                    <span className="text-pink-500 mr-2">#</span>accueil
                </button>
            </li>
            <li className={`${(showAbout || !isMobile) ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'} ${isMobile ? "block" : "inline-block"}`}>
                <button onClick={() => navigateToSection('projects')} className="text-slate-50 hover:text-purple-500" >
                    <span className="text-pink-500 mr-2">#</span>projects
                </button>
            </li>
            <li className={`${(showAbout || !isMobile) ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'} ${isMobile ? "block" : "inline-block"}`}>
            <button onClick={() => navigateToSection('skills')} className="text-slate-50 hover:text-purple-500" >
                    <span className="text-pink-500 mr-2">#</span>skills
                </button>
            </li>
            <li className={`${(showContact || !isMobile) ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'} ${isMobile ? "block" : "inline-block"}`}>
                <button onClick={() => navigateToSection('projects')} className="text-slate-50 hover:text-purple-500" >
                    <span className="text-pink-500 mr-2">#</span>projects
                </button>
            </li>
        </ul>
    );

    return (
        <>
            <nav className="relative flex justify-end py-8 pr-40">
                {isMobile ? (
                    <>
                        <button
                            className=" text-slate-50 hover:text-purple-500 z-10 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
                        </button>
                        {isOpen && <div className=" absolute top-full z-10">{menuItems}</div>}
                    </>
                ) : (
                    menuItems
                )}
            </nav>
           
        </>
    );
}

export default Navbar;
