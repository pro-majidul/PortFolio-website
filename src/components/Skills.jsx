import React from 'react';
import { FaCss3Alt, FaGit, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import { VscVscode } from "react-icons/vsc";


const Skills = () => {
    const skillsData = {
        Frontend: [
            { name: "HTML", icon: <FaHtml5 size={24} className="text-orange-500" />, percentage: 95 },
            { name: "CSS", icon: <FaCss3Alt size={24} className="text-blue-500" />, percentage: 90 },
            { name: "JavaScript", icon: <FaJs size={24} className="text-yellow-500" />, percentage: 85 },
            { name: "React", icon: <FaReact size={24} className="text-blue-400" />, percentage: 80 },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={24} className="text-teal-500" />, percentage: 85 },
        ],
        Backend: [
            { name: "Node.js", icon: <FaNodeJs size={24} className="text-green-500" />, percentage: 75 },
            { name: "MongoDB", icon: <SiMongodb size={24} className="text-green-600" />, percentage: 70 },
            { name: "Firebase", icon: <SiFirebase size={24} className="text-yellow-500" />, percentage: 85 },
        ],
        Tools: [
            { name: "Git", icon: <FaGit size={24} className="text-red-500" />, percentage: 80 },
            { name: "GitHub", icon: <FaGithub size={24} className="text-gray-800" />, percentage: 85 },
            { name: "VS Code", icon: <VscVscode size={24} className="text-blue-600" />, percentage: 90 },
        ],
    };

    return (
        <section id="skills" className="py-16 bg-[#070D1B]">
            <h2 className="text-2xl text-center underline underline-offset-8 decoration-orange-400 md:my-10 md:pb-10 md:text-3xl lg:text-4xl font-bold text-blue-800 mb-10">My Skills</h2>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                    }}
                >
                    {Object.keys(skillsData).map((category, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:text-orange-400 cursor-pointer border rounded-lg p-6"
                            whileHover={{ scale: 1.05 }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{category}</h3>
                            <ul>
                                {skillsData[category].map((skill, idx) => (
                                    <li key={idx} className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                {skill.icon}
                                                <span className="text-lg md:text-xl font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-sm md:text-base text-white">{skill.percentage}%</span>
                                        </div>
                                        <motion.div
                                            className="w-full bg-gray-300 rounded-full h-2 md:h-3"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.percentage}%` }}
                                            transition={{ duration: 1.2, ease: "easeInOut" }}
                                        >
                                            <div className="bg-blue-600 h-2 md:h-3 rounded-full"></div>
                                        </motion.div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;