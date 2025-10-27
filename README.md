# 🚀 Gulp Template 2025

![Node](https://img.shields.io/badge/node-%3E%3D18.0-green)
![Gulp](https://img.shields.io/badge/Gulp-4.x-EB4A4B)
![Webpack](https://img.shields.io/badge/Webpack-5.x-8DD6F9)
![License](https://img.shields.io/badge/license-MIT-blue)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Status](https://img.shields.io/badge/status-active-success)

A modern **Gulp build system** for front-end development with ES6+, SCSS (Dart Sass), Webpack, BrowserSync, and image optimization. Perfect for developers who want a clean, automated, and scalable workflow.

---

## ⚙️ Tech Stack

-   🧩 **Gulp 4** — automation and task runner
-   🎨 **Dart Sass** — modern SCSS compiler
-   ⚡ **Webpack 5** — JS bundler with ES6 module support
-   🔁 **BrowserSync** — live reload and local server
-   💅 **Autoprefixer**, **CleanCSS**, **Group CSS MQs** — CSS optimization tools
-   🖼️ **Imagemin + WebP** — image compression and optimization
-   🔠 **Font tasks** — `.otf → .ttf → .woff/.woff2` conversion

---

## 📁 Project Structure

```plaintext
src/
│
├── fonts/ # Fonts (.otf, .ttf)
├── img/ # Images and SVGs
├── js/ # JS modules (entry: app.js)
├── scss/ # SCSS files (entry: style.scss)
│ ├── base/ # variables, mixins, reset, typography
│ └── partials/ # components and page sections
└── *.html # HTML files
```
---

## 💻 Installation

```bash
git clone https://github.com/Sandrixman/gulp-template-2025.git
cd gulp-template-2025
npm install
```

---

## 🧰 Commands
Command	Description
npm run dev	Start development mode with live reload
npm run build	Build the optimized production version in dist/
npm run otfToTtf	Convert .otf fonts to .ttf

---

## 🧩 Main Gulp Tasks
Task	Description
html	Includes partials via fileInclude, adds WebP support
scss	Compiles SCSS → CSS, groups MQs, adds prefixes, minifies
js	Bundles and minifies JavaScript using Webpack
images	Optimizes PNG/JPG/SVG/WebP
fonts	Converts fonts into .woff/.woff2
svgSprite	Creates SVG sprite
server	Runs BrowserSync with automatic reload

---

## 🧱 Build Output

After running npm run build, you get:

dist/
├── css/
├── js/
├── img/
├── fonts/
└── index.html

---

## 🧠 Notes

✅ Uses modern SCSS @use and @forward syntax

⚙️ Compatible with GSAP, Lenis, Splide, etc.

🧹 Clean folder structure and configurable paths (gulp/config/path.js)

🛠️ For production:

npm run build -- --build


🖼️ If images or fonts don’t appear — check paths in /gulp/config/path.js.

🧑‍💻 Getting Started Example

To create a new section:

Add section-name.scss inside src/scss/partials/section/

Include it in style.scss:

@use "partials/section/section-name";


Add the HTML structure in your .html file inside /src/

Run:

npm run dev


and watch magic happen 🪄

🧾 License

MIT © 2025 — built with ❤️ to speed up your front-end workflow.
```
