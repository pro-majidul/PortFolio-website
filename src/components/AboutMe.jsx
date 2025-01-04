import React from 'react';


const AboutMe = () => {
    return (
        <div id='about' className='px-3 md:px-10'>
            <h2 className="text-3xl text-center font-semibold bg-gradient-to-r from-blue-500 to-purple-600  text-transparent bg-clip-text mb-6">About Me</h2>
            <div className=' md:my-5 md:py-5 md:flex items-start justify-center gap-10 space-y-5'>
                <div className='border w-full rounded-xl bg-[040A18] mx-auto h-full  shadow-2xl'>
                    <img className="w-full h-full filter contrast-150 grayscale rounded-lg" src="https://i.ibb.co.com/HNff0z2/IMG-20250101-WA0004-removebg-preview-1.png" alt="" />
                </div>
                <div className="max-w-4xl mx-auto">

                    <p className="text-lg text-gray-400 mb-4">
                        Hi there! I'm <span className="font-semibold bg-gradient-to-r  from-blue-500 to-purple-600  text-transparent bg-clip-text">MD Majidul Islam</span> , a passionate developer based in Rangpur City. I specialize in building web applications and crafting responsive, user-friendly websites using modern technologies like React, JavaScript, and Node.js.
                    </p>
                    <p className="text-lg text-gray-400 mb-4">
                        My journey into programming started when I first picked up HTML and CSS during my school years. Initially, it was just a way to create simple websites for fun, but over time, my curiosity and love for technology grew, and I decided to pursue it professionally.
                    </p>
                    <p className="text-lg text-gray-400 mb-4">
                        Over the years, I have gained experience working on both frontend and backend development. I find great joy in transforming ideas into interactive web applications and improving the user experience.
                    </p>

                    <h3 className="text-2xl font-semibold bg-gradient-to-r  from-blue-500 to-purple-600  text-transparent bg-clip-text mt-8 mb-4">What I Love Doing</h3>
                    <p className="text-lg text-gray-400 mb-4">
                        I love tackling challenges that require problem-solving and creativity. Whether it's working with APIs, optimizing a UI, or learning new frameworks, I thrive in an environment that pushes me to grow as a developer.
                    </p>

                    <h3 className="text-2xl font-semiboldbg-gradient-to-r  from-blue-500 to-purple-600  text-transparent bg-clip-text  mt-8 mb-4">Outside of Programming</h3>
                    <p className="text-lg text-gray-400 mb-4">
                        When I'm not coding, you'll likely find me indulging in one of my hobbies: <span className="font-semibold">playing sports, drawing, and traveling</span>. I believe that these activities not only help me unwind but also inspire my creativity and problem-solving skills, which I bring to my work.
                    </p>

                    <h3 className="text-2xl font-semibold bg-gradient-to-r  from-blue-500 to-purple-600  text-transparent bg-clip-text mt-8 mb-4">My Future Goals</h3>
                    <p className="text-lg text-gray-400 mb-4">
                        I'm always learning and looking for ways to enhance my skills. In the near future, I want to dive deeper into full-stack development and explore cutting-edge technologies like machine learning and AI. I'm also interested in collaborating on open-source projects to contribute to the developer community.
                    </p>

                    <p className="text-lg text-gray-400 mt-8">
                        If you'd like to collaborate or chat about development, feel free to reach out to me through my contact section!
                    </p>
                </div>

            </div>

        </div>
    );
};

export default AboutMe;