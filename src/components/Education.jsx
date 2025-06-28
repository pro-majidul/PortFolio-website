import React from "react";
import { motion } from "framer-motion";
import { TextShimmerWave } from "./ui/TextShimmerWave";
import { TextEffect } from "./ui/TextEffect";

const Education = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="education" className='md:my-10 md:py-10 my-3 py-3 max-w-7xl w-full mx-auto text-gray-300' >
            <div
                className="w-full mx-auto px-3 md:px-10 text-center"

            >
                <h2 className="text-2xl text-center  md:my-10 md:pb-10 md:text-4xl font-bold  mb-10">  <TextShimmerWave>Educational Qualification</TextShimmerWave></h2>
                <p className="mt-4 text-lg">
                    My academic background and educational journey.
                </p>

                {/* <div className=" w-full h-[400px] ">
                    <img className="w-full h-full object-contain " src="https://i.ibb.co/JwqJKDyj/campus.webp" alt="" />
                </div> */}
                <div

                    className="mt-10 flex flex-col  gap-8 md:flex-row md:justify-between"
                >
                    <div className="bg-[#101624] w-full  p-6 rounded-lg shadow-md hover:shadow-xl">
                        <h3 className="text-2xl font-semibold text-orange-300">
                            <TextEffect>Rangpur Polytechnic Institute</TextEffect>
                        </h3>
                        <p className="mt-2 text-gray-400">
                            <strong>Department:</strong> Computer Technology
                        </p>
                        <p className="mt-1 text-gray-400">
                            <strong>Session:</strong> 2021-2022
                        </p>
                        <p className="mt-1 text-gray-400">
                            <strong>Current Semester:</strong> 7th Semester
                        </p>
                    </div>

                    <div

                        className="flex items-center justify-center bg-[#101624] p-6 rounded-lg shadow-md hover:shadow-xl"
                    >
                        <p className="text-xl font-medium text-gray-400 z-[1]">
                            <TextEffect>
                                Currently pursuing a diploma in Computer Technology at the esteemed Rangpur Polytechnic Institute.
                                This journey has allowed me to develop a deep understanding of modern programming paradigms,
                                software development methodologies, and hands-on technical expertise.
                                The comprehensive curriculum, paired with practical projects and industry-oriented training,
                                has equipped me with the skills to tackle real-world challenges in the field of technology.
                                My passion lies in exploring cutting-edge technologies and applying them to solve problems effectively,
                                preparing myself for a rewarding career in the tech industry.</TextEffect>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
