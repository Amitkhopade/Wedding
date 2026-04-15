import { testimonials } from '../data/testimonials';
import { Star } from 'phosphor-react';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Love from Our <span className="text-gold-700">Clients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our happy couples have to say about their experience with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-8 hover:shadow-luxury-lg transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} weight="fill" className="text-gold-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-300 to-maroon-300 rounded-full flex items-center justify-center">
                  <span className="font-serif font-bold text-white text-sm">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Ready to create your perfect invitation?</p>
          <a href="/gallery" className="btn-primary">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
