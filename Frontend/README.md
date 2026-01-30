# Lead Generation Landing Page - React Frontend

A modern, responsive lead generation landing page built with React and Vite.

## Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Component-Based Architecture**: Reusable React components
- **Fast Performance**: Built with Vite for lightning-fast development
- **SEO-Friendly**: Semantic HTML structure

## Project Structure

```
Frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section with CTA
│   │   ├── Services.jsx     # Services showcase
│   │   ├── About.jsx        # About us section
│   │   ├── Projects.jsx     # Portfolio/case studies
│   │   ├── Testimonials.jsx # Client testimonials
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer section
│   ├── pages/
│   │   └── Home.jsx         # Home page component
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── Services.css
│   │   ├── About.css
│   │   ├── Projects.css
│   │   ├── Testimonials.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global app styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global base styles
└── 4th year full stack Assets/  # Images, icons, and shapes
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the Frontend directory:
```bash
cd "d:\Flipr_Drive_project\Frontend"
```

2. Install dependencies (already done):
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Sections

1. **Header**: Sticky navigation with smooth scrolling
2. **Hero**: Eye-catching headline with call-to-action buttons
3. **Services**: Display of core services with icons
4. **About**: Company information with statistics
5. **Projects**: Portfolio showcase with image galleries
6. **Testimonials**: Client reviews and feedback
7. **Contact**: Contact form with business information
8. **Footer**: Additional links and newsletter signup

## Technologies Used

- **React 18**: JavaScript library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **React Router DOM**: Client-side routing
- **CSS3**: Modern styling with animations and transitions
- **Google Fonts (Inter)**: Professional typography

## Customization

### Colors

Edit the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #4F46E5;
  --secondary-color: #10B981;
  --text-dark: #1F2937;
  --text-light: #6B7280;
  --bg-light: #F9FAFB;
  --white: #FFFFFF;
}
```

### Content

Update the content in each component file located in `src/components/`

### Images

All images are referenced from the `4th year full stack Assets` folder. The assets include:
- Icons (home, paintbrush, dollar sign, LinkedIn, etc.)
- Images (hero images, project images, testimonial avatars)
- Shapes (decorative SVG elements)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of the Flipr Placement Drive Fullstack Task.

## Contact

For questions or support, please contact the development team.

