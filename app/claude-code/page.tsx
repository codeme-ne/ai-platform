import { Metadata } from 'next'
import { PageContainer } from '@/app/components/layout'
import { Badge, Button } from '@/app/components/atoms'
import { Terminal, Code, Zap, GitBranch, Cpu, FileCode, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Claude Code Tutorial | KI-Programmierung für Entwickler',
  description: 'Lerne Claude Code CLI, Artifacts und MCP. Praktische Anleitungen für KI-basierte Entwicklung und Automation. Von Anfänger bis Experte.',
  keywords: 'Claude Code, KI-Claude Code, Claude CLI, Claude Artifacts, MCP, Model Context Protocol, AI Coding, KI-Programmierung',
  openGraph: {
    title: 'Claude Code - Das ultimative KI-Tool für Entwickler',
    description: 'Entdecke die Macht von Claude Code für deine Entwicklungsprojekte.',
  },
}

export default function ClaudeCodePage() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="primary">NEU 2025</Badge>
            <Badge variant="success">Kostenlos verfügbar</Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Claude Code: KI-Programmierung neu definiert
          </h1>
          
          <p className="text-xl text-neutral-600 mb-6">
            Entdecke das revolutionäre Command-Line-Tool von Anthropic, das deine Art zu programmieren 
            für immer verändern wird. Von einfachen Scripts bis zu komplexen Anwendungen.
          </p>
          
          <div className="flex gap-4">
            <Button href="https://claude.ai/code" variant="primary">
              <ExternalLink className="w-4 h-4 mr-2" />
              Claude Code starten
            </Button>
            <Button href="https://docs.anthropic.com/en/docs/claude-code" variant="outline">
              Dokumentation
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Was macht Claude Code besonders?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-neutral-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <Terminal className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">CLI Integration</h3>
              <p className="text-neutral-600">
                Direkte Integration in deine Terminal-Umgebung. Keine Browser-Tabs, keine Ablenkung - 
                nur du und dein Code.
              </p>
            </div>
            
            <div className="border border-neutral-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <Code className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">7h+ Autonome Entwicklung</h3>
              <p className="text-neutral-600">
                Claude Opus 4 kann komplexe Projekte über 7 Stunden selbstständig entwickeln - 
                mit mehreren tausend Zeilen Code.
              </p>
            </div>
            
            <div className="border border-neutral-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <Zap className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Artifacts für Apps</h3>
              <p className="text-neutral-600">
                Erstelle interaktive Anwendungen ohne eine einzige Zeile Code selbst zu schreiben. 
                Von Dashboards bis zu kompletten Web-Apps.
              </p>
            </div>
            
            <div className="border border-neutral-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <GitBranch className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Git Integration</h3>
              <p className="text-neutral-600">
                Automatische Git-Commits, Pull Requests und Code Reviews. Claude versteht deine 
                Projektstruktur und arbeitet wie ein echter Entwickler.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Praktische Anwendungsfälle</h2>
          
          <div className="space-y-6">
            <div className="bg-neutral-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCode className="w-6 h-6 text-green-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Full-Stack Anwendungen</h3>
                  <p className="text-neutral-600 mb-3">
                    "Erstelle eine Todo-App mit React, TypeScript und Tailwind CSS" - Claude generiert 
                    die komplette Anwendung inklusive Backend-API und Datenbank-Schema.
                  </p>
                  <Link href="/tricks?search=full-stack" className="text-primary-600 hover:underline text-sm font-medium">
                    Mehr Full-Stack Tricks ansehen →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-blue-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Datenanalyse & Automation</h3>
                  <p className="text-neutral-600 mb-3">
                    "Analysiere diese CSV-Datei und erstelle ein interaktives Dashboard" - Claude 
                    verarbeitet deine Daten und generiert Visualisierungen mit Python oder JavaScript.
                  </p>
                  <Link href="/tricks?categories=data-analysis" className="text-primary-600 hover:underline text-sm font-medium">
                    Datenanalyse-Tricks entdecken →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Guide */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Schnellstart-Anleitung</h2>
          
          <div className="bg-neutral-900 text-neutral-100 rounded-lg p-6 mb-6">
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-start gap-3">
                <span className="text-neutral-500">#</span>
                <span>Installation des Claude Code CLI</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400">$</span>
                <span>npm install -g @anthropic/claude-code</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-500">#</span>
                <span>API-Key konfigurieren</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400">$</span>
                <span>claude-code config --api-key YOUR_API_KEY</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-500">#</span>
                <span>Erstes Projekt starten</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400">$</span>
                <span>claude-code init my-ai-project</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-700 font-bold">1</span>
              </div>
              <h4 className="font-medium mb-1">Installieren</h4>
              <p className="text-sm text-neutral-600">Claude Code CLI über npm installieren</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-700 font-bold">2</span>
              </div>
              <h4 className="font-medium mb-1">Konfigurieren</h4>
              <p className="text-sm text-neutral-600">API-Key einrichten und Projekt initialisieren</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-700 font-bold">3</span>
              </div>
              <h4 className="font-medium mb-1">Loslegen</h4>
              <p className="text-sm text-neutral-600">Mit natürlicher Sprache programmieren</p>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Pro-Tipps für Claude Code</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <ArrowRight className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium mb-1">Context ist König</h4>
                <p className="text-sm text-neutral-600">
                  Gib Claude immer genug Kontext über dein Projekt. Je mehr Informationen, desto bessere Ergebnisse.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <ArrowRight className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium mb-1">Iteratives Arbeiten</h4>
                <p className="text-sm text-neutral-600">
                  Arbeite in kleinen Schritten und verfeinere schrittweise. Claude lernt aus dem Kontext deiner Session.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <ArrowRight className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium mb-1">Model Context Protocol (MCP)</h4>
                <p className="text-sm text-neutral-600">
                  Nutze MCP für externe Datenquellen wie Datenbanken, APIs oder lokale Dateien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Bereit für die Zukunft des Programmierens?
          </h2>
          <p className="text-lg text-neutral-700 mb-6">
            Entdecke weitere Claude Code Tricks und werde zum KI-Entwickler
          </p>
          <Link href="/tricks?tools=Claude" className="btn-primary inline-flex items-center gap-2">
            Alle Claude Tricks ansehen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </PageContainer>
  )
}