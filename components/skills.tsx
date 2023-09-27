import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaTrello, FaGithub, FaVuejs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { FiFigma } from 'react-icons/fi';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Skills() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <>
    
    <div>
    <div className="section-container p-14">
        <div id="skills" className="pl-12 md:pl-72 items-center mx-4 sm:mx-0">
        <h1 className="relative right-8 md:right-28 text-white text-5xl font-bold mb-0 sm:mb-4 md:mb-0 md:mr-4">

            <span className="text-pink-500">#</span>Skills
            <span style={{ position: 'absolute', left: '180px', bottom: '20px', height: '2px', width: '50.33%', backgroundColor: '#D946EF' }}></span>
          </h1>
        </div>
        </div>
        <div className="flex justify-center items-center w-full h-full">
        <div className="section-container flex flex-col md:flex-row items-center md:justify-end space-y-10 md:space-y-0 md:space-x-10 mt-2 md:mt-10 mx-auto">

    <div className="w-full md:w-1/3">
            <Image src="/assets/skills.png" alt="skills" width={500} height={500} />
          </div>

          <motion.div style={{ scale }} className="w-full md:w-2/3 justify-evenly">
          <div className="flex flex-col space-y-10 md:space-y-0 md:space-x-16 justify-center items-center md:flex-row">
           
        <div className="flex flex-col space-y-20 md:space-y-0 md:space-x-16 justify-center items-center md:flex-row">
            <div className="border-4 border-pink-500 rounded-md p-4 md:p-8 w-full md:w-1/3" style={{minWidth: '200px'}}>



            <h1 className="text-white text-2xl md:text-2xl flex justify-center font-bold">Languages</h1>


                <ul className="list-disc list-inside text-white text-lg pl-5 flex flex-col space-y-2 md:space-y-4 break-words">

                  <li className="flex items-center text-xl"><FaJs className="mr-4 h-6 w-6" />JavaScript</li>
                  <li className="flex items-center text-xl"><SiTypescript className="mr-4 h-6 w-6" />TypeScript</li>
                  <li className="flex items-center text-xl"><FaHtml5 className="mr-4 h-6 w-6" />HTML</li>
                  <li className="flex items-center text-xl"><FaCss3Alt className="mr-4 h-6 w-6" />CSS</li>
                </ul>
              </div>
              <div className="border-4 border-pink-500 rounded-md p-4 md:p-8 w-full md:w-1/3" style={{minWidth: '200px'}}>


                <h1 className="text-white text-2xl font-bold">Frameworks</h1>
                <ul className="list-disc list-inside text-white text-lg pl-5 flex flex-col space-y-2 md:space-y-4 break-words">

                  <li className="flex items-center text-xl"><FaReact className="mr-4 h-6 w-6" />React</li>
                  <li className="flex items-center text-xl"><FaVuejs className="mr-4 h-6 w-6" />Vuejs</li>
                </ul>
              </div>
              <div className="border-4 border-pink-500 rounded-md p-4 md:p-8 w-full md:w-1/3" style={{minWidth: '200px'}}>


                <h1 className="text-white text-2xl font-bold">Tools</h1>
                <ul className="list-disc list-inside text-white text-lg pl-5 flex flex-col space-y-2 md:space-y-4 break-words">

                  <li className="flex items-center text-xl"><TbBrandVscode className="mr-4 h-6 w-6" />Vscode</li>
                  <li className="flex items-center text-xl"><FiFigma className="mr-4 h-6 w-6" />Figma</li>
                  <li className="flex items-center text-xl"><FaTrello className="mr-4 h-6 w-6" />Trello</li>
                  <li className="flex items-center text-xl"><FaGithub className="mr-4 h-6 w-6" />Github</li>
                </ul>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
       </div>
      </div>
    
    </>
  );
}