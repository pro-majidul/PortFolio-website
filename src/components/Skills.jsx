
import { motion } from 'framer-motion';


import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub,
} from "react-icons/fa";
import {
    SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiRedux, SiJsonwebtokens, SiNextdotjs, SiPostman, SiVercel, SiNetlify, SiFramer,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import { Button } from './ui/button';

const Skills = () => {

    const skillsData = [
        { name: "HTML5", icon: <FaHtml5 size={40} className="text-[#E34F26]" />, percentage: 95 },
        { name: "CSS3", icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, percentage: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-[#38BDF8]" />, percentage: 85 },
        { name: "JavaScript", icon: <FaJs size={40} className="text-[#F7DF1E]" />, percentage: 85 },
        { name: "React", icon: <FaReact size={40} className="text-[#61DAFB]" />, percentage: 80 },
        { name: "Next.js", icon: <SiNextdotjs size={40} className="text-black" />, percentage: 75 },
        { name: "Redux", icon: <SiRedux size={40} className="text-[#764ABC]" />, percentage: 70 },
        { name: "MongoDB", icon: <SiMongodb size={40} className="text-[#47A248]" />, percentage: 70 },
        { name: "Express.js", icon: <SiExpress size={40} className="text-black" />, percentage: 89 },
        { name: "Node.js", icon: <FaNodeJs size={40} className="text-[#339933]" />, percentage: 75 },
        { name: "Firebase", icon: <SiFirebase size={40} className="text-[#FFCA28]" />, percentage: 85 },
        { name: "NextAuth.js", icon: <SiNextdotjs size={40} className="text-black" />, percentage: 80 },
        { name: "JWT", icon: <SiJsonwebtokens size={40} className="text-[#F05032]" />, percentage: 80 },
        { name: "Git", icon: <FaGit size={40} className="text-[#F05032]" />, percentage: 80 },
        { name: "GitHub", icon: <FaGithub size={40} className="text-[#181717]" />, percentage: 85 },
        { name: "VS Code", icon: <VscVscode size={40} className="text-[#007ACC]" />, percentage: 90 },
        { name: "Figma", icon: <IoLogoFigma size={40} className="text-[#F24E1E]" />, percentage: 90 },
        { name: "Postman", icon: <SiPostman size={40} className="text-[#FF6C37]" />, percentage: 85 },
        { name: "Vercel", icon: <SiVercel size={40} className="text-black" />, percentage: 85 },
        { name: "Netlify", icon: <SiNetlify size={40} className="text-[#00C7B7]" />, percentage: 85 },
        { name: "Framer Motion", icon: <SiFramer size={40} className="text-[#0055FF]" />, percentage: 80 },
    ];
    ;

    return (
        <section id="skills">
            <h2 className="text-2xl text-center  md:my-5 md:pb-10 md:text-3xl lg:text-4xl font-bold text-blue-800 mb-10">My <span className='text-yellow-500'>Skills</span></h2>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                    }}
                >
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            className=" transition-all duration-300 cursor-pointer rounded-lg p-6"
                            whileHover={{ scale: 1.05 }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <ul>
                                <div className="flex flex-col items-center bg-gray-200 rounded-xl shadow-neumorphism p-6 transform hover:scale-105 transition-transform duration-300">
                                    <div className="w-24 h-24 mb-4 rounded-full bg-gray-100 flex items-center justify-center shadow-neumorphism-inner ">
                                        {category.icon}
                                    </div>
                                    <motion.div
                                        className="w-full bg-gray-300 rounded-full h-2 md:h-3"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${category.percentage}%` }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                    >
                                        <div className="bg-blue-600 h-2 md:h-3 rounded-full"></div>
                                    </motion.div>
                                    <p className="text-lg w-full font-medium text-gray-700 flex justify-between"> <p>{category.name}</p><p>{category.percentage}%</p></p>
                                </div>
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
};

export default Skills;