import { Sparkle, Truck, Palette, ShieldCheck } from 'phosphor-react';

const services = [
  {
    id: 1,
    icon: Palette,
    title: 'Premium Customization',
    description:
      'Full control over design, colors, fonts, and layout. Create cards that perfectly match your wedding theme and vision.',
  },
  {
    id: 2,
    icon: Sparkle,
    title: 'Luxury Materials',
    description:
      'Choose from handmade paper, premium cardstock, and exclusive finishes like foil stamping, embossing & laser cutting.',
  },
  {
    id: 3,
    icon: Truck,
    title: 'Fast Delivery',
    description:
      'Same-day to express delivery available. We ensure your cards arrive perfect and on time for your big celebration.',
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description:
      'Premium printing with strict quality control. Every card is personally checked before dispatch to you.',
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-gradient-to-br from-gold-50 to-ivory">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Why Choose <span className="text-gold-700">Shaadi Invitations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create the perfect wedding invitation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="card p-8 text-center hover:shadow-luxury transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-300 to-emerald-300 rounded-full flex items-center justify-center">
                    <Icon size={32} className="text-white" weight="fill" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-16 pt-16 border-t border-gold-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-700 mb-2">500+</div>
            <p className="text-sm text-gray-600">Designs</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-700 mb-2">5000+</div>
            <p className="text-sm text-gray-600">Happy Couples</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-700 mb-2">10+</div>
            <p className="text-sm text-gray-600">Religions</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-700 mb-2">24h</div>
            <p className="text-sm text-gray-600">Quick Print</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-700 mb-2">Pan-India</div>
            <p className="text-sm text-gray-600">Delivery</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold-700 mb-2">4.9/5</div>
            <p className="text-sm text-gray-600">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
