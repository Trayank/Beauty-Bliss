import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartBar from "@/components/CartBar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Beauty Bliss - Premium Cosmetics & Beauty Products',
  description: 'Discover luxurious beauty products and cosmetics at Beauty Bliss',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
              <CartBar />
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
