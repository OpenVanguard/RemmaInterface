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