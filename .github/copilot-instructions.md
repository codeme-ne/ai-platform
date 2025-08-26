### Design-Spezifikation für Webseiten-Gestaltung

#### 1. Von Grund auf beginnen (Starting from Scratch)

*   **Start mit Features, nicht dem Gesamtlayout**: Beginnen Sie den Designprozess mit der Gestaltung spezifischer, konkreter Funktionalitäten (z.B. eine "Flugsuche" mit Feldern für Start-, Zielort, Datum und Such-Button). **Vermeiden Sie es, zuerst globale Layout-Elemente wie Navigationsleisten oder Sidebars zu entwerfen**, da die dafür notwendigen Informationen erst nach der Feature-Definition vorliegen.
*   **Details kommen später**: **Verwenden Sie in frühen Phasen Low-Fidelity-Methoden** wie Skizzen auf Papier (z.B. mit einem dicken Filzstift) oder Graustufen-Designs. Dies zwingt Sie, sich auf Layout und Hierarchie zu konzentrieren und Detailversessenheit (Schriftarten, Schatten, Icons) zu vermeiden. **Halten Sie Farben zurück, bis die Hierarchie durch Abstände, Kontrast und Größe funktioniert**.
*   **Designen Sie nicht zu viel auf einmal**: Arbeiten Sie in kurzen Zyklen. **Entwerfen Sie eine einfache Version des nächsten Features, implementieren Sie es, und iterieren Sie dann**. **Vermeiden Sie es, Funktionalität anzudeuten (z.B. einen "Anhänge"-Bereich), die Sie nicht sofort umsetzen können**, um Verzögerungen zu vermeiden.
*   **Wählen Sie eine konsistente Persönlichkeit**: Definieren Sie eine Design-Persönlichkeit (z.B. "sicher und professionell", "verspielt", "schlicht"). Dies wird durch folgende konkrete Faktoren beeinflusst:
    *   **Schriftwahl**: Serifenschriftarten für einen eleganten/klassischen Look, abgerundete Sans-Serifen für verspielt, neutrale Sans-Serifen für schlicht.
    *   **Farbe**: Blau für sicher/vertraut, Gold für teuer/raffiniert, Pink für verspielt.
    *   **Eckenradius**: Kleiner Radius ist neutral, großer Radius ist verspielt, kein Radius ist seriös/formal. **Bleiben Sie hier konsistent**.
    *   **Sprache**: Formeller/professioneller oder freundlicher/lässiger Ton.
*   **Begrenzen Sie Ihre Design-Auswahlmöglichkeiten**: **Definieren Sie Designsysteme im Voraus** mit einem begrenzten Satz an Optionen für: **Schriftgrößen, Schriftstärken, Zeilenhöhen, Farben, Margins, Paddings, Breiten, Höhen, Box-Schatten, Eckenradien, Rahmenbreiten und Opazitäten**. Dies reduziert die Entscheidungsermüdung und gewährleistet Konsistenz.

#### 2. Hierarchie ist alles (Hierarchy is Everything)
*   **Visuelle Hierarchie priorisieren**: **Betonen Sie die wichtigsten Elemente und de-betonen Sie sekundäre oder tertiäre Informationen**. Vermeiden Sie, dass alle Elemente um Aufmerksamkeit konkurrieren.
*   **Größe ist nicht alles für Hierarchie**:
    *   **Schriftstärke**: Verwenden Sie **normale (z.B. 400 oder 500)** für den meisten Text und **schwerere (z.B. 600 oder 700)** für zu betonenden Text. **Vermeiden Sie Schriftstärken unter 400** für UI-Texte bei kleinen Größen.
    *   **Farbe**: Verwenden Sie **dunkle Farben für primären Inhalt**, **Grautöne für sekundären Inhalt** und **hellere Grautöne für tertiären Inhalt**.
