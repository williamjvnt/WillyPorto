import React, { useRef } from 'react';
import Navbar from '../components/navbar';
import AbstractShapes from '../components/shape';
import Marq from '../components/marquee';
import Card from '../components/card';
import forensik from '../assets/forensik.jpg';
import mySelf from '../assets/IMG_8424.jpeg';
import photo_2 from '../assets/IMG_8936.jpeg';
import pelem from '../assets/pelem.jpg';
import bakery from '../assets/bakery.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faBootstrap, faCss3, faLaravel, faJs, faReact, faPython, faPhp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";

const icons = [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'CSS3', icon: faCss3 },
    { name: 'Laravel', icon: faLaravel },
];

const icons2 = [
    { name: 'JavaScript', icon: faJs },
    { name: 'React', icon: faReact },
    { name: 'Python', icon: faPython },
    { name: 'PHP', icon: faPhp }
];

const icons3 = [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'CSS3', icon: faCss3 },
    { name: 'Laravel', icon: faLaravel },
    { name: 'JavaScript', icon: faJs },
    { name: 'React', icon: faReact },
    { name: 'Python', icon: faPython },
    { name: 'PHP', icon: faPhp }
];

const LandingPage = () => {
    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const skillsMobileRef = useRef(null);
    const projectsRef = useRef(null);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const refAbout = useRef(null);
    const isInAbout = useInView(refAbout, { once: true });

    const refAboutMobile = useRef(null);
    const isInAboutMobile = useInView(refAboutMobile, { once: true });
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='relative w-full h-full bg-third'>
            <Navbar scrollToSection={{
                intro: () => scrollToSection(introRef),
                about: () => scrollToSection(aboutRef),
                skills: () => scrollToSection(skillsRef),
                skillsMobile: () => scrollToSection(skillsMobileRef),
                projects: () => scrollToSection(projectsRef),
            }} />
            
            <div ref={introRef} className='w-full min-h-min flex flex-col items-center md:flex-row'>
                <AbstractShapes src={
                    <svg 
                        className=' md:h-[30rem] md:w-[30rem] xl:h-[60rem] xl:w-[60rem] xl:ml-42'
                        width={"w-min-fit"} height={414} 
                        viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="blobclip">
                                <path fill="#57B8DD" d="M38.5,-39.4C49.2,-27.8,56.7,-13.9,58.2,1.5C59.6,16.8,55,33.6,44.3,45.9C33.6,58.2,16.8,66,-2.4,68.5C-21.7,70.9,-43.4,68,-53,55.7C-62.6,43.4,-60,21.7,-57.8,2.2C-55.6,-17.2,-53.6,-34.5,-44.1,-46.1C-34.5,-57.7,-17.2,-63.6,-1.7,-62C13.9,-60.3,27.8,-51,38.5,-39.4Z" transform="translate(100 100)" />
                            </clipPath>
                        </defs>
                        <motion.image
                            
                            href={mySelf}
                            x="30" 
                            y="5"
                            width="180" 
                            height="180"
                            clipPath="url(#blobclip)"
                            preserveAspectRatio="xMidYMid slice"
                            
                        />
                    </svg>
                }/>
                <div className='flex flex-col items-center text-center align-middle relative md:left-[-50px] md:bottom-[-65px] xl:left-[0px]'>
                    <motion.h1 ref={ref} className='text-3xl text-fourth font-bold relative bottom-[3rem] xl:text-6xl' 
                        initial={{ opacity: -10, y: -50 }} 
                        animate={{ opacity:isInView ? 1 : -10 ,y: isInView ? 0 : -50, }} 
                        transition={{ ease: "easeOut", duration: 0.2, }} >
                            Hi, i am <span className='text-primary'>William</span>
                        </motion.h1>
                    <motion.h1 ref={ref} className='text-3xl text-fourth font-bold relative bottom-[3rem] xl:text-6xl'initial={{ opacity: -10, y: -50 }} animate={{ opacity:isInView ? 1 : -10 ,y: isInView ? 0 : -50,}} transition={{ ease: "easeOut", duration: 0.2,  }}>Cyber Security Enthusiast</motion.h1>
                    <motion.div className='col-span-3 relative bottom-[2rem] ' initial={{ opacity: -10, y: 100 }} animate={{opacity:isInView ? 1 : -10 ,y: isInView ? 0 : 100,}} transition={{ ease: "easeOut", duration: 0.5 }}>
                        <a href="https://www.linkedin.com/in/william-juvent-617509231/" className='text-4xl mx-4 xl:text-5xl' ><FontAwesomeIcon className='hover:text-fifth' icon={faLinkedin} /></a>
                        <a href="https://github.com/williamjvnt" className='text-4xl mx-4 xl:text-5xl'><FontAwesomeIcon className='hover:text-fifth' icon={faGithub}/></a>
                        <a href='https://www.instagram.com/williamjvnt/' className='text-4xl mx-4 xl:text-5xl'><FontAwesomeIcon className='hover:text-fifth' icon={faInstagram} /></a>
                    </motion.div>
                </div> 
            </div>

            <div ref={aboutRef} className='w-full min-h-fit flex flex-col items-center text-center px-5 md:flex-row'>
                <div  className='flex-col items-center hidden relative md:flex md:right-[-40px] md:bottom-[-15px]'>
                    <motion.h1 ref={refAbout} initial={{ opacity: 0, x: -100 }} animate={{opacity: isInAbout ? 1 : 0 ,x: isInAbout ? 0:-100,}} transition={{ ease: "easeOut", duration: 0.2 }} className='text-2xl text-gray-800 font-bold xl:text-3xl'>Hi, my name is William Juvent</motion.h1>
                    <motion.i ref={refAbout} initial={{ opacity: 0, x: -100 }} animate={{opacity: isInAbout ? 1 : 0 ,x: isInAbout ? 0:-100,}} transition={{ ease: "easeOut", duration: 0.2, delay: 0.5 }} className='text-gray-600 font-semibold mt-4 xl:text-2xl'>
                       I really love drinking coffee and have a deep passion for technology. Currently, I am on a journey to learn about web and mobile development, but my biggest interest in technology is cybersecurity. I am dedicated to understanding the intricacies of protecting digital information and hope to contribute to the advancement of the technology world.
                    </motion.i>
                </div>
                <AbstractShapes src={
                    <svg 
                        
                        className=' md:h-[30rem] md:w-[30rem] md:ml-[-20px] xl:h-[60rem] xl:w-[60rem] xl:mr-[-20px]'
                        width={"w-min-fit"} height={414} 
                        viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="blobclip">
                                <path fill="#57B8DD" d="M38.5,-39.4C49.2,-27.8,56.7,-13.9,58.2,1.5C59.6,16.8,55,33.6,44.3,45.9C33.6,58.2,16.8,66,-2.4,68.5C-21.7,70.9,-43.4,68,-53,55.7C-62.6,43.4,-60,21.7,-57.8,2.2C-55.6,-17.2,-53.6,-34.5,-44.1,-46.1C-34.5,-57.7,-17.2,-63.6,-1.7,-62C13.9,-60.3,27.8,-51,38.5,-39.4Z" transform="translate(100 100)" />
                            </clipPath>
                        </defs>
                        <motion.image

                            href={photo_2}
                            x="2" 
                            y="-5"
                            width="180" 
                            height="180"
                            clipPath="url(#blobclip)"
                            preserveAspectRatio="xMidYMid slice"
                        />
                    </svg>
                }/>
                <motion.h1 
                ref={refAboutMobile} initial={{ opacity: 0, x: -100 }} animate={{opacity: isInAboutMobile ? 1 : 0 ,x: isInAboutMobile ? 0:-100,}} transition={{ ease: "easeOut", duration: 0.2}} className='text-2xl text-fourth font-bold relative bottom-[3rem] md:hidden'>Hi My Name is William Juvent</motion.h1>
                <br />
                <motion.p ref={refAboutMobile} initial={{ opacity: 0, x: -100 }} animate={{opacity: isInAboutMobile ? 1 : 0 ,x: isInAboutMobile ? 0:-100,}} transition={{ ease: "easeOut", duration: 0.2, delay: 0.5 }} className=' text-fourth font-semi-bold relative bottom-[4rem] md:hidden'>I really love drinking coffee and have a deep passion for technology. Currently, I am on a journey to learn about web and mobile development, but my biggest interest in technology is cybersecurity. I am dedicated to understanding the intricacies of protecting digital information and hope to contribute to the advancement of the technology world.</motion.p>
            </div>

            <div ref={skillsMobileRef} className='w-full min-h-fit flex flex-col items-center text-center px-5 xl:hidden'>
                <h1 className='text-2xl text-primary font-bold'>My Current Skill By Far</h1>
                <br />
                <Marq icons={icons} />
                <br />
                <Marq icons={icons2} src={'right'}/>
            </div>

            <div ref={skillsRef} className='w-full min-h-fit flex-col items-center text-center px-5 hidden xl:flex '>
                <h1 className='text-2xl text-primary font-bold'>My Current Skill By Far</h1>
                <br />
                <Marq icons={icons3} />
            </div>
            <br/>
            
            <div ref={projectsRef} className='w-full min-h-fit flex flex-col items-center text-center px-5 pt-10'>
                <h1 className='text-2xl text-fifth font-bold'>All My Project i've Done</h1>
                <br />
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    <Card title={"Website Padukuhan Pelem"} 
                        img={pelem} 
                        src={'https://github.com/padukuhanPelem/website_pelem.git'}
                        text="The static website I've made for my KKN project"
                        
                    />
                    <Card title={"Atma Kitchen"} 
                        img={bakery} 
                        src={'https://github.com/padukuhanPelem/website_pelem.git'}
                        text="The static website I've made for my college project"
                        
                    />
                    <Card title={"Wrote a Book(Assisting)"} 
                        img={forensik}
                        src={"https://github.com/williamjvnt/portofolio.git"}
                        text='The Book that I wrote as a Assistent Lecture.'
                        
                    />
                    <Card title={"Coming Soon"} 
                        img="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                        text='Coming Soon Coming Soon Coming Soon Coming Soon Coming Soon'
                        
                    />
                </div>
                <br />
            </div>
        </div>
    );
};

export default LandingPage;
