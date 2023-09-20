import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaTrello, FaGithub } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { FiFigma } from 'react-icons/fi';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Skills() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <>
      <div className="section-container p-14">
        <div id="skills" className="pl-12 md:pl-72 items-center mx-4 sm:mx-0">
          <h1 className="relative right-8 md:right-28 text-white text-5xl font-bold mb-4 md:mb-0 md:mr-4">
            <span className="text-pink-500">#</span>Skills
            <span style={{ position: 'absolute', left: '150px', bottom: '20px', height: '2px', width: '50.33%', backgroundColor: '#D946EF' }}></span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center mt-16 mx-4 sm:mx-0">
          <div className="w-full md:w-1/3 md:self-start">
            <Image src="/assets/skills.png" alt="skills" width={300} height={300} className="rounded-full flex-start md:block hidden" />
          </div>

          <motion.div style={{ scale }} className="w-full md:w-2/3 justify-evenly">
            <div className="flex flex-col space-y-20 md:space-y-0 md:space-x-16 justify-center items-center md:flex-row">
              <div className="border-4 border-pink-500 rounded-md p-8">
                <h1 className="text-white text-3xl font-bold">Languages</h1>
                <ul className="list-disc list-inside text-white text-xl pl-5 flex flex-col space-y-4">
                  <li className="flex items-center text-2xl"><FaJs className="mr-4 h-8 w-8" />JavaScript</li>
                  <li className="flex items-center text-2xl"><SiTypescript className="mr-4 h-8 w-8" />TypeScript</li>
                  <li className="flex items-center text-2xl"><FaHtml5 className="mr-4 h-8 w-8" />HTML</li>
                  <li className="flex items-center text-2xl"><FaCss3Alt className="mr-4 h-8 w-8" />CSS</li>
                </ul>
              </div>
              <div className="border-4 border-pink-500 rounded-md p-8">
                <h1 className="text-white text-3xl font-bold">Frameworks</h1>
                <ul className="list-disc list-inside text-white text-xl pl-5 flex flex-col space-y-4">
                  <li className="flex items-center text-2xl"><FaReact className="mr-4 h-8 w-8" />React</li>
                </ul>
              </div>
              <div className="border-4 border-pink-500 rounded-md p-8">
                <h1 className="text-white text-3xl font-bold">Tools</h1>
                <ul className="list-disc list-inside text-white text-xl pl-5 flex flex-col space-y-4">
                  <li className="flex items-center text-2xl"><TbBrandVscode className="mr-4 h-8 w-8" />Vscode</li>
                  <li className="flex items-center text-2xl"><FiFigma className="mr-4 h-8 w-8" />Figma</li>
                  <li className="flex items-center text-2xl"><FaTrello className="mr-4 h-8 w-8" />Trello</li>
                  <li className="flex items-center text-2xl"><FaGithub className="mr-4 h-8 w-8" />Github</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
