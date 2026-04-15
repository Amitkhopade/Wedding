import Link from 'next/link';
import { Phone, EnvelopeSimple, MapPin, InstagramLogo, FacebookLogo, WhatsappLogo } from 'phosphor-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-gold-500 font-serif text-2xl mb-4">Shaadi Invitations</h3>
            <p className="text-gray-400 mb-6">
              Crafting beautiful wedding invitations that tell your unique love story. Premium quality, exceptional designs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gold-500 hover:text-gold-300 transition-colors">
                <FacebookLogo size={24} />
              </a>
              <a href="#" className="text-green-500 hover:text-green-300 transition-colors">
                <WhatsappLogo size={24} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-300 transition-colors">
                <InstagramLogo size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-500 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Design Gallery
                </Link>
              </li>
              <li>
                <Link href="/customize" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Customize
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-gold-500 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold-500 font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-gold-500 transition-colors cursor-pointer">
                Custom Designs
              </li>
              <li className="text-gray-400 hover:text-gold-500 transition-colors cursor-pointer">
                Bulk Printing
              </li>
              <li className="text-gray-400 hover:text-gold-500 transition-colors cursor-pointer">
                Same-Day Delivery
              </li>
              <li className="text-gray-400 hover:text-gold-500 transition-colors cursor-pointer">
                Gift Items
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-500 font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Phone size={20} className="text-gold-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 99999 99999</span>
              </li>
              <li className="flex gap-3 items-start">
                <EnvelopeSimple size={20} className="text-gold-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">hello@shaadi-invitation.com</span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={20} className="text-gold-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Shaadi Invitations. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <Link href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
