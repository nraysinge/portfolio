import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 mb-12">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400/10 to-emerald-400/10 border border-blue-400/20 text-blue-300 text-sm font-medium">
              Full Stack Developer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Building Strong <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Backend Systems</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Java developer focused on building robust backend solutions with Spring Boot and SQL. I enjoy writing clean code and understanding how systems work behind the scenes. BCA graduate actively seeking entry-level opportunities to grow and contribute.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
              View My Work
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-900 hover:border-gray-500 transition">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
