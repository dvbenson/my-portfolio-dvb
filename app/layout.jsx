import { Analytics } from '@vercel/analytics/react';
import { DM_Serif_Display, DM_Sans} from 'next/font/google';
import '../styles/dist.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

const dm_serif_display = DM_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: '400',
});

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dmsans',
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'danielvb.dev',
  description: 'Daniel VB: portfolio website, full stack web development',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Front End Development', 'Full Stack Development', 'Web Development', 'Web Design', 'UK'],
  authors: [
    {
    name: 'Daniel Benson',
    url: 'https://danielvb.dev',
    },
  ],
  creator: 'Daniel Benson',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
      </head>
      <body className={dm_serif_display.variable + " " + dm_sans.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
