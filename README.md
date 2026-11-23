# Cake Point

React + Vite implementation of the Figma "baking" landing page
(file `pfXeBGNFmsNMA78xceQEX6`, node `133:1406`).

## Run

```bash
npm install
npm run assets   # downloads images/SVGs from Figma into public/assets
cp .env.example .env   # set VITE_WHATSAPP_NUMBER
npm run dev
```

The Figma asset URLs expire after 7 days. If `npm run assets` fails, ask Claude to
re-run `get_design_context` on node `133:1406` and paste the fresh URLs into
`scripts/download-assets.sh`.

## Structure

- `src/styles.css` - design tokens (`:root`) + all styles (plain CSS, no Tailwind)
- `src/data.js` - category content, flavours, weights, nav links
- `src/components/` - Navbar, Banner, CategoryCard, CustomizeForm, Footer

## Notes

- `CategoryCard` is the code twin of the Figma component **Category Card** (`181:1336`).
- Footer is an empty dark block in the design - fill it in `Footer.jsx`.
