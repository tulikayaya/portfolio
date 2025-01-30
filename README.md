# Dev Portfolio Templates

A collection of modern, responsive portfolio templates built with Next.js and TailwindCSS. Perfect for developers looking to showcase their work with minimal setup.

🌐 **[View All Templates](https://www.devportfoliotemplates.com)**

## Available Templates

### Frontend Portfolio

- Modern glassmorphic design with parallax effects
- Interactive project cards and skill progress bars
- Dark theme with blue/purple accents
- Optimized for performance and aesthetics

**[View Frontend Portfolio Demo](https://www.devportfoliotemplates.com/portfolios/frontend-portfolio)**

### Backend Portfolio

- Technical-focused design with architecture diagrams
- API documentation and code snippet showcase
- System architecture visualizations
- Performance metrics and database schema displays

**[View Backend Portfolio Demo](https://www.devportfoliotemplates.com/portfolios/backend-portfolio)**

### Full-Stack Portfolio

- Comprehensive showcase of frontend and backend capabilities
- Interactive system architecture visualizations
- Live component demos and API integration examples
- Performance optimization and security implementation showcases
- Database and API architecture visualization
- Modern, responsive UI with seamless user experience

**[View Full-Stack Portfolio Demo](https://www.devportfoliotemplates.com/portfolios/fullstack-portfolio)**

### Modern Minimal Portfolio

- Dynamic, animated portfolio with stunning hero section
- Project showcase with hover effects
- Skills section with animated cards
- Dark theme with gradient accents

**[View Modern Minimal Portfolio Demo](https://www.devportfoliotemplates.com/portfolios/modern-minimal-portfolio)**

### Simple Portfolio

- Clean, minimalist design optimized for readability
- Professional hero section and skills grid
- Project showcase with subtle shadows
- Light theme with elegant simplicity

**[View Simple Portfolio Demo](https://www.devportfoliotemplates.com/portfolios/simple-portfolio)**

## Tech Stack

- Next.js
- React
- TypeScript
- TailwindCSS

## Getting Started

You have two options to get started with your preferred template:

### Option 1: Using Git Sparse Checkout

If you want to clone only a specific portfolio template:

```bash
git clone --no-checkout https://github.com/devportfoliotemplates/devportfoliotemplates.git
cd devportfoliotemplates
git sparse-checkout init --cone
git sparse-checkout set example-portfolio
git checkout
```

Replace `example-portfolio` with your preferred template name (`frontend-portfolio`, `backend-portfolio`, etc.).

### Option 2: Direct Download

You can download a specific portfolio template as a ZIP file:

1. Visit [download-directory.github.io](https://download-directory.github.io/)
2. Paste the URL of your preferred portfolio folder (e.g., `https://github.com/devportfoliotemplates/devportfoliotemplates/tree/main/frontend-portfolio`)
3. Download and extract the ZIP file

### Running the Template

Once you have your preferred template:

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Customization

### Personal Information

- Update metadata and content in `app/layout.tsx` and `app/page.tsx`
- Replace images and assets in the `public` directory

### Styling

- Templates use TailwindCSS for styling
- Customize colors and theme in `tailwind.config.js`
- Modify animations in respective component files
