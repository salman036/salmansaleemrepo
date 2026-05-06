# Salman Saleem — Portfolio

A professional portfolio built with **Next.js 14**, **Tailwind CSS**, and smooth scroll animations.

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production
```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel (Free)

### Option 1: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign up with GitHub
   - Click **"New Project"**
   - Import your `portfolio` repository
   - Click **"Deploy"** — done! ✅

3. **Custom Domain (optional):**
   - In Vercel dashboard → Your project → Settings → Domains
   - Add your custom domain (e.g., `salmansaleem.dev`)

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.js        # Root layout, fonts, metadata
│   ├── page.js          # Main page assembling all sections
│   ├── globals.css      # Global styles + Tailwind
│   └── data.js          # All your resume data — edit here!
├── components/
│   ├── Navbar.js        # Sticky navbar with mobile menu
│   ├── Hero.js          # Landing section with stats
│   ├── About.js         # About + education + role cards
│   ├── Projects.js      # Filterable project grid
│   ├── Experience.js    # Timeline work history
│   ├── Skills.js        # Skill categories + marquee
│   ├── Contact.js       # Contact cards + CTA
│   └── Footer.js        # Footer
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## ✏️ Customization

All your personal data lives in **`app/data.js`** — just edit that file to update:
- Personal info (name, email, phone, LinkedIn)
- Projects (add/remove/edit)
- Work experience
- Skills
- Stats

---

## 🎨 Design

- **Dark theme** with orange accent (`#ff4d00`)
- **Fonts:** Syne (display) + DM Sans (body) + JetBrains Mono
- **Animations:** CSS scroll-triggered fade-in, cursor glow effect
- **Mobile-first** responsive design
