import { Grid, Card } from "@nextui-org/react";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";



const Projects = () => {
    // Utilisation de useViewportScroll et useTransform pour créer l'effet d'échelle basé sur le défilement
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.2]);


    return (
        <>
 <div className="hidden md:block absolute left-0 border border-purple-500 half-border rounded p-12 ">
</div>
<div className="hidden md:block absolute right-0 border border-purple-500 half-border rounded p-12 ">
</div>
            <div className="section-container">
                <div id="projects" className="pl-4 md:pl-16 lg:pl-32 xl:pl-64 items-center mb-20">
                    <h1 className="relative right-8 md:right-16 lg:right-24 xl:right-32 text-white text-4xl font-bold mb-4 md:mb-0 md:mr-4 title">
                        <span className="text-pink-500">#</span>Projets
                        <span className="line" style={{ position: 'absolute', left: '180px', bottom: '20px', height: '1px', width: '60%', backgroundColor: '#D946EF' }}></span>
                    </h1>
                </div>

                <div
                    className="relative flex flex-col items-center justify-center p-5 border-0 md:border-0 rounded-xl shadow-lg space-y-4"
                    style={{ width: '100%', height: '100vh' }}
                >
                    <div className="hidden md:block absolute w-full h-full">
                        <Image
                            src="/assets/background.svg"
                            alt='git'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <Grid.Container justify="center" alignItems="center" gap={2} className="projects" id="projects">
                        <Grid.Container justify="center" alignItems="center" gap={2} className="projects__topRow">
                            <Tilt>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" className="projects__left">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        style={{ scale }}
                                    >
                                        <Link href="https://lequaiantique.000webhostapp.com/" target="_blank">
                                        <Card style={{ width: "300px", height: "200px" }} className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/Le_Quai_Antique" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-white text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">Restaurant &quot;Le Quai Antique&quot;</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/html.png" width={24} height={24} alt="html" className="h-6 ml-2" />
                                                    <Image src="/media/tech/css.png" width={24} height={24} alt="css" className="h-6 ml-2" />
                                                    <Image src="/media/tech/javascript.png" width={24} height={24} alt="js" className="h-6 ml-2" />
                                                    <Image src="/media/tech/php.png" width={24} height={24} alt="php" className="h-6 ml-2" />
                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/antiques.png" alt='git' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>



                                    </motion.div>
                                </Grid>
                            </Tilt>

                            <Tilt>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" className="projects__left">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        style={{ scale }}
                                    >
                                        <Link href="https://taupe-hummingbird-5f0d47.netlify.app/" target="_blank">
                                        <Card style={{ width: "300px", height: "300px" }} className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/KOLI-FLUX" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-white text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">KOLIFLUX</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/reactjs.png" width={24} height={24} alt="html" className="h-6 ml-2" />
                                                    <Image src="/media/tech/typescript.png" width={24} height={24} alt="css" className="h-6 ml-2" />
                                                    <Image src="/media/tech/css.png" width={24} height={24} alt="js" className="h-6 ml-2" />
                                                    <Image src="/media/tech/nodejs.png" width={24} height={24} alt="php" className="h-6 ml-2" />
                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/koli.png" alt='git' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>



                                    </motion.div>
                                </Grid>
                            </Tilt>

                            <Tilt>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" className="projects__left">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        style={{ scale }}
                                    >
                                        <Link href="https://celadon-eclair-1703ea.netlify.app/" target="_blank">
                                        <Card style={{ width: "300px", height: "200px" }} className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/CharlesCantin" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-white text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">Charles Cantin</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/vercel.png" width={24} height={24} alt="html" className="h-6 ml-2" />
                                                    <Image src="/media/tech/tailwind.png" width={24} height={24} alt="css" className="h-6 ml-2" />

                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/photo.png" alt='git' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>

                                    </motion.div>
                                </Grid>
                            </Tilt>
                        </Grid.Container>

                        <Tilt>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" className="projects__left">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        style={{ scale }}
                                    >
                                        <Link href="https://tangerine-brioche-38768e.netlify.app/" target="_blank">
                                        <Card style={{ width: "300px", height: "300px" }} className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/TodoAI" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-white text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">KanaBan AI</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/vite.png" width={24} height={24} alt="html" className="h-6 ml-2" />
                                                    <Image src="/media/tech/typescript.png" width={24} height={24} alt="css" className="h-6 ml-2" />
                                                    <Image src="/media/tech/tailwind.png" width={24} height={24} alt="js" className="h-6 ml-2" />
                                                    
                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/kanban.png" alt='git' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>



                                    </motion.div>
                                </Grid>
                            </Tilt>

                        <Tilt>
                            <Grid xs={24} sm={12} md={8} lg={8} xl={8} justify="center" alignItems="center" className="projects__left">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    style={{ scale }}
                                >
                                    <Link href="https://maformejuridique.fr/" target="_blank">
                                    <Card css={{
                                        width: "600px",  // ajuster la largeur ici pour qu'elle corresponde aux autres cartes
                                        height: "300px",
                                        "@media screen and (max-width: 768px)": {
                                            width: "60vw",
                                            height: "20vh"  // ajuster la largeur ici pour qu'elle corresponde aux autres cartes en vue mobile
                                        },
                                    }} className="grid grid-rows-4 grid-flow-col gap-4">
                                        <div className="absolute top-0 right-0 p-2 z-10">

                                            <Link href="https://github.com/JOBOYA/CopieFreelance" target="_blank">
                                                <AiFillGithub className="text-gray-500 hover:text-black text-2xl" />
                                            </Link>

                                        </div>
                                        <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                            <span className="text-white text-sm">BFsimulateur</span>
                                            <div className="flex justify-center mt-1">
                                                <Image src="/media/tech/reactjs.png" width={24} height={24} alt="html" className="h-6 ml-2" />
                                                <Image src="/media/tech/typescript.png" width={24} height={24} alt="css" className="h-6 ml-2" />
                                                <Image src="/media/tech/css.png" width={24} height={24} alt="js" className="h-6 ml-2" />
                                                <Image src="/media/tech/tailwind.png" width={24} height={24} alt="php" className="h-6 ml-2" />
                                                <Image src="/media/tech/nodejs.png" width={24} height={24} alt="php" className="h-6 ml-2" />

                                            </div>
                                        </div>

                                        <div className="absolute w-full h-full">
                                            <Image src="/assets/simulateur.png" alt='git' layout="fill" objectFit="cover" className="z-0" />
                                        </div>

                                    </Card>
                                    </Link>
                                </motion.div>
                            </Grid>
                        </Tilt>
                       

                     
                       
                    </Grid.Container>
                </div>
            </div>
            <div className="hidden md:block absolute right-0 border border-purple-500 half-border rounded p-12 ">
</div>
<div className="hidden md:block absolute left-0 border border-purple-500 half-border rounded p-12 ">
</div>
        </>
    )
}

export default Projects