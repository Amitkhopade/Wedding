import Head from 'next/head';
import { useState } from 'react';
import { Phone, EnvelopeSimple, MapPin, WhatsappLogo, Clock } from 'phosphor-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    requirements: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    const whatsappMessage = encodeURIComponent(
      `Hi! I'm interested in your wedding invitation services.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nWedding Date: ${formData.weddingDate}\nRequirements: ${formData.requirements}`
    );
    window.open(`https://wa.me/919999999999?text=${whatsappMessage}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', weddingDate: '', requirements: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Contact Us - Shaadi Invitations</title>
        <meta name="description" content="Get in touch with Shaadi Invitations. Contact us via phone, email, or WhatsApp for wedding card inquiries." />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-gold-50 to-pastel-pink py-12 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Get in <span className="text-gold-700">Touch</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out to us through any channel convenient for you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-serif font-bold mb-8 text-gray-900">Contact Info</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-gold-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">+91 99999 99999</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 10AM-7PM IST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <EnvelopeSimple size={24} className="text-gold-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">hello@shaadi-invitation.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-gold-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Shaadi Invitations Studio
                      <br />
                      Bandra, Mumbai 400050
                      <br />
                      India
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-gold-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Monday - Saturday: 10:00 AM - 7:00 PM
                      <br />
                      Sunday: 12:00 PM - 5:00 PM
                      <br />
                      National Holidays: Closed
                    </p>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 justify-center"
                >
                  <WhatsappLogo size={24} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8 md:p-12">
                <h2 className="text-3xl font-serif font-bold mb-8 text-gray-900">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Wedding Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Wedding Date
                    </label>
                    <input
                      type="text"
                      name="weddingDate"
                      value={formData.weddingDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                      placeholder="e.g., December 15, 2024"
                    />
                  </div>

                  {/* Requirements */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us your requirements *
                    </label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all resize-none"
                      placeholder="Describe your ideal invitation - style, religion, budget, special requirements, etc."
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex gap-3 items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="w-5 h-5 text-gold-500 rounded mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-700">
                      I agree to receive updates about specials offers and new designs via email/phone
                    </label>
                  </div>

                  {/* Success Message */}
                  {submitted && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg">
                      ✓ Message submitted! Our team will contact you shortly on WhatsApp.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 font-semibold text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold mb-8 text-gray-900 text-center">
              Visit Our <span className="text-gold-700">Studio</span>
            </h2>
            <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-luxury">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0606763381963!2d72.82969!3d19.05935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8b2c1d1d1d1%3A0x1d1d1d1d1d1d1d1d!2sBandra%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gradient-to-r from-gold-50 to-ivory rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center text-gray-900">
              Frequently Asked <span className="text-gold-700">Questions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  q: 'How quickly can you deliver my cards?',
                  a: 'Delivery timeframes depend on the design complexity and printing method. Standard delivery is 5-7 days, with express options available.',
                },
                {
                  q: 'Can I see a sample before placing the full order?',
                  a: 'Yes! We send free sample cards for approval before proceeding with the full print run.',
                },
                {
                  q: 'Do you offer custom designs from scratch?',
                  a: 'Absolutely! Our design team can create completely custom designs based on your vision. Get a quote on WhatsApp.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept bank transfers, online payments via Razorpay, and UPI. 50% advance booking, 50% before delivery.',
                },
                {
                  q: 'Can you help with other wedding stationery?',
                  a: 'Yes! We can design matching items like thank-you cards, menu cards, place cards, and more.',
                },
                {
                  q: 'What if I\'m not satisfied with the final product?',
                  a: 'We offer a 100% satisfaction guarantee. If you\'re not happy, we\'ll reprint at no additional cost.',
                },
              ].map((faq, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
