# Web Developer Light Portfolio Template

[Demo](https://www.devportfoliotemplates.com/portfolio-templates/web-developer-light)

## Getting Started

You have two options to get started with this template:

### Option 1: Using Git Sparse Checkout

If you want to clone only this specific template:

```bash
git clone --no-checkout https://github.com/devportfoliotemplates/devportfoliotemplates.git
cd devportfoliotemplates
git sparse-checkout init --cone
git sparse-checkout set web-developer-light-portfolio-template
git checkout
```

### Option 2: Direct Download

You can download this template as a ZIP file:

1. Visit [download-directory.github.io](https://download-directory.github.io/)
2. Paste the URL of this portfolio folder: `https://github.com/devportfoliotemplates/devportfoliotemplates/tree/main/web-developer-light-portfolio-template`
3. Download and extract the ZIP file

### Running the Template

Once you have the template:

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Customization

1. Update your personal information:

   - Modify the content in `app/page.tsx` to update the hero, about, projects, and contact sections
   - Replace images in the `public` directory with your own
   - Update social media links and contact information

2. Customize the styling:

   - Colors and theme variables can be modified in `tailwind.config.js`
   - Global styles are located in `app/globals.css`
   - Component-specific styles can be found in their respective files

## Deployment

Follow these steps to deploy your portfolio for free using GitHub and Vercel:

1. Create a new GitHub repository

2. Push your portfolio to GitHub

3. Deploy with Vercel:
   - Go to [Vercel](https://vercel.com)
   - Sign up or log in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

Your portfolio will be live in minutes with a free Vercel domain (e.g., `your-repo.vercel.app`). You can later add a custom domain in your Vercel project settings.
