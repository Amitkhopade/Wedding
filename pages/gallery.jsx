import Head from 'next/head';
import { useState, useMemo } from 'react';
import designs from '../data/designsLibrary';
import { Funnel, Tag, CurrencyDollar } from 'phosphor-react';
import Link from 'next/link';

export default function Gallery() {
  const [activeFilters, setActiveFilters] = useState({
    category: 'All',
    budget: 'All',
    priceRange: 'All',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...new Set(designs.map(d => d.category))];
  const budgets = ['All', 'Budget', 'Mid', 'Premium'];
  const priceRanges = [
    { label: 'All', min: 0, max: Infinity },
    { label: '₹150-180', min: 150, max: 180 },
    { label: '₹190-230', min: 190, max: 230 },
    { label: '₹240+', min: 240, max: Infinity },
  ];

  const filteredDesigns = useMemo(() => {
    const priceRange = priceRanges.find(r => r.label === activeFilters.priceRange);
    
    return designs.filter((design) => {
      const matchesCategory = activeFilters.category === 'All' || design.category === activeFilters.category;
      const matchesBudget = activeFilters.budget === 'All' || design.budget === activeFilters.budget;
      const matchesPrice = design.price >= priceRange.min && design.price <= priceRange.max;
      const matchesSearch = design.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          design.id.includes(searchTerm) ||
                          design.code.includes(searchTerm);
      
      return matchesCategory && matchesBudget && matchesPrice && matchesSearch;
    });
  }, [activeFilters, searchTerm]);

  return (
    <>
      <Head>
        <title>Gallery - Wedding Invitation Designs | Shaadi Invitations</title>
        <meta name="description" content="Browse our collection of 500+ wedding invitation designs. Filter by religion, style, and budget. Customizable templates for all wedding types." />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-gold-50 to-pastel-pink py-12 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Our <span className="text-gold-700">Invitation Library</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover {designs.length}+ exquisite designs professionally curated for your special day
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Funnel size={24} className="text-gold-700" />
              <h2 className="text-xl font-bold text-gray-900">Search & Filter</h2>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-luxury space-y-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Search by Name or ID
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search designs..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
              </div>

              {/* Filters Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Tag size={16} className="text-gold-600" />
                    Category
                  </label>
                  <select
                    value={activeFilters.category}
                    onChange={(e) =>
                      setActiveFilters({ ...activeFilters, category: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Budget Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <CurrencyDollar size={16} className="text-gold-600" />
                    Budget
                  </label>
                  <select
                    value={activeFilters.budget}
                    onChange={(e) =>
                      setActiveFilters({ ...activeFilters, budget: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                  >
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <CurrencyDollar size={16} className="text-gold-600" />
                    Price Range
                  </label>
                  <select
                    value={activeFilters.priceRange}
                    onChange={(e) =>
                      setActiveFilters({ ...activeFilters, priceRange: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.label} value={range.label}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Reset Button */}
              <div>
                <button
                  onClick={() => {
                    setActiveFilters({ category: 'All', budget: 'All', priceRange: 'All' });
                    setSearchTerm('');
                  }}
                  className="text-gold-600 hover:text-gold-700 font-semibold"
                >
                  ← Reset All Filters
                </button>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900">
              Showing <span className="text-gold-700">{filteredDesigns.length}</span> of <span className="text-gold-700">{designs.length}</span> designs
            </h3>
          </div>

          {/* Gallery Grid */}
          {filteredDesigns.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredDesigns.map((design) => (
                <div key={design.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group">
                  {/* Image */}
                  <div className="aspect-video bg-gray-200 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition duration-300">
                    <img 
                      src={`/designs/${design.image}`}
                      alt={design.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full w-full bg-gradient-to-br from-gold-100 to-passion-100"><div class="text-center"><p class="text-sm font-semibold text-gray-600">' + design.name + '</p><p class="text-xs text-gray-500 mt-1">ID: ' + design.id + '</p></div></div>';
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{design.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{design.code}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                        {design.category}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded ${
                        design.budget === 'Premium' ? 'bg-purple-100 text-purple-700' :
                        design.budget === 'Mid' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {design.budget}
                      </span>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-maroon-600">₹{design.price}</span>
                      <Link 
                        href={`/customize?designId=${design.id}`}
                        className="bg-maroon-600 hover:bg-maroon-700 text-white px-3 py-1 rounded text-sm font-semibold transition"
                      >
                        Customize
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-2xl text-gray-900 font-semibold mb-2">No designs found</p>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
              <button
                onClick={() => {
                  setActiveFilters({ category: 'All', budget: 'All', priceRange: 'All' });
                  setSearchTerm('');
                }}
                className="bg-maroon-600 hover:bg-maroon-700 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Auth Links */}
          <div className="mt-12 border-t pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                href="/login"
                className="p-6 border-2 border-maroon-200 rounded-lg hover:border-maroon-400 hover:bg-maroon-50 transition text-center"
              >
                <p className="font-semibold text-gray-900">Admin Panel</p>
                <p className="text-sm text-gray-600 mt-1">Manage designs & prices</p>
              </Link>
              <a href="/" className="p-6 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition text-center">
                <p className="font-semibold text-gray-900">Back to Home</p>
                <p className="text-sm text-gray-600 mt-1">Explore our services</p>
              </a>
              <a href="/about" className="p-6 border-2 border-emerald-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition text-center">
                <p className="font-semibold text-gray-900">About Us</p>
                <p className="text-sm text-gray-600 mt-1">Learn our story</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
