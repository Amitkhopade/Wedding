import Link from 'next/link';
import { Heart, ArrowRight } from 'phosphor-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-ivory via-pastel-rose to-pastel-pink flex items-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container-custom z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeIn">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 rounded-full px-4 py-2 mb-6">
              <Heart size={16} className="text-maroon-500 fill-maroon-500" />
              <span className="text-sm font-semibold text-maroon-500">Trusted by 5000+ Couples</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-gray-900 leading-tight">
              Crafting Invitations That Tell Your
              <span className="text-gold-700"> Love Story</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Shaadi-ka-pehla-impression, perfect hona chahiye! 🎉
              <br />
              Premium custom wedding invitations with traditional elegance & modern design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/gallery" className="btn-primary flex items-center justify-center gap-2">
                Browse Designs <ArrowRight size={20} />
              </Link>
              <Link href="/customize" className="btn-secondary flex items-center justify-center gap-2">
                Customize Now
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-gold-700">500+</div>
                <div className="text-gray-600">Designs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-700">24h</div>
                <div className="text-gray-600">Quick Print</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-700">5000+</div>
                <div className="text-gray-600">Happy Couples</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-700">Pan-India</div>
                <div className="text-gray-600">Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96 animate-slideUp">
            <div className="bg-gradient-to-br from-gold-50 to-pastel-pink rounded-3xl p-8 shadow-luxury-lg transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">💌</div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                  Royal Wedding Card
                </h3>
                <p className="text-gray-600 mb-6">Premium embossed design with gold accents</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span>Handmade luxury paper</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span>Gold foil stamping</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                    <span>Custom embossing</span>
                  </div>
                </div>
                <div className="mt-6 text-2xl font-bold text-maroon-500">₹500 - ₹800</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
