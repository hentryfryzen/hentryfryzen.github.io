# Hentry Fryzen Portfolio — Design 4 Final

This is the final React + Motion portfolio based on the selected **Design 4 — Dev Workspace** mockup.

## Includes

- Full Design 4 hero layout
- Dark green developer workspace visual
- Animated code monitor
- Laptop `</>` glow
- Desk-light ambience
- Floating API/PHP/SQL/Docker labels
- Terminal command bar
- Custom cursor
- Magnetic cursor hover
- Particle cursor trail
- Resume-based content
- All resume skills grouped
- All previous/current company projects
- Certifications
- Education
- Languages and visa status
- Server/domain handling section
- WhatsApp redirect button

## WhatsApp

The WhatsApp button uses:

```text
https://wa.me/971566059005
```

## Local setup

This version is Node 18 compatible.

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

Open the URL Vite prints, usually:

```text
http://localhost:5173/
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

This repo includes:

```text
.github/workflows/deploy.yml
```

In GitHub:

```text
Repository → Settings → Pages → Source → GitHub Actions
```

Then push to `main`.

## CV

The download button points to:

```text
public/hentry-fryzen-cv.pdf
```


## Workstation Image Asset

The hero now uses a real image-style SVG asset:

```text
public/developer-workstation-bg.svg
```

It is referenced from CSS as:

```css
background-image: url("/developer-workstation-bg.svg");
```

Because this is a Vite project, files inside `public/` are served from the site root during dev and copied as-is during build.
