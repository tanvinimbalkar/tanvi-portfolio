# Tanvi Nimbalkar - Portfolio Website

A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark mode
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Professional portfolio showcasing data science work
- 🔗 Social media integration (LinkedIn, GitHub, Google Scholar)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Update Personal Information

1. **Profile Section** (`components/ProfileSection.tsx`):
   - Replace the profile picture placeholder with your actual image
   - Update social media links with your profiles
   - Modify personal qualities/descriptions

2. **Professional Details** (`components/ProfessionalDetails.tsx`):
   - Update your bio
   - Modify skill tags
   - Update email address
   - Customize current focus and areas of attention

3. **Navigation** (`components/Navigation.tsx`):
   - Update navigation items as needed

### Adding Your Profile Picture

Replace the placeholder in `ProfileSection.tsx` with an actual image:

```tsx
<img 
  src="/your-profile-image.jpg" 
  alt="Tanvi Nimbalkar" 
  className="w-full h-full rounded-lg object-cover"
/>
```

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## License

This project is open source and available for personal use.

