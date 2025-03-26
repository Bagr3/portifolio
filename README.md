# Portfolio Next.js

This is a simple portfolio project built with Next.js. The project is structured to create a visually appealing portfolio with animated transitions between sections.

## Project Structure

```
portfolio-nextjs
├── src
│   ├── app
│   │   ├── layout.tsx          # Main layout of the application
│   │   ├── page.tsx            # Home page entry point
│   │   └── globals.css         # Global CSS styles
│   ├── components
│   │   ├── Header.tsx          # Header component with orange background
│   │   ├── Block.tsx           # Full-screen block component
│   │   └── animations
│   │       └── FadeIn.tsx      # Fade-in animation component
│   ├── hooks
│   │   └── useScrollNavigation.ts # Custom hook for scroll navigation
│   └── styles
│       └── blocks.module.css    # CSS module styles for blocks
├── public
│   └── favicon.ico              # Favicon for the application
├── package.json                  # npm configuration file
├── tsconfig.json                # TypeScript configuration file
├── next.config.js               # Next.js configuration file
└── README.md                    # Project documentation
```

## Features

- **Animated Transitions**: Each block of the portfolio features a fade-in animation when the page loads.
- **Full-Screen Blocks**: The layout consists of full-screen blocks that change color as the user scrolls down.
- **Scroll Navigation**: Users can navigate between blocks using the space key.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-nextjs
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the portfolio.

## License

This project is licensed under the MIT License.