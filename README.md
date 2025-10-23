# CV Generator - React + Tailwind CSS Version

A modern, interactive CV built with React and Tailwind CSS that can be easily exported to PDF while maintaining pixel-perfect design.

## 🚀 Quick Start

### 1. Setup

```bash
./setup-react.sh
```

Or manually:

```bash
cp package-react.json package.json
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### 3. Export to PDF

**Option A: Browser Print (Recommended)**
1. Open the CV in your browser
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
3. Select "Save as PDF"
4. Make sure "Background graphics" is enabled
5. Save the PDF

**Option B: Download Button**
1. Click the blue "Download PDF" button in the top-right corner
2. This triggers the browser's print dialog
3. Follow the same steps as Option A

## 📂 Project Structure

```
react-version/
├── src/
│   ├── App.jsx          # Main CV component
│   ├── data.js          # CV content data
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind & print styles
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── package-react.json   # Dependencies
└── setup-react.sh       # Setup script
```

## 🎨 Features

- ✅ **Pixel-perfect A4 layout** (210mm × 297mm)
- ✅ **Professional two-column design**
- ✅ **Sidebar with skills, contact details, and progress bars**
- ✅ **Print-optimized CSS** for perfect PDF export
- ✅ **Interactive in browser** with live preview
- ✅ **Easy to customize** - just edit `src/data.js`
- ✅ **No page break issues** - proper print CSS handling
- ✅ **Download button** for quick PDF export

## 📝 Customizing Your CV

Edit the `src/data.js` file to update:

- Personal information
- Professional summary
- Work experience
- Education
- Skills (with percentage levels)
- Certifications
- Achievements
- Technical competencies

## 🔧 Technologies

- **React 18** - UI framework
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icons
- **PostCSS** - CSS processing

## 📱 Print CSS

The app includes comprehensive print styles:

- Hidden print button (`no-print` class)
- Page break control (`print-avoid-break`, etc.)
- A4 page size with proper margins
- Background graphics enabled
- Professional typography

## 🌐 Deployment

You can deploy this to:

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: Use `vite build` and deploy the `dist` folder

## 💡 Tips

- Always use "Background graphics" in print settings
- For best results, use Chrome or Edge browsers
- The layout is optimized for A4 paper
- Print margins are already set in CSS

## 📄 License

Free to use and modify for your personal CV!
