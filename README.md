# TechFlow - IT Development Agency Website

A modern, responsive website for an IT web & mobile app development firm built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal design with generous whitespace and modern typography
- **Multilingual Preloader**: Animated "Hello" sequence in 10 languages
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations with React-Bits style micro-interactions
- **Accessible**: WCAG compliant with proper ARIA attributes and keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Code-split, lazy loading, and optimized bundle
- **Contact Form**: Validated form with success states
- **Project Portfolio**: Interactive project showcase with detailed case studies
- **Testimonials**: Swipeable carousel with client reviews
- **Technology Showcase**: Detailed tech stack information with modals

## 🛠️ Tech Stack

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3+ with JIT mode
- **Animations**: Framer Motion 10+
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📋 Prerequisites

- Node.js 16+ 
- npm or yarn

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone <repository-url>
cd it-dev-agency
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Preloader.tsx   # Multilingual hello sequence
│   ├── Navigation.tsx  # Header with smooth scroll
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # Company information
│   ├── Technologies.tsx # Tech stack showcase
│   ├── Services.tsx    # Service offerings
│   ├── Projects.tsx    # Portfolio with modals
│   ├── Stats.tsx       # Animated counters
│   ├── Testimonials.tsx # Client reviews carousel
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with links
├── data/
│   └── content.ts      # Centralized content data
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Customization

### Content Management

All content is centralized in `src/data/content.ts`. You can easily update:

- **Company Information**: About section, mission, values
- **Technologies**: Web and mobile tech stacks
- **Services**: Service offerings and features
- **Projects**: Portfolio items with case studies
- **Testimonials**: Client reviews and ratings
- **Stats**: Achievement numbers
- **Contact**: Contact information and office details

### Styling

The design system is configured in `tailwind.config.js`:

- **Colors**: Primary blue theme with dark mode support
- **Typography**: Inter font family
- **Spacing**: Consistent padding and margins
- **Animations**: Custom keyframes and transitions

### Theme Customization

To change the color scheme, update the primary colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... update these values
  }
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **For production**:
   ```bash
   vercel --prod
   ```

### Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

3. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Other Platforms

The project can be deployed to any static hosting platform:

- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload `dist` folder to S3 bucket
- **Cloudflare Pages**: Connect repository for automatic deployments

## 🔧 Environment Variables

Create a `.env` file for any API keys or configuration:

```env
# Contact Form (optional - for real form submission)
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
VITE_NETLIFY_FORM_NAME=contact

# Google Maps (optional - for interactive map)
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Reduced motion support
- Screen reader friendly

## 🚀 Performance Optimizations

- Code splitting with Vite
- Lazy loading of non-critical sections
- Optimized images and assets
- Minified CSS and JavaScript
- Efficient bundle size

## 🧪 Testing

Run tests with:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions:

- Email: hello@techflow.dev
- Phone: +1 (555) 123-4567
- Website: https://techflow.dev

## 🎯 Roadmap

- [ ] Blog section
- [ ] Team member profiles
- [ ] Interactive project demos
- [ ] Multi-language support
- [ ] CMS integration
- [ ] Analytics dashboard
- [ ] Newsletter signup
- [ ] Live chat integration

---

Built with ❤️ by TechFlow Team
