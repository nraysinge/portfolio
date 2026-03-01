import { Code2, Database, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    category: 'Languages',
    icon: Code2,
    skills: ['Java', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Databases & ORM',
    icon: Database,
    skills: ['SQL', 'JDBC', 'Core Data Structures'],
  },
  {
    category: 'Tools & Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Spring Boot (Learning)'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-400">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map(({ category, icon: Icon, skills }) => (
            <div
              key={category}
              className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-lg">
                  <Icon size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{category}</h3>
              </div>

              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-emerald-900/20 border border-blue-400/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xl font-semibold text-blue-400">Bachelor of Computer Applications (BCA)</p>
              <p className="text-gray-400">Completed and focused on building practical development skills</p>
            </div>
            <div className="pt-4 border-t border-gray-700">
              <p className="text-lg font-semibold text-emerald-400">Current Focus</p>
              <p className="text-gray-400">Mastering Spring Boot and advancing backend development expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
