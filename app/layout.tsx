// app/layout.tsx

import './globals.css'   // make sure you import your Tailwind or global CSS

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">     {/* ← required */}
      <head>
        <title>AI Productivity Coach</title>
        {/* any other meta, links, fonts, etc. */}
      </head>
      <body>               {/* ← required */}
        {children}
      </body>
    </html>
  );
}
