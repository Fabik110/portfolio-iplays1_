'use client'

interface Project {
  id: string
  title: string
  description: string
  icon: string
}

interface ProjectShowcaseProps {
  projects: Project[]
  onSelectProject: (id: string) => void
}

export default function ProjectShowcase({ projects, onSelectProject }: ProjectShowcaseProps) {
  return (
    <div className="glass rounded-3xl p-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelectProject(project.id)}
            className="glass-dark rounded-2xl p-6 text-left hover:scale-[1.02] transition-all duration-300 hover:border-cyan-400 border border-transparent group"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">{project.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-cyan-200 text-sm">{project.description}</p>
              </div>
              <div className="text-2xl text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

