import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'; // Import FontAwesome icons
import { SiTypescript } from 'react-icons/si';
import {TbBrandVscode} from 'react-icons/tb';
import {FiFigma} from 'react-icons/fi';
//TODO add responsive card and disposition of the skills

export default function Skills() {
  return (
    <>
      <h1 id="skills" className="relative left-20 text-white text-4xl font-bold mb-4 md:mb-0 md:mr-4">
        <span className="text-pink-500">#</span>skills
        <span style={{ position: 'absolute', left: '200px', bottom: '20px', height: '1px', width: '33.33%', backgroundColor: '#D946EF' }}></span>
      </h1>
      <div className="flex flex-row justify-center items-center">
        <div className="w-1/2 flex justify-center">
          <Image src="/assets/skills.png" alt="skills" width={500} height={500} />
        </div>
        <div className="flex flex-col space-x-16 justify-center items-center"> {/* Increased spacing from 8 to 16 */}
          <div className="border-2 border-pink-500 rounded-md p-4">
            <h1 className="text-white text-2xl font-bold">Languages</h1>
            <ul className="list-disc list-inside text-white text-lg pl-5">
              <li className="flex items-center"><FaJs className="mr-2" />JavaScript</li>
              <li className="flex items-center"><SiTypescript className="mr-2" />TypeScript</li>
              <li className="flex items-center"><FaHtml5 className="mr-2" />HTML</li>
              <li className="flex items-center"><FaCss3Alt className="mr-2" />CSS</li>
            </ul>
          </div>
          <div className="mb-10 mt-10 border-2 border-pink-500 rounded-md p-4">
            <h1 className="text-white text-2xl font-bold">Frameworks</h1>
            <ul className="list-disc list-inside text-white text-lg pl-5">
              <li className="flex items-center"><FaReact className="mr-2" />React</li>
             
            </ul>
          </div>
          <div className="mb-10 mt-10 border-2 border-pink-500 rounded-md p-4">
            <h1 className="text-white text-2xl font-bold">Tools</h1>
            <ul className="list-disc list-inside text-white text-lg pl-5">
              <li className="flex items-center"><TbBrandVscode className="mr-2" />Vscode</li>
              <li className="flex items-center"><FiFigma className="mr-2" />Figma</li>
             
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
