# Fitness Dashboard - Exact UI (React + Vite + Tailwind)

This project is generated to closely match the provided Figma screenshot (full page). It includes:
- Pixel-focused Tailwind classes and gradients
- Recharts chart layout
- Sidebar, hero banner, stat cards, right panel, and table
- The uploaded hero image placed at `src/assets/hero-banner.jpg`

## Important prerequisites
- Node 18+ (recommended)
- Move project out of OneDrive if you're using Windows (e.g., to C:\projects\fitness-dashboard-exact)
- Install dependencies after moving the folder

## Install and Run
```bash
npm install
npm run dev
```

## Notes & Troubleshooting
1. If you see ESM errors, ensure `package.json` contains "type": "module" (it does in this project).
2. If you use OneDrive, move the project to a local path outside OneDrive.
3. Tailwind is preconfigured (v3.4.14). If you want Tailwind v4, change versions in package.json.
4. For exact fonts, this project uses Inter from Google Fonts; if you need an offline font, replace it in `globals.css`.

If you want, I can also:
- Add pixel-level CSS adjustments (exact font sizes in px, letter-spacing) to match Figma to the last pixel.
- Convert to Next.js.
- Run accessibility checks and mobile responsiveness fixes.
