
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { TextShimmerWave } from './ui/TextShimmerWave';
import { ButtonTextWave } from './ui/ButtonTextWave';
import { TextShimmer } from './ui/TextShimmer';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://portfolio-server-sage-rho.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    console.log(projects)
    return (
        <section id="projects" className="px-3 md:px-5">
            <h2 className="text-2xl text-center  md:my-10 md:pb-10 md:text-4xl font-bold  mb-10">  <TextShimmerWave>

                My Latest Projects</TextShimmerWave></h2>

            <div>
                <section>
                    <div className="container max-w-7xl md:flex gap-4 space-y-4 md:space-y-0 mx-auto">
                        {projects.map((project, index) => {
                            const direction = index % 2 === 0 ? "left" : "right";

                            return (
                                <Fade key={index} direction={direction} triggerOnce>
                                    <div className="max-w-lg md:p-3 p-2 shadow-md bg-gradient-to-r hover:scale-105 transition-all from-blue-500 to-purple-500 rounded-xl">
                                        <div className="space-y-2">
                                            <div className="space-y-2">
                                                <img src={project.image} alt={project.title} className="block object-cover object-center w-full rounded-md h-56 dark:bg-gray-500" />
                                            </div>
                                            <div className='space-x-1 space-y-2'>
                                                {project.technology.map((item, ins) => {
                                                    return <span className='inline-block text-purple-950 text-xs px-2 shadow-md  border rounded-full'>{item}</span>
                                                })}

                                            </div>
                                            <div className="space-y-2">

                                                <h3 className="text-xl font-semibold text-black">

                                                    <TextShimmer>
                                                        {project.project_title}
                                                    </TextShimmer>
                                                </h3>

                                                <p className="leading-snug text-black text-md pb-2">{project?.description?.slice(0, 280)}...</p>
                                                <Link to={`/projects/${project._id}`} className='flex items-center gap-1 md:w-5/12  w-6/12 bg-green-950 px-4 py-1 rounded-xl hover:bg-green-800 '><span className='text-white'><ButtonTextWave>View Details</ButtonTextWave> </span> <FaArrowRightLong className='text-yellow-400' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            )
                        })}
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Projects;

