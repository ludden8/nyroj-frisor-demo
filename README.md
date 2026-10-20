# Nyroj Frisør — demo-nettside

Dette er en statisk nettside laget med HTML, CSS og JavaScript, klar for Cloudflare Pages.

## Filer
- `index.html` — innhold og struktur
- `styles.css` — design og responsiv layout
- `script.js` — mobilmeny, årstall i footer og lukkbar demo-merknad

## Test lokalt
Åpne `index.html` i nettleseren. For en mer realistisk lokal forhåndsvisning kan du bruke Live Server i VS Code.

## Publiser via Cloudflare Pages (uten byggesteg)
1. Logg inn på Cloudflare.
2. Gå til **Workers & Pages** → opprett en Pages-applikasjon.
3. Velg direkte opplasting / **Upload your static files** (navn i grensesnittet kan variere).
4. Last opp filene i denne mappen, eller en ZIP som inneholder filene på toppnivå.
5. Publiser. Cloudflare gir deg en `*.pages.dev`-adresse.
6. Åpne lenken på mobil med mobildata og test alle knapper og lenker.

Alternativt kan du koble et GitHub-repository til Cloudflare Pages for automatisk publisering ved hver push.

## Før du viser den til kunden
- Denne siden er en uoffisiell demo og inneholder en synlig demo-merknad.
- Bekreft at bedriften ønsker å bruke siden før du publiserer den som offisiell nettside.
- Bekreft telefon, e-post, åpningstider, adresse og alle tjenester med eieren.
- Opplysningene du ga inneholder forskjellige tall for antall Google-anmeldelser; derfor vises ikke et fast anmeldelsestall eller en påstått live-widget.
- Anmeldelsesknappene åpner Google Maps-søk. Dette er ikke en innebygd live Google Reviews-widget.
- Bilder lastes fra Unsplash og Google Fonts lastes eksternt. Internett kreves for disse ressursene. Bytt gjerne til bilder bedriften har gitt tillatelse til å bruke.
- Ingen bestillingsmotor eller kontaktskjema er implementert. Kontaktknapper åpner telefon eller e-post.
- Bekreft at salongen har godkjent tekst, bilder og design før du fjerner demo-merknaden.
- Vurder personvern, informasjonskapsler og tredjepartstjenester før offentlig lansering.

## Eget domene
Når bedriften godkjenner siden, kan eierens domene kobles til Pages-prosjektet via Cloudflare Pages sine Custom domains-innstillinger. Avtal eierskap, tilgang og hvem som betaler eventuelle domene- og driftkostnader.
