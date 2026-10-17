import {Nunito} from 'next/font/google';
import './globals.css';
import {ReactNode} from 'react';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function MainLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo.png"
          data-rh="true"
        />
        <title>Pizza</title>
      </head>
      <body className={`${nunito.className}`}>{children}</body>
    </html>
  );
}
