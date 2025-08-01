'use client'

import Link from 'next/link'
import { HeaderProps } from '@/app/lib/types'

export function Header({ className = '' }: HeaderProps) {
  return (
    <header className={`border-b border-neutral-200 bg-white sticky top-0 z-50 ${className}`}>
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary-600 text-white px-3 py-1.5 rounded-lg font-bold text-lg group-hover:bg-primary-700 transition-colors">
              KI
            </div>
            <span className="text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
              Tricks
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              href="/tricks" 
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Alle Tricks
            </Link>
            <Link 
              href="/claude-code" 
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Claude Code
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Über uns
            </Link>
            <Link 
              href="https://www.produktiv.me/kiz/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors"
            >
              KI Kurs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}