import React from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';

interface HeaderProps {
    text: string;
    imageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ text, imageUrl }) => {
    return (
        <motion.div
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
            <div className="flex flex-col items-start md:flex-row md:items-center p-12 mt-28 md:mt-0 mx-auto px-2 md:px-4 max-w-screen-lg">
                {/* Image */}
                <h1 className="text-4xl font-bold mb-4 md:mb-0 md:mr-4">
                    👨‍💻
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">{text}</span>
                    <p className="text-sm text-slate-600 mb-4 md:mb-0 md:mr-4">
                        Je créé des sites web réactifs où les technologies rencontrent la créativité.
                        <br />
                    </p>
                    <button className='text-lg bg-transparent text-white font-semibold mt-6 py-1 px-4 border border-purple-500 rounded transition-transform hover:scale-110'>
                        contact
                    </button>
                </h1>
                <div className="flex flex-col items-start md:flex-row md:items-center p-12 mt- mx-auto px-2 md:px-4 max-w-screen-lg">
                    <div className="w-24 h-24 md:w-32 md:h-32 relative self-end md:self-auto ml-auto">
                        <Image src={imageUrl} layout="fill" className="rounded-full" alt="Profile Picture" />
                    </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                    <div style={{width: '250px', height: '105px'}} className="py-8 border-y-4 px-4 border border-purple-500 rounded">
                        <span style={{ color: 'white', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['“Un code supprimé est un code débogué.”', '“Un autre proverbe cool.”', '“Et un dernier pour la route.”']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>
                </div>
              
            </div>
        </motion.div>
    );
};

export default Header;
