# NixOut | Sustainable Material Solutions

**NixOut** is a high-performance B2B platform designed for a sustainable material innovation company. It bridges the gap between material science and commercial application, helping businesses transition from single-use plastics to biodegradable, natural-fibre alternatives.

## 🚀 Live Demo

View the live project here: [shreeshailchavan.github.io/nixout](https://www.google.com/search?q=https://shreeshailchavan.github.io/nixout)

---

## ✨ Key Features

### 1. Dynamic Content Engine

The site utilizes a **Slug-based Routing System**. All services, and "About" sub-pages are rendered via a single dynamic template. This allows the business to scale its offerings by simply updating a centralized JSON-style data file.

### 2. B2B Optimized UI/UX

* **Lead Qualification:** Contact forms and CTAs are designed to capture business-specific data (Company name, industry, interest type).
* **Scan-Optimized Layouts:** Uses a mix of Bento Grids and Masonry layouts to present high-density technical information in a readable format.
* **Brand Identity:** A premium "Earth-Neutral" palette (`#8A8635`) paired with classic Serif typography (`Tinos`) to establish corporate authority.

### 3. Performance & SEO

* **Image Optimization:** Implements preloading for above-the-fold assets and aspect-ratio padding to prevent Layout Shift (CLS).
* **Responsive Navigation:** A custom mobile menu with background scroll-locking for a polished, native-app feel.
* **SEO-Friendly URLs:** Unique, descriptive slugs for every service to maximize organic search indexing.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS (with JIT engine)
* **Routing:** React Router 6 (configured with `basename` for GitHub Pages)
* **Icons:** React Icons (Hi, Fa sets)
* **Build Tool:** Vite

---

## 📁 Project Structure

```bash
src/
├── assets/             # Optimized images and brand assets
├── components/         # Reusable UI components (Header, Footer, CTA, etc.)
├── pages/              # Page layouts (Home, About, Contact)
│   └── ContentDetail   # The dynamic template for all slug-based content
├── utils/
│   └── data.js         # Centralized "Source of Truth" for all business data
└── App.jsx             # Routing configuration and global state

```

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/shreeshailchavan/nixout.git

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Build for production:**
```bash
npm run build

```



---

## 🚀 Deployment

This project is configured for automated deployment to **GitHub Pages**.

1. **Vite Configuration:** The `base` path is set to `/nixout/` in `vite.config.js`.
2. **Deploy Command:** ```bash
npm run deploy
```
*This triggers the `gh-pages` package to build the project and push the `dist` folder to the `gh-pages` branch.*


```



---

## 📝 Business Scalability Note

To add a new service or news update:

1. Navigate to `src/utils/data.js`.
2. Add a new object to the `servicesData` or `news` array.
3. The site will automatically generate a new URL and page at `/services/your-new-slug`.

---

## 📄 License

This project is for NixOut brand representation. All rights reserved.

---

**Developer:** [Shreeshail Chavan](https://www.google.com/search?q=https://github.com/shreeshailchavan)

**Business:** [NixOut](mailto:sales@nixout.uk)

---

### One final tip for your GitHub repo:

Upload a **screenshot** of your home page to your repository and add it to the top of the README where the first image tag is. It makes your profile look much more professional to recruiters and clients!

**Would you like me to help you write a "Technical Documentation" section that explains exactly how the `.find()` logic works in your `ContentDetail` page for future developers?**
