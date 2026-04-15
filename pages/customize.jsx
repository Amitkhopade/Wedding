import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ArrowRight, Check, Share } from 'phosphor-react';
import { invitationDesigns } from '../data/designs';

export default function Customize() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    template: 1,
    brideName: 'Priya',
    groomName: 'Arjun',
    weddingDate: 'December 15, 2024',
    venue: 'The Grand Hotel, Mumbai',
    color1: '#FFD700',
    color2: '#8B0000',
    font: 'serif',
    icon: 'ganesh',
  });

  const selectedTemplate = invitationDesigns.find((d) => d.id === formData.template);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const steps = [
    { number: 1, title: 'Select Template', description: 'Choose your favorite design' },
    { number: 2, title: 'Customize Details', description: 'Add your wedding information' },
    { number: 3, title: 'Design Elements', description: 'Choose colors and icons' },
    { number: 4, title: 'Review & Order', description: 'Review and place your order' },
  ];

  const icons = [
    { name: 'ganesh', emoji: '🙏' },
    { name: 'lotus', emoji: '🌸' },
    { name: 'rings', emoji: '💍' },
    { name: 'diya', emoji: '🪔' },
    { name: 'peacock', emoji: '🦚' },
    { name: 'floral', emoji: '🌹' },
  ];

  const fonts = [
    { name: 'serif', display: 'Playfair Display' },
    { name: 'sans', display: 'Inter' },
  ];

  return (
    <>
      <Head>
        <title>Customize Your Invitation - Shaadi Invitations</title>
        <meta name="description" content="Create your perfect wedding invitation with our interactive customizer. Step-by-step design process with live preview." />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-r from-gold-50 to-pastel-pink py-12 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Customize Your Perfect <span className="text-gold-700">Invitation</span>
          </h1>
          <p className="text-lg text-gray-700">Follow these simple steps to create your personalized wedding card</p>
        </div>
      </section>

      {/* Customizer */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          {/* Step Indicator */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              {steps.map((s) => (
                <div key={s.number} className="flex flex-1 items-center">
                  <button
                    onClick={() => setStep(s.number)}
                    className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all duration-300 ${
                      step >= s.number
                        ? 'bg-gold-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step > s.number ? <Check size={24} /> : s.number}
                  </button>
                  {s.number < steps.length && (
                    <div
                      className={`flex-1 h-1 mx-3 transition-all duration-300 ${
                        step > s.number ? 'bg-gold-500' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* Current Step Title */}
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                {steps[step - 1].title}
              </h2>
              <p className="text-gray-600">{steps[step - 1].description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Customization Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                {/* Step 1: Template Selection */}
                {step === 1 && (
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">
                      Select a Template
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-h-96 overflow-y-auto">
                      {invitationDesigns.slice(0, 6).map((design) => (
                        <button
                          key={design.id}
                          onClick={() => {
                            handleInputChange('template', design.id);
                          }}
                          className={`p-4 border-2 rounded-lg transition-all duration-300 text-left ${
                            formData.template === design.id
                              ? 'border-gold-500 bg-gold-50'
                              : 'border-gray-200 hover:border-gold-300'
                          }`}
                        >
                          <div className="text-3xl mb-2">💌</div>
                          <h4 className="font-bold text-gray-900">{design.title}</h4>
                          <p className="text-sm text-gray-600">{design.price}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Customize Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold text-gray-900">
                      Add Your Wedding Details
                    </h3>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Bride's Name
                      </label>
                      <input
                        type="text"
                        value={formData.brideName}
                        onChange={(e) => handleInputChange('brideName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                        placeholder="Enter bride's name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Groom's Name
                      </label>
                      <input
                        type="text"
                        value={formData.groomName}
                        onChange={(e) => handleInputChange('groomName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                        placeholder="Enter groom's name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Wedding Date
                      </label>
                      <input
                        type="text"
                        value={formData.weddingDate}
                        onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                        placeholder="e.g., December 15, 2024"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Venue / Location
                      </label>
                      <textarea
                        value={formData.venue}
                        onChange={(e) => handleInputChange('venue', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                        rows="3"
                        placeholder="Enter venue details"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Design Elements */}
                {step === 3 && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-serif font-bold text-gray-900">
                      Customize Design Elements
                    </h3>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Primary Color
                      </label>
                      <div className="flex gap-3 flex-wrap">
                        {['#FFD700', '#FFC107', '#FF69B4', '#8B0000', '#006400'].map((color) => (
                          <button
                            key={color}
                            onClick={() => handleInputChange('color1', color)}
                            className={`w-12 h-12 rounded-full border-4 transition-all ${
                              formData.color1 === color
                                ? 'border-gray-900 scale-110'
                                : 'border-transparent'
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Accent Color
                      </label>
                      <div className="flex gap-3 flex-wrap">
                        {['#8B0000', '#FFD700', '#006400', '#4B0082', '#FF1493'].map((color) => (
                          <button
                            key={color}
                            onClick={() => handleInputChange('color2', color)}
                            className={`w-12 h-12 rounded-full border-4 transition-all ${
                              formData.color2 === color
                                ? 'border-gray-900 scale-110'
                                : 'border-transparent'
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Decorative Icon
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {icons.map((i) => (
                          <button
                            key={i.name}
                            onClick={() => handleInputChange('icon', i.name)}
                            className={`p-4 rounded-lg border-2 text-3xl transition-all ${
                              formData.icon === i.name
                                ? 'border-gold-500 bg-gold-50'
                                : 'border-gray-300'
                            }`}
                          >
                            {i.emoji}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Font Style
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {fonts.map((f) => (
                          <button
                            key={f.name}
                            onClick={() => handleInputChange('font', f.name)}
                            className={`p-4 rounded-lg border-2 transition-all font-serif ${
                              formData.font === f.name
                                ? 'border-gold-500 bg-gold-50'
                                : 'border-gray-300'
                            }`}
                          >
                            {f.display}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                      Review Your Card
                    </h3>

                    <div className="bg-gold-50 rounded-lg p-6 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Template</span>
                        <span className="font-semibold">{selectedTemplate?.title}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Names</span>
                        <span className="font-semibold">
                          {formData.brideName} & {formData.groomName}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Date</span>
                        <span className="font-semibold">{formData.weddingDate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Price</span>
                        <span className="font-semibold text-maroon-600">{selectedTemplate?.price}</span>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/919999999999?text=Hi! I want to customize card with ${formData.brideName} and ${formData.groomName}'s name`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-center"
                    >
                      Proceed to Order
                    </a>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="btn-secondary flex-1"
                    >
                      Back
                    </button>
                  )}
                  {step < 4 && (
                    <button
                      onClick={() => setStep(step + 1)}
                      className="btn-primary flex-1 flex items-center justify-center gap-2"
                    >
                      Next <ArrowRight size={20} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Live Preview */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Live Preview</h3>
                <div className="card overflow-hidden">
                  {/* Card Preview */}
                  <div
                    className="aspect-video md:aspect-auto md:h-96 flex items-center justify-center p-6 text-center"
                    style={{ backgroundColor: formData.color1 + '20' }}
                  >
                    <div className="space-y-4">
                      <div className="text-4xl">{icons.find((i) => i.name === formData.icon)?.emoji}</div>
                      <div style={{ color: formData.color2 }}>
                        <h4 className="font-serif text-2xl font-bold">{formData.brideName}</h4>
                        <p className="text-sm">&</p>
                        <h4 className="font-serif text-2xl font-bold">{formData.groomName}</h4>
                      </div>
                      <p className="text-xs text-gray-600">{formData.weddingDate}</p>
                    </div>
                  </div>

                  {/* Template Info */}
                  <div className="p-6 bg-white">
                    <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">
                      {selectedTemplate?.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">{selectedTemplate?.description}</p>

                    <div className="space-y-2 text-sm mb-4">
                      <p>
                        <span className="font-semibold">Price:</span> {selectedTemplate?.price}
                      </p>
                      <p>
                        <span className="font-semibold">Details:</span> {selectedTemplate?.details}
                      </p>
                    </div>

                    <div className="flex gap-2 pt-4 border-t">
                      <button className="btn-secondary flex-1 text-xs">
                        <Share size={16} className="mx-auto" />
                      </button>
                      <button className="btn-primary flex-1 text-xs">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
