import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shaadi Invitations - Premium Wedding Card Printing in India</title>
        <meta name="description" content="Craft beautiful, customized wedding invitations with premium paper and elegant designs. Perfect for Hindu, Muslim, Christian, and all wedding celebrations in India." />
        <meta name="keywords" content="wedding cards India, invitation printing, custom invitations, shaadi cards, luxury wedding stationery" />
        <meta name="theme-color" content="#FFC107" />
      </Head>

      <Hero />
      <Services />
      <Testimonials />
      <CTASection />

      {/* Featured Categories Section */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-gray-900">
            Designs for Every <span className="text-gold-700">Celebration</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Hindu Weddings', emoji: '🙏', count: '120+' },
              { title: 'Muslim Ceremonies', emoji: '☪️', count: '85+' },
              { title: 'Christian Weddings', emoji: '✝️', count: '70+' },
              { title: 'Destination Weddings', emoji: '✈️', count: '60+' },
            ].map((category, idx) => (
              <a
                key={idx}
                href="/gallery"
                className="card p-8 text-center hover:shadow-luxury-lg transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              >
                <div className="text-6xl mb-4">{category.emoji}</div>
                <h3 className="font-serif text-xl font-bold mb-2 text-gray-900">{category.title}</h3>
                <p className="text-gold-600 font-semibold">{category.count} Designs</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 to-ivory">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
                Why Couples Choose Us
              </h2>
              <ul className="space-y-4">
                {[
                  'Premium quality paper from eco-friendly sources',
                  'Expert designers with 10+ years of wedding experience',
                  'Personalized consultation to match your vision',
                  'Advanced printing techniques (foil, embossing, laser cut)',
                  'Pan-India delivery with tracking',
                  'Competitive pricing with no hidden charges',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/about" className="btn-primary mt-8">
                Learn Our Story
              </a>
            </div>
            <div className="bg-gradient-to-br from-gold-100 to-maroon-100 rounded-3xl p-8 shadow-luxury-lg">
              <div className="text-center">
                <div className="text-7xl mb-4">👑</div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-gray-900">Royal Treatment</h3>
                <p className="text-gray-700 mb-6">
                  Every couple deserves a royal experience. From consultation to delivery, we pamper you with premium service.
                </p>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-4xl font-serif font-bold text-gold-700 mb-2">4.9/5</p>
                  <p className="text-gray-600">Rated by 5000+ Happy Couples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
