carousell-static

This folder is a static HTML/CSS/JS version of the original Carousell project so it can be published to GitHub Pages.

What I created:

- `index.html` — single-page static site that mirrors the original EJS view.
- `css/style.css` — copied/adapted styles from the original project.
- `js/app.js` — adapted React-based bundle that uses React from CDN and references local images in `images/`.
- `images/` — empty folder. Copy the image files from the original project's `public/reference/` into this folder before publishing.

How to use:

1. Copy the image files from `public/reference/` in the original project into `carousell-static/images/`.
2. Commit the `carousell-static` folder to a new GitHub repository.
3. In the repository settings, enable GitHub Pages to serve the `main` branch (or `gh-pages` branch) from the root.
4. Open the published URL after a minute.

Notes and caveats:

- The static app still uses React via CDN. If you want to remove React, I can rewrite the interactive parts using vanilla JS.
- I preserved the layout and behavior but replaced server paths like `/reference/img1.jpg` with relative ones `images/img1.jpg`.
