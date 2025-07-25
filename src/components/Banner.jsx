import React, { useState } from 'react';
import bgimage from '../assets/hero-bg.jpg';
import bannerImage from '../assets/bannerBackgroundImage.gif';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import ClipPathImage from './ClipPathImage';
import { TextShimmerWave } from './ui/TextShimmerWave';
import { ButtonTextWave } from './ui/ButtonTextWave';
import { TextEffect } from './ui/TextEffect';
import { TextShimmer } from './ui/TextShimmer';
// import ShinyText from './ShinyText';



const Banner = () => {
    const [textcolor, setTextColor] = useState('white');

    return (

        <div id='home'
            style={{
                backgroundImage: `url(${bgimage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
            className='relative'
        >
            <div className="  mx-auto md:px-10 max-w-7xl">
                <div className="md:flex md:flex-row-reverse py-20 justify-between items-center space-y-5 ">
                    {/* Right Side Image */}
                    <Fade direction='right' triggerOnce>
                        <div className="flex-1 w-full relative place-items-center">
                            <div className="flex items-center justify-center">
                                <div className="relative w-72 h-72 md:w-96 md:h-96 p-3">
                                    {/* Outer Circle */}
                                    <div
                                        style={{
                                            backgroundImage: `url(${bannerImage})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                        }}
                                        className="absolute inset-0 rounded-full ">

                                    </div>
                                    <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                                        {/* Profile Image */}
                                        <ClipPathImage></ClipPathImage>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>


                    {/* Left Side Content */}
                    <Fade direction='left' triggerOnce>
                        <div className="flex-1 px-3 md:mt-10 md:pt-10">
                            <p className="font-railwayfont md:text-5xl text-2xl uppercase text-orange-300 font-bold">
                                hi! I'm
                            </p>
                            <p className="md:text-5xl md:py-3 text-2xl uppercase font-bold mt-1 font-Cinzel ">
                                <TextShimmerWave> Majidul Islam</TextShimmerWave>
                            </p>


                            <p className=' w-[300px] md:w-full'
                                style={{
                                    color: textcolor,
                                }}
                            ><span className=' md:text-3xl text-xl mr-4'>I'm a</span>
                                <TypeAnimation
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 font-Cinzel text-transparent bg-clip-text text-2xl md:text-4xl "
                                    sequence={[
                                        'Web Developer',
                                        1000,
                                        'Frontend Developer',
                                        2000,
                                        'MERN Stack Developer',
                                        () => console.log('Sequence completed'),
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                />
                            </p>
                            <p className='text-slate-200 text-lg md:py-2 py-1 font-railwayfont'> <TextEffect>I specialize in creating innovative web solutions with a focus on design, functionality, and user satisfaction. Bringing ideas to life with clean code and creative designs.</TextEffect>  </p>
                            <div className='space-y-5 mt-4'>
                                <div className='flex items-center mb-6 justify-start gap-2'>
                                    <a href='mailto:majidul123tub@gmail.com' target="_blank"
                                        rel="noopener noreferrer" className='border p-2 rounded-full bg-black hover:bg-[#C1351D]'>  <SiGmail className='md:text-2xl ' /></a>
                                    <a href='https://www.facebook.com/majidul1230' target="_blank"
                                        rel="noopener noreferrer" className='border p-2 rounded-full bg-black hover:bg-blue-500'>  <FaFacebookF className='md:text-2xl ' /></a>
                                    <a href='https://github.com/pro-majidul' target="_blank"
                                        rel="noopener noreferrer" className='border p-2 rounded-full bg-black bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'>  <FaGithub className='md:text-2xl' /></a>
                                    <a href='https://www.linkedin.com/in/majidul-islam7' target="_blank"
                                        rel="noopener noreferrer" className='border p-2 rounded-full bg-black hover:bg-[#004182]'>  <FaLinkedinIn className='md:text-2xl' /></a>
                                </div>
                                <a download
                                    href='https://drive.google.com/uc?export=download&id=1xULRceWwX4n5yOTUT-zLvqYJx4hgQeH3' className="md:px-6 px-3 py-3  font-semibold font-railwayfont rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:text-orange-400 cursor-pointer">
                                    <span className='text-xl'> 📥</span> 
                                    <TextShimmer>DownLoad Resume</TextShimmer>
                                     {/* <ButtonTextWave>DownLoad Resume</ButtonTextWave>  */}
                                     
                                     </a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>

    );
};

export default Banner;
