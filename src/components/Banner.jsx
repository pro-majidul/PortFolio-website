import React, { useState } from 'react';
import bgimage from '../assets/hero-bg.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
    const [textcolor, setTextColor] = useState('white');

    return (
        <Fade direction='left' triggerOnce>
            <div id='home'
                style={{
                    backgroundImage: `url(${bgimage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                className='relative'
            >
                <div className=" min-h-[calc(100vh-300px)] mx-auto md:px-10 max-w-7xl">
                    <div className="md:flex md:flex-row-reverse py-20 justify-between items-center space-y-5 ">
                        {/* Right Side Image */}

                        <div className="flex-1 w-full relative place-items-center">
                            <div className="flex items-center justify-center">
                                <div className="relative w-56 h-56 md:w-96 md:h-96">
                                    {/* Outer Circle */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500  via-green-400 via-yellow-400 via-orange-500 to-pink-500  p-2 animate-spin-slow">
                                    </div>
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                        {/* Profile Image */}
                                        <div className="relative w-52 h-52 md:w-80 md:h-80 bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden rounded-full ">
                                            <img
                                                src="https://i.ibb.co/vDG0t8q/bg-image.png"
                                                alt="Profile"
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Left Side Content */}
                        <div className="flex-1 sapce-y-5 px-3 md:mt-10 md:pt-10">
                            <p className="font-railwayfont md:text-4xl text-2xl uppercase text-orange-300 font-bold">
                                hi! I'm
                            </p>
                            <p className="md:text-4xl text-2xl uppercase font-bold mt-1 bg-gradient-to-r  from-blue-500 to-purple-600 font-Cinzel text-transparent bg-clip-text">
                                Majidul Islam
                            </p>
                            <p className='h-16 w-[300px] md:w-full'
                                style={{
                                    color: textcolor,
                                }}
                            ><span className=' md:text-4xl text-2xl mr-4'>I'm a</span>
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
                            <p className='text-slate-200 text-xl'>   I specialize in creating innovative web solutions with a focus on design, functionality, and user satisfaction. Bringing ideas to life with clean code and creative designs.</p>
                            <div className='space-y-5 mt-4'>
                                <div className='flex items-center mb-6 justify-start gap-5'>
                                    <a href='https://www.facebook.com/majidul1230' target="_blank"
                                        rel="noopener noreferrer" className='border p-2 rounded-full bg-black bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'>  <FaFacebookF size={24} /></a>
                                    <a href='https://github.com/pro-majidul' target="_blank"
                                        rel="noopener noreferrer" className='border p-2 rounded-full bg-black bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'>  <FaGithub size={24} /></a>
                                </div>
                                <a download
                                    href='https://drive.google.com/uc?export=download&id=1xULRceWwX4n5yOTUT-zLvqYJx4hgQeH3' className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:text-orange-400 cursor-pointer">DownLoad Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Banner;
