'use client'

import { useState } from 'react'
import AboutMe from '@/components/AboutMe'
import ProjectShowcase from '@/components/ProjectShowcase'
import ProjectViewer from '@/components/ProjectViewer'
import { projects } from '@/data/projects'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col items-center mb-8 sm:mb-12 w-full">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 text-white whitespace-nowrap text-center">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              iplays1_
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-cyan-200">Developer & Creator</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <AboutMe />
          <ProjectShowcase 
            projects={projects}
            onSelectProject={setSelectedProject}
          />
        </div>

        {selectedProject && (
          <ProjectViewer
            project={projects.find(p => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </main>
  )
}

