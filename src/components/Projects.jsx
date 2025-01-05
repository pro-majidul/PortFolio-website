

import React, { useState } from 'react';
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
            technologies: "React, Node.js, MongoDB",
            github: "https://github.com/pro-majidul/Coffee-House-Projects",
            liveLink: "https://coffee-house-projects.surge.sh/",
            image: "https://i.ibb.co/b7MxJ65/Screenshot-2025-01-05-at-10-25-07-Coffee-House-Projects.png",
            details: "The Coffee House project provides a simple yet elegant website for showcasing a coffee shop menu, facilitating easy ordering and customer engagement."
        },
        {
            title: "Renterio Booked",
            description: "Renterio Booked is a platform for browsing and booking houses or apartments for rent or purchase with advanced filtering options.",
            technologies:  "HTML, CSS, JavaScript",
            github: "https://github.com/pro-majidul/My-third-challenges-website-",
            liveLink: "https://pro-majidul.github.io/My-third-challenges-website-/",
            image: "https://i.ibb.co/hHDKTdn/Screenshot-2025-01-05-at-10-25-33-My-Third-Challenge-Website.png",
            details: "The Renterio Booked project allows users to search and book properties with an interactive interface, incorporating advanced search filters and a user-friendly booking system."
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
                        {projects.map((project, index) => (
                            <div key={index} className="block bg-gradient-to-r from-blue-500 to-purple-500 p-4 max-w-sm gap-3 overflow-hidden mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                                <img src={project.image} alt={project.title} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 overflow-auto hover:scale-105 transition-all" />
                                <div className="p-6 space-y-2 lg:col-span-5">
                                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{project.title}</h3>
                                    <p>{project.description}</p>

                                    <div className="flex flex-col gap-2">
                                        <span className="font-bold">Main Technologies:</span>
                                        <p>{project.technologies}</p>
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
                        ))}
                    </div>
                </section>
            </div>

            {/* Modal */}
            {isModalOpen && currentProject && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 w-11/12 sm:w-1/2 lg:w-1/3">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-xl text-gray-500">
                            &times;
                        </button>
                        <h3 className="text-2xl font-semibold mb-4">{currentProject.title}</h3>
                        <p><strong>Description:</strong> {currentProject.description}</p>
                        <p><strong>Technologies:</strong> {currentProject.technologies}</p>
                        <p><strong>Project Details:</strong> {currentProject.details}</p>
                        <p><strong>Challenges Faced:</strong> Some of the challenges included handling complex state in React and integrating real-time data using Firebase. Future improvements include adding a chat feature for users and refining the user interface.</p>
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
