import { FaReact, FaNodeJs, FaLaravel, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiMysql, SiRedux, SiAntdesign } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "React.js",
      icon: <FaReact />,
      link: "https://react.dev",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      link: "https://nextjs.org",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      link: "https://www.typescriptlang.org",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      link: "https://nodejs.org",
    },
    {
      name: "Express.js",
      icon: <FaNodeJs />,
      link: "https://expressjs.com",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      link: "https://www.mongodb.com",
    },
    {
      name: "PHP",
      icon: <FaLaravel />,
      link: "https://www.php.net",
    },
    {
      name: "Laravel",
      icon: <FaLaravel />,
      link: "https://laravel.com",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      link: "https://www.mysql.com",
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      link: "https://redux.js.org",
    },
    {
      name: "MUI",
      icon: <SiAntdesign />,
      link: "https://mui.com",
    },
    {
      name: "Ant Design",
      icon: <SiAntdesign />,
      link: "https://ant.design",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      link: "https://getbootstrap.com",
    },
  ];

  return (
    <section
      id="skills"
      className="p-10 text-center 
      bg-white text-black dark:bg-black dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-6">My Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <a
            key={i}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border rounded-full shadow 
            bg-gray-100 dark:bg-gray-800 hover:scale-105 transition"
          >
            <span className="text-lg">{skill.icon}</span>
            <span>{skill.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}