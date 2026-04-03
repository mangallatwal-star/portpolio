"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="p-10">

      {/* HEADING */}
      <motion.h2
        className="text-3xl font-bold text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        💼 Work Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto relative">

        {/* Timeline Line */}
        <div className="absolute left-5 top-0 h-full w-[2px] 
        bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

        <div className="space-y-14">

          {/* JOB 1 */}
          <motion.div
            className="relative pl-16"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Dot */}
            <div className="absolute left-0 top-3 w-8 h-8 
            bg-gradient-to-r from-blue-500 to-purple-500 
            rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>

            {/* Card */}
            <motion.div
              className="p-6 rounded-2xl 
              border border-gray-200 dark:border-gray-800 
              bg-white/60 dark:bg-gray-900/60 
              backdrop-blur-md shadow-md 
              hover:shadow-xl transition"
              whileHover={{ y: -6 }}
            >
              <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                Fullstack Developer – Aegis Precision Pvt. Ltd.
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Dec 2024 – Present
              </p>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Developed scalable web applications and optimized performance across frontend and backend systems.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "Redux",
                  "PostgreSQL",
                  "Next.js",
                  "Bootstrap",
                  "MUI",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full font-medium
                    bg-blue-100 !text-blue-800
                    dark:bg-blue-900 dark:!text-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* JOB 2 */}
          <motion.div
            className="relative pl-16"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Dot */}
            <div className="absolute left-0 top-3 w-8 h-8 
            bg-gradient-to-r from-purple-500 to-pink-500 
            rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>

            {/* Card */}
            <motion.div
              className="p-6 rounded-2xl 
              border border-gray-200 dark:border-gray-800 
              bg-white/60 dark:bg-gray-900/60 
              backdrop-blur-md shadow-md 
              hover:shadow-xl transition"
              whileHover={{ y: -6 }}
            >
              <h3 className="font-semibold text-lg text-purple-600 dark:text-purple-400">
                MERN Developer – Euroinfotek Pvt Ltd
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Feb 2020 – Dec 2024
              </p>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Built robust full-stack applications using MERN stack and handled end-to-end development lifecycle.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Laravel",
                  "MySQL",
                  "Bootstrap",
                  "Ant Design",
                  "Express.js",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full font-medium
                    bg-purple-100 !text-purple-800
                    dark:bg-purple-900 dark:!text-purple-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}