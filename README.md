# 🚀 Portfolio Website README

# Anmol Dwivedi - Portfolio Website

**🌐 Live Site:** [https://anmol-dwivedi-portfolio.netlify.app/](https://anmol-dwivedi-portfolio.netlify.app/)

---

## 📘 Overview  
A sleek, fully customizable **React-based portfolio website** to showcase my projects, skills, experience, certifications and leadership. Built for scalability, with JSON-driven modals, tag-based filtering, and modern UI components.

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
- Deployed on **Netlify**
- Connected to **custom domain**

### Phase 6: Final Polish & Structure Optimization ✅
- Extracted **Projects section** to its own modular file `projectsData.js` for easier updates
- Replaced `AchievementCard` with a custom `ProjectSectionCard` for better control and layout flexibility
- Styled **tech stack hashtags** for each project with soft grey chip + purple/yellow text
- Implemented **grid alignment fix** to keep cards centered even after filtering
- Preserved essential files like `Dockerfile`, `package.json`, and `.env` at root for build consistency
- Verified ESLint ordering rules (thanks, OCD 😉)

---

## ✅ Features
- React-based frontend with modular component design
- Fully customizable JSON structure for project modals
- Multi-tag filtering system using chips
- Sticky navbar and responsive layout
- Modularized `projectsData.js` for easy project management
- Custom `ProjectSectionCard` component with styled tech hashtags
- Easy integration of documents (degrees, certifications, resumes)
- Deployment-ready via Netlify with custom domain support

---

## 🧩 Folder Structure
```
/src
  ├── assets
  │   └── Education Docs
  ├── components
  ├── containers
  │   └── projectsSection
  │       ├── ProjectsSection.js
  │       ├── ProjectsSection.scss
  │       └── ProjectSectionCard.js
  ├── portfolio.js        // section config (at /src)
  ├── projectsData.js     // project data (at /src)
  └── App.js & Main.js
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/anmol-dwivedi/PortfolioWebsite.git
cd PortfolioWebsite

### 2. Install dependencies
npm install

### 3. Start development server
npm start

### 4. Build for production
npm run build
```

---

## 🌐 Deployment

### Deploy on Netlify
- Drag & drop the `/build` folder into Netlify UI **or** connect your GitHub repo directly
- Set:
  - `build command` → `npm run build`
  - `publish directory` → `build/`
- Use custom domain or Netlify default subdomain

---

## 🧠 Credits
- [developerFolio by saadpasta](https://github.com/saadpasta/developerFolio)
- [sample-portfolio-using-react by saurabhp94](https://github.com/saurabhp94/sample-portfolio-using-react)

---

## 📄 License
This project is open-sourced under the MIT License. Feel free to use and customize it for personal or professional purposes.