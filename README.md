# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Deploy it for free on **GitHub Pages** and get a live link like `https://yourusername.github.io/portfolio26/`.

## Live Demo

After you deploy (see below), your site will be available at:

```
https://<your-github-username>.github.io/<repository-name>/
```

## Quick Start (Local)

1. Open `index.html` in your browser, or
2. Use a simple local server:

```bash
# Python
python -m http.server 8000

# Node.js (if you have npx)
npx serve .
```

Then visit `http://localhost:8000`

## Customize Your Portfolio

Edit these files with your own information:

| File | What to change |
|------|----------------|
| `index.html` | Your name, bio, projects, links, email |
| `script.js` | Typed roles text, email in contact form |
| `styles.css` | Colors in `:root` variables (optional) |

Replace all placeholders:
- `Your Name` → your real name
- `your.email@example.com` → your email
- `yourusername` → your GitHub / LinkedIn username
- Project links and descriptions

## Deploy to GitHub Pages (Live Link)

### Step 1: Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `portfolio26` (or any name you like)
3. Keep it **Public**
4. Do **not** add a README (you already have one)
5. Click **Create repository**

### Step 2: Push your code

Open a terminal in this folder and run:

```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio26.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Enable GitHub Pages

1. Open your repository on GitHub
2. Go to **Settings** → **Pages**
3. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main` → `/ (root)` → **Save**
4. Wait 1–2 minutes. GitHub will show your live URL at the top of the Pages settings.

Your site will open at:

```
https://YOUR_USERNAME.github.io/portfolio26/
```

## Project Structure

```
portfolio26/
├── index.html      # Main page
├── styles.css      # All styles
├── script.js       # Interactions & animations
└── README.md       # This file
```

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation
- Typing animation in hero section
- Scroll reveal animations
- Contact form (opens email client)
- Dark theme with purple accent
- No build step — pure HTML/CSS/JS

## License

Free to use and modify for your personal portfolio.
