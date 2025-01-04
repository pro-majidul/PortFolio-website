import React, { useState } from 'react';
import bgimage from '../assets/hero-bg.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
            <div className=" min-h-[calc(100vh-300px)] mx-auto md:px-10 max-w-7xl">
                <div className="md:flex md:flex-row-reverse py-20 justify-between items-center space-y-5 ">
                    {/* Right Side Image */}
                    <div className="flex-1 ">

                        <img
                            src="https://i.ibb.co.com/Ct6rbQF/bg-image.png"
                            alt="Profile"
                            className="md:w-5/12 md:h-5/6 md:flex hidden absolute bottom-0 filter contrast-150 grayscale rounded-lg"
                        />
                    </div>

                    {/* Left Side Content */}
                    <div className="flex-1 sapce-y-5 px-3 md:mt-10 md:pt-10">
                        <p className="font-railwayfont text-xl text-orange-300">
                            hello, I'm
                        </p>
                        <p className="text-4xl my-1 font-Cinzel font-bold text-white">
                            Majidul Islam
                        </p>
                        <p className='h-24 w-[300px] md:w-full'
                            style={{
                                color: textcolor,
                            }}
                        ><span className=' text-4xl mr-4'>I'm a</span>
                            <TypeAnimation
                                className='bg-gradient-to-r  from-blue-500 to-purple-600 font-Cinzel text-transparent bg-clip-text'
                                sequence={[
                                    'Web Developer',
                                    1000,

                                    'UI/UX Designer',
                                    2000,
                                    'Frontend Developer',
                                    () => console.log('Sequence completed'),
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{
                                    fontSize: '2em',
                                    display: 'inline-block'
                                }}
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
                            <a download href='' className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:text-orange-400 cursor-pointer">DownLoad Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
