# Sahara Skin Clinic — Website

Premium dermatology clinic website for Dr. Prabin Dhakal, Swoyambhu, Kathmandu.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main page — all sections |
| `style.css` | Custom CSS (palette, animations, components) |
| `script.js` | All JavaScript (interactions, card rendering) |
| `Sahara1.jpg` | Clinic logo / header image |
| `DrPrabin.jpg` | Doctor photo |

## Local Preview

Open `index.html` directly in any browser — no build step required.

For a local server (avoids CORS on the map):
```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploy to GitHub Pages

```bash
git add -A
git commit -m "Upgraded site design"
git push origin main
```
Enable **Settings → Pages → Deploy from branch → main / root**.

## Deploy to Vercel

```bash
npx vercel --prod
```
Select "Other" as framework, root directory = `./`.

---

## ⚠️ Placeholder Checklist — Replace Before Going Live

| Location | Placeholder | Replace With |
|----------|------------|-------------|
| `script.js` line 1 (WhatsApp) | `9779779779779` | Real WhatsApp number (digits only, with country code) |
| `index.html` — WhatsApp button | `https://wa.me/9779779779779` | Real number |
| `index.html` — Contact form | `https://formspree.io/f/YOUR_FORM_ID` | Your Formspree endpoint (sign up free at formspree.io) |
| `index.html` — Google Maps iframe | The `src` URL in `.map-wrap` | Get embed URL from Google Maps → Share → Embed a map |
| `index.html` — Social links | All `href="#"` on FB / Instagram / LinkedIn | Real social profile URLs |
| `index.html` — OG image | `og:image` meta tag | Full absolute URL to a hosted image |
| `index.html` — canonical URL | `link rel="canonical"` | Live domain once deployed |
| Footer copyright | `2024` | Current year |

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Rose-gold | `#C9956C` | Accents, CTAs, dividers |
| Warm cream | `#FDF6F0` | Page background |
| Deep navy | `#1A2B4A` | Headings, nav, footer |

## Fonts
- **Playfair Display** — headings (loaded via Google Fonts)
- **Inter** — body text (loaded via Google Fonts)
