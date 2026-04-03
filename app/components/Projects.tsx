"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            name: "A-GAIN – E-commerce Marketplace Platform",
            desc: "Secure marketplace with fraud prevention & protected transactions.",
            url: "https://a-gain.shop",
            logo: "/logos/again.png",
            tech: ["React", "Node.js", "MongoDB", "Redux"],
        },
        {
            name: "CRM Dashboard",
            desc: "Project management dashboard with scalable architecture.",
            url: "https://taskflier.com",
            logo: "/logos/mnb-project.webp",
            tech: ["React", "Node", "Express", "MongoDB"],
        },
        {
            name: "Go4Explore",
            desc: "Travel platform for Himalayan trekking & experiences.",
            url: "https://go4explore.com",
            logo: "/logos/go4explore.webp",
            tech: ["Laravel", "MySQL"],
        },
        {
            name: "Stock Learning Platform",
            desc: "Educational platform for stock market learning.",
            url: "https://myequityguru.com",
            logo: "/logos/moneyguru.jpg",
            tech: ["React", "Laravel", "MySQL"],
        },
        {
            name: "HSRP Portal",
            desc: "Vehicle number plate booking & replacement system.",
            url: "https://order.realmazon.com",
            logo: "/logos/rm.png",
            tech: ["React", "Node.js", "API"],
        },
        {
            name: "BlueVerse",
            desc: "AI-powered smart car care platform.",
            url: "https://blueverse.ae",
            logo: "/logos/blueverse.jpg",
            tech: ["React", "MUI"],
        },
    ];

    return (
        <section className="px-6 py-20">

            {/* Heading */}
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center mb-14"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Projects
            </motion.h2>

            {/* Grid */}
            <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.1 } },
                }}
            >
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        className="group rounded-2xl 
            border border-gray-200 dark:border-gray-800 
            bg-white/60 dark:bg-gray-900/60 
            backdrop-blur-md 
            p-6 flex flex-col justify-between 
            shadow-md hover:shadow-xl transition"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ y: -8 }}
                    >
                        {/* Logo */}
                        <div className="flex justify-center mb-4">
                            <div className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow">
                                <Image
                                    src={project.logo}
                                    alt={project.name}
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-center">
                            {project.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                            {project.desc}
                        </p>

                        {/* Tech */}
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {project.tech.map((t, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-1 rounded-full font-medium
                  bg-gray-100 !text-gray-800
                  dark:bg-gray-800 dark:!text-gray-200"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-6 text-center">
                            <a
                                href={project.url}
                                target="_blank"
                                className="inline-block px-4 py-2 text-sm font-medium rounded-lg 
                bg-gradient-to-r from-blue-500 to-purple-500 
                text-white shadow-md 
                hover:scale-105 hover:shadow-lg transition"
                            >
                                Live Preview →
                            </a>
                        </div>

                        {/* Hover Border Effect */}
                        <div className="absolute inset-0 rounded-2xl 
            border-2 border-transparent 
            group-hover:border-blue-500 transition"></div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}