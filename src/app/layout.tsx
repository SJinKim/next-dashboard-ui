import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { url } from 'inspector';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Youth Plus',
  description: 'Youth Plus Admin page',
  icons: {
    icon: [{ url: '/yp_favicon.png', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
