# Wahid Graphics — Website

**Business:** Wahid Graphics  
**Email:** wahidgraphics21@gmail.com  
**WhatsApp:** +92 326 0342099

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Bebas Neue + Poppins (Google Fonts)
- **Deployment:** Vercel

---

## 📁 Project Structure

```
wahid-graphics/
├── public/
│   └── images/          ← Logo + 17 portfolio images
├── src/
│   ├── app/
│   │   ├── layout.jsx         ← Root layout (Navbar + Footer)
│   │   ├── globals.css        ← Global styles
│   │   ├── page.jsx           ← Home page
│   │   ├── services/page.jsx  ← Services page
│   │   ├── portfolio/page.jsx ← Portfolio gallery
│   │   ├── about/page.jsx     ← About page
│   │   └── contact/page.jsx   ← Contact + WhatsApp form
│   └── components/
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       ├── WhatsAppFloat.jsx
│       └── SectionHeader.jsx
├── package.json
├── tailwind.config.js
├── next.config.js
└── vercel.json
```

---

## ⚙️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 🌐 Deploy to GitHub + Vercel

### Step 1 — Push to GitHub

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit — Wahid Graphics website"

# Create a new repo on github.com named: wahid-graphics
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/wahid-graphics.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to **https://vercel.com**
2. Click **"Add New Project"**
3. Click **"Import from GitHub"**
4. Select the **wahid-graphics** repository
5. Framework will be auto-detected as **Next.js**
6. Click **"Deploy"** — done! 🎉

Your website will be live at:  
`https://wahid-graphics.vercel.app`

---

## 🎨 Brand Colors

| Name        | Hex       | Usage                    |
|-------------|-----------|--------------------------|
| Vivid Yellow | `#E3D611` | Primary / CTAs / Accent  |
| Deep Black   | `#272322` | Background / Text        |
| Crimson Red  | `#B43B2C` | Secondary accent         |
| Royal Navy   | `#28196F` | Section backgrounds      |
| Off White    | `#F7F7F6` | Body text on dark bg     |

## 🔤 Fonts

- **Headings:** Bebas Neue (Google Fonts)
- **Body:** Poppins (Google Fonts)

---

## 📞 Contact Integration

The contact form submits via WhatsApp — no backend or database required.  
Messages are formatted and sent directly to: **+92 326 0342099**
