export default function Experience() {
  return (
    <section className="p-10 bg-gradient-to-b from-white to-gray-100 
    dark:from-black dark:to-gray-900 text-black dark:text-white">

      <h2 className="text-3xl font-bold text-center mb-10">
        💼 Work Experience
      </h2>

      <div className="max-w-4xl mx-auto relative">

        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-1 
        bg-gradient-to-b from-blue-500 to-purple-500"></div>

        <div className="space-y-10">

          {/* Job 1 */}
          <div className="relative pl-12">

            {/* Dot */}
            <div className="absolute left-0 top-2 w-8 h-8 
            bg-blue-500 rounded-full border-4 border-white dark:border-black"></div>

            <div className="p-6 rounded-xl shadow-lg 
            bg-white dark:bg-gray-900 
            hover:shadow-2xl transition">

              <h3 className="font-semibold text-lg text-blue-600">
                Fullstack Developer – Aegis Precision Pvt. Ltd.
              </h3>

              <p className="text-sm text-gray-500">
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
                  "MUI"
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full 
                    bg-blue-100 text-blue-600 
                    dark:bg-blue-900 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Job 2 */}
          <div className="relative pl-12">

            {/* Dot */}
            <div className="absolute left-0 top-2 w-8 h-8 
            bg-purple-500 rounded-full border-4 border-white dark:border-black"></div>

            <div className="p-6 rounded-xl shadow-lg 
            bg-white dark:bg-gray-900 
            hover:shadow-2xl transition">

              <h3 className="font-semibold text-lg text-purple-600">
                MERN Developer – Euroinfotek Pvt Ltd
              </h3>

              <p className="text-sm text-gray-500">
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
                    className="text-xs px-3 py-1 rounded-full 
                    bg-purple-100 text-purple-600 
                    dark:bg-purple-900 dark:text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 