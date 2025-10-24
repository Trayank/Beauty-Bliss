import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-50 to-white border-t border-pink-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-pink-600">Beauty Bliss</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium cosmetics and beauty products to enhance your natural beauty.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Shipping & Returns</li>
              <li className="text-gray-600 text-sm">Privacy Policy</li>
              <li className="text-gray-600 text-sm">Terms & Conditions</li>
              <li className="text-gray-600 text-sm">FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-pink-50 transition-all"
              >
                <Facebook className="h-5 w-5 text-pink-500" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-pink-50 transition-all"
              >
                <Instagram className="h-5 w-5 text-pink-500" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-pink-50 transition-all"
              >
                <Twitter className="h-5 w-5 text-pink-500" />
              </a>
              <a
                href="mailto:hello@beautybliss.com"
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-pink-50 transition-all"
              >
                <Mail className="h-5 w-5 text-pink-500" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              Email: hello@beautybliss.com
            </p>
          </div>
        </div>

        <div className="border-t border-pink-100 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
            © 2025 Beauty Bliss. Made with <Heart className="h-4 w-4 text-pink-500 fill-pink-500" /> for beauty lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
