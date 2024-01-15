import { Grid, Card } from "@nextui-org/react";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";



const Projects = () => {
    // Utilisation de useViewportScroll et useTransform pour créer l'effet d'échelle basé sur le défilement
    const { scrollYProgress } = useViewportScroll();
    


    return (
        <>
      

        <div id="projects" className="mt-12 ">
 <div className="hidden md:block absolute left-0 border border-purple-500 half-border rounded p-12 ">
</div>
<div className="hidden md:block absolute right-0 border border-purple-500 half-border rounded p-12 ">
</div>

            <div className="section-container">
            <div  className="pl-4 md:pl-16 lg:pl-32 xl:pl-64 items-center m-20">
                    <h1 className="relative right-8 md:right-16 lg:right-24 xl:right-32 text-white text-4xl font-bold mb-4 md:mb-0 md:mr-4 title">
                        <span className="text-pink-500">#</span>Projets
                        <span className="line" style={{ position: 'absolute', left: '180px', bottom: '20px', height: '1px', width: '60%', backgroundColor: '#D946EF' }}></span>
                    </h1>
                </div>
                <div
                    className="relative flex flex-col items-center justify-center p-5 border-0 md:border-0 rounded-xl shadow-lg space-y-4"
                   
                >
                    
                    <div className="hidden md:block absolute w-full h-full">
                        <Image
                            src="/assets/background.svg"
                            alt='git'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                   
                    <Grid.Container justify="center"  alignItems="center" gap={8}   id="projects">


                   
                  


                    <div>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center">
                                    <motion.div
                                      whileHover={{ rotate: -10 }}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                     
                                    >
                                        <Link href="https://maformejuridique.fr/" target="_blank">
                                        <Card style={{ width: "300px", height: "300px" }}  className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/CopieFreelance" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-black text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">Ma forme juridique</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/reactjs.png" width={24} height={24} alt="react" className="h-6 ml-2" />
                                                    <Image src="/media/tech/typescript.png" width={24} height={24} alt="ts" className="h-6 ml-2" />
                                                    <Image src="/media/tech/tailwind.png" width={24} height={24} alt="tailwind" className="h-6 ml-2" />
                                                    <Image src="/media/tech/api.png" width={24} height={24} alt="Api" className="h-6 ml-2" />
                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/simulateur.png" alt='simulateur' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>



                                    </motion.div>
                                </Grid>
                                
                            </div>
 

                            <div>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center">
                                    <motion.div
                                      whileHover={{ rotate: -10 }}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                     
                                    >
                                        <Link href="https://tracker-joboya.vercel.app/" target="_blank">
                                        <Card style={{ width: "300px", height: "300px" }}  className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/Tracker" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-black text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">V Expense Tracker</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/vuejs.png" width={24} height={24} alt="react" className="h-6 ml-2" />
                                                    <Image src="/media/tech/javascript.png" width={24} height={24} alt="ts" className="h-6 ml-2" />
                                                    <Image src="/media/tech/tailwind.png" width={24} height={24} alt="tailwind" className="h-6 ml-2" />
                                                    <Image src="/media/tech/supabase.png" width={24} height={24} alt="Api" className="h-6 ml-2" />
                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/screen.png" alt='simulateur' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>



                                    </motion.div>
                                </Grid>
                                
                            </div>

                            <div>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center">
                                    <motion.div
                                      whileHover={{ rotate: -10 }}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                     
                                    >
                                        <Link href="https://kaspa-watch.vercel.app/" target="_blank">
                                        <Card style={{ width: "300px", height: "300px" }}  className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/KaspaWatch" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-black text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">KaspaWatch</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/vercel.png" width={24} height={24} alt="react" className="h-6 ml-2" />
                                                    <Image src="/media/tech/typescript.png" width={24} height={24} alt="ts" className="h-6 ml-2" />
                                                    <Image src="/media/tech/tailwind.png" width={24} height={24} alt="tailwind" className="h-6 ml-2" />
                                                    
                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/kaspa.png" alt='simulateur' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>



                                    </motion.div>
                                </Grid>
                                
                            </div>

                           <div>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" >
                                    <motion.div
                                      whileHover={{ rotate: -10 }}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                     
                                    >
                                        <Link href="https://live-chat-bd882.web.app/" target="_blank">
                                        <Card style={{ width: "300px", height: "300px" }} className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/Live-Chat" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-black text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">Live Chat Room</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/vuejs.png" width={24} height={24} alt="vuejs" className="h-6 ml-2" />
                                                    <Image src="/media/tech/javascript.png" width={24} height={24} alt="js" className="h-6 ml-2" />
                                                    <Image src="/media/tech/css.png" width={24} height={24} alt="js" className="h-6 ml-2" />
                                                    <Image src="/media/tech/firebase.png" width={24} height={24} alt="firebase" className="h-6 ml-2" />
                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/live-chat.jpeg" alt='git' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>



                                    </motion.div>
                                </Grid>
                            </div>

                            <div>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" >
                                    <motion.div
                                      whileHover={{ rotate: -10 }}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                     
                                    >
                                        <Link href="https://jojo-crud-466c0.web.app/" target="_blank">
                                        <Card style={{ width: "300px", height: "300px" }} className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/VueTunePix" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-black text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">Jojo Tune</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/vuejs.png" width={24} height={24} alt="vuejs" className="h-6 ml-2" />
                                                    <Image src="/media/tech/javascript.png" width={24} height={24} alt="js" className="h-6 ml-2" />
                                                    <Image src="/media/tech/css.png" width={24} height={24} alt="css" className="h-6 ml-2" />
                                                    <Image src="/media/tech/firebase.png" width={24} height={24} alt="firebase" className="h-6 ml-2" />
                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/JOJO-tune.jpeg" alt='git' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>



                                    </motion.div>
                                </Grid>
                            </div>


                            <div>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" >
                                    <motion.div
                                      whileHover={{ rotate: -10 }}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                     
                                    >
                                        <Link href="https://sprightly-torte-fca65a.netlify.app/" target="_blank">
                                        <Card style={{ width: "300px", height: "300px" }} className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/Pinia" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-black text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">Pinia Tasks</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/vuejs.png" width={24} height={24} alt="vuejs" className="h-6 ml-2" />
                                                    <Image src="/media/tech/javascript.png" width={24} height={24} alt="js" className="h-6 ml-2" />
                                                    <Image src="/media/tech/css.png" width={24} height={24} alt="css" className="h-6 ml-2" />
                                                    <Image src="/media/tech/nodejs.png" width={24} height={24} alt="nodejs" className="h-6 ml-2" />
                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/PiniaTasks.jpeg" alt='git' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>



                                    </motion.div>
                                </Grid>
                            </div>


                            <div>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" >
                                    <motion.div
                                      whileHover={{ rotate: -10 }}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                     
                                    >
                                        <Link href="https://taupe-hummingbird-5f0d47.netlify.app/" target="_blank">
                                        <Card style={{ width: "300px", height: "300px" }} className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/KOLI-FLUX" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-white text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-white bg-opacity-40 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">KOLIFLUX</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/reactjs.png" width={24} height={24} alt="reactjs" className="h-6 ml-2" />
                                                    <Image src="/media/tech/typescript.png" width={24} height={24} alt="ts" className="h-6 ml-2" />
                                                    <Image src="/media/tech/css.png" width={24} height={24} alt="css" className="h-6 ml-2" />
                                                    <Image src="/media/tech/nodejs.png" width={24} height={24} alt="nodejs" className="h-6 ml-2" />
                                                    <Image src="/media/tech/api.png" width={24} height={24} alt="api" className="h-6 ml-2" />
 
                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/koli.png" alt='git' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>



                                    </motion.div>
                                </Grid>
                            </div>

                            <div>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" >
                                    <motion.div
                                      whileHover={{ rotate: -10 }}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                     
                                    >
                                        <Link href="https://laboheme-valence.fr/" target="_blank">
                                        <Card style={{ width: "300px", height: "300px" }} className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/Le_Quai_Antique" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-white text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-white bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">KOLIFLUX</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/html.png" width={24} height={24} alt="html" className="h-6 ml-2" />
                                                    <Image src="/media/tech/css.png" width={24} height={24} alt="css" className="h-6 ml-2" />
                                                    <Image src="/media/tech/javascript.png" width={24} height={24} alt="js" className="h-6 ml-2" />
                                                    <Image src="/media/tech/nodejs.png" width={24} height={24} alt="nodejs" className="h-6 ml-2" />
                                                    <Image src="/media/tech/notion (2).png" width={24} height={24} alt="notion" className="h-6 ml-2" />
                                                    <Image src="/media/tech/api.png" width={24} height={24} alt="api" className="h-6 ml-2" />
                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/laboheme-restaurant.jpeg" alt='git' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>



                                    </motion.div>
                                </Grid>
                            </div>

                            <div>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" >
                                    <motion.div
                                      whileHover={{ rotate: -10 }}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                     
                                    >
                                        <Link href="https://main--clever-tanuki-6e7025.netlify.app/" target="_blank">
                                        <Card style={{ width: "300px", height: "300px" }} className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/CharlesCantin" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-white text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">KOLIFLUX</span>
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
                            </div>


                            <div>
                                <Grid xs={24} md={8} lg={8} justify="center" alignItems="center" >
                                    <motion.div
                                      whileHover={{ rotate: -10 }}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                     
                                    >
                                        <Link href="https://tangerine-brioche-38768e.netlify.app/" target="_blank">
                                        <Card style={{ width: "300px", height: "300px" }} className="grid grid-rows-4 grid-flow-col gap-4 relative">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <Link href="https://github.com/JOBOYA/TodoAI" target="_blank">
                                                    <AiFillGithub className="text-gray-500 hover:text-black text-2xl" />
                                                </Link>
                                            </div>
                                            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-10">
                                                <span className="text-white text-sm">KOLIFLUX</span>
                                                <div className="flex justify-center mt-1">
                                                    <Image src="/media/tech/vite.png" width={24} height={24} alt="vite" className="h-6 ml-2" />
                                                    <Image src="/media/tech/typescript.png" width={24} height={24} alt="ts" className="h-6 ml-2" />
                                                    <Image src="/media/tech/tailwind.png" width={24} height={24} alt="tailwind" className="h-6 ml-2" />
                                                    <Image src="/media/tech/gpt.png" width={24} height={24} alt="openai" className="h-6 ml-2" />
                                                </div>
                                            </div>

                                            <div className="absolute w-full h-full">
                                                <Image src="/assets/kanban.png" alt='git' layout="fill" objectFit="cover" className="z-0" />
                                            </div>
                                        </Card>
                                        </Link>



                                    </motion.div>
                                </Grid>
                            </div>
 </Grid.Container>
                     

                     
                       
                   
                </div>
               
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