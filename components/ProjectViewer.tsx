'use client'

import { useState, useEffect } from 'react'
import { Project } from '@/types/project'

interface ProjectViewerProps {
  project: Project
  onClose: () => void
}

export default function ProjectViewer({ project, onClose }: ProjectViewerProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="glass-dark rounded-3xl w-full max-w-7xl h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            <p className="text-cyan-200 mt-1">{project.description}</p>
          </div>
          <button
            onClick={onClose}
            className="glass rounded-full p-3 hover:scale-110 transition-transform text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Tabs - Mobile Only */}
        <div className="flex gap-2 p-4 border-b border-white/10 lg:hidden">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === 'preview'
                ? 'glass text-white font-semibold'
                : 'text-cyan-300 hover:text-white'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === 'code'
                ? 'glass text-white font-semibold'
                : 'text-cyan-300 hover:text-white'
            }`}
          >
            Source Code
          </button>
        </div>

        {/* Content - CodePen Style: Preview Left, Code Right */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          {/* Preview Panel - Left Side */}
          <div className={`${activeTab === 'preview' ? 'block' : 'hidden'} lg:block glass rounded-2xl p-4 overflow-hidden`}>
            <div className="h-full flex items-center justify-center">
              {project.component}
            </div>
          </div>

          {/* Code Panel - Right Side */}
          <div className={`${activeTab === 'code' ? 'block' : 'hidden'} lg:block glass-dark rounded-2xl p-6 overflow-auto`}>
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-semibold text-white mb-4">Source Code</h3>
              <div className="flex-1 overflow-auto">
                <pre className="bg-black/40 rounded-lg p-4 overflow-x-auto h-full">
                  <code className="text-sm text-green-400 font-mono whitespace-pre">
                    {project.sourceCode}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

