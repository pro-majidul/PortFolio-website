import React from 'react';
import { FaGithub } from 'react-icons/fa6';

const Projects = () => {
    return (
        <section id='projects' className='px-3 md:px-10'>
            <h2 className="text-2xl text-center underline underline-offset-8 decoration-orange-400 md:my-10 md:pb-10 md:text-3xl lg:text-4xl font-bold text-blue-800 mb-10">Projects</h2>

            <div>
                <section >
                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                        <div className="block bg-gradient-to-r from-blue-500 to-purple-500 p-4 max-w-sm gap-3 overflow-hidden mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                            <img src="https://i.ibb.co.com/txBrdbM/Screenshot-2025-01-05-at-10-25-00-Home-Page.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7  overflow-auto hover:scale-105 transition-all" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Career Counseling</h3>
                                <p>The Career Counseling Project is  a platform designed to assist individuals with career guidance. It include services like assessments, personalized career recommendations, and resources to help users choose a career path based on their skills, interests, and market trends. To understand the full details and functionality of the project, I recommend visiting the site directly.</p>
                                <div className='w-full flex items-center gap-5'>
                                    <a href='https://github.com/pro-majidul/B10-A9-Career-Counsiling-Project' target="_blank"
                                        rel="noopener noreferrer" className='border p-2 rounded-full  bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'>  <FaGithub size={24} /></a>
                                    <a href='https://career-counsiling-projects.firebaseapp.com/' target="_blank"
                                        rel="noopener noreferrer" className='border px-4 py-2 rounded-full  bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'>  Live Link</a>

                                </div>
                            </div>
                        </div>
                        <div className="block max-w-sm bg-gradient-to-r from-blue-500 to-purple-500 p-4 gap-3 overflow-hidden mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                            <img src="https://i.ibb.co.com/b7MxJ65/Screenshot-2025-01-05-at-10-25-07-Coffee-House-Projects.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7  overflow-auto hover:scale-105 transition-all" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Coffee House</h3>
                                <p> it is a project related to a coffee house or café. It showcasing a web design for a coffee shop, including features like menu displays, ordering systems, and contact information. For more detailed information, I recommend visiting the site directly.</p>

                                <div className='w-full flex items-center gap-5'>
                                    <a href='https://github.com/pro-majidul/Coffee-House-Projects' target="_blank"
                                        rel="noopener noreferrer" className='border p-2 rounded-full  bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'>  <FaGithub size={24} /></a>
                                    <a href='https://coffee-house-projects.surge.sh/' target="_blank"
                                        rel="noopener noreferrer" className='border px-4 py-2 rounded-full  bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'>  Live Link</a>

                                </div>
                            </div>
                        </div>
                        <div className="block max-w-sm bg-gradient-to-r from-blue-500 to-purple-500 p-4 gap-3 overflow-hidden mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                            <img src="https://i.ibb.co.com/hHDKTdn/Screenshot-2025-01-05-at-10-25-33-My-Third-Challenge-Website.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7  overflow-auto hover:scale-105 transition-all" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Renterio Booked</h3>
                                <p>"House Booked is a property booking platform that allows users to browse, search, and book houses or apartments for rent or purchase. It features a user-friendly interface with detailed property listings, filtering options, and a booking system. Users can view property details, check availability, and directly inquire or book through the platform."</p>

                                <div className='w-full flex items-center gap-5'>
                                    <a href='https://github.com/pro-majidul/My-third-challenges-website-' target="_blank"
                                        rel="noopener noreferrer" className='border p-2 rounded-full  bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'>  <FaGithub size={24} /></a>
                                    <a href='https://pro-majidul.github.io/My-third-challenges-website-/' target="_blank"
                                        rel="noopener noreferrer" className='border px-4 py-2 rounded-full  bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'>  Live Link</a>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>


        </section>
    );
};

export default Projects;