*   **Keinen grauen Text auf farbigen Hintergründen**: **Vermeiden Sie grauen Text auf farbigen Hintergründen**, da er ausgewaschen oder deaktiviert wirken kann. Wählen Sie stattdessen eine **neue Farbe mit demselben Farbton wie der Hintergrund** und passen Sie Sättigung und Helligkeit an, um den Kontrast zu reduzieren.
*   **Betonen durch De-Betonen**: Wenn ein Hauptelement nicht hervorsticht, **de-betonen Sie die konkurrierenden Elemente**. Beispiel: Inaktive Navigationselemente erhalten eine weichere Farbe.
*   **Labels sind ein letztes Mittel**:
    *   **Weglassen von Labels**: **Lassen Sie Labels weg, wenn das Datenformat (z.B. E-Mail, Telefonnummer, Preis) oder der Kontext (z.B. "Kundensupport" unter einem Namen) die Bedeutung klar macht**.
    *   **Gestaltung benötigter Labels**: Wenn Labels erforderlich sind, **behandeln Sie sie als unterstützenden Inhalt**: kleiner, mit geringerem Kontrast oder leichterer Schriftstärke.
    *   **Betonen von Labels**: Wenn Benutzer nach Labels suchen (z.B. technische Spezifikationen), können diese betont werden (dunklere Farbe für Label, leicht hellere für den Wert).
*   **Visuelle Hierarchie von Dokumentenhierarchie trennen**: **Verwenden Sie semantische HTML-Tags (z.B. `<h1>`) für ihre Bedeutung, nicht für ihre visuelle Größe**. Visuelle Darstellung sollte die Hierarchie unterstützen. UI-Titel fungieren oft als Labels und sollten visuell kleiner sein, da der Inhalt der Fokus ist.
*   **Gewicht und Kontrast ausgleichen**:
    *   **Schwerere Elemente (z.B. solide Icons)** können durch **geringeren Kontrast (weichere Farbe)** ausgeglichen werden.
    *   **Kontrastarme Elemente (z.B. dünne 1px-Rahmen)** können durch **höheres Gewicht (dickere Rahmen)** betont werden, ohne harsch zu wirken.
*   **Semantik ist sekundär für Aktionen**: Priorisieren Sie die **visuelle Hierarchie von Aktionen**:
    *   **Primäre Aktionen**: Auffällig, **hoher Kontrast, solide Hintergrundfarben**.
    *   **Sekundäre Aktionen**: Klar, aber nicht dominant, z.B. **Outline-Stile oder geringerer Kontrast**.
    *   **Tertiäre Aktionen**: Unaufdringlich, z.B. **als Links gestaltet**.
    *   **Destruktive Aktionen**: Wenn nicht die primäre Aktion, dann als sekundäre oder tertiäre Aktion gestalten. Die auffällige (rot, fett) Gestaltung für destruktive Aktionen nur in einem Bestätigungsschritt verwenden.

#### 3. Layout und Abstände (Layout and Spacing)
*   **Mit zu viel Weißraum beginnen**: **Geben Sie Elementen zunächst übermäßig viel Raum** und reduzieren Sie ihn dann schrittweise, um eine saubere und einfache Oberfläche zu erhalten.
*   **Etablieren Sie ein Abstands- und Größensystem**: **Verwenden Sie ein begrenztes Set vordefinierter Werte**. Eine **lineare Skala ist nicht geeignet**. Beginnen Sie mit einem **Basiswert (z.B. 16px)** und erstellen Sie eine Skala, bei der die **relativen Unterschiede zwischen benachbarten Werten am kleinen Ende größer sind (z.B. 33% von 12px zu 16px)** und am großen Ende kleiner werden (z.B. 4% von 500px zu 520px). Stellen Sie sicher, dass keine zwei Werte näher als 25% beieinander liegen.
*   **Sie müssen nicht den ganzen Bildschirm ausfüllen**: **Nutzen Sie nur den benötigten Platz** (z.B. 600px Breite für Inhalte). Schmalere Layouts sind oft leichter zu interpretieren. Wenden Sie dies auch auf einzelne Sektionen an. Bei breiten UIs können Spalten eine gute Lösung sein, um den Platz besser zu nutzen.
*   **Grids sind überbewertet**: **Verlassen Sie sich nicht blind auf Spalten-Grids**.
    *   **Feste Breiten**: Verwenden Sie **feste Breiten** für Elemente (z.B. Seitenleisten), wenn dies sinnvoller ist als prozentuale Breiten. Der Hauptinhaltsbereich kann dann den restlichen Platz flexibel füllen.
    *   **Max-Width statt Skalierung**: Geben Sie Elementen eine **`max-width`**, damit sie nicht unnötig groß werden, und lassen Sie sie nur schrumpfen, wenn der Bildschirm kleiner als diese `max-width` wird.
