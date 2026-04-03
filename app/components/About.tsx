"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="px-6 py-20 text-center"
        >
            {/* HEADING */}
            <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                About Me
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
                className="max-w-2xl mx-auto text-lg leading-relaxed 
        text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                I am a{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Full Stack Developer
                </span>{" "}
                with 2+ years of experience in{" "}
                <span className="font-semibold">Laravel</span> and currently working with
                the <span className="font-semibold">MERN stack</span>. I build scalable
                dashboards, APIs, and modern web applications with clean UI and
                performance in mind.
            </motion.p>

            {/* CARDS */}
            <motion.div
                className="grid md:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: { staggerChildren: 0.2 },
                    },
                }}
            >
                {[
                    {
                        title: "Frontend",
                        desc: "React, Next.js, TypeScript",
                    },
                    {
                        title: "Backend",
                        desc: "Node.js, Express, Laravel",
                    },
                    {
                        title: "Database",
                        desc: "MongoDB, MySQL, PostgreSQL",
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="p-6 rounded-2xl 
            border border-gray-200 dark:border-gray-800 
            bg-white/60 dark:bg-gray-900/60 
            backdrop-blur-md shadow-md 
            hover:shadow-xl transition"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ y: -8 }}
                    >
                        <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}