import Link from 'next/link';
import { Gift, Sparkle } from 'phosphor-react';

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-maroon-700 to-maroon-900 relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Main CTA */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-gold-100 bg-opacity-20 border border-gold-300 rounded-full px-4 py-2 mb-6">
              <Gift size={16} className="text-gold-300" />
              <span className="text-sm font-semibold text-gold-300">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Get 15% Off Your First Order!
            </h2>

            <p className="text-lg text-gray-100 mb-8">
              Use code <span className="font-bold text-gold-300">SHAADI2024</span> at checkout and get exclusive discount on all designs. Limited slots available for wedding season!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/gallery"
                className="bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkle size={20} />
                Browse Designs Now
              </Link>
              <a
                href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20claim%20the%2015%25%20discount%20on%20wedding%20cards"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold-500 hover:bg-gold-500 hover:bg-opacity-10 text-gold-300 font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="hidden lg:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-12 border border-gold-300 border-opacity-30">
              <div className="space-y-6">
                <div className="bg-gold-500 bg-opacity-20 rounded-xl p-6 border border-gold-300">
                  <div className="text-4xl font-serif font-bold text-gold-300 mb-2">15%</div>
                  <p className="text-white text-sm">Discount on all designs</p>
                </div>
                <div className="bg-gold-500 bg-opacity-20 rounded-xl p-6 border border-gold-300">
                  <div className="text-4xl font-serif font-bold text-gold-300 mb-2">Free</div>
                  <p className="text-white text-sm">Sample card preview</p>
                </div>
                <div className="bg-gold-500 bg-opacity-20 rounded-xl p-6 border border-gold-300">
                  <div className="text-4xl font-serif font-bold text-gold-300 mb-2">24h</div>
                  <p className="text-white text-sm">Express delivery available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="mt-12 pt-12 border-t border-gold-300 border-opacity-30 text-center">
          <p className="text-gold-300 font-semibold animate-pulse">
            ⚠️ Limited slots available for wedding season. Book your design now!
          </p>
        </div>
      </div>
    </section>
  );
}