*   **Relative Größen skalieren nicht proportional**: **Vermeiden Sie die Annahme, dass alle UI-Elemente proportional zueinander skalieren sollten** (z.B. Headlines mit `em`-Einheiten), insbesondere bei verschiedenen Bildschirmgrößen. **Große Elemente müssen auf kleineren Bildschirmen schneller schrumpfen als kleine**. Erlauben Sie auch innerhalb von Komponenten (z.B. Buttons) unabhängige Skalierung von Polsterungen/Abständen.
*   **Eindeutige Abstände vermeiden**: Wenn Gruppen von Elementen nicht durch sichtbare Trenner (Rahmen, Hintergrundfarbe) getrennt sind, **stellen Sie sicher, dass der Abstand ZWISCHEN Gruppen größer ist als der Abstand INNERHALB einer Gruppe**, um die Zugehörigkeit klar zu machen (z.B. Formularfelder, Listenpunkte).

#### 4. Textgestaltung (Designing Text)
*   **Etablieren Sie eine Typographieskala**: **Begrenzen Sie die Anzahl der verwendeten Schriftgrößen**. Eine **handverlesene Skala ist oft praktischer** für UI-Designs als mathematische modulare Skalen. **Verwenden Sie `px` oder `rem` Einheiten, vermeiden Sie `em` Einheiten** in der Skalendefinition, um Konsistenz zu gewährleisten und unvorhergesehene Grössenänderungen bei verschachtelten Elementen zu verhindern.
*   **Verwenden Sie gute Schriftarten**:
    *   **Sichere Wahl**: Neutrale Sans-Serif-Schriftarten (z.B. Systemschriftarten).
    *   **Qualität**: Bevorzugen Sie Schriftarten mit **mindestens fünf verschiedenen Schnitten (Weights)**.
    *   **Lesbarkeit**: Optimieren Sie für Lesbarkeit; **vermeiden Sie zu kondensierte Schriftarten mit kurzer x-Höhe für Fließtext**.
    *   **Orientierung**: Nutzen Sie beliebte Schriftarten und analysieren Sie Schriftarten auf gut gestalteten Websites.
*   **Zeilenlänge überprüfen**: Die optimale Zeilenlänge für Lesbarkeit liegt zwischen **45 und 75 Zeichen pro Zeile (ca. 20-35em)**. Behalten Sie diese Breite für Absätze bei, auch wenn der Gesamtinhaltsbereich breiter ist (z.B. wegen Bildern).
*   **Grundlinie, nicht Mitte**: Wenn Sie verschiedene Schriftgrößen in einer Zeile verwenden, **richten Sie diese an der Grundlinie aus, nicht vertikal zentriert**, um ein saubereres Aussehen zu erzielen.
*   **Zeilenhöhe ist proportional**: Die Zeilenhöhe sollte proportional zur Zeilenlänge und Schriftgröße sein. **Verwenden Sie eine größere Zeilenhöhe für kleine Texte und lange Zeilen**. **Verwenden Sie eine kürzere Zeilenhöhe für große Überschriften** (nahe 1.0).
*   **Nicht jeder Link braucht eine Farbe**: Wenn viele Elemente Links sind, **betonen Sie Links subtiler** (z.B. mit Schriftstärke oder einer dunkleren Farbe). Für sekundäre Links können Unterstreichungen oder Farbänderungen nur beim Hover-Zustand verwendet werden.
*   **Mit Blick auf die Lesbarkeit ausrichten**:
    *   Die meisten Texte sollten **linksbündig** sein.
    *   **Zentrierte Ausrichtung** ist nur für Überschriften oder kurze Textblöcke geeignet.
    *   **Rechtsbündige Ausrichtung** für Zahlen in Tabellen.
    *   **Blocksatz** erfordert immer **Silbentrennung**, um ungleichmäßige Abstände zu vermeiden.
