"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden">

            {/* 🔥 Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 blur-3xl rounded-full top-10 left-10"></div>
                <div className="absolute w-72 h-72 bg-purple-500/20 dark:bg-purple-500/10 blur-3xl rounded-full bottom-10 right-10"></div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center"
            >
                {/* IMAGE */}
                <motion.div
                    variants={item}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    <Image
                        src="/mine.jpg"
                        alt="Profile"
                        width={140}
                        height={140}
                        className="rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg mb-6"
                    />
                </motion.div>

                {/* TITLE */}
                <motion.h1
                    variants={item}
                    className="text-4xl md:text-5xl font-bold leading-tight"
                >
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Mangal Singh Latwal
                    </span>{" "}
                    👋
                </motion.h1>

                {/* DESCRIPTION */}
                <motion.p
                    variants={item}
                    className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400"
                >
                    Full Stack Developer (MERN + Laravel) with 5+ years experience building scalable web applications.
                </motion.p>

                {/* BUTTONS */}
                <motion.div variants={item} className="flex gap-6 mt-8">
                    <motion.a
                        href="https://www.linkedin.com/in/mangal-singh-latwal-2226221b8/"
                        target="_blank"
                        className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                        whileHover={{ scale: 1.08 }}
                    >
                        LinkedIn
                    </motion.a>

                    <motion.a
                        href="https://www.naukri.com/nlogin/login"
                        target="_blank"
                        className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
            hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        whileHover={{ scale: 1.08 }}
                    >
                        Naukri
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}