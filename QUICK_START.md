# 🚀 QUICK START GUIDE

Get the wedding invitation website up and running in **5 minutes**!

---

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies (2 min)
```bash
# Navigate to the project folder
cd Wedding

# Install all required packages
npm install

# This will create node_modules and install Next.js, React, Tailwind, etc.
```

### Step 2: Configure Your Information (1 min)

**Update WhatsApp Number:**
1. Open your code editor
2. Search for: `919999999999`
3. Replace with your actual WhatsApp number (country code + 10 digits)
4. Locations to update:
   - `components/Header.jsx`
   - `components/WhatsAppCTA.jsx`
   - `pages/contact.jsx`
   - All pages

**Update Brand Name:**
1. Search for: `Shaadi Invitations`
2. Replace with your brand name
3. Update in all files

### Step 3: Start Development Server (1 min)
```bash
npm run dev
```

Server will start at `http://localhost:3000`

### Step 4: View Live Website (1 min)
1. Open browser to `http://localhost:3000`
2. Click through all pages
3. Test WhatsApp button
4. Try the customizer

### Step 5: Make Your First Edit (Optional)
```javascript
// Edit this file: pages/index.jsx
// Change the hero heading to your custom text
// Browser will auto-refresh!
```

---

## 📋 Essential Changes Before Going Live

### High Priority (MUST DO)

1. **Brand Information:**
   - [ ] Replace all "Shaadi Invitations" with your brand name
   - [ ] Update WhatsApp number (919999999999 → your number)
   - [ ] Update email (hello@shaadi-invitation.com → your email)
   - [ ] Update phone number
   - [ ] Update business address

2. **Images:**
   - [ ] Replace placeholder images with real design samples
   - [ ] Add real client testimonial photos
   - [ ] Update team member photos

3. **Content:**
   - [ ] Change testimonial names/quotes
   - [ ] Update pricing to your actual prices
   - [ ] Modify design descriptions
   - [ ] Update "About Us" story

### Medium Priority (SHOULD DO)

4. **Features:**
   - [ ] Setup WhatsApp Business API
   - [ ] Create contact form backend
   - [ ] Setup email notifications
   - [ ] Add Google Analytics

5. **SEO:**
   - [ ] Update meta descriptions
   - [ ] Add Google Search Console
   - [ ] Create sitemap
   - [ ] Add robots.txt

### Low Priority (NICE TO HAVE)

6. **Enhancements:**
   - [ ] Add real payment gateway
   - [ ] Integrate CRM system
   - [ ] Add live chat
   - [ ] Setup automated emails

---

## 🔧 Common Customizations

### Change Colors

**File:** `tailwind.config.js`

```javascript
// Change gold color
gold: {
  500: '#YOUR_COLOR_CODE', // Was #FFC107
}

// Change maroon color
maroon: {
  500: '#YOUR_COLOR_CODE', // Was #8B0000
}
```

### Change Price

**File:** `data/pricing.js`

```javascript
{
  id: 'premium',
  name: 'Premium',
  price: '₹350',  // Change this
  // ... rest of plan
}
```

### Add New Design

**File:** `data/designs.js`

```javascript
{
  id: 12,  // New unique ID
  title: 'Your Design Name',
  religion: 'hindu',  // or 'muslim', 'christian', 'sikh', 'all'
  style: 'modern',    // or 'traditional', 'royal', 'minimal'
  budget: 'mid',      // or 'budget', 'premium'
  price: '₹300 - ₹500',
  image: 'https://your-image-url.jpg',
  description: 'Your design description',
  details: 'Paper type, printing method',
}
```

### Update Contact Info

**Files to update:**
- `components/Header.jsx`
- `components/Footer.jsx`
- `pages/contact.jsx`

```javascript
const whatsappNumber = 'YOUR_NUMBER'; // 919999999999
const email = 'your@email.com';
const phone = '+91 XXXXX XXXXX';
```

---

## 📂 File Structure Reference

```
Wedding/
├── pages/                  # Website pages
│   ├── _app.jsx           # Main app setup
│   ├── index.jsx          # Home page
│   ├── gallery.jsx        # Design gallery
│   ├── customize.jsx      # Design customizer
│   ├── pricing.jsx        # Pricing page
│   ├── about.jsx          # About page
│   └── contact.jsx        # Contact page
│
├── components/            # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Testimonials.jsx
│   ├── CTASection.jsx
│   ├── WhatsAppCTA.jsx
│   └── DesignCard.jsx
│
├── data/                  # Content data
│   ├── designs.js        # Design catalog
│   ├── testimonials.js   # Client reviews
│   └── pricing.js        # Pricing plans
│
├── styles/               # CSS
│   └── globals.css       # Global styles
│
├── public/               # Static files
│   └── (add images here)
│
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind settings
├── next.config.js        # Next.js config
└── README.md             # Documentation
```

---

## 🎨 Useful File Locations

