import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
    return (
        <section id="contact" className="p-10 text-center bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg my-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Me</h2>

            <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-700 dark:text-gray-300 text-lg">
                <a href="mailto:mangal@example.com" className="flex items-center gap-2 hover:text-blue-500 transition">
                    <FiMail /> mangallatwal@gmail.com
                </a>

                <a href="tel:+917668622736" className="flex items-center gap-2 hover:text-green-500 transition">
                    <FiPhone /> +917668622736
                </a>
            </div>
        </section>
    );
}