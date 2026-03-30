import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            name: "A-GAIN – E-commerce Marketplace Platform",
            desc: "An e-commerce marketplace platform enabling secure buying and selling with user protection, order safety, and fraud prevention features.",
            url: "https://a-gain.shop",
            logo: "/logos/again.png",
            tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Razorpay Gateway"],
        },
        {
            name: "CRM Dashboard",
            desc: "Project Management Software",
            url: "https://taskflier.com",
            logo: "/logos/mnb-project.webp",
            tech: ["React", "Bootstrap", "Node", "Expressjs", "Mongodb", "Redux"],
        },
        {
            name: "Go4Explore – Himalayan Travel Experience",
            desc: "A travel platform offering personalized trips, trekking, and camping experiences across unexplored Himalayan destinations.",
            url: "https://go4explore.com",
            logo: "/logos/go4explore.webp",
            tech: ["Laravel", "MySQL", "Razorpay Gateway"],
        },
        {
            name: "Stock Learning Platform – Market Education System",
            desc: "An online platform designed to help users learn stock market fundamentals, trading concepts, and investment strategies in a simple and structured way.",
            url: "https://myequityguru.com",
            logo: "/logos/moneyguru.jpg",
            tech: ["React", "Laravel", "MySQL"],
        },
        {
            name: "HSRP Portal – Vehicle Number Plate Booking System",
            desc: "A customer portal for applying new HSRP number plates and requesting replacements for old vehicles with secure validation and booking features.",
            url: "https://order.realmazon.com",
            logo: "/logos/rm.png",
            tech: ["React", "Node.js", "PayU Gateway", "Vahan API Integration"],
        },
        {
            name: "BlueVerse – Smart Car Care & AI Wash Platform",
            desc: "An AI-powered car care platform offering automated robotic washes, premium detailing, and eco-friendly automotive services with a focus on luxury and efficiency.",
            url: "https://blueverse.ae",
            logo: "/logos/blueverse.Webp",
            tech: ["React", "MUI", "API Integration"],
        },
        {
            name: "Integrated Logistics Platform – Supply Chain Solutions",
            desc: "A logistics platform providing end-to-end supply chain solutions including transportation, warehousing, and scalable business operations.",
            url: "https://www.ipispl.in",
            logo: "/logos/ip.jpg",
            tech: ["React", "Node.js", "API Integration", "Dashboard"],
        }
    ];

    return (
        <section
            id="projects"
            className="p-10 bg-white text-black dark:bg-black dark:text-white"
        >
            <h2 className="text-3xl font-bold text-center mb-10">
                My Projects
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <a
                        key={i}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-6 rounded-2xl 
            bg-gray-100 dark:bg-gray-900 
            shadow-md hover:shadow-xl 
            hover:-translate-y-2 transition duration-300"
                    >
                        {/* Logo */}
                        <div className="flex justify-center mb-4">
                            <div className="p-3 rounded-full bg-white dark:bg-black shadow">
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
                        <p className="text-sm text-gray-500 text-center mt-2">
                            {project.desc}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {project.tech.map((t, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-1 rounded-full 
                  bg-white dark:bg-black border"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 rounded-2xl 
            border-2 border-transparent 
            group-hover:border-blue-500 transition"></div>
                    </a>
                ))}
            </div>
        </section>
    );
}