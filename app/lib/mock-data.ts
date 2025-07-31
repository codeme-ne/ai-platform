import { AITrick, Category, Difficulty, Impact } from './types'

// Helper function to generate slugs
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[äöü]/g, (match) => {
      const map: { [key: string]: string } = { 'ä': 'ae', 'ö': 'oe', 'ü': 'ue' }
      return map[match] || match
    })
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Mock data for AI tricks
export const mockTricks: AITrick[] = [
  {
    id: '1',
    title: 'Automatische Meeting-Zusammenfassungen mit ChatGPT',
    description: 'Nutze ChatGPT, um aus Meeting-Notizen automatisch strukturierte Zusammenfassungen mit Action Items zu erstellen.',
    category: 'productivity',
    difficulty: 'beginner',
    tools: ['Claude'],
    timeToImplement: '5 Minuten',
    impact: 'high',
    slug: generateSlug('Automatische Meeting-Zusammenfassungen mit ChatGPT'),
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Code-Reviews mit GitHub Copilot',
    description: 'Verwende GitHub Copilot für automatische Code-Reviews und Verbesserungsvorschläge.',
    category: 'programming',
    difficulty: 'intermediate',
    tools: ['Claude Code'],
    timeToImplement: '10 Minuten',
    impact: 'high',
    slug: generateSlug('Code-Reviews mit GitHub Copilot'),
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-16')
  },
  {
    id: '3',
    title: 'Blog-Artikel mit Claude optimieren',
    description: 'Nutze Claude, um Blog-Artikel zu strukturieren, SEO zu optimieren und den Schreibstil zu verbessern.',
    category: 'content-creation',
    difficulty: 'beginner',
    tools: ['Claude'],
    timeToImplement: '15 Minuten',
    impact: 'medium',
    slug: generateSlug('Blog-Artikel mit Claude optimieren'),
    createdAt: new Date('2024-01-17'),
    updatedAt: new Date('2024-01-17')
  },
  {
    id: '4',
    title: 'UI-Mockups mit DALL-E 3 erstellen',
    description: 'Erstelle schnelle UI-Mockups und Design-Konzepte mit DALL-E 3.',
    category: 'design',
    difficulty: 'intermediate',
    tools: ['Claude'],
    timeToImplement: '20 Minuten',
    impact: 'medium',
    slug: generateSlug('UI-Mockups mit DALL-E 3 erstellen'),
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18')
  },
  {
    id: '5',
    title: 'Datenanalyse mit ChatGPT Code Interpreter',
    description: 'Analysiere CSV-Dateien und erstelle Visualisierungen mit dem Code Interpreter.',
    category: 'data-analysis',
    difficulty: 'advanced',
    tools: ['Claude'],
    timeToImplement: '30 Minuten',
    impact: 'high',
    slug: generateSlug('Datenanalyse mit ChatGPT Code Interpreter'),
    createdAt: new Date('2024-01-19'),
    updatedAt: new Date('2024-01-19')
  },
  {
    id: '6',
    title: 'Personalisierte Lernpfade mit ChatGPT',
    description: 'Erstelle individuelle Lernpläne für neue Fähigkeiten mit ChatGPT.',
    category: 'learning',
    difficulty: 'beginner',
    tools: ['Claude'],
    timeToImplement: '25 Minuten',
    impact: 'high',
    slug: generateSlug('Personalisierte Lernpfade mit ChatGPT'),
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '7',
    title: 'Geschäftsprozesse mit Zapier AI automatisieren',
    description: 'Nutze Zapier AI, um repetitive Geschäftsprozesse zu automatisieren.',
    category: 'business',
    difficulty: 'intermediate',
    tools: ['Claude'],
    timeToImplement: '45 Minuten',
    impact: 'high',
    slug: generateSlug('Geschäftsprozesse mit Zapier AI automatisieren'),
    createdAt: new Date('2024-01-21'),
    updatedAt: new Date('2024-01-21')
  },
  {
    id: '8',
    title: 'Social Media Content-Kalender mit AI',
    description: 'Erstelle einen vollständigen Content-Kalender für Social Media mit AI-Tools.',
    category: 'marketing',
    difficulty: 'beginner',
    tools: ['Claude'],
    timeToImplement: '35 Minuten',
    impact: 'medium',
    slug: generateSlug('Social Media Content-Kalender mit AI'),
    createdAt: new Date('2024-01-22'),
    updatedAt: new Date('2024-01-22')
  },
  {
    id: '9',
    title: 'Email-Automatisierung mit GPT-4',
    description: 'Automatisiere E-Mail-Antworten und Follow-ups mit GPT-4 Integration.',
    category: 'productivity',
    difficulty: 'advanced',
    tools: ['Claude'],
    timeToImplement: '60 Minuten',
    impact: 'high',
    slug: generateSlug('Email-Automatisierung mit GPT-4'),
    createdAt: new Date('2024-01-23'),
    updatedAt: new Date('2024-01-23')
  },
  {
    id: '10',
    title: 'Unit Tests mit GitHub Copilot generieren',
    description: 'Erstelle automatisch Unit Tests für deinen Code mit GitHub Copilot.',
    category: 'programming',
    difficulty: 'intermediate',
    tools: ['Claude Code'],
    timeToImplement: '15 Minuten',
    impact: 'high',
    slug: generateSlug('Unit Tests mit GitHub Copilot generieren'),
    createdAt: new Date('2024-01-24'),
    updatedAt: new Date('2024-01-24')
  },
  {
    id: '11',
    title: 'Claude Code CLI für Rapid Prototyping',
    description: 'Nutze Claude Code Command Line Tool um in Minuten von der Idee zum funktionierenden Prototyp zu kommen. Perfekt für MVPs und Proof-of-Concepts.',
    category: 'programming',
    difficulty: 'advanced',
    tools: ['Claude Code'],
    timeToImplement: '30 Minuten',
    impact: 'high',
    slug: generateSlug('Claude Code CLI für Rapid Prototyping'),
    createdAt: new Date('2025-01-20'),
    updatedAt: new Date('2025-01-20')
  },
  {
    id: '12',
    title: 'AI-Powered Apps ohne Code mit Claude Artifacts',
    description: 'Erstelle interaktive Web-Anwendungen direkt in Claude ohne eine einzige Zeile Code zu schreiben. Von Dashboards bis zu kompletten Tools.',
    category: 'design',
    difficulty: 'intermediate',
    tools: ['Claude'],
    timeToImplement: '15 Minuten',
    impact: 'high',
    slug: generateSlug('AI-Powered Apps ohne Code mit Claude Artifacts'),
    createdAt: new Date('2025-01-19'),
    updatedAt: new Date('2025-01-19')
  },
  {
    id: '13',
    title: 'Model Context Protocol (MCP) für Business-Automatisierung',
    description: 'Verbinde Claude mit deinen Unternehmensdaten durch MCP. Automatisiere Workflows mit Zugriff auf Datenbanken, APIs und lokale Dateien.',
    category: 'business',
    difficulty: 'advanced',
    tools: ['Claude'],
    timeToImplement: '45 Minuten',
    impact: 'high',
    slug: generateSlug('Model Context Protocol (MCP) für Business-Automatisierung'),
    createdAt: new Date('2025-01-18'),
    updatedAt: new Date('2025-01-18')
  },
  {
    id: '14',
    title: 'No-Code KI-Automation für Coaches mit Zapier',
    description: 'Automatisiere dein Coaching-Business mit KI-gestützten Zapier Workflows. Von der Terminbuchung bis zum Follow-up - alles läuft automatisch.',
    category: 'productivity',
    difficulty: 'beginner',
    tools: ['Claude'],
    timeToImplement: '20 Minuten',
    impact: 'high',
    slug: generateSlug('No-Code KI-Automation für Coaches mit Zapier'),
    createdAt: new Date('2025-01-17'),
    updatedAt: new Date('2025-01-17')
  },
  {
    id: '15',
    title: 'KI-Research Workflow für Consultants',
    description: 'Spare 50% Zeit bei Client-Research durch strukturierte KI-Workflows. Von der Marktanalyse bis zum Executive Summary in einem Durchgang.',
    category: 'data-analysis',
    difficulty: 'intermediate',
    tools: ['Claude'],
    timeToImplement: '25 Minuten',
    impact: 'high',
    slug: generateSlug('KI-Research Workflow für Consultants'),
    createdAt: new Date('2025-01-16'),
    updatedAt: new Date('2025-01-16')
  },
  {
    id: '16',
    title: 'Claude Vision für Content Creation',
    description: 'Verwandle Screenshots, Skizzen und Bilder in fertigen Content. Claude Vision analysiert visuelle Inputs und generiert passende Texte.',
    category: 'content-creation',
    difficulty: 'beginner',
    tools: ['Claude'],
    timeToImplement: '10 Minuten',
    impact: 'medium',
    slug: generateSlug('Claude Vision für Content Creation'),
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-15')
  },
  {
    id: '17',
    title: 'Strukturiertes Prompting für komplexe Projekte',
    description: 'Meistere die Kunst des strukturierten Promptings für konsistente und hochwertige Ergebnisse bei komplexen KI-Aufgaben.',
    category: 'learning',
    difficulty: 'advanced',
    tools: ['Claude'],
    timeToImplement: '35 Minuten',
    impact: 'high',
    slug: generateSlug('Strukturiertes Prompting für komplexe Projekte'),
    createdAt: new Date('2025-01-14'),
    updatedAt: new Date('2025-01-14')
  },
  {
    id: '18',
    title: 'Hybrid AI Models für Business Intelligence',
    description: 'Kombiniere verschiedene KI-Modelle für maximale Business Intelligence. Claude Opus 4 für Analyse, GPT-4 für Kreativität.',
    category: 'data-analysis',
    difficulty: 'advanced',
    tools: ['Claude'],
    timeToImplement: '40 Minuten',
    impact: 'high',
    slug: generateSlug('Hybrid AI Models für Business Intelligence'),
    createdAt: new Date('2025-01-13'),
    updatedAt: new Date('2025-01-13')
  },
  {
    id: '19',
    title: 'Collaborative AI Workflows für Teams',
    description: 'Implementiere KI-gestützte Team-Workflows die die Produktivität des gesamten Teams steigern. Von Brainstorming bis Projektabschluss.',
    category: 'productivity',
    difficulty: 'intermediate',
    tools: ['Claude'],
    timeToImplement: '30 Minuten',
    impact: 'high',
    slug: generateSlug('Collaborative AI Workflows für Teams'),
    createdAt: new Date('2025-01-12'),
    updatedAt: new Date('2025-01-12')
  },
  {
    id: '20',
    title: 'KI-gestützte Preisoptimierung für Berater',
    description: 'Nutze KI um deine Beratungspreise zu optimieren. Analysiere Marktdaten, Kundensegmente und erstelle dynamische Preismodelle.',
    category: 'business',
    difficulty: 'intermediate',
    tools: ['Claude'],
    timeToImplement: '25 Minuten',
    impact: 'high',
    slug: generateSlug('KI-gestützte Preisoptimierung für Berater'),
    createdAt: new Date('2025-01-11'),
    updatedAt: new Date('2025-01-11')
  }
]

