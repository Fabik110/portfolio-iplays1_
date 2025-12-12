import { ReactNode } from 'react'

export interface Project {
  id: string
  title: string
  description: string
  icon: string
  component: ReactNode
  sourceCode: string
}

