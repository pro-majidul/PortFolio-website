import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { TextShimmerWave } from "./ui/TextShimmerWave";
import { useRef } from "react";
import { useInView } from "framer-motion";
const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px", once: false });
  const educationData = [
    {
      degree: "Diploma in Computer Science & Technology",
      institution: "Rangpur Polytechnic Institute",
      duration: "2021 – 2025",
      result: "CGPA: 3.65 / 4.00",
      majorSubjects: [
        "Web Development",
        "Database Management System (DBMS)",
        "Programming Languages: Python, Java",
        "Data Structures & Algorithms",
        "Computer Networking",
        "Operating Systems",
        "Microcontroller / IoT Systems",
        "Cyber Security & Ethics",
        "Software Engineering / Project Work",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-16"
      style={{ backgroundColor: "#0A101E", fontFamily: "Railway" }}
    >
      <div className="max-w-4xl px-6 mx-auto">
        <h2 className="mb-10 text-2xl font-bold text-center md:my-10 md:pb-10 md:text-4xl">
          {" "}
          <TextShimmerWave>Education </TextShimmerWave>
        </h2>

        <div className="relative pl-6 space-y-12 border-l-4 border-indigo-500">
          {educationData.map((edu, index) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[30px] top-2 w-6 h-6 rounded-full bg-indigo-500 border-4 border-[#0A101E]"></div>

              {/* Card */}
              <div className="bg-[#111827] dark:bg-gray-800 shadow-lg shadow-indigo-900/30 rounded-xl p-6 hover:shadow-2xl transition duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-20 h-20 text-indigo-400 md:h-8 md:w-8" />
                  <h3 className="text-xl font-semibold text-white md:text-3xl">
                    {edu.degree}
                  </h3>
                </div>

                <p className="text-xl text-gray-300 md:text-2xl">
                  {edu.institution}
                </p>

                <p className="flex items-center gap-2 mt-2 text-lg text-gray-400 md:text-xl">
                  <Calendar className="w-4 h-4 text-green-400" /> {edu.duration}
                </p>

                <p className="mt-2 text-gray-400">
                  📊{" "}
                  <span className="text-lg font-medium text-white md:text-xl">
                    {edu.result}
                  </span>
                </p>

                <div className="mt-4">
                  <h4 className="mb-2 text-lg font-semibold text-white md:text-xl">
                    📝 Major Subjects:
                  </h4>
                  <ul className="space-y-1 text-gray-300 list-disc list-inside">
                    {edu.majorSubjects.map((subject, i) => (
                      <li key={i}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