// Get all unique tools from tricks
export const getAllTools = (): string[] => {
  const tools = new Set<string>()
  mockTricks.forEach(trick => {
    trick.tools.forEach(tool => tools.add(tool))
  })
  return Array.from(tools).sort()
}

// Get all categories
export const getAllCategories = (): Category[] => {
  return [
    'productivity',
    'content-creation',
    'programming',
    'design',
    'data-analysis',
    'learning',
    'business',
    'marketing'
  ]
}

// Get trick count by category
export const getTrickCountByCategory = (): Record<Category, number> => {
  const counts: Record<string, number> = {}
  mockTricks.forEach(trick => {
    counts[trick.category] = (counts[trick.category] || 0) + 1
  })
  return counts as Record<Category, number>
}

// Filter tricks with support for FilterState and separate searchQuery
export const filterTricks = (
  tricks: AITrick[],
  filters: {
    categories?: Category[]
    difficulty?: Difficulty[]
    impact?: Impact[]
    search?: string
  },
  searchQuery?: string
): AITrick[] => {
  return tricks.filter(trick => {
    // Category filter
    if (filters.categories && filters.categories.length > 0) {
      if (!filters.categories.includes(trick.category)) return false
    }

    // Difficulty filter
    if (filters.difficulty && filters.difficulty.length > 0) {
      if (!filters.difficulty.includes(trick.difficulty)) return false
    }

    // Impact filter
    if (filters.impact && filters.impact.length > 0) {
      if (!filters.impact.includes(trick.impact)) return false
    }

    // Search filter - check both filters.search and searchQuery parameter
    const searchTerm = searchQuery?.trim() || filters.search?.trim() || ''
    if (searchTerm !== '') {
      const searchLower = searchTerm.toLowerCase()
      const matchesSearch = 
        trick.title.toLowerCase().includes(searchLower) ||
        trick.description.toLowerCase().includes(searchLower) ||
        trick.tools.some(tool => tool.toLowerCase().includes(searchLower))
      if (!matchesSearch) return false
    }

    return true
  })
}

// Get trick by slug
export const getTrickBySlug = (slug: string): AITrick | undefined => {
  return mockTricks.find(trick => trick.slug === slug)
}

// Get related tricks (same category, excluding current)
export const getRelatedTricks = (currentTrick: AITrick, limit: number = 3): AITrick[] => {
  return mockTricks
    .filter(trick => 
      trick.category === currentTrick.category && 
      trick.id !== currentTrick.id
    )
    .slice(0, limit)
}