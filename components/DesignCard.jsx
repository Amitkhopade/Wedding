import { Heart, Palette, Tag } from 'phosphor-react';
import Link from 'next/link';

export default function DesignCard({ design }) {
  return (
    <div className="card overflow-hidden hover:shadow-luxury-lg transition-all duration-300 hover:transform hover:scale-105">
      {/* Image */}
      <div className="relative h-48 md:h-56 bg-gradient-to-br from-gold-100 to-pastel-pink flex items-center justify-center overflow-hidden group">
        <div className="text-6xl">💌</div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Religion */}
        <div className="mb-3">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{design.title}</h3>
          <div className="flex gap-2 flex-wrap">
            <span className="inline-block bg-gold-100 text-gold-800 text-xs font-bold px-3 py-1 rounded-full">
              {design.religion.charAt(0).toUpperCase() + design.religion.slice(1)}
            </span>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
              {design.style.charAt(0).toUpperCase() + design.style.slice(1)}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{design.description}</p>

        {/* Details */}
        <div className="mb-4 p-3 bg-gold-50 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">
            <Palette size={14} className="inline mr-1" />
            {design.details}
          </p>
        </div>

        {/* Price */}
        <div className="mb-4 flex items-center justify-between">
          <div className="font-serif text-lg font-bold text-maroon-600">{design.price}</div>
          <Heart size={20} className="text-gray-300 hover:text-maroon-500 cursor-pointer transition-colors" />
        </div>

        {/* CTA Button */}
        <Link
          href={`/customize?template=${design.id}`}
          className="btn-primary w-full text-center block"
        >
          Customize Now
        </Link>
      </div>
    </div>
  );
}
