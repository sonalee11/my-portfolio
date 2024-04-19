// home responsive

import React from 'react';
import { motion } from 'framer-motion'; 
import './Home.css';
import Type from './Type';
import homeSvg from '../assets/home-main.svg';
import homeOne from '../assets/one.jpg'
import Particle from './Particle';

const Home_res = () => {
  return (
    <main>
      <motion.section 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
      >
        <div className='sm:flex sm:justify-center sm:flex-wrap sm:gap-[12%] sm:mr-[7%]'>
        {/* flex justify-center flex-wrap gap-[12%] mr-[7%] */}
          <Particle />
          <div className='text-[1.9rem] sm:text-[2.6rem] pl-[1.8rem] pt-[12%] mb-[5%]' style={{color:'wheat', fontWeight:'bolder',fontFamily:'revert-layer'}}>
            {/* paddingLeft:'1.8rem',paddingTop:'12%' */}
          
          {/* className='text-slate-200 text-[2.6rem] font-bold pl-[1.8rem] pt-[12%]' */}
          {/* className='text-slate-100 text-5xl pl-[2%] font-bold pt-[12%] antialiased' */}
            <motion.h1 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1 }} 
            >
              Hi There! <span className='animate__animated animate__flip'>👋🏻</span>
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1 }} 
            >
              I'M <span style={{color:'#E6E6E6',fontWeight:'bolder'}}>MOHTASHIM MAAZ</span>
            </motion.h1>
            <div style={{marginTop:'10%',color:'#E6E6E6'}}>
              <Type />
            </div>
          </div>
          <div>
            <img src={homeSvg} alt="image" className='h-[70vh] ml-[5%] sm:h-[75vh] sm:pt-[20%]'/>
            {/* style={{height:'75vh',paddingTop:'20%'}} */}
          </div>
        </div>
      </motion.section>
        
      <div className='flex mt-[5%] ml-[11%] gap-[10%] flex-wrap text-slate-50'>
        <div>
          <motion.img 
            initial={{ opacity: 0, y: -100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }} 
            src={homeOne}
            alt="Image"
            className='h-[55vh] ml-[5%] sm:h-96 rounded-xl'
          />
        </div>
      
        <div className='my-[2%] sm:my-[0]'>
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.5 }} 
          >
            <h1 className='text-amber-300 my-[3%] sm:my-0 sm:mb-[2%] text-[2.6rem] sm:text-[3.3rem] font-bold' style={{fontFamily:'revert'}}>About Me</h1>
            <p className='text-[wheat] font-bold text-[1.3rem] sm:text-[1.6rem] px-[1%] sm:px-0 leading-9 sm:leading-10 mb-[2%]' >
            {/* style={{color:'wheat', fontWeight:'bold',fontSize:'1.5em',lineHeight:'2.8rem',marginBottom:'2%'}} */}
              <h1 className='text-lime-200 text-[1.6rem] sm:text-[2rem] mb-[2.6%]' >Let Me Introduce Myself</h1>
              {/* style={{fontSize:'1.2em',marginBottom:'1.6%',marginTop:'1.6%'}} */}
              I'm a passionate Mern Stack web developer, <br />
              I have knowledge in HTML, CSS, JavaScript, Bootstrap, React JS <br />
              I am still learning the backend technologies, but i know frontend <br /> technologies.. 
              I have build several projects in MERN Stack & React JS.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Home_res;


// Techstack responsive

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { LiaCss3Alt } from "react-icons/lia";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";

function TechStack_res() {
  return (
    <>
      <section className="text-slate-50 flex flex-col items-center">
        <div>
          <h1 className="text-5xl text-center my-10">
            Professional <span className="text-amber-300">Skillset</span>
          </h1>
          <div className="flex flex-col gap-12 mt-14">
            <ul className="flex gap-[6rem] text-7xl">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <DiJavascript1 />
            
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <DiNodejs />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <DiGit />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <DiReact />
              </motion.li>
            </ul>
            <ul className="flex gap-[6rem] text-7xl">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <DiMongodb />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <DiPython />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <FaHtml5 />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <LiaCss3Alt />
              </motion.li>
            </ul>

            <ul className="flex gap-[6rem] text-7xl justify-center">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <FaBootstrap />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <SiTailwindcss />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <SiPandas />
              </motion.li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className="text-5xl text-center my-10">Tools</h1>

          <div className="flex flex-col gap-12 mt-10">
            <ul className="flex gap-[6rem] text-7xl">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <TbBrandVscode />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <SiPostman />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="border-2 border-amber-300 py-[1.6rem] px-[3.5rem] rounded-md hover:border-b-2 hover:border-purple-600"
              >
                <SiPycharm />
              </motion.li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default TechStack_res;







