This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Create a new Next.js project with TypeScript
npx create-next-app@latest chatbot-interface --typescript --tailwind --eslint
cd chatbot-interface

# Install required dependencies
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
npm install @radix-ui/react-label @radix-ui/react-textarea

# Install shadcn/ui CLI
npx shadcn-ui@latest init

# When prompted, select:
# - Style: Default
# - Base color: Slate
# - CSS variables: Yes
# - Use CSS variables for colors: Yes
# - Other options: Accept defaults

# Install required shadcn/ui components
npx shadcn-ui@latest add card button input textarea

# Project folder structure should look like this:
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   └── chat-interface.tsx
├── lib/
│   └── utils.ts
└── styles/
    └── globals.css