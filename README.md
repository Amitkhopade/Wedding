# Shaadi Invitations - Premium Wedding Card Website

A modern, elegant, and conversion-focused website for a wedding invitation printing business targeting Indian customers.

## 🌟 Features

### 📱 Pages
- **Home Page**: Hero section with featured categories, testimonials, services, and CTA
- **Design Gallery**: 500+ filterable invitation designs (by religion, style, budget)
- **Customize**: Interactive step-by-step design configurator with live preview
- **Pricing**: Transparent pricing plans, printing options, and paper quality comparisons
- **About**: Brand story, values, team, and timeline
- **Contact**: Contact form, WhatsApp integration, and location map

### 🎨 Design Features
- Premium color palette (Ivory, Gold, Maroon, Emerald, Pastel Pink)
- Elegant serif fonts (Playfair Display) + clean sans-serif (Inter)
- Fully responsive mobile-first design
- Smooth animations and transitions
- Luxury shadows and high whitespace design

### 🔧 Technical Features
- Next.js & React for optimal performance
- Tailwind CSS for styling
- Phosphor Icons for UI elements
- WhatsApp API integration (floating CTA + inline links)
- SEO optimized with meta tags
- Fast loading and image optimization

### 💰 Conversion Optimization
- Sticky WhatsApp CTA button
- Exit-intent popup ready (via code)
- Social proof (testimonials with ratings)
- Urgency messaging ("Limited slots for wedding season")
- Simple CTA on every section

## 📁 Project Structure

```
├── pages/
│   ├── _app.jsx           # App wrapper with Header, Footer, WhatsApp CTA
│   ├── _document.jsx      # Document setup
│   ├── index.jsx          # Home page
│   ├── gallery.jsx        # Design gallery with filters
│   ├── customize.jsx      # Interactive design customizer
│   ├── pricing.jsx        # Pricing plans and options
│   ├── about.jsx          # About the brand
│   └── contact.jsx        # Contact form and information
├── components/
│   ├── Header.jsx         # Navigation header
│   ├── Footer.jsx         # Footer with social links
│   ├── WhatsAppCTA.jsx    # Floating WhatsApp button
│   ├── Hero.jsx           # Home page hero section
│   ├── Services.jsx       # Services showcase
│   ├── Testimonials.jsx   # Client testimonials
│   ├── CTASection.jsx     # Call-to-action section
│   └── DesignCard.jsx     # Individual design card
├── data/
│   ├── designs.js         # Design templates and filters
│   ├── testimonials.js    # Client testimonials
│   └── pricing.js         # Pricing plans and options
├── styles/
│   └── globals.css        # Global styles and animations
├── public/                # Static assets
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. **Navigate to project directory:**
   ```bash
   cd Wedding
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create environment variables (optional):**
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
   ```

4. **Run development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

### Deploy to AWS/Other Platforms:
```bash
npm run build
# Deploy the .next folder to your hosting platform
```

## 🎯 Customization

### Update Brand Name
- Edit `pages/index.jsx` - Change "Shaadi Invitations"
- Edit `components/Header.jsx` - Update logo text
- Edit `components/Footer.jsx` - Update footer branding

### Update Contact Information
- `components/Header.jsx` - WhatsApp number in header
- `components/Footer.jsx` - Contact details
- `components/WhatsAppCTA.jsx` - WhatsApp number
- `pages/contact.jsx` - All contact details

### Add More Designs
- Edit `data/designs.js` - Add new design objects following the same structure

### Customize Colors
- Edit `tailwind.config.js` - Modify color palette
- Edit `styles/globals.css` - Update custom colors

### Change Testimonials
- Edit `data/testimonials.js` - Add/update client testimonials

### Update Pricing
- Edit `data/pricing.js` - Modify pricing plans and options

## 🔌 API Integrations (Ready to Implement)

### WhatsApp Business API
- Already integrated with WhatsApp links
- Ready for WhatsApp Business API upgrade

### Payment Gateway (Razorpay)
- Placeholder code ready for Razorpay payment integration
- Can be added to checkout flow

### Email Service
- Contact form ready for email service integration (SendGrid, Mailgun, etc.)

### Analytics
- Ready for Google Analytics 4 integration

## 🎨 Color Reference

| Color | Value | Usage |
|-------|-------|-------|
| Ivory | #F8F6F0 | Background |
| Gold-500 | #FFC107 | Primary CTA |
| Maroon-500 | #8B0000 | Accent |
| Emerald-500 | #28A745 | Success |
| Pastel Pink | #F8D7DA | Background accent |

## 📱 Responsive Design

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## ♿ Accessibility

- Semantic HTML structure
- Alt text for images
- Proper color contrast
- Keyboard navigation support
- ARIA labels where needed

## 📊 SEO Optimization

- Meta tags on all pages
- Structured data ready
- Mobile-first indexing
- Fast loading times
- Optimized images

## 🔐 Security

- HTTPS ready
- Form validation on client and server
- Protected API endpoints ready
- CORS configuration

## 📞 Support & Contact Info

**Default Contact Numbers (Replace with actual):**
- WhatsApp: +91 99999 99999
- Phone: +91 99999 99999
- Email: hello@shaadi-invitation.com

## 📄 License

This project is proprietary and for commercial use only.

## 🤝 Contributing

Not open for public contributions. For custom modifications, contact the team.

---

## Quick Tips

1. **Update WhatsApp Number**: Search for "919999999999" in the entire codebase and replace with your actual number
2. **Change Brand Name**: Replace "Shaadi Invitations" throughout the codebase
3. **Add Real Images**: Replace placeholder images with actual design images
4. **Enable Analytics**: Add Google Analytics script to _document.jsx
5. **Setup Email**: Integrate email service for contact form submissions

## Performance Optimization Tips

1. **Images**: Optimize all images to <100KB
2. **Code Splitting**: Next.js does this automatically
3. **Caching**: Configure CDN caching for static assets
4. **Minification**: Build process handles this

## 🚀 Launch Checklist

- [ ] Update brand name and colors
- [ ] Add real design images
- [ ] Update contact information
- [ ] Configure WhatsApp Business API
- [ ] Setup email service
- [ ] Add Google Analytics
- [ ] Configure SSL certificate
- [ ] Test on mobile devices
- [ ] Setup CDN for images
- [ ] Configure domain name
- [ ] Create privacy policy/terms pages
- [ ] Deploy to production

---

**Built with ❤️ for Indian Weddings**
