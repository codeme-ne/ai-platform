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
    tools: ['ChatGPT', 'GPT-4'],
    timeToImplement: '5 Minuten',
    impact: 'high',
    steps: [
      'Kopiere deine Meeting-Notizen oder Transcript in ChatGPT',
      'Verwende den Prompt: "Erstelle eine strukturierte Zusammenfassung mit folgenden Punkten: Wichtigste Entscheidungen, Action Items mit Verantwortlichen und Deadlines, offene Fragen"',
      'Lass dir das Ergebnis in einem professionellen Format ausgeben',
      'Teile die Zusammenfassung mit allen Meeting-Teilnehmern per E-Mail oder Slack',
      'Übertrage die Action Items in dein Projektmanagement-Tool'
    ],
    examples: [
      'Wöchentliches Team-Meeting mit 6 Teilnehmern wird in 2 Minuten zu einer übersichtlichen Zusammenfassung mit 4 konkreten Aufgaben und Deadlines verarbeitet',
      'Kundengespräch über Projektanforderungen wird automatisch in strukturierte Anforderungsliste mit Prioritäten umgewandelt',
      'Brainstorming-Session mit 15 wilden Ideen wird zu kategorisierter Liste mit Bewertung des Umsetzungsaufwands'
    ],
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
    tools: ['GitHub Copilot', 'VS Code'],
    timeToImplement: '10 Minuten',
    impact: 'high',
    steps: [
      'Aktiviere GitHub Copilot in deiner VS Code Entwicklungsumgebung',
      'Markiere den zu überprüfenden Code-Block oder die gesamte Datei',
      'Öffne den Copilot Chat und frage: "Review this code for performance, security, and best practices"',
      'Prüfe die Verbesserungsvorschläge auf Sinnhaftigkeit und mögliche Seiteneffekte',
      'Implementiere die sinnvollen Änderungen schrittweise mit Tests'
    ],
    examples: [
      'Legacy JavaScript Code wird analysiert und Copilot schlägt moderne ES6+ Syntax und Performance-Verbesserungen vor',
      'Python-Funktion mit Sicherheitslücken wird überprüft und Copilot zeigt sichere Alternativen für Input-Validierung auf',
      'React Component wird auf Best Practices geprüft und Copilot empfiehlt Memoization und bessere State-Verwaltung'
    ],
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
    tools: ['Claude', 'Claude 3'],
    timeToImplement: '15 Minuten',
    impact: 'medium',
    steps: [
      'Lade deinen ersten Blog-Artikel Entwurf in Claude hoch',
      'Bitte um eine Analyse der Struktur, Lesbarkeit und SEO-Potentiale',
      'Lass dir konkrete Verbesserungsvorschläge für Headlines, Meta-Description und Keyword-Dichte geben',
      'Überarbeite den Artikel basierend auf den Vorschlägen',
      'Lasse den finalen Entwurf nochmals auf Ton und Zielgruppen-Ansprache prüfen'
    ],
    examples: [
      'Tech-Blog Artikel über KI wird von 800 auf 1200 Wörter erweitert mit besserer Struktur und 3 zusätzlichen SEO-Keywords',
      'Unternehmens-Blog Post erhält eine packendere Einleitung und Call-to-Actions die Conversion um 25% steigern',
      'Tutorial-Artikel wird in verständlichere Sprache umgeschrieben und mit praktischen Beispielen angereichert'
    ],
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
    tools: ['DALL-E 3', 'ChatGPT Plus'],
    timeToImplement: '20 Minuten',
    impact: 'medium',
    steps: [
      'Definiere die Anforderungen: Zielgruppe, Farben, Stil und Funktionen der UI',
      'Erstelle einen detaillierten Prompt mit Begriffen wie "modern UI mockup", "clean design", spezifischen Farben und Layout-Elementen',
      'Generiere mehrere Varianten und wähle die beste als Ausgangspunkt',
      'Verfeinere den Prompt iterativ für Details wie Buttons, Navigation oder Typografie',
      'Exportiere das finale Mockup und verwende es als Vorlage für die Entwicklung'
    ],
    examples: [
      'E-Commerce App Mockup wird in 10 Minuten erstellt mit modernem Design, Product Cards und Checkout-Flow',
      'Dashboard für Analytics Tool bekommt übersichtliches Layout mit Charts, Widgets und benutzerfreundlicher Navigation',
      'Mobile Banking App Konzept entsteht mit sicherem Login, Überweisungsformular und Account-Übersicht'
    ],
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
    tools: ['ChatGPT', 'Code Interpreter'],
    timeToImplement: '30 Minuten',
    impact: 'high',
    steps: [
      'Lade deine CSV-Datei in ChatGPT Code Interpreter hoch',
      'Beschreibe deine Analyse-Ziele: "Zeige mir Trends, Ausreißer und Korrelationen in den Daten"',
      'Lasse automatisch passende Visualisierungen (Diagramme, Heatmaps, Scatter Plots) erstellen',
      'Bitte um statistische Kennzahlen und Interpretation der Ergebnisse',
      'Dokumentiere die wichtigsten Insights in einem übersichtlichen Report'
    ],
    examples: [
      'Verkaufsdaten von 12 Monaten werden analysiert und zeigen saisonale Trends sowie die 3 profitabelsten Produktkategorien',
      'Kundenfeedback aus 500 Umfragen wird ausgewertet und enthüllt die 5 wichtigsten Verbesserungspunkte für das Produkt',
      'Website Analytics ergeben überraschende Nutzerverhalten-Muster und Optimierungsvorschläge für höhere Conversion'
    ],
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
    tools: ['ChatGPT', 'Notion'],
    timeToImplement: '25 Minuten',
    impact: 'high',
    steps: [
      'Definiere dein konkretes Lernziel und dein aktuelles Wissenslevel',
      'Frage ChatGPT: "Erstelle mir einen 4-Wochen Lernplan für [Skill] mit täglichen 30-Minuten Lektionen"',
      'Bitte um spezifische Übungen, Ressourcen und Meilensteine für jede Woche',
      'Übertrage den Plan in Notion oder dein bevorzugtes Tool mit Checkboxen',
      'Tracke täglich deinen Fortschritt und passe den Plan bei Bedarf an'
    ],
    examples: [
      'Python Programmierung für Anfänger wird in 4-Wochen Plan mit täglichen Übungen und 3 Praxisprojekten strukturiert',
      'Digital Marketing Lernpfad enthält SEO, Social Media und Analytics mit wochenweisen Zielen und Erfolgsmessung',
      'Excel Power User Kurs wird individuell angepasst an bestehende Kenntnisse mit fortgeschrittenen Formeln und Makros'
    ],
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
    tools: ['Zapier', 'ChatGPT', 'Make'],
    timeToImplement: '45 Minuten',
    impact: 'high',
    steps: [
      'Identifiziere einen wiederkehrenden Prozess (z.B. Lead-Qualifizierung, Rechnungsstellung)',
      'Erstelle einen neuen Zapier-Workflow mit dem entsprechenden Trigger',
      'Füge AI-Aktionen hinzu: ChatGPT für Textverarbeitung oder Formatter für Datenbereinigung',
      'Konfiguriere die Ausgabe-Aktionen (E-Mail, CRM-Update, Slack-Nachricht)',
      'Teste den Workflow mit Echtdaten und optimiere die AI-Prompts für bessere Ergebnisse'
    ],
    examples: [
      'Lead-Qualifizierung: Neue Website-Anfragen werden automatisch bewertet und an den passenden Vertriebsmitarbeiter weitergeleitet',
      'Rechnungsverarbeitung: Eingehende Rechnungen werden gescannt, kategorisiert und zur Freigabe an die Buchhaltung gesendet',
      'Kundensupport: Häufige Fragen werden automatisch erkannt und mit vorgefertigten Lösungen beantwortet'
    ],
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
    tools: ['ChatGPT', 'Canva AI', 'Buffer'],
    timeToImplement: '35 Minuten',
    impact: 'medium',
    steps: [
      'Definiere deine Zielgruppe, Brand Voice und 3-5 Content-Kategorien',
      'Generiere mit ChatGPT 30 Post-Ideen mit Hooks, Captions und Hashtags',
      'Erstelle passende Visuals mit Canva AI unter Verwendung deiner Brand-Farben',
      'Plane die Posts in Buffer für optimale Posting-Zeiten ein',
      'Überwache die Performance und passe den Kalender basierend auf Engagement-Daten an'
    ],
    examples: [
      'B2B SaaS Unternehmen erhält 30 LinkedIn Posts mit Industry Insights, Customer Success Stories und Produktupdates',
      'Lifestyle Blog bekommt Instagram Content-Mix aus Behind-the-Scenes, Tutorials und User-Generated Content mit passenden Hashtags',
      'E-Commerce Shop erhält saisonalen Content-Kalender mit Produktplatzierungen, Rabattaktionen und Community-Building Posts'
    ],
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
    tools: ['GPT-4', 'Gmail', 'Zapier'],
    timeToImplement: '60 Minuten',
    impact: 'high',
    steps: [
      'Verbinde dein Gmail-Konto mit Zapier und richte die GPT-4 API ein',
      'Definiere Kategorien von E-Mails die automatisiert werden sollen (Support, Sales, etc.)',
      'Erstelle Templates und Prompts für verschiedene E-Mail-Typen in GPT-4',
      'Konfiguriere Trigger-Regeln basierend auf Absender, Betreff oder Keywords',
      'Teste die Automatisierung mit wenigen E-Mails und überwache die Qualität der Antworten'
    ],
    examples: [
      'Kundensupport E-Mails werden zu 70% automatisch beantwortet mit personalisierten Lösungen basierend auf Kundenhistorie',
      'Sales Follow-ups werden automatisch generiert mit relevanten Produktinformationen und individuellen Angeboten',
      'Newsletter-Anmeldungen erhalten personalisierte Willkommensserie mit branchenspezifischen Inhalten'
    ],
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
    tools: ['GitHub Copilot', 'Jest', 'VS Code'],
    timeToImplement: '15 Minuten',
    impact: 'high',
    steps: [
      'Wähle die Funktion oder Klasse aus, für die du Tests benötigst',
      'Kommentiere über der Funktion: "Generate comprehensive unit tests for this function"',
      'Lasse Copilot Tests für Happy Path, Edge Cases und Error Handling generieren',
      'Ergänze manuell spezielle Testfälle die für deine Business Logic wichtig sind',
      'Führe die Tests aus und passe sie basierend auf Fehlern oder fehlender Coverage an'
    ],
    examples: [
      'E-Commerce Checkout-Funktion erhält 15 Unit Tests für Payment-Validierung, Warenkorb-Logic und Error Handling',
      'User Authentication System wird mit Tests für Login, Registrierung und Passwort-Reset abgedeckt',
      'API Endpoints bekommen automatisch Tests für verschiedene HTTP Status Codes und Request-Validierung'
    ],
    slug: generateSlug('Unit Tests mit GitHub Copilot generieren'),
    createdAt: new Date('2024-01-24'),
    updatedAt: new Date('2024-01-24')
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
    tools?: string[]
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

    // Tools filter
    if (filters.tools && filters.tools.length > 0) {
      const hasMatchingTool = trick.tools.some(tool => 
        filters.tools!.includes(tool)
      )
      if (!hasMatchingTool) return false
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