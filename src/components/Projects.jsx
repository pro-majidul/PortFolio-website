

import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaGithub } from 'react-icons/fa6';

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const projects = [
        {
            title: "Career Counseling",
            description: "The Career Counseling Project is a platform designed to assist individuals with career guidance, offering services like assessments and personalized recommendations.",
            technologies: "React, Firebase, Node.js, Express.js",
            github: "https://github.com/pro-majidul/B10-A9-Career-Counsiling-Project",
            liveLink: "https://career-counsiling-projects.firebaseapp.com/",
            image: "https://i.ibb.co/txBrdbM/Screenshot-2025-01-05-at-10-25-00-Home-Page.png",
            details: "The Career Counseling project allows users to receive personalized career recommendations based on assessments. It leverages React and Firebase for real-time data synchronization."
        },
        {
            title: "Coffee House",
            description: "This project showcases a web design for a coffee shop with features like menu displays, ordering systems, and contact information.",
            technologies: "React, Node.js, MongoDB, Express.js, Firebase, TailwindCSS, MumbaUI",
            github: "https://github.com/pro-majidul/Coffee-House-Projects",
            liveLink: "https://coffee-house-projects.surge.sh/",
            image: "https://i.ibb.co/b7MxJ65/Screenshot-2025-01-05-at-10-25-07-Coffee-House-Projects.png",
            details: "The Coffee House project provides a simple yet elegant website for showcasing a coffee shop menu, facilitating easy ordering and customer engagement."
        },
        {
            title: "A Sports Equipment Store",
            description: "EquiSports is a responsive and feature-rich sports accessories e-commerce platform designed to enhance the shopping experience for sports enthusiasts. Users can explore, purchase, and review sports equipment while enjoying seamless navigation, a clean UI, and interactive features",
            technologies: "React.js, Tailwind CSS, React Router Dom , React Awesome Reveal, React Tooltip, Node.js , Express.js , MongoDB, Firebase",
            github: "https://github.com/pro-majidul/Sports-Elements-Client-Side",
            liveLink: "https://equisports-client-side.web.app/",
            image: "https://i.ibb.co.com/nQXbwdx/Screenshot-2025-01-07-184107.png",
            details: "EquiSports is a modern, responsive e-commerce website designed for sports enthusiasts to explore, purchase, and review sports equipment. The platform includes user authentication via Firebase, secure private routes, and personalized user features like adding, updating, and managing products. Key pages include a dynamic homepage with sliders and featured products, an All Sports Equipment page with sorting functionality, and detailed product views. Additional features include a dark/light mode toggle, custom alerts, and advanced design elements using Lottie React and React Awesome Reveal Technologies used include React.js, Tailwind CSS, DaisyUI, Firebase Authentication, Node.js, Express.js, and MongoDB. The client-side is hosted on Netlify, and the server-side is deployed on Vercel. The website is fully responsive and incorporates best practices like environment variable security, meaningful commits, and smooth navigation without reload issues."
        }
    ];

    const openModal = (project) => {
        setCurrentProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProject(null);
    };

    return (
        <section id="projects" className="px-3 md:px-10">
            <h2 className="text-2xl text-center underline underline-offset-8 decoration-orange-400 md:my-10 md:pb-10 md:text-3xl lg:text-4xl font-bold text-blue-800 mb-10">Projects</h2>

            <div>
                <section>
                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                        {projects.map((project, index) => {
                            const direction = index % 2 === 0 ? "left" : "right";

                            return (
                                <Fade key={index} direction={direction} triggerOnce>
                                    <div className="block bg-gradient-to-r from-blue-500 to-purple-500 p-4 max-w-sm gap-3 overflow-hidden mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                                        <img src={project.image} alt={project.title} className="object-cover w-full  rounded h-full lg:col-span-7 overflow-auto hover:scale-105 transition-all" />
                                        <div className="md:p-6 space-y-2 lg:col-span-5">
                                            <h3 className="text-2xl text-[#e1e0ff] font-semibold sm:text-4xl group-hover:underline group-focus:underline">{project.title}</h3>
                                            <p className='text-lg text-[#e1e0ff]'>{project.description}</p>

                                            <div className="flex flex-col gap-2">
                                                <span className="font-bold text-[#e1e0ff]">Main Technologies:</span>
                                                <p className='text-[#e1e0ff]'>{project.technologies}</p>
                                            </div>

                                            <div className="w-full flex items-center gap-5">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="border p-2 rounded-full bg-gradient-to-r hover:from-purple-600 hover:to-blue-500">
                                                    <FaGithub size={24} />
                                                </a>
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="border px-4 py-2 rounded-full bg-gradient-to-r hover:from-purple-600 hover:to-blue-500">Live Link</a>
                                            </div>

                                            {/* View More / Modal Trigger */}
                                            <button onClick={() => openModal(project)} className="mt-3 text-white bg-purple-700 px-4 py-2 rounded-full hover:bg-purple-800 transition">
                                                View More
                                            </button>
                                        </div>
                                    </div>
                                </Fade>
                            )
                        })}
                    </div>
                </section>
            </div>

            {/* Modal */}
            {isModalOpen && currentProject && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 w-11/12 sm:w-1/2 lg:w-1/2">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-xl text-gray-500">
                            &times;
                        </button>
                        <h3 className="text-2xl font-semibold mb-4">{currentProject.title}</h3>
                        <p className='text-xl my-2'><strong className='text-2xl'>Description:</strong> {currentProject.description}</p>
                        <p className='text-xl'><strong className='text-2xl'>Technologies:</strong> {currentProject.technologies}</p>
                        <p className='text-xl my-2'><strong className='text-2xl'>Project Details:</strong> {currentProject.details}</p>
                        <p className='text-xl my-2'><strong className='text-2xl'>Challenges Faced:</strong> Some of the challenges included handling complex state in React and integrating real-time data using Firebase. Future improvements include adding a chat feature for users and refining the user interface.</p>
                        <div className="mt-4">
                            <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="border p-2 rounded-full bg-gradient-to-r hover:from-purple-600 hover:to-blue-500">
                                GitHub Link
                            </a>
                            <a href={currentProject.liveLink} target="_blank" rel="noopener noreferrer" className="ml-4 border px-4 py-2 rounded-full bg-gradient-to-r hover:from-purple-600 hover:to-blue-500">
                                Live Link
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
