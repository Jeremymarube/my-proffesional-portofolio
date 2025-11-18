import { Rasa } from 'next/font/google';
import './globals.css';

const rasa = Rasa({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
});

export const metadata = {
  title: 'Jeremy Marube - Full Stack Developer',
  description: 'Professional portfolio of Jeremy Marube, Full Stack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={rasa.className}>
        {children}
      </body>
    </html>
  );
}