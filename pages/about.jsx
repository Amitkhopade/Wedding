import Head from 'next/head';
import { Target, Heart, Sparkle, Trophy } from 'phosphor-react';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Shaadi Invitations</title>
        <meta name="description" content="Learn about Shaadi Invitations - our mission to create beautiful, memorable wedding cards that celebrate Indian love stories." />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-gold-50 to-pastel-pink py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-gray-900">
            Our <span className="text-gold-700">Story</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Crafting beautiful wedding invitations that tell your unique love story
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">
                Celebrating Love in <span className="text-gold-700">Style</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2015, Shaadi Invitations was born from a simple idea: every wedding deserves an invitation
                as unique and beautiful as the love story it announces.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a small design studio in Mumbai has grown into India's trusted name for premium wedding
                card printing. We've had the honor of creating invitations for over 5,000 couples across metros and
                tier-2 cities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is simple: to make every wedding invitation a masterpiece that your guests will treasure.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gold-100 to-maroon-100 rounded-3xl p-12 shadow-luxury-lg">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-6">
                  <Target size={32} className="text-gold-700 mb-3" />
                  <h3 className="font-serif text-xl font-bold mb-2 text-gray-900">Our Mission</h3>
                  <p className="text-gray-700">
                    To create premium wedding invitations that celebrate the diversity and vibrancy of Indian love
                    stories.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6">
                  <Heart size={32} className="text-maroon-500 mb-3" />
                  <h3 className="font-serif text-xl font-bold mb-2 text-gray-900">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the most trusted and innovative wedding invitation brand across India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gray-900">
              Our Core <span className="text-gold-700">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Sparkle,
                  title: 'Excellence',
                  description: 'We never compromise on quality. Every card is a work of art.',
                },
                {
                  icon: Heart,
                  title: 'Authenticity',
                  description: 'We celebrate Indian traditions while embracing modern aesthetics.',
                },
                {
                  icon: Trophy,
                  title: 'Innovation',
                  description: 'We continuously innovate to bring fresh designs and techniques.',
                },
                {
                  icon: Target,
                  title: 'Customer First',
                  description: 'Your satisfaction is our ultimate goal. We listen and deliver.',
                },
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className="card p-8 text-center hover:shadow-luxury transition-all">
                    <Icon size={40} className="mx-auto mb-4 text-gold-700" />
                    <h3 className="font-serif text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-br from-gold-50 to-ivory">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gray-900">
            Our <span className="text-gold-700">Journey</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              { year: '2015', title: 'Foundation', desc: 'Started with a vision to revolutionize wedding card design' },
              { year: '2017', title: 'Growth', desc: 'Expanded to 5 cities across India with 50,000+ happy customers' },
              { year: '2019', title: 'Innovation', desc: 'Launched online customizer tool and foil-stamping services' },
              { year: '2021', title: 'Recognition', desc: 'Awarded "Best Wedding Stationery Brand" by Wedding Vows India' },
              { year: '2023', title: 'Scale', desc: '500+ designs, 5000+ couples, Pan-India presence' },
              {
                year: '2024',
                title: 'Excellence',
                desc: 'Recognized as India\'s leading premium wedding invitation brand',
              },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  {idx !== 5 && <div className="w-1 h-16 bg-gold-300 mt-4"></div>}
                </div>
                <div className="card p-6 flex-1">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gray-900">
            Why Choose <span className="text-gold-700">Shaadi Invitations</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Premium Quality',
                items: [
                  'Sourced from eco-friendly suppliers',
                  'Strict quality control on every card',
                  'Advanced printing technology',
                ],
              },
              {
                title: 'Artistic Excellence',
                items: [
                  '50+ award-winning designers',
                  'Fusion of tradition and modernity',
                  'Culturally sensitive designs',
                ],
              },
              {
                title: 'Customer Experience',
                items: [
                  'Personalized design consultation',
                  'Free sample cards before final print',
                  '4.9/5 customer satisfaction rate',
                ],
              },
              {
                title: 'Reliability',
                items: [
                  'On-time delivery guarantee',
                  'Pan-India logistics network',
                  'Hassle-free returns policy',
                ],
              },
            ].map((feature, idx) => (
              <div key={idx} className="card p-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-gray-900">{feature.title}</h3>
                <ul className="space-y-4">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gradient-to-br from-gold-50 to-ivory">
        <div className="container-custom">
          <h2 className="text-4xl font-serif font-bold text-center mb-4 text-gray-900">
            Meet Our <span className="text-gold-700">Team</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            A passionate group of designers, printers, and customer service experts dedicated to making your wedding
            special
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Priya Sharma', role: 'Founder & Creative Director', emoji: '👩' },
              { name: 'Arjun Verma', role: 'Production Manager', emoji: '👨' },
              { name: 'Zara Khan', role: 'Design Lead', emoji: '👩' },
              { name: 'Raj Patel', role: 'Customer Relations', emoji: '👨' },
            ].map((member, idx) => (
              <div key={idx} className="card p-8 text-center hover:shadow-luxury transition-all">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="font-serif font-bold text-lg mb-1 text-gray-900">{member.name}</h3>
                <p className="text-gold-600 font-semibold text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-maroon-700">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Let us help create invitations that your guests will cherish forever
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/gallery" className="bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all">
              Browse Designs
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gold-500 hover:bg-gold-500 hover:bg-opacity-10 text-gold-300 font-bold py-4 px-8 rounded-lg transition-all"
            >
              Chat with Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
