# 🚀 Portfolio Website README

[🌐 # Live Site**]([https://your-custom-domain.com](https://anmol-dwivedi-portfolio.netlify.app/]) <!-- Replace with actual link -->

---

## 📘 Overview
A sleek, fully customizable **React-based portfolio website** to showcase your projects, skills, experience, and certifications. Built for scalability, with JSON-driven modals, tag-based filtering, and modern UI components.

This project is based on [`developerFolio`](https://github.com/saadpasta/developerFolio) and [`sample-portfolio-using-react`](https://github.com/saurabhp94/sample-portfolio-using-react), customized to fit personal storytelling and dynamic content integration.

---

## 📍 Project Roadmap: From Idea to Deployment

### Phase 1: Ideation & Planning
- Researched open-source React portfolio templates
- Finalized `developerFolio` + `sample-portfolio-using-react`
- Defined core features: project modals, filters, hosted links

### Phase 2: Setting Up the React Base
- Installed React app and structured codebase
- Centralized section configs in one JSON-compatible location

### Phase 3: Implementing Core Features
- Built modal-based project cards
- Created reusable JSON format for projects
- Integrated deployed project links (Streamlit + GitHub)
- Added tag-based filtering by category, tech stack, tools

### Phase 4: Section Customization
- Sticky header & locked light mode
- Standardized font sizing
- Merged Skills into Greeting section
- Education cards now link to degree/transcript PDFs
- Polished Experience, Certifications, Achievements, Leadership sections
- Contact section added

### Phase 5: Hosting & Deployment
- Fixed image rendering issues
- Deployed on **GitHub Pages** and **Netlify**
- Connected to **custom domain**
- (Optional) Added visitor count/GitHub tracker

### Phase 6: Final Polish
- UI animations and transition cleanup
- All projects filtered and modal logic confirmed working
- Ready for ongoing updates through JSON

---

## ✅ Features
- React-based frontend with modular component design
- Fully customizable JSON structure for project modals
- Multi-tag filtering system using chips
- Sticky navbar and responsive layout
- Easy integration of documents (degrees, certifications, resumes)
- Deployment-ready with support for GitHub Pages and Netlify

---

## 🧩 Folder Structure
```
/src
  ├── assets
  │   └── Education Docs
  ├── components
  ├── portfolio.js  // centralized data for all sections
  └── App.js & Main.js
```

---

## 🚀 Getting Started
### 1. Clone the repo
```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm start
```

### 4. Build for production
```bash
npm run build
```

---

## 🌐 Deployment
### Deploy on GitHub Pages
- Configure `homepage` in `package.json`
- Run:
```bash
npm run deploy
```

### Deploy on Netlify
- Drag & drop `/build` folder into Netlify UI or link GitHub repo directly
- Set `build command` as `npm run build`
- Set `publish directory` as `build/`

---

## 🧠 Credits
- [developerFolio by saadpasta](https://github.com/saadpasta/developerFolio)
- [sample-portfolio-using-react by saurabhp94](https://github.com/saurabhp94/sample-portfolio-using-react)

---

## 📄 License
This project is open-sourced under the MIT License. Feel free to use and customize it for personal or professional purposes.
