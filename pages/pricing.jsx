import Head from 'next/head';
import { Check, ArrowRight } from 'phosphor-react';
import { pricingPlans, printingTypes, paperOptions } from '../data/pricing';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - Wedding Card Printing | Shaadi Invitations</title>
        <meta name="description" content="Affordable wedding invitation printing. Three pricing tiers: Essential, Premium, and Luxury. Choose based on your budget and requirements." />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-gold-50 to-pastel-pink py-12 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Simple, Transparent <span className="text-gold-700">Pricing</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            No hidden charges. All prices include design consultation and free preview samples.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`card overflow-hidden transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-gold-500 transform scale-105 shadow-luxury-lg' : ''
                }`}
              >
                {/* Badge */}
                {plan.popular && (
                  <div className="bg-gold-500 text-white text-center py-2 font-semibold text-sm">
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-gray-900">
                      {plan.price}
                      <span className="text-lg text-gray-600 font-normal">/per card</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">For 100 cards quantity</p>
                  </div>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/919999999999?text=I'm%20interested%20in%20your%20${plan.name}%20plan`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 mb-8 ${
                      plan.popular
                        ? 'bg-gold-500 text-gray-900 hover:bg-gold-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Quote <ArrowRight size={20} />
                  </a>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <Check size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Printing Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Printing Types & Finishes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {printingTypes.map((type, idx) => (
                <div key={idx} className="card p-6 text-center hover:shadow-luxury transition-all">
                  <h4 className="font-semibold text-gray-900 mb-3">{type.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Speed:</span>
                      <span className="font-semibold text-gold-600">{type.speed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality:</span>
                      <span className="font-semibold text-gold-600">{type.quality}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost:</span>
                      <span className="font-semibold text-gold-600">{type.cost}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Paper Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Paper Quality Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {paperOptions.map((paper, idx) => (
                <div key={idx} className="card p-8 hover:shadow-luxury transition-all">
                  <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">{paper.name}</h4>
                  <p className="text-sm text-gray-600 font-semibold text-gold-600 mb-3">
                    {paper.weight}
                  </p>
                  <p className="text-gray-700 mb-4">{paper.description}</p>
                  <div className="text-lg font-bold text-maroon-600">{paper.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gradient-to-r from-gold-50 to-ivory rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Pricing FAQ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  q: 'Is GST included in the prices?',
                  a: 'All prices shown are exclusive of 18% GST, which will be added at checkout.',
                },
                {
                  q: 'Do you offer bulk discounts?',
                  a: 'Yes! Orders of 500+ cards get special discounts. Contact us for details.',
                },
                {
                  q: 'What is the minimum order quantity?',
                  a: 'Minimum order is 50 cards. We recommend 100 cards for better per-card pricing.',
                },
                {
                  q: 'Can I request custom printing?',
                  a: 'Absolutely! We offer fully customized designs. Connect with our team for quotes.',
                },
              ].map((faq, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Plan Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-gold-300">
                  <th className="font-serif font-bold text-gray-900 py-4 px-4">Feature</th>
                  <th className="font-serif font-bold text-gray-900 py-4 px-4 text-center">Essential</th>
                  <th className="font-serif font-bold text-gold-700 py-4 px-4 text-center bg-gold-50">
                    Premium
                  </th>
                  <th className="font-serif font-bold text-gray-900 py-4 px-4 text-center">Luxury</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Digital Printing', essential: '✓', premium: '✓', luxury: '✓' },
                  { feature: 'Offset Printing', essential: '✗', premium: '✓', luxury: '✓' },
                  { feature: 'Foil Stamping', essential: '✗', premium: 'Add-on', luxury: '✓' },
                  { feature: 'Embossing', essential: '✗', premium: 'Add-on', luxury: '✓' },
                  { feature: 'Laser Cutting', essential: '✗', premium: 'Add-on', luxury: '✓' },
                  { feature: 'Paper Weight', essential: '200 gsm', premium: '300 gsm', luxury: '350+ gsm' },
                  { feature: 'Color Variations', essential: '3', premium: 'Unlimited', luxury: 'Unlimited' },
                  { feature: 'Free Revisions', essential: '1', premium: '3', luxury: 'Unlimited' },
                  { feature: 'Delivery Time', essential: '7-10 days', premium: '3-5 days', luxury: '2-3 days' },
                  { feature: 'Support', essential: 'Email', premium: 'Phone+Email', luxury: '24/7 Priority' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="font-semibold text-gray-900 py-4 px-4">{row.feature}</td>
                    <td className="py-4 px-4 text-center">{row.essential}</td>
                    <td className="py-4 px-4 text-center bg-gold-50">{row.premium}</td>
                    <td className="py-4 px-4 text-center">{row.luxury}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-maroon-700 to-maroon-900">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Get a personalized quote from our team. Chat with us on WhatsApp for instant support!
          </p>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 hover:bg-gold-600 text-gray-900 font-bold py-4 px-8 rounded-lg inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Chat on WhatsApp <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
}
