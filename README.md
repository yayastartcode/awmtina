# Agency Website with Astro and Tina CMS

A modern agency website built with Astro.js and Tina CMS for content management.

## Features

- Modern and responsive design
- Fast static site generation with Astro
- Content management with Tina CMS
- Services showcase
- Client logo carousel
- WhatsApp integration for contact
- Mobile-friendly navigation

## Tech Stack

- [Astro](https://astro.build/) - Static Site Generator
- [Tina CMS](https://tina.io/) - Headless CMS
- [TailwindCSS](https://tailwindcss.com/) - Styling
- TypeScript - Type safety

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the Tina CMS development server:
```bash
npx tinacms dev
```
This will start both the Astro development server and Tina CMS locally.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:4321](http://localhost:4321) in your browser

## Content Management

All content is managed through Tina CMS. You can edit:
- Navigation menu and logo
- Hero section content and image
- Services list
- Client logos
- Contact information

To access the CMS:
1. Run the development server with `npx tinacms dev`
2. Visit [http://localhost:4321/admin](http://localhost:4321/admin)
3. Edit content directly - changes will be saved to your local content files in the `content/` directory
4. Commit changes to Git to persist them

## Project Structure

```
├── src/
│   ├── components/     # UI components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Routes and pages
│   └── styles/         # Global styles
├── public/            # Static assets
├── content/           # CMS content
└── tina/             # Tina CMS configuration
```

## Customization

The website can be customized by:
1. Modifying the Tailwind configuration
2. Editing component styles
3. Updating the Tina CMS schema
4. Adding new sections or features

## Deployment

The site can be deployed to any static hosting platform:
1. Build the site:
```bash
npm run build
```

2. Deploy the `dist` directory

## License

This project is licensed under the MIT License.
