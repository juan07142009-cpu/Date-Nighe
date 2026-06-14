# AGENTS.md — Date Night App

A 5-page animated romantic invitation app. Each page is a TanStack Start file-based route.

## Directory Structure

```
src/
  routes/
    __root.tsx     — HTML shell, Google Fonts link tags, title "Date Night"
    index.tsx      — Page 1: Envelope with photo + heart seal
    letter.tsx     — Page 2: Handwritten letter + floating hearts
    details.tsx    — Page 3: Date night itinerary list
    rsvp.tsx       — Page 4: Yes/No RSVP (No button runs away)
    yay.tsx        — Page 5: Celebration + second photo
  styles.css       — All styles (CSS custom properties, keyframes)
  router.tsx       — Router factory (routeTree.gen auto-generated)

public/
  images/
    us1.heic       — Photo for envelope cover
    us2.heic       — Photo for yay page
```

## Styling Conventions

- All custom styles live in `src/styles.css` using CSS custom property tokens
- Color palette: `--rose-blush`, `--rose-soft`, `--rose-deep`, `--rose-dark`, `--mauve`, `--ink`, etc.
- Font families: `var(--script)` = Great Vibes, `var(--serif)` = Cormorant Garamond, `var(--display)` = Playfair Display
- All animations use `transform` + `opacity` only (GPU compositing, no layout thrash)

## Key Decisions

- **HEIC images**: iOS HEIC files served directly. Safari/iOS display natively. For cross-browser support, drop `us1.jpg` / `us2.jpg` in `public/images/` and update `<img src>` in `index.tsx` and `yay.tsx`.
- **No state management**: Navigation uses TanStack Router `useNavigate`. No global store.
- **RSVP No button**: Starts inline in flow (relative), switches to `position: fixed` with random coordinates after first click.
- **HeartSVG**: Inlined in each route file for self-contained pages.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Fonts | Google Fonts (Great Vibes, Cormorant Garamond, Playfair Display) |
| Deployment | Netlify |
