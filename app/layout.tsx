import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lumen Atelier | Photography & Videography',
  description: 'Modern portfolio for photography and videography projects.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
