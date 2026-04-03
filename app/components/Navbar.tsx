import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav
            className="flex justify-between items-center px-6 py-4 
      sticky top-0 z-50 
      backdrop-blur-md 
      bg-white/70 dark:bg-black/70 
      border-b border-gray-200 dark:border-gray-800 
      transition-colors duration-300"
        >
            {/* Logo */}
            <h1 className="font-bold text-xl tracking-wide">
                Mangal.dev
            </h1>

            {/* Right side */}
            <div className="flex items-center gap-4">
                <ThemeToggle />
            </div>
        </nav>
    );
}