| What to Change | Where to Look |
|---|---|
| Hero text | `pages/index.jsx` - Hero component |
| Design gallery | `data/designs.js` |
| Pricing | `data/pricing.js` |
| Testimonials | `data/testimonials.js` |
| Colors | `tailwind.config.js` |
| Global styles | `styles/globals.css` |
| WhatsApp link | Search `919999999999` in all files |
| Email | `components/Footer.jsx` and `pages/contact.jsx` |

---

## 🧪 Testing Checklist

```
Before launching, test:

Home Page:
☐ Hero section loads
☐ All CTA buttons work
☐ Services display correctly
☐ Testimonials show
☐ WhatsApp button works

Gallery Page:
☐ Designs load
☐ Filters work
☐ Cards display correctly
☐ Customize button redirects

Customize Page:
☐ Step 1: Templates load
☐ Step 2: Form inputs work
☐ Step 3: Color selection works
☐ Step 4: Preview displays
☐ Next/Back buttons work
☐ Order button opens WhatsApp

Pricing Page:
☐ Plans display
☐ Get Quote buttons work
☐ Comparison table displays

About Page:
☐ Timeline displays
☐ Team members show

Contact Page:
☐ Form fields work
☐ Submit button works
☐ Map displays

Mobile Testing:
☐ Layout responsive
☐ Menu hamburger works
☐ Forms accessible
☐ Buttons clickable

Performance:
☐ Page loads < 3 seconds
☐ WhatsApp link works
☐ No console errors
```

---

## 🚀 Deploy in 10 Minutes

### Option A: Vercel (Easiest)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy (follow prompts)
vercel

# 3. Done! Your site is live
# Vercel will give you a URL
```

### Option B: GitHub + Vercel

```bash
# 1. Create GitHub account
# 2. Create repository
# 3. Push code: git push origin main
# 4. Go to vercel.com → Connect GitHub
# 5. Deploy automatically
```

---

## 🐛 Troubleshooting

### Issue: "npm install" fails
```bash
# Clear cache and try again
npm cache clean --force
npm install
```

### Issue: Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Issue: Styles not loading
```bash
# Rebuild Tailwind
npx tailwindcss build -i styles/globals.css -o output.css
```

### Issue: Images not loading
```bash
# Check image paths are correct
# Should be: /images/filename.jpg (in public folder)
```

### Issue: WhatsApp link not working
```bash
# Check number format: 91XXXXXXXXXX (no +, no spaces)
# Test: https://wa.me/919999999999
```

---

## 📚 Important Files to Know

1. **`pages/_app.jsx`** - Main layout, wraps all pages
2. **`tailwind.config.js`** - All color/design settings
3. **`data/designs.js`** - Design catalog (edit to add/remove designs)
4. **`data/pricing.js`** - All pricing (edit with your prices)
5. **`data/testimonials.js`** - Client reviews (edit with real reviews)

---

## 💡 Pro Tips

1. **Hot Reload:** Edit a file → Browser auto-refreshes (magic!)
2. **Search & Replace:** Use Ctrl+Shift+H to find all instances
3. **Mobile Testing:** Use `npm run dev` and view on phone
4. **Backup:** Always commit to Git before major changes
5. **Copy Content:** See `CONTENT_COPY.md` for all text

---

## ✅ Weekly Maintenance Tasks

- [ ] Check website loads
- [ ] Test WhatsApp inquiries
- [ ] Review contact form submissions
- [ ] Update design gallery if needed
- [ ] Monitor uptime & performance
- [ ] Update testimonials
- [ ] Backup database/images

---

## 🎯 Next Steps After Launch

1. **Setup Analytics:**
   - Connect Google Analytics
   - Monitor traffic sources
   - Track conversion rates

2. **Marketing:**
   - Create Google My Business
   - Submit to directories
   - Share on social media

3. **SEO:**
   - Submit sitemap to Google Search Console
   - Build backlinks
   - Write blog posts
   - Optimize keywords

4. **Growth:**
   - Run Facebook ads
   - Email marketing campaigns
   - Referral program
   - Partnerships with wedding planners

---

## 📞 Quick Contact Info To Update

**Search & Replace These:**
```
919999999999 → Your WhatsApp number
hello@shaadi-invitation.com → Your email
Shaadi Invitations → Your brand name
Mumbai → Your city
Bandra → Your location
```

---

## 🎓 Learning Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **React Docs:** https://react.dev
- **Phosphor Icons:** https://phosphoricons.com

---

## 🤝 Need Help?

**Common Questions:**
- Q: How do I add new designs? → Edit `data/designs.js`
- Q: How do I change prices? → Edit `data/pricing.js`
- Q: How do I update testimonials? → Edit `data/testimonials.js`
- Q: How do I deploy? → Follow DEPLOYMENT.md
- Q: How do I customize styles? → Edit `tailwind.config.js`

---

**You're all set! Enjoy building your wedding invitation empire! 💍✨**
