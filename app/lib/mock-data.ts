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
  // From curated-ki-tips.json
  {
    id: '1',
    title: 'Der 22.000-Zeilen Production Code Trick',
    description: 'Anthropic mergte erfolgreich 22.000 Zeilen KI-generierten Code in Production - mit dieser revolutionären Methode kannst du das auch!\n\n**Warum es funktioniert:** Diese Methode nutzt das Prinzip der verifizierbaren Checkpoints - du musst nicht jeden Code verstehen, sondern nur die Ergebnisse validieren können.',
    category: 'programming',
    difficulty: 'advanced',
    tools: ['Claude', 'Claude Code'],
    timeToImplement: '45-60 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Investiere 15-20 Minuten in die Vorbereitung - sammle alle Requirements, Kontext und Beispiele in einem strukturierten Dokument',
      'Schritt 2: Fokussiere dich auf "Leaf Nodes" - Teile deines Codes, von denen nichts anderes abhängt',
      'Schritt 3: Erstelle verifizierbare Input/Output Tests BEVOR du die KI Code generieren lässt',
      'Schritt 4: Lass die KI arbeiten und validiere nur die Ergebnisse, nicht den Code selbst'
    ],
    examples: [
      'Beispiel 1: Refactoring eines 10.000 Zeilen Legacy-Systems in 2 Tagen statt 2 Wochen',
      'Beispiel 2: Automatische Migration einer kompletten Datenbank-Schicht mit 95% Erfolgsrate'
    ],
    slug: generateSlug('Der 22.000-Zeilen Production Code Trick'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '2',
    title: 'Interaktive Dashboards ohne Code erstellen',
    description: 'Verwandle komplexe PDFs und Daten in interaktive Dashboards - in unter 5 Minuten, ohne eine Zeile Code zu schreiben!\n\n**Warum es funktioniert:** Das Gehirn verarbeitet visuelle Informationen 60.000x schneller als Text. Interaktive Elemente aktivieren zusätzlich das Belohnungszentrum.',
    category: 'data-analysis',
    difficulty: 'beginner',
    tools: ['Claude'],
    timeToImplement: '10-15 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Aktiviere die Artifacts-Funktion in Claude\'s Einstellungen',
      'Schritt 2: Lade dein PDF/Daten hoch mit dem Prompt: "Erstelle ein interaktives Dashboard zur Visualisierung dieser Informationen"',
      'Schritt 3: Nutze das Zauberwort "interaktiv" für klickbare Elemente',
      'Schritt 4: Bei Fehlern einfach sagen: "Bitte behebe den Fehler" - Claude fixt es selbst!'
    ],
    examples: [
      'Beispiel 1: 50-seitiges Whitepaper in übersichtliches Dashboard mit 6 Tabs verwandelt',
      'Beispiel 2: Verkaufsdaten-CSV in interaktive Kundenanalyse mit automatischen Insights'
    ],
    slug: generateSlug('Interaktive Dashboards ohne Code erstellen'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '3',
    title: 'Der 80% Zeitersparnis Projects-Trick',
    description: 'Mit Claude\'s Projects-Feature erstellst du konsistente Inhalte 5x schneller - perfekt für Newsletter, Dokumentationen und Marketing!\n\n**Warum es funktioniert:** Durch die Trennung von Projekt- und Chat-Kontext nutzt du das Prinzip der modularen Wiederverwendbarkeit optimal aus.',
    category: 'productivity',
    difficulty: 'intermediate',
    tools: ['Claude'],
    timeToImplement: '20-30 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Erstelle ein Projekt und füge deine Kern-Dokumente (Style Guide, Vorlagen) als Projekt-Kontext hinzu',
      'Schritt 2: Erstelle separate Chats für verschiedene Outputs (Newsletter, Blog, Social Media)',
      'Schritt 3: Füge in jedem Chat spezifische Beispiele als Chat-Kontext hinzu',
      'Schritt 4: Generiere neue Inhalte mit perfekter Konsistenz in Sekunden'
    ],
    examples: [
      'Beispiel 1: Product Manager erstellt 5 verschiedene Ankündigungen in 30 Minuten statt 3 Stunden',
      'Beispiel 2: Content Team produziert 20 konsistente Blog-Posts pro Woche statt 5'
    ],
    slug: generateSlug('Der 80% Zeitersparnis Projects-Trick'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '4',
    title: 'Der unterschätzte Few-Shot Prompting Trick',
    description: 'Verbessere deine KI-Outputs um 300% mit diesem einfachen Trick: Gib 2-3 Beispiele statt nur Anweisungen!\n\n**Warum es funktioniert:** KI-Modelle lernen durch Mustererkennung. Konkrete Beispiele aktivieren tiefere Netzwerkschichten als abstrakte Beschreibungen.',
    category: 'learning',
    difficulty: 'beginner',
    tools: ['ChatGPT', 'Claude', 'Gemini'],
    timeToImplement: '5-10 Minuten',
    impact: 'medium',
    steps: [
      'Schritt 1: Statt "Schreibe eine E-Mail" nutze "Schreibe eine E-Mail im Stil dieser Beispiele:"',
      'Schritt 2: Füge 2-3 deiner besten vergangenen E-Mails als Referenz hinzu',
      'Schritt 3: Beschreibe, was die Beispiele gut macht (Ton, Struktur, Länge)',
      'Schritt 4: Lass die KI im gleichen Stil neue Inhalte erstellen'
    ],
    examples: [
      'Beispiel 1: LinkedIn-Posts mit 5x höherer Engagement-Rate durch Beispiel-basierte Prompts',
      'Beispiel 2: E-Mail-Antwortrate von 15% auf 45% gesteigert durch Few-Shot Templates'
    ],
    slug: generateSlug('Der unterschätzte Few-Shot Prompting Trick'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '5',
    title: 'Chain-of-Thought: Der Geheimtrick für komplexe Aufgaben',
    description: 'Teile große Aufgaben in kleine Schritte und verbessere die Qualität deiner KI-Outputs dramatisch - wie Profis es machen!\n\n**Warum es funktioniert:** Schrittweises Vorgehen reduziert die kognitive Last und ermöglicht Kurskorrekturen bei jedem Zwischenschritt.',
    category: 'productivity',
    difficulty: 'intermediate',
    tools: ['ChatGPT', 'Claude'],
    timeToImplement: '15-20 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Zerlege deine Aufgabe in 3-5 logische Schritte',
      'Schritt 2: Beginne mit Schritt 1 und verfeinere das Ergebnis',
      'Schritt 3: Nutze das verfeinerte Ergebnis als Input für Schritt 2',
      'Schritt 4: Iteriere durch alle Schritte für ein perfektes Endergebnis'
    ],
    examples: [
      'Beispiel 1: Bewerbungsschreiben - erst Hook, dann Hauptteil, dann Schluss = 3x bessere Qualität',
      'Beispiel 2: Komplexe Präsentation in 5 Schritten statt einem großen Prompt erstellt'
    ],
    slug: generateSlug('Chain-of-Thought: Der Geheimtrick für komplexe Aufgaben'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '6',
    title: 'Claude\'s versteckte Power-Settings',
    description: 'Diese 4 Claude-Einstellungen kennen 90% der Nutzer nicht - dabei sparen sie dir täglich 30 Minuten!\n\n**Warum es funktioniert:** Optimierte Einstellungen eliminieren Reibungsverluste und aktivieren versteckte Features für maximale Effizienz.',
    category: 'productivity',
    difficulty: 'beginner',
    tools: ['Claude'],
    timeToImplement: '5 Minuten',
    impact: 'medium',
    steps: [
      'Schritt 1: Aktiviere "Artifacts" für separates Output-Fenster',
      'Schritt 2: Schalte "CSV Chat Suggestions" ein, aber "Prompt Examples" aus',
      'Schritt 3: Verbinde Google Drive für nahtlosen Dateizugriff',
      'Schritt 4: Aktiviere "Analysis Tool" für automatische Datenvisualisierung'
    ],
    examples: [
      'Beispiel 1: Blog-Post Editing 3x schneller durch Artifacts-Fenster',
      'Beispiel 2: Datenanalyse in 5 Minuten statt 30 durch Analysis Tool'
    ],
    slug: generateSlug('Claude\'s versteckte Power-Settings'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '7',
    title: 'KI als empathischer Gesprächspartner',
    description: '9% aller KI-Konversationen drehen sich um emotionale Themen - so nutzt du KI für mentale Gesundheit und persönliches Wachstum!\n\n**Warum es funktioniert:** KI bietet einen urteilsfreien Raum und ist 24/7 verfügbar - das reduziert die Hemmschwelle für schwierige Gespräche.',
    category: 'content-creation',
    difficulty: 'beginner',
    tools: ['Claude', 'ChatGPT'],
    timeToImplement: '10-15 Minuten',
    impact: 'medium',
    steps: [
      'Schritt 1: Nutze KI als Tagebuch-Partner: "Hilf mir, meine Gedanken zu sortieren über..."',
      'Schritt 2: Bitte um verschiedene Perspektiven: "Zeige mir 3 Wege, diese Situation zu betrachten"',
      'Schritt 3: Erstelle Aktionspläne: "Was sind konkrete nächste Schritte?"',
      'Schritt 4: Nutze KI für Reflexion: "Was kann ich aus dieser Erfahrung lernen?"'
    ],
    examples: [
      'Beispiel 1: Tägliche 10-Minuten Reflexion mit KI steigert Selbstbewusstsein um 40%',
      'Beispiel 2: Karriere-Entscheidungen durch strukturierte KI-Gespräche klarer getroffen'
    ],
    slug: generateSlug('KI als empathischer Gesprächspartner'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '8',
    title: 'MVP in 48 Stunden mit Claude',
    description: 'Startups nutzen diesen Trick, um funktionierende Prototypen in 2 Tagen statt 2 Wochen zu bauen!\n\n**Warum es funktioniert:** Durch Fokus auf Kernfunktionen und KI-generierte Boilerplate-Code sparst du 90% der initialen Entwicklungszeit.',
    category: 'business',
    difficulty: 'intermediate',
    tools: ['Claude', 'Claude Code'],
    timeToImplement: '30-45 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Definiere 3 Kern-Features deines MVPs - nicht mehr!',
      'Schritt 2: Erstelle User Stories im Format: "Als [Nutzer] möchte ich [Aktion] damit [Nutzen]"',
      'Schritt 3: Lass Claude den kompletten Tech-Stack und Architektur vorschlagen',
      'Schritt 4: Generiere Code Feature für Feature und teste nach jedem Schritt'
    ],
    examples: [
      'Beispiel 1: SaaS-Tool für Projektmanagement in 48h live - erste zahlende Kunden nach 5 Tagen',
      'Beispiel 2: E-Commerce Plattform-Prototyp in einem Wochenende - 100k Umsatz im ersten Monat'
    ],
    slug: generateSlug('MVP in 48 Stunden mit Claude'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '9',
    title: 'Research Papers 10x schneller schreiben',
    description: 'Studenten schreiben Research Papers in 2 Tagen statt 2 Wochen - mit diesem strukturierten KI-Workflow!\n\n**Warum es funktioniert:** Die Methode trennt Recherche, Strukturierung und Schreiben in optimierte KI-unterstützte Phasen.',
    category: 'learning',
    difficulty: 'intermediate',
    tools: ['Claude', 'Perplexity'],
    timeToImplement: '25-35 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Nutze Perplexity für initiale Recherche mit akademischen Quellen',
      'Schritt 2: Erstelle mit Claude eine detaillierte Gliederung basierend auf den Quellen',
      'Schritt 3: Schreibe jeden Abschnitt einzeln mit Claude, immer mit Quellen-Referenz',
      'Schritt 4: Lass Claude den kompletten Text auf Kohärenz und akademischen Stil prüfen'
    ],
    examples: [
      'Beispiel 1: Master-Thesis Literaturreview in 3 Tagen statt 3 Wochen fertiggestellt',
      'Beispiel 2: Student verbesserte Notendurchschnitt von 2.3 auf 1.3 durch strukturierte KI-Nutzung'
    ],
    slug: generateSlug('Research Papers 10x schneller schreiben'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '10',
    title: 'Code-Besprechungen ohne den Code zu verstehen',
    description: 'Anthropics Geheimnis: So führst du technische Diskussionen über Code, ohne jede Zeile verstehen zu müssen!\n\n**Warum es funktioniert:** Fokus auf verifizierbare Outputs statt Implementation Details - wie ein CEO sein Unternehmen führt ohne jedes Detail zu kennen.',
    category: 'programming',
    difficulty: 'intermediate',
    tools: ['Claude', 'Claude Code'],
    timeToImplement: '20-30 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Definiere klare Akzeptanzkriterien für das Feature',
      'Schritt 2: Lass Entwickler/KI erklären: "Was macht dieser Code?" statt "Wie funktioniert er?"',
      'Schritt 3: Fokussiere auf: Inputs, Outputs, Edge Cases und Performance',
      'Schritt 4: Nutze Analogien aus anderen Bereichen für technische Konzepte'
    ],
    examples: [
      'Beispiel 1: Product Manager leitet erfolgreich 5-köpfiges Dev-Team ohne Coding-Skills',
      'Beispiel 2: CEO versteht und steuert KI-Entwicklung durch Output-fokussierte Reviews'
    ],
    slug: generateSlug('Code-Besprechungen ohne den Code zu verstehen'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  // From new-advanced-ki-tricks.json
  {
    id: '11',
    title: '22.000-Zeilen Production Merge mit Claude',
    description: 'Nutze die "Leaf Nodes" Strategie von Anthropic, um tausende Zeilen KI-generierten Code sicher in deine Production-Umgebung zu integrieren - ohne jede Zeile lesen zu müssen.',
    category: 'programming',
    difficulty: 'advanced',
    tools: ['Claude', 'Claude Code'],
    timeToImplement: '2-4 Stunden Setup',
    impact: 'high',
    steps: [
      'Schritt 1: Identifiziere "Leaf Nodes" - Code-Bereiche ohne Abhängigkeiten, die isoliert funktionieren',
      'Schritt 2: Erstelle verifiable Input/Output Paare und Stress-Tests VOR der Implementierung',
      'Schritt 3: Verbringe 15-20 Minuten damit, Claude den Kontext wie einem neuen Mitarbeiter zu erklären',
      'Schritt 4: Lass Claude implementieren und verifiziere NUR über Tests, nicht durch Code-Review'
    ],
    examples: [
      'Anthropic integrierte 22.000 Zeilen Reinforcement Learning Code in 1 Tag statt 2 Wochen - Zeitersparnis: 90%',
      'Ein Startup migrierte sein komplettes Logging-System (8.000 Zeilen) mit dieser Methode - 0 Production-Bugs nach 3 Monaten'
    ],
    slug: generateSlug('22.000-Zeilen Production Merge mit Claude'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '12',
    title: 'Vibe Coding für Production: Vergiss den Code, nicht das Produkt',
    description: 'Implementiere die revolutionäre "Vibe Coding" Methodik von Anthropic für echte Production-Systeme, bei der du den Code komplett der KI überlässt und dich nur auf Produktverifikation konzentrierst.',
    category: 'programming',
    difficulty: 'advanced',
    tools: ['Claude Code'],
    timeToImplement: '30-60 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Schreibe detaillierte Akzeptanztests für dein Feature BEVOR du mit Claude arbeitest',
      'Schritt 2: Erstelle ein isoliertes Docker-Environment für sichere Experimente',
      'Schritt 3: Gib Claude vollständige Implementierungsfreiheit mit klaren Produkt-Constraints',
      'Schritt 4: Validiere ausschließlich über Tests und User-Akzeptanz, nicht durch Code-Inspektion'
    ],
    examples: [
      'Eric von Anthropic codierte 2 Monate mit gebrochenem Arm nur über Claude - 100% Produktivität beibehalten',
      'Ein Team reduzierte Feature-Entwicklungszeit von 2 Wochen auf 1 Tag durch Vibe Coding'
    ],
    slug: generateSlug('Vibe Coding für Production: Vergiss den Code, nicht das Produkt'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '13',
    title: 'Die 15-Minuten Vorbereitungs-Konversation',
    description: 'Nutze Anthropics geheime Technik einer separaten 15-20 minütigen Planungs-Konversation mit Claude, bevor du große Features implementierst.',
    category: 'productivity',
    difficulty: 'intermediate',
    tools: ['Claude', 'Claude Code'],
    timeToImplement: '15-20 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Starte eine SEPARATE Claude-Konversation nur für die Planung',
      'Schritt 2: Erkunde gemeinsam die Codebase, diskutiere Patterns und Constraints',
      'Schritt 3: Lass Claude einen detaillierten Implementierungsplan als Artifact erstellen',
      'Schritt 4: Nutze diesen Plan in einer NEUEN Konversation für die eigentliche Implementierung'
    ],
    examples: [
      'Entwickler bei Anthropic berichten von 90% höherer Erfolgsrate bei komplexen Features mit dieser Methode',
      'Ein Solo-Founder implementierte ein komplettes Payment-System in 4 Stunden statt 2 Tagen'
    ],
    slug: generateSlug('Die 15-Minuten Vorbereitungs-Konversation'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '14',
    title: 'CLAUDE.md - Das permanente KI-Gedächtnis System',
    description: 'Erstelle eine CLAUDE.md Datei in deinem Projekt-Root, die Claude automatisch als permanentes Gedächtnis nutzt - eine kaum bekannte aber extrem mächtige Funktion.',
    category: 'productivity',
    difficulty: 'beginner',
    tools: ['Claude Code'],
    timeToImplement: '10-15 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Erstelle eine CLAUDE.md im Root deines Projekts',
      'Schritt 2: Dokumentiere Coding-Standards, häufige Befehle, und Projekt-Kontext',
      'Schritt 3: Füge spezifische Instruktionen wie "npm run lint nach jeder Änderung" hinzu',
      'Schritt 4: Claude Code liest diese Datei automatisch bei jeder Session'
    ],
    examples: [
      'Teams berichten von 80% weniger Wiederholungen in Instruktionen durch CLAUDE.md',
      'Ein Projekt reduzierte Onboarding-Zeit neuer Entwickler von 2 Tagen auf 2 Stunden'
    ],
    slug: generateSlug('CLAUDE.md - Das permanente KI-Gedächtnis System'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '15',
    title: 'Interactive Dashboard Magic ohne eine Zeile Code',
    description: 'Verwandle jedes PDF, Whitepaper oder Datensatz in ein voll funktionsfähiges, interaktives Dashboard mit einem einzigen Prompt - ohne Programmierkenntnisse.',
    category: 'business',
    difficulty: 'intermediate',
    tools: ['Claude'],
    timeToImplement: '5-10 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Lade dein Dokument hoch und nutze IMMER das Wort "interactive" im Prompt',
      'Schritt 2: Spezifiziere "create an interactive dashboard to visualize this"',
      'Schritt 3: Wenn Fehler auftreten, sage einfach "fix the error" - Claude korrigiert selbst',
      'Schritt 4: Exportiere als SVG oder nutze direkt im Browser mit Copy-Paste'
    ],
    examples: [
      'Marketing Manager verwandelte 50-seitiges Whitepaper in interaktives Dashboard in 8 Minuten',
      'Data Analyst erstellt wöchentlich 5 Dashboards ohne Python/R - Zeitersparnis: 15 Stunden/Woche'
    ],
    slug: generateSlug('Interactive Dashboard Magic ohne eine Zeile Code'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '16',
    title: 'Der KI-als-Pair-Programmer Lern-Hack',
    description: 'Lerne 4x schneller neue Technologien, indem du Claude nach JEDER Code-Entscheidung fragst: "Warum hast du X statt Y gewählt?" - eine Technik von Anthropic-Entwicklern.',
    category: 'learning',
    difficulty: 'beginner',
    tools: ['Claude', 'Claude Code'],
    timeToImplement: 'Kontinuierlich',
    impact: 'high',
    steps: [
      'Schritt 1: Lass Claude Code generieren und STOPPE nach jedem größeren Block',
      'Schritt 2: Frage: "Erkläre warum du [Library/Pattern/Ansatz] gewählt hast"',
      'Schritt 3: Challenge mit: "Welche Alternativen gab es und warum sind sie schlechter?"',
      'Schritt 4: Baue dir eine persönliche Wissensdatenbank aus den Antworten auf'
    ],
    examples: [
      'Junior Dev lernte React in 2 Wochen statt 2 Monaten durch systematisches Hinterfragen',
      'Senior Dev entdeckte 12 neue Python-Libraries in einem Projekt durch diese Methode'
    ],
    slug: generateSlug('Der KI-als-Pair-Programmer Lern-Hack'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '17',
    title: 'Project-Level Context für konsistente Unternehmenskommunikation',
    description: 'Nutze Claude Projects um einmal Firmenstandards zu definieren und dann automatisch über Newsletter, Blogs, und PR-Texte hinweg anzuwenden - spart 80% Editing-Zeit.',
    category: 'content-creation',
    difficulty: 'intermediate',
    tools: ['Claude'],
    timeToImplement: '30 Minuten Setup',
    impact: 'high',
    steps: [
      'Schritt 1: Erstelle ein Claude Project mit deinem Styleguide als Project-Level Context',
      'Schritt 2: Füge 3-5 beste Beispiele vergangener Kommunikation hinzu',
      'Schritt 3: Erstelle separate Chats für jeden Content-Typ (Newsletter, Blog, PR)',
      'Schritt 4: Claude behält automatisch Ton und Standards über alle Outputs bei'
    ],
    examples: [
      'Marketing-Team produziert 5x mehr Content mit konsistentem Brand Voice',
      'PR-Agentur reduzierte Revision Rounds von durchschnittlich 3 auf 0.5'
    ],
    slug: generateSlug('Project-Level Context für konsistente Unternehmenskommunikation'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '18',
    title: 'Die Exponential-Mindset Produktivitäts-Formel',
    description: 'Bereite dich auf die KI-Zukunft vor, indem du HEUTE schon wie 2026 arbeitest - plane Projekte für KI-Ausführung statt menschliche Implementierung.',
    category: 'programming',
    difficulty: 'advanced',
    tools: ['Claude Code', 'GitHub Copilot'],
    timeToImplement: 'Mindset-Shift',
    impact: 'high',
    steps: [
      'Schritt 1: Schätze JEDE Aufgabe in KI-Zeit (1 Tag Mensch = 1 Stunde KI)',
      'Schritt 2: Plane Features die "zu groß" für Menschen wären - KI macht sie möglich',
      'Schritt 3: Fokussiere 80% deiner Zeit auf Spezifikation statt Implementierung',
      'Schritt 4: Baue dir Skills in KI-Management statt in neuen Programmiersprachen auf'
    ],
    examples: [
      'Startup baute MVP in 3 Tagen statt 3 Monaten durch Exponential Mindset',
      'Enterprise-Team liefert jetzt wöchentlich Features die früher Quartale brauchten'
    ],
    slug: generateSlug('Die Exponential-Mindset Produktivitäts-Formel'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '19',
    title: 'Error Self-Correction Loop für perfekten Code',
    description: 'Lass Claude IMMER seine eigenen Fehler fixen statt manuell zu debuggen - eine unterschätzte Technik die 90% der Debugging-Zeit spart.',
    category: 'programming',
    difficulty: 'beginner',
    tools: ['Claude', 'Claude Code'],
    timeToImplement: '0 Minuten',
    impact: 'medium',
    steps: [
      'Schritt 1: Wenn ein Fehler auftritt, kopiere die KOMPLETTE Fehlermeldung',
      'Schritt 2: Sage nur: "Fix this error: [Fehlermeldung]" - keine weiteren Erklärungen',
      'Schritt 3: Claude analysiert und fixt meist in einem Durchgang',
      'Schritt 4: Bei hartnäckigen Fehlern: "Try a completely different approach"'
    ],
    examples: [
      'Developer fixte 47 TypeScript Fehler in 10 Minuten statt 2 Stunden',
      'Team reduzierte Debugging-Zeit um 85% durch konsequente Self-Correction'
    ],
    slug: generateSlug('Error Self-Correction Loop für perfekten Code'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '20',
    title: 'Stress-Test Driven Development für KI-Code',
    description: 'Entwickle Stress-Tests VOR der Implementierung und lass Claude Code schreiben der diese besteht - Anthropics Geheimwaffe für Production-Ready KI-Code.',
    category: 'programming',
    difficulty: 'advanced',
    tools: ['Claude Code'],
    timeToImplement: '45-60 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Definiere extreme Edge-Cases und Last-Szenarien VOR der Implementierung',
      'Schritt 2: Schreibe Stress-Tests die 100x normale Last simulieren',
      'Schritt 3: Gib Claude die Tests und lass es Code schreiben der diese besteht',
      'Schritt 4: Verifiziere nur über Test-Results, nicht durch Code-Reading'
    ],
    examples: [
      'Anthropic\'s 22k-Zeilen RL-System läuft seit Monaten stabil ohne manuelle Code-Review',
      'E-Commerce Platform handhabt Black Friday Traffic durch Stress-Test Driven Development'
    ],
    slug: generateSlug('Stress-Test Driven Development für KI-Code'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  // From new-advanced-ki-tricks-2.json
  {
    id: '21',
    title: 'Zero-Shot vs Few-Shot: Die Macht der Beispiele',
    description: 'Nutze die wissenschaftlich bewiesene Few-Shot Prompting Technik, bei der du 2-3 perfekte Beispiele mitlieferst, um die KI-Output-Qualität dramatisch zu steigern.',
    category: 'content-creation',
    difficulty: 'beginner',
    tools: ['Claude', 'ChatGPT', 'Google Gemini'],
    timeToImplement: '5-10 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Identifiziere dein bestes existierendes Beispiel (z.B. erfolgreichster LinkedIn Post)',
      'Schritt 2: Füge 2-3 Beispiele mit unterschiedlichen Stilen/Ansätzen hinzu',
      'Schritt 3: Markiere in jedem Beispiel, was es besonders macht',
      'Schritt 4: Lass die KI basierend auf diesen Mustern neuen Content erstellen'
    ],
    examples: [
      'Marketing Manager steigerte Email Open Rate von 22% auf 67% durch Few-Shot Email Templates',
      'Dating-App Nutzer erhöhte Match-Rate um 400% durch Few-Shot Pickup Lines (hypothetisches Beispiel)'
    ],
    slug: generateSlug('Zero-Shot vs Few-Shot: Die Macht der Beispiele'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '22',
    title: 'Chain of Thought für komplexe Aufgaben',
    description: 'Verwende Google\'s Chain of Thought Methode um komplexe Aufgaben wie Bewerbungen in perfekte Einzelteile zu zerlegen - mit nachweislich besseren Ergebnissen.',
    category: 'productivity',
    difficulty: 'intermediate',
    tools: ['Claude', 'ChatGPT'],
    timeToImplement: '15-20 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Zerlege deine Aufgabe in 3-5 logische Schritte',
      'Schritt 2: Lass KI jeden Schritt einzeln bearbeiten und verfeinern',
      'Schritt 3: Füge die Ergebnisse des vorherigen Schritts als Kontext hinzu',
      'Schritt 4: Iteriere bis zur Perfektion - jeder Schritt baut auf dem vorherigen auf'
    ],
    examples: [
      'Job Seeker erhielt 5x mehr Interviews durch Chain of Thought Cover Letters',
      'Startup reduzierte Pitch Deck Erstellung von 2 Wochen auf 2 Stunden'
    ],
    slug: generateSlug('Chain of Thought für komplexe Aufgaben'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '23',
    title: 'Implied Context Surface Technik',
    description: 'Mache unsichtbaren Kontext sichtbar, indem du ALLE Hintergrundinformationen explizit machst - eine unterschätzte Technik die Generic-Output verhindert.',
    category: 'productivity',
    difficulty: 'beginner',
    tools: ['Claude', 'ChatGPT', 'Perplexity'],
    timeToImplement: '5 Minuten',
    impact: 'medium',
    steps: [
      'Schritt 1: Schreibe deinen initialen Prompt',
      'Schritt 2: Frage dich: "Was weiß ich, was die KI nicht weiß?"',
      'Schritt 3: Füge ALLE Kontextinformationen hinzu (Budget, Timeline, Constraints)',
      'Schritt 4: Erwähne explizit was NICHT gewünscht ist'
    ],
    examples: [
      'Vegetarier bekam endlich passende Restaurant-Empfehlungen nach Kontext-Ergänzung',
      'Manager erhielt 80% relevantere Negotiation-Strategien durch Industry-Kontext'
    ],
    slug: generateSlug('Implied Context Surface Technik'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '24',
    title: 'Custom AI Solutions für wiederkehrende Probleme',
    description: 'Baue dir maßgeschneiderte KI-Workflows für deine häufigsten Aufgaben - ohne technisches Wissen durch Claude Projects oder GPT Builder.',
    category: 'business',
    difficulty: 'intermediate',
    tools: ['Claude', 'ChatGPT'],
    timeToImplement: '30-45 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Identifiziere eine Aufgabe die du >5x pro Woche machst',
      'Schritt 2: Dokumentiere deinen exakten Prozess mit allen Entscheidungskriterien',
      'Schritt 3: Erstelle einen spezialisierten GPT/Claude Project mit diesem Wissen',
      'Schritt 4: Verfeinere über 1 Woche bis zur Perfektion'
    ],
    examples: [
      'Sales Manager automatisierte Priorisierung von 200 Kunden - spart 10h/Woche',
      'Johns Hopkins steigerte Diagnose-Genauigkeit von 5% auf 40% mit Custom AI'
    ],
    slug: generateSlug('Custom AI Solutions für wiederkehrende Probleme'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '25',
    title: 'Der Agentic Search Ansatz von Claude Code',
    description: 'Nutze Claude Codes revolutionäre "Agentic Search" Methode für deine eigenen Recherchen - suche iterativ und intelligent statt alles auf einmal zu scannen.',
    category: 'learning',
    difficulty: 'intermediate',
    tools: ['Claude Code', 'Perplexity', 'Claude'],
    timeToImplement: '10-15 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Starte mit einer explorativen Suche statt spezifischer Queries',
      'Schritt 2: Analysiere erste Ergebnisse und identifiziere neue Suchbegriffe',
      'Schritt 3: Iteriere 3-4 mal mit verfeinerten Suchen basierend auf Findings',
      'Schritt 4: Lass KI die Verbindungen zwischen Suchergebnissen herstellen'
    ],
    examples: [
      'Entwickler fand kritischen Bug in 5 Min statt 2 Stunden durch Agentic Search',
      'Researcher entdeckte 3 neue Paper-Connections durch iterative Exploration'
    ],
    slug: generateSlug('Der Agentic Search Ansatz von Claude Code'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '26',
    title: 'Multi-Claude Orchestrierung für Parallelarbeit',
    description: 'Lerne die fortgeschrittene Technik mehrere Claude-Instanzen parallel zu orchestrieren - eine Geheimwaffe der Anthropic-Entwickler für massive Produktivität.',
    category: 'programming',
    difficulty: 'advanced',
    tools: ['Claude Code'],
    timeToImplement: '20-30 Minuten Setup',
    impact: 'high',
    steps: [
      'Schritt 1: Öffne 2-4 Claude Code Instanzen in separaten Terminals/Tmux',
      'Schritt 2: Teile große Aufgabe in unabhängige Teilaufgaben auf',
      'Schritt 3: Weise jeder Instanz eine spezifische Rolle/Aufgabe zu',
      'Schritt 4: Nutze Git Branches um Konflikte zu vermeiden und später zu mergen'
    ],
    examples: [
      'Anthropic-Entwickler nutzen routinemäßig 4 parallele Claudes für große Features',
      'Solo-Founder baute komplette App in 8 Stunden mit 3 parallelen Instanzen'
    ],
    slug: generateSlug('Multi-Claude Orchestrierung für Parallelarbeit'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '27',
    title: 'Escape-Taste Mastery für perfekte KI-Kontrolle',
    description: 'Meistere die Kunst des richtigen Escape-Timings in Claude Code - eine versteckte Fähigkeit die Profis von Amateuren unterscheidet.',
    category: 'programming',
    difficulty: 'intermediate',
    tools: ['Claude Code'],
    timeToImplement: 'Kontinuierliche Übung',
    impact: 'medium',
    steps: [
      'Schritt 1: Beobachte Claudes ToDo-Liste während der Ausführung',
      'Schritt 2: Drücke Escape wenn du merkst dass Claude vom Weg abkommt',
      'Schritt 3: Nutze Double-Escape um in der Konversation zurückzuspringen',
      'Schritt 4: Gib korrigierende Anweisungen und lass Claude fortfahren'
    ],
    examples: [
      'Senior Dev verhinderte 3-stündigen Irrweg durch rechtzeitiges Escape nach 5 Min',
      'Team reduzierte Bug-Rate um 75% durch aktives Escape-Management'
    ],
    slug: generateSlug('Escape-Taste Mastery für perfekte KI-Kontrolle'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '28',
    title: 'Git History Storytelling mit Claude',
    description: 'Nutze Claudes Terminal-Fähigkeiten um aus Git-History verständliche Stories zu machen - perfekt für Onboarding und Code-Verständnis.',
    category: 'learning',
    difficulty: 'beginner',
    tools: ['Claude Code'],
    timeToImplement: '5-10 Minuten',
    impact: 'medium',
    steps: [
      'Schritt 1: Zeige Claude eine wichtige Datei mit "look at this file"',
      'Schritt 2: Bitte um Git-History Analyse: "tell me the story of how this evolved"',
      'Schritt 3: Lass Claude wichtige Commits und Patterns identifizieren',
      'Schritt 4: Nutze diese Story für Dokumentation oder Onboarding'
    ],
    examples: [
      'Neuer Entwickler verstand Legacy-Code in 30 Min statt 2 Tagen',
      'Team dokumentierte 5 Jahre Code-Evolution in 2 Stunden für Audit'
    ],
    slug: generateSlug('Git History Storytelling mit Claude'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '29',
    title: 'Terminal-First Workflow Revolution',
    description: 'Transformiere deinen Workflow indem du Claude Code als Terminal-Experten nutzt - von Git-Rebase Disasters bis Docker-Orchestrierung.',
    category: 'productivity',
    difficulty: 'intermediate',
    tools: ['Claude Code'],
    timeToImplement: '0 Minuten',
    impact: 'high',
    steps: [
      'Schritt 1: Identifiziere Terminal-Aufgaben die du hasst/fürchtest',
      'Schritt 2: Beschreibe Claude die Situation in natürlicher Sprache',
      'Schritt 3: Lass Claude die komplexen Befehle ausführen',
      'Schritt 4: Lerne optional aus den verwendeten Commands für die Zukunft'
    ],
    examples: [
      'Entwickler löste "unmöglichen" Git-Rebase in 2 Min statt 2 Stunden',
      'DevOps Team automatisierte komplette Docker-Deployments durch Claude'
    ],
    slug: generateSlug('Terminal-First Workflow Revolution'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
  },
  {
    id: '30',
    title: 'Compact-Mode für unendliche Kontext-Sessions',
    description: 'Nutze den geheimen /compact Befehl um über 200k Token hinaus zu arbeiten - eine unterschätzte Funktion für Marathon-Coding-Sessions.',
    category: 'programming',
    difficulty: 'intermediate',
    tools: ['Claude Code'],
    timeToImplement: '0 Minuten',
    impact: 'medium',
    steps: [
      'Schritt 1: Arbeite normal bis zur Kontext-Warnung (bottom right)',
      'Schritt 2: Tippe "/compact" statt "/clear" für intelligente Zusammenfassung',
      'Schritt 3: Claude erstellt Summary für "nächsten Entwickler"',
      'Schritt 4: Setze Arbeit nahtlos mit komprimiertem Kontext fort'
    ],
    examples: [
      '12-Stunden Coding Session ohne Kontext-Verlust durch 3x Compact',
      'Team arbeitete 3 Tage am selben Feature mit perfekter Kontinuität'
    ],
    slug: generateSlug('Compact-Mode für unendliche Kontext-Sessions'),
    createdAt: new Date('2025-08-01'),
    updatedAt: new Date('2025-08-01')
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