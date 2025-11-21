# ASCAPCT Website

**Engineering Intelligence. Building Systems That Endure.**

A technical research unit focused on infrastructure, computation, and high-performance systems.

---

## Overview

This is the official website for ASCAPCT, built as a fully static site using pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools, no dependencies—just clean, performant code.

### Design Philosophy

- **Elite & Minimal**: Inspired by Stripe, Vercel, and Anduril
- **Dark Premium Theme**: High-contrast, professional aesthetic
- **Technical Authority**: Research-lab energy with engineering focus
- **Performance First**: Optimized for speed and reliability

---

## Tech Stack

- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Modern layouts using Flexbox and Grid
- **Vanilla JavaScript**: Progressive enhancements, no frameworks
- **Static Hosting**: Works on any web server (GitHub Pages, Vercel, Netlify, etc.)

---

## Project Structure

```
ASCAPcT.com/
├── index.html          # Main landing page
├── style.css           # Complete stylesheet with design system
├── app.js              # Interactive enhancements
├── favicon.ico         # Site icon
├── assets/             # Static assets
│   ├── images/         # Image files (future)
│   ├── icons/          # Icon files (future)
│   └── fonts/          # Custom fonts (future)
├── backup/             # Previous version backups
└── README.md           # This file
```

---

## Local Development

### Method 1: Python HTTP Server (Recommended)

```bash
# Navigate to project directory
cd /path/to/ASCAPcT.com

# Start Python 3 server
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

### Method 2: Node.js HTTP Server

```bash
# Install http-server globally (one time)
npm install -g http-server

# Start server
http-server -p 8000

# Or use npx (no installation needed)
npx http-server -p 8000
```

Then open: `http://localhost:8000`

### Method 3: PHP Built-in Server

```bash
php -S localhost:8000
```

### Method 4: VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### Method 5: Direct File Opening

Simply open `index.html` in your browser:
- macOS: `open index.html`
- Linux: `xdg-open index.html`  
- Windows: `start index.html`

**Note**: Some features like fonts/CORS may require a proper HTTP server.

---

## Features

### Current Implementation

✅ **Hero Section**: Premium landing with brand messaging  
✅ **About Section**: Technical overview with stats  
✅ **Domains Section**: 4 core areas of expertise  
✅ **Values Section**: Engineering principles  
✅ **Contact Section**: Basic contact information  
✅ **Responsive Design**: Mobile, tablet, desktop optimized  
✅ **Smooth Scrolling**: Enhanced navigation experience  
✅ **Scroll Animations**: Progressive reveal on scroll  
✅ **Keyboard Navigation**: Full accessibility support  
✅ **Performance Optimized**: Fast load times, minimal JS

### Planned Enhancements (TODO)

🔲 **Blog System**: Technical articles and research updates  
🔲 **Research Library**: Published papers and documentation  
🔲 **API Documentation Portal**: Developer resources  
🔲 **Backend Integration**: Contact form, newsletter, etc.  
🔲 **Dark/Light Theme Toggle**: User preference support  
🔲 **Service Worker**: Offline support and PWA features  
🔲 **Analytics Integration**: Privacy-focused tracking  
🔲 **Search Functionality**: Site-wide search

---

## Design System

### Color Palette

```css
/* Dark Theme (Default) */
Background Primary:   #0a0a0a
Background Secondary: #111111
Text Primary:         #ffffff
Text Secondary:       #b0b0b0
Accent Primary:       #667eea
Accent Secondary:     #764ba2
```

### Typography

- **Sans-serif**: System font stack (SF Pro, Segoe UI, Roboto)
- **Monospace**: SF Mono, Monaco, Fira Code

### Spacing Scale

```
xs:  0.25rem (4px)
sm:  0.5rem  (8px)
md:  1rem    (16px)
lg:  1.5rem  (24px)
xl:  2rem    (32px)
2xl: 3rem    (48px)
3xl: 4rem    (64px)
```

---

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Graceful Degradation**: Older browsers receive functional experience

---

## Performance

Target Metrics:
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: > 95
- **Total Page Size**: < 500KB

---

## Deployment

### GitHub Pages

```bash
# Already configured with CNAME file
git push origin main

# Access at: https://ascapct.com
```

### Vercel

```bash
vercel --prod
```

### Netlify

```bash
netlify deploy --prod
```

### Custom Server (Nginx)

```nginx
server {
    listen 80;
    server_name ascapct.com www.ascapct.com;
    root /var/www/ascapct;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Contributing

This is a private project. For internal team members:

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes with clear commits
3. Test locally before pushing
4. Submit PR for review

---

## License

© 2018-2025 ASCAPCT. All rights reserved.

---

## Contact

- **Email**: contact@ascapct.com
- **Domain**: ascapct.com
- **Established**: February 23, 2018

---

## Technical Notes

### Code Quality Standards

- **HTML**: Semantic, accessible, valid HTML5
- **CSS**: BEM-inspired naming, mobile-first approach
- **JavaScript**: ES6+, no jQuery, commented thoroughly
- **Performance**: Optimized images, minified for production
- **Security**: No external dependencies, CSP-ready

### Version History

- **v1.0** (2025-11): Initial static site launch
- **v0.x** (2018-2024): Previous version (backed up)

---

**Built with precision. Operated with care.**
