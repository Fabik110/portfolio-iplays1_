'use client'

import { useState } from 'react'
import AboutMe from '@/components/AboutMe'
import ProjectShowcase from '@/components/ProjectShowcase'
import ProjectViewer from '@/components/ProjectViewer'
import { projects } from '@/data/projects'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 overflow-x-hidden safe-top safe-bottom">
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-3 xs:py-4 sm:py-5 lg:py-8">
        <header className="flex flex-col items-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 w-full">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 xs:mb-3 sm:mb-4 text-white whitespace-nowrap text-center">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              iplays1_
            </span>
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-200 text-center px-2">
            Developer & Creator
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
          <AboutMe />
          <ProjectShowcase 
            projects={projects}
            onSelectProject={setSelectedProject}
          />
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 xs:p-4 sm:p-6 md:p-8">
            <ProjectViewer
              project={projects.find(p => p.id === selectedProject)!}
              onClose={() => setSelectedProject(null)}
            />
          </div>
        )}
      </div>
    </main>
  )
}

