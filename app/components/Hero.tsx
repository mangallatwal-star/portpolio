import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center p-10 
    bg-white text-black dark:bg-black dark:text-white">

      {/* 👇 YOUR PHOTO */}
      <Image
        src="/mine.jpg"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mb-4 border"
      />

      <h1 className="text-3xl font-bold">
        Hi, I'm Mangal Singh Latwal 👋
      </h1>

      <p className="mt-2 text-gray-500 max-w-xl">
        Full Stack Developer (MERN + Laravel) with 3+ years experience building scalable web applications.
      </p>

      {/* 🔗 SOCIAL LINKS */}
      <div className="flex gap-4 mt-4">
        <a href="https://www.linkedin.com/in/mangal-singh-latwal-2226221b8/" target="_blank" className="text-blue-500">
          LinkedIn
        </a>
        <a href="https://www.naukri.com/nlogin/login" target="_blank" className="text-green-500">
          Naukri
        </a>
        {/* <a href="https://github.com/your-profile" target="_blank" className="text-gray-500">
          GitHub
        </a> */}
      </div>
    </section>
  );
}