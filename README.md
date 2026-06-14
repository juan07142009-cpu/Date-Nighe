# Date Night

A romantic, multi-page interactive date night invitation web app built with TanStack Start and Tailwind CSS v4. Designed to be sent as a link to a special person.

## Flow

1. **Envelope** (`/`) — An animated envelope with a photo and wax-seal heart. Tap to open.
2. **Letter** (`/letter`) — A handwritten-style love letter surrounded by floating cursive hearts.
3. **Details** (`/details`) — Date night itinerary: escape room, Peruvian dinner, time & dress code.
4. **RSVP** (`/rsvp`) — Say "YES OF COURSE" or try clicking "No" (it runs away).
5. **Yay** (`/yay`) — Celebration page with burst hearts and a shared photo.

## Tech Stack

- **Framework**: TanStack Start (React, file-based routing)
- **Styling**: Tailwind CSS v4 + custom CSS (CSS variables, keyframe animations)
- **Fonts**: Google Fonts — Great Vibes (script), Cormorant Garamond (serif), Playfair Display
- **Deployment**: Netlify

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Photos

Photos are stored in `public/images/` as HEIC files (original iPhone format). Modern browsers (Safari, iOS) support HEIC natively. If you need to replace them with JPEG copies, drop `us1.jpg` and `us2.jpg` in the same folder and update the `<img src>` references in `src/routes/index.tsx` and `src/routes/yay.tsx`.
