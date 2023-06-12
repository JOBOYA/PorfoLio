import React from 'react';
import Image from 'next/image';


interface HeaderProps {
    text: string;
    imageUrl: string;
    
}

const Header: React.FC<HeaderProps> = ({ text, imageUrl }) => {
    

    return (
        <div className="flex flex-col items-start md:flex-row md:items-center p-4">
            {/* Image */}
        


            {/* Texte avec dégradé blanc-violet épuré */}
            <h1 className="text-4xl font-bold mb-4 md:mb-0 md:mr-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">{text}</span>
                <p className="text-2xl text-slate-600 mb-4 md:mb-0 md:mr-4">
                    Lorem ipsum dolor
                    <br />
                </p>
            </h1>

            <div className="w-16 h-16 md:w-32 md:h-32 relative self-end md:self-auto ml-auto">
                <Image src={imageUrl} layout="fill" className="rounded-full" alt="Profile Picture" />
            </div>
        </div>
    );
};

export default Header;
