# YouTube zu KI-Tipps Konverter

## Übersicht

Dieses Script konvertiert YouTube-Skripte aus einer JSON-Datei in strukturierte KI-Tipps für die AI Tricks Platform.

## Verwendung

1. **Stelle sicher, dass `youtube-skripte-tricks.json` im Root-Verzeichnis existiert**

2. **Installiere die Abhängigkeiten (falls noch nicht geschehen):**
   ```bash
   npm install
   npm install --save-dev tsx
   ```

3. **Führe die Konvertierung aus:**
   ```bash
   npm run convert-youtube
   ```

## Was das Script macht

1. **Liest** die `youtube-skripte-tricks.json` Datei
2. **Analysiert** jedes YouTube-Skript
3. **Extrahiert** bis zu 40 KI-Tipps mit folgender Struktur:
   - Hook (packende Einleitung)
   - Psychologische Begründung
   - Schritt-für-Schritt Anleitung
   - Konkrete Beispiele
4. **Kategorisiert** automatisch nach:
   - Kategorie (productivity, content-creation, etc.)
   - Schwierigkeitsgrad (beginner, intermediate, advanced)
   - Impact (low, medium, high)
   - Benötigte Tools
5. **Speichert** die Ergebnisse in `generated-ki-tips.json`

## Output

Die generierten Tipps werden in `generated-ki-tips.json` gespeichert und sind direkt kompatibel mit dem AITrick-Format der Plattform.

## Integration in die Plattform

Die generierten Tipps können auf zwei Arten in die Plattform integriert werden:

1. **Manuell**: Kopiere die Tipps aus `generated-ki-tips.json` in `app/lib/mock-data.ts`
2. **Über Admin-Interface**: Füge einzelne Tipps über `/admin/tricks/new` hinzu

## Anpassungen

Die Konvertierungslogik kann in `app/lib/youtube-converter.ts` angepasst werden:
- Kategorisierungs-Keywords
- Psychologie-Patterns
- Schritt-Generierung
- Tool-Erkennung