*   **Laufweite effektiv nutzen**:
    *   Standardmäßig die **Laufweite der Schriftart belassen**.
    *   **Verringern Sie die Laufweite für Überschriften**, um sie straffer wirken zu lassen.
    *   **Erhöhen Sie die Laufweite für Großbuchstabentexte (All-Caps)**, um die Lesbarkeit zu verbessern.

#### 5. Arbeiten mit Farbe (Working with Color)
*   **Hex für HSL aufgeben**: **Verwenden Sie HSL (Hue, Saturation, Lightness)** anstelle von Hex oder RGB, da es die Farbwahrnehmung des menschlichen Auges intuitiver abbildet.
*   **Sie brauchen mehr Farben als Sie denken**: Eine gute Farbpalette umfasst:
    *   **8-10 Grautöne**.
    *   **5-10 Schattierungen für die Primärfarben**.
    *   **5-10 Schattierungen für Akzentfarben** (z.B. für Erfolg, Warnung, Fehler, neue Features).
*   **Schattierungen im Voraus definieren**: **Definieren Sie alle Schattierungen Ihrer Farbpalette im Voraus** (z.B. eine Neuner-Skala von 100-900). **Vermeiden Sie es, Schattierungen "on the fly" zu erstellen**. Beginnen Sie mit einer Grundfarbe, wählen Sie die dunkelsten und hellsten Schattierungen basierend auf dem Verwendungszweck (z.B. Text, Hintergrund) und füllen Sie dann die Lücken aus. **Vertrauen Sie Ihren Augen, nicht nur den mathematischen Werten**.
*   **Lichtheit darf die Sättigung nicht töten**:
    *   **Sättigung anpassen**: **Erhöhen Sie die Sättigung, wenn die Helligkeit einer Farbe von 50% abweicht (näher an 0% oder 100% liegt)**, um zu verhindern, dass die Farben ausgewaschen aussehen.
    *   **Wahrgenommene Helligkeit nutzen**: Um eine Farbe heller oder dunkler erscheinen zu lassen, **rotieren Sie den Farbton (Hue) leicht**. Um Farben heller zu machen, drehen Sie den Farbton zu helleren Hues (60°, 180°, 300°); um sie dunkler zu machen, zu dunkleren Hues (0°, 120°, 240°). **Begrenzen Sie die Farbton-Rotation auf 20-30°**.
*   **Grautöne müssen nicht grau sein**: **Sättigen Sie Grautöne leicht mit einem Farbton** (Blau für einen kühlen Look, Gelb/Orange für einen warmen Look), um ihnen Persönlichkeit zu verleihen. Achten Sie auf konsistente Sättigung über alle Grautöne.
*   **Barrierefreiheit muss nicht hässlich sein**:
    *   **WCAG-Kontrastverhältnisse**: Erfüllen Sie die **WCAG-Kontrastverhältnisse (mind. 4.5:1 für normalen Text, 3:1 für großen Text)**.
    *   **Kontrast umkehren**: Wenn weißer Text auf farbigem Hintergrund zu dunkel sein müsste, um den Kontrast zu erfüllen, **kehren Sie den Kontrast um: Verwenden Sie dunklen Text auf einem hellen Farbhintergrund**.
    *   **Farbton rotieren**: Für farbigen Text auf farbigem Hintergrund können Sie den **Farbton (Hue) zu einer von Natur aus helleren Farbe rotieren** (z.B. Cyan, Magenta, Gelb), um den Kontrast zu erhöhen, ohne die Helligkeit zu sehr zu ändern.
*   **Sich nicht allein auf Farbe verlassen**: **Farbe sollte Informationen unterstützen, niemals das einzige Mittel zur Kommunikation sein**, um Benutzer mit Farbenblindheit nicht auszuschließen. Fügen Sie z.B. Icons hinzu oder verwenden Sie Kontrastunterschiede (hell/dunkel) in Diagrammen.

#### 6. Tiefe schaffen (Creating Depth)
*   **Eine Lichtquelle emulieren**: Imitieren Sie, wie Licht mit Objekten interagiert:
    *   **Erhabene Elemente**: Machen Sie die **Oberkante heller** (z.B. durch einen oberen Rahmen oder einen kleinen, leicht vertikal versetzten Inset-Box-Schatten) und fügen Sie einen **kleinen, dunklen Box-Schatten darunter** hinzu (mit geringem Unschärferadius, scharfe Kanten).
    *   **Eingesetzte Elemente**: Machen Sie die **Unterkante heller** (z.B. durch einen unteren Rahmen oder einen leicht negativ vertikal versetzten Inset-Box-Schatten) und fügen Sie einen **kleinen, dunklen Inset-Box-Schatten oben** hinzu.
*   **Schatten zur Vermittlung von Höhe verwenden**: Schatten vermitteln Elevation auf einer virtuellen Z-Achse.
    *   **Geringe Erhebung**: **Kleinere, schärfere Schatten** (z.B. für Buttons).
    *   **Höhere Erhebung**: **Größere, weichere Schatten** (z.B. für Dropdowns, Modals).
    *   **Schatten-System**: Etablieren Sie ein **festes Schatten-System (z.B. 5 Optionen)**.
    *   **Interaktion**: Nutzen Sie Schatten für Interaktionen (z.B. größeren Schatten beim Ziehen, kleineren/keinen Schatten beim Klicken).
*   **Schatten können aus zwei Teilen bestehen**: Kombinieren Sie zwei Schatten für realistischere Effekte:
    *   **Teil 1**: Ein **größerer, weicherer Schatten** mit deutlichem vertikalen Offset und großem Weichzeichner (simuliert den direkten Lichtschatten).
    *   **Teil 2**: Ein **engerer, schärferer und dunklerer Schatten** mit geringerem vertikalen Offset und kleinerem Weichzeichner (simuliert den Bereich unter dem Objekt, wo weniger Umgebungslicht hinkommt).
    *   **Elevation berücksichtigen**: Dieser zweite Schatten sollte **bei höherer Elevation subtiler werden oder ganz verschwinden**.
*   **Auch flache Designs können Tiefe haben**:
    *   **Farbe**: Helle Objekte wirken näher, dunkle Objekte weiter weg.
    *   **Feste Schatten**: Verwenden Sie **kurze, vertikal versetzte Schatten ohne Weichzeichnung**.
*   **Elemente überlappen, um Ebenen zu schaffen**: **Überlappen Sie verschiedene Elemente**, um den Eindruck mehrerer Ebenen und Tiefe zu erzeugen (z.B. Karten überlappen Hintergründe, Elemente überlappen ihre Eltern). Bei überlappenden Bildern fügen Sie einen **"unsichtbaren Rand"** (passend zur Hintergrundfarbe) hinzu, um Kollisionen zu vermeiden.

#### 7. Arbeiten mit Bildern (Working with Images)
*   **Gute Fotos verwenden**: **Nutzen Sie professionelle Fotografen oder hochwertige Stockfotos**. Vermeiden Sie es, mit Platzhalterbildern zu designen und später schlechte Fotos einzufügen.
*   **Text benötigt konsistenten Kontrast auf Bildern**: Um Text auf Hintergrundbildern lesbar zu machen, **reduzieren Sie die Dynamik des Bildes**. Methoden:
    *   **Overlay**: Fügen Sie ein **halbtransparentes Overlay** hinzu (schwarz für hellen Text, weiß für dunklen Text).
    *   **Bildkontrast reduzieren**: **Senken Sie den Kontrast des Bildes selbst** (passen Sie die Helligkeit an, um zu kompensieren).
    *   **Bild kolorieren**: Reduzieren Sie den Bildkontrast, entsättigen Sie das Bild und fügen Sie eine **einfarbige Füllung im "Multiply"-Modus** hinzu.
    *   **Textschatten**: Fügen Sie einen **subtilen Textschatten** hinzu (großer Weichzeichner, kein Offset).
*   **Alles hat eine beabsichtigte Größe**:
    *   **Icons**: **Vergrößern Sie keine kleinen Icons**; sie wirken klobig. Wenn größere Bereiche gefüllt werden müssen, **umschließen Sie die Icons mit einer Form mit Hintergrundfarbe**.
    *   **Screenshots**: **Verkleinern Sie keine detailreichen Screenshots**; Text wird unleserlich. Nehmen Sie Screenshots bei kleineren Bildschirmgrößen auf, verwenden Sie Teilausschnitte oder zeichnen Sie eine **vereinfachte UI-Version** mit Linien anstelle von Text.
    *   **Favicons/Logos**: **Verkleinern Sie keine großen Logos für Favicons**; **zeichnen Sie eine stark vereinfachte Version neu** in der Zielgröße.
*   **Benutzergenerierte Inhalte beachten**:
    *   **Form und Größe kontrollieren**: **Zentrieren Sie Benutzerbilder in festen Containern und schneiden Sie Überschneidendes ab** (z.B. mit `background-size: cover` in CSS).
    *   **Hintergrund-Überlagerung verhindern**: Wenn Benutzerbilder einen ähnlichen Hintergrund wie Ihre UI haben, verwenden Sie einen **subtilen inneren Box-Schatten oder einen halbtransparenten inneren Rahmen**, um eine visuelle Trennung zu schaffen.

#### 8. Letzte Feinheiten (Finishing Touches)
*   **Standardwerte aufwerten**: Peppen Sie Standard-UI-Elemente auf:
    *   **Listenpunkte**: Ersetzen Sie Bullet-Points durch **Icons** (Häkchen, Pfeile, oder spezifische Icons).
    *   **Zitate**: "Befördern" Sie Zitate zu **visuellen Elementen** durch größere Größe und Farbe.
    *   **Links**: Betonen Sie Links mit **Farbe, Schriftstärke oder individuellen, dicken Unterstreichungen**.
    *   **Formular-Elemente**: Verwenden Sie **benutzerdefinierte Checkboxen und Radiobuttons in Ihren Markenfarben**.
*   **Farbe mit Akzenträndern hinzufügen**: Verwenden Sie **farbige Akzenträndern** an strategischen Stellen (z.B. oben auf einer Karte, für aktive Navigationselemente, an der Seite einer Alert-Nachricht, unter einer Überschrift oder über das gesamte Layout), um visuelles Flair hinzuzufügen.
*   **Hintergründe dekorieren**: Brechen Sie die Monotonie auf:
    *   **Hintergrundfarbe ändern**: Verwenden Sie eine andere Hintergrundfarbe, eventuell mit einem **subtilen Gradienten** (zwei Farbtöne nicht mehr als 30° auseinander).
    *   **Wiederholende Muster**: Fügen Sie **subtile, wiederholbare Muster** hinzu (niedriger Kontrast).
    *   **Einfache Grafiken**: Platzieren Sie einzelne **einfache geometrische Formen oder Teile eines Musters** im Hintergrund (niedriger Kontrast).
*   **Leere Zustände nicht übersehen**: **Gestalten Sie leere Zustände (Empty States) ansprechend** mit Illustrationen, einer klaren Handlungsaufforderung (Call-to-Action) und blenden Sie unnötige UI-Elemente aus, die erst bei vorhandenem Inhalt relevant sind.
*   **Weniger Ränder verwenden**: **Vermeiden Sie übermäßige Verwendung von Rändern zur Trennung von Elementen**. Nutzen Sie stattdessen **Box-Schatten, unterschiedliche Hintergrundfarben oder zusätzlichen Abstand**.
*   **Über den Tellerrand schauen**: **Hinterfragen Sie konventionelle Designs für Komponenten** wie Dropdowns (nutzen Sie Abschnitte, Spalten, Icons), Tabellen (kombinieren Sie Spalten, fügen Sie Bilder/Farbe hinzu) oder Radiobuttons (verwenden Sie auswählbare Karten).