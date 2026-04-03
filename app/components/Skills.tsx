"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLaravel, FaBootstrap } from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiMongodb,
    SiMysql,
    SiRedux,
    SiAntdesign,
} from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "React.js", icon: <FaReact />, link: "https://react.dev" },
        { name: "Next.js", icon: <SiNextdotjs />, link: "https://nextjs.org" },
        { name: "TypeScript", icon: <SiTypescript />, link: "https://www.typescriptlang.org" },
        { name: "Node.js", icon: <FaNodeJs />, link: "https://nodejs.org" },
        { name: "Express.js", icon: <FaNodeJs />, link: "https://expressjs.com" },
        { name: "MongoDB", icon: <SiMongodb />, link: "https://www.mongodb.com" },
        { name: "Laravel", icon: <FaLaravel />, link: "https://laravel.com" },
        { name: "MySQL", icon: <SiMysql />, link: "https://www.mysql.com" },
        { name: "Redux", icon: <SiRedux />, link: "https://redux.js.org" },
        { name: "MUI", icon: <SiAntdesign />, link: "https://mui.com" },
        { name: "Bootstrap", icon: <FaBootstrap />, link: "https://getbootstrap.com" },
    ];

    return (
        <section className="px-6 py-16 text-center bg-white text-black dark:bg-black dark:text-white">

            {/* Heading */}
            <motion.h2
                className="text-3xl font-bold mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                My Skills
            </motion.h2>

            {/* Grid */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: { staggerChildren: 0.08 },
                    },
                }}
            >
                {skills.map((skill, i) => (
                    <motion.a
                        key={i}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-5 rounded-xl 
            bg-gray-100 dark:bg-gray-900 shadow-sm border 
            border-gray-200 dark:border-gray-800"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0 },
                        }}
                        whileHover={{
                            y: -5,
                            boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Icon */}
                        <div className="text-3xl mb-2 text-blue-500">
                            {skill.icon}
                        </div>

                        {/* Name */}
                        <span className="text-sm font-medium">
                            {skill.name}
                        </span>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    );
}