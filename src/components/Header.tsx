import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Narendra Raysinge
        </div>
        <ul className="hidden md:flex gap-8">
          <li><a href="#about" className="text-gray-300 hover:text-white transition">About</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a></li>
          <li><a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
        </ul>
        <div className="flex gap-4">
          <a href="https://github.com/nraysinge" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/narendra-raysinge" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <Linkedin size={20} />
          </a>
          <a href="mailto:narendraraysinge26@gmail.com" className="text-gray-400 hover:text-white transition">
            <Mail size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}
