#!/usr/bin/env node

/**
 * Script zum Konvertieren von YouTube-Skripten zu KI-Tipps
 * Verwendung: npm run convert-youtube
 */

import { convertYouTubeScriptsToTips, loadYouTubeScripts, saveTipsToFile } from '../app/lib/youtube-converter'
import path from 'path'

async function main() {
  try {
    console.log('🚀 Starte YouTube-zu-KI-Tipps Konvertierung...')
    
    // Pfade definieren
    const inputPath = path.join(process.cwd(), 'youtube-content.json')
    const outputPath = path.join(process.cwd(), 'generated-ki-tips.json')
    
    // YouTube-Skripte laden
    console.log('📂 Lade YouTube-Skripte...')
    const scripts = await loadYouTubeScripts(inputPath)
    console.log(`✅ ${scripts.length} Skripte gefunden`)
    
    // Zu KI-Tipps konvertieren (max. 40)
    console.log('🔄 Konvertiere zu KI-Tipps...')
    const tips = await convertYouTubeScriptsToTips(scripts, 40)
    console.log(`✅ ${tips.length} KI-Tipps generiert`)
    
    // Tipps speichern
    console.log('💾 Speichere generierte Tipps...')
    await saveTipsToFile(tips, outputPath)
    
    // Zusammenfassung ausgeben
    console.log('\n📊 Zusammenfassung:')
    console.log('==================')
    
    // Kategorien zählen
    const categoryCounts = tips.reduce((acc, tip) => {
      acc[tip.category] = (acc[tip.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    console.log('\n📁 Kategorien:')
    Object.entries(categoryCounts).forEach(([category, count]) => {
      console.log(`  - ${category}: ${count} Tipps`)
    })
    
    // Schwierigkeitsgrade zählen
    const difficultyCounts = tips.reduce((acc, tip) => {
      acc[tip.difficulty] = (acc[tip.difficulty] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    console.log('\n📈 Schwierigkeitsgrade:')
    Object.entries(difficultyCounts).forEach(([difficulty, count]) => {
      console.log(`  - ${difficulty}: ${count} Tipps`)
    })
    
    // Impact zählen
    const impactCounts = tips.reduce((acc, tip) => {
      acc[tip.impact] = (acc[tip.impact] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    console.log('\n💡 Impact:')
    Object.entries(impactCounts).forEach(([impact, count]) => {
      console.log(`  - ${impact}: ${count} Tipps`)
    })
    
    console.log('\n✨ Konvertierung erfolgreich abgeschlossen!')
    console.log(`Die generierten Tipps findest du in: ${outputPath}`)
    
  } catch (error) {
    console.error('❌ Fehler bei der Konvertierung:', error)
    process.exit(1)
  }
}

// Script ausführen
main()