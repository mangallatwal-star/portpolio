import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md 
    bg-white text-black dark:bg-black dark:text-white transition">

      {/* Logo */}
      <h1 className="font-bold text-xl">Mangal.dev</h1>

      {/* Right side */}
      <div className="flex items-center gap-4">
        
        {/* Optional Links */}
        {/* 
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a> 
        */}

        {/* 🌙 Theme Toggle Button */}
        {/* <ThemeToggle /> */}

      </div>
    </nav>
  );
}