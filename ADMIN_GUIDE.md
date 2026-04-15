# Admin & Authentication System Guide

## Overview
This document explains the complete authentication and admin system integrated into your Shaadi Invitations website.

---

## Quick Start

### Login Credentials

#### Admin Account
- **Email:** `admin@shaadi.com`
- **Password:** `Admin@123`
- **Access:** Admin Dashboard, Design Management, Price Editing

#### Demo User Account
- **Email:** `user@shaadi.com`
- **Password:** `User@123`
- **Access:** View Gallery, Browse Designs, Customize Invitations

### Accessing Admin Panel
1. Click "Login" button in header (top right)
2. Enter admin credentials
3. You'll be redirected to Admin Dashboard
4. Access "Manage Designs" to edit prices and manage inventory

---

## Project Structure

### New Directories Created
```
/context           → AuthContext for authentication state
/utils             → Authentication utilities (token, validation)
/pages/api         → API routes for backend operations
/pages/admin       → Admin panel pages
```

### New Files Added

#### Authentication Files
- `context/AuthContext.js` - Global auth state management
- `utils/auth.js` - Authentication utilities (validate, token generation)
- `components/ProtectedRoute.jsx` - Protected route wrapper
- `components/AdminSidebar.jsx` - Admin navigation sidebar

#### Authentication Pages
- `pages/login.jsx` - Unified login page for admin & users

#### Admin Pages
- `pages/admin/dashboard.jsx` - Admin dashboard with statistics
- `pages/admin/designs.jsx` - Manage designs (edit prices, delete)

#### API Routes
- `pages/api/auth/login.js` - Authentication endpoint
- `pages/api/designs/index.js` - Design management endpoints

#### Updated Files
- `pages/_app.jsx` - Added AuthProvider wrapper
- `pages/gallery.jsx` - Updated to use new design library  
- `components/Header.jsx` - Added login/logout buttons
- `data/designsLibrary.js` - Created with all 81 designs

---

## Features

### Admin Dashboard Features

#### 1. **Statistics Overview**
- Total number of designs (81)
- Total inventory value in rupees
- Count of premium designs
- Count of traditional designs

#### 2. **Categorization Charts**
- Design distribution by category (Traditional, Premium, Modern, Vintage, Floral)
- Visual progress bars showing percentages
- Price range distribution

#### 3. **Design Management**
- Search designs by name, ID, or code
- Filter by category
- Edit individual design prices
- Delete designs from library
- Upload new design images
- Bulk operations support

#### 4. **Quick Links**
- Access manage all designs
- View public gallery
- Return to homepage

### User Gallery Features

#### 1. **Enhanced Search & Filters**
- Search by design name, ID, or code
- Filter by category (Traditional, Premium, Modern, Vintage, Floral)
- Filter by budget level (Budget, Mid, Premium)
- Filter by price range (₹150-180, ₹190-230, ₹240+)
- Real-time result count

#### 2. **Design Cards**
- Design name and code
- Category and budget badges
- Price display
- Quick customize button
- Hover effects

#### 3. **User-Friendly Navigation**
- Links to admin panel
- Back to home
- Easy navigation

---

## Designs Library (81 Total)

### Design Distribution

| Category | Count | Price Range |
|----------|-------|------------|
| Traditional | 32 | ₹180-225 |
| Premium | 24 | ₹240-290 |
| Modern | 10 | ₹160-230 |
| Vintage | 4 | ₹200-210 |
| Floral | 2 | ₹190-190 |
| Hindu | 3 | ₹215-220 |

### Budget Distribution

| Budget Level | Count | Characteristics |
|-------------|-------|-----------------|
| Budget | 12 | ₹150-180 |
| Mid | 52 | ₹190-230 |
| Premium | 17 | ₹240-290 |

### Sample Designs Included
- 26001: Classic Maroon Royal (₹250)
- 26002: Elegant Gold Frame (₹200)
- 26003: Divine Blessings (₹180)
- ...and 78 more

---

## How to Use Each Feature

### Admin: Edit Design Price

1. Go to Admin Dashboard (`/admin/dashboard`)
2. Click "Manage Designs"
3. Search or filter for the design
4. Click edit icon (pencil) next to price
5. Enter new price
6. Click checkmark to save
7. Success message confirms update

### Admin: Delete Design

1. Go to "Manage Designs"
2. Find the design
3. Click delete icon (trash)
4. Confirm deletion
5. Design removed from library

### Admin: Upload Image

1. Go to "Manage Designs"
2. Click upload icon next to design
3. Select image from computer
4. Image replaces current placeholder
5. *(Backend integration required)*

### User: Browse Gallery

1. Go to Gallery page (`/gallery`)
2. Search by design name/ID or filter by:
   - Category
   - Budget level
   - Price range
3. Click "Customize" on any design
4. Proceed to customizer

### User: Customize Design

1. Select a design from gallery
2. Go through 4-step customizer:
   - Select template
   - Enter wedding details
   - Customize design elements
   - Review and confirm
3. Share or download design

---

## Authentication Flow

### Login Process
```
User enters credentials
    ↓
validateCredentials() checks against ADMIN_CREDENTIALS or USER_CREDENTIALS
    ↓
If valid: generateToken() creates auth token
    ↓
setAuthToken() saves token in localStorage
    ↓
login() updates AuthContext with user data
    ↓
Redirect based on role (admin → /admin/dashboard, user → /gallery)
```

### Protected Routes
- `/admin/dashboard` - Admin only
- `/admin/designs` - Admin only
- Protected by `<ProtectedRoute requiredRole="admin">` wrapper

### Session Persistence
- Auth token saved in browser localStorage
- Persists across page refreshes
- Retrieved on app mount via `getCurrentUser()`
- Automatically logged in if token exists

---

## Admin Panel Walkthrough

### Dashboard Stats
```
┌─────────────────────────────────────┐
│  Admin Dashboard                     │
├─────────────────────────────────────┤
│  Total Designs: 81                  │
│  Total Value: ₹₹Total all prices    │
│  Premium Designs: 17                │
│  Traditional: 32                    │
├─────────────────────────────────────┤
│  Distribution Charts:               │
│  - By Category (pie chart)          │
│  - By Budget (progress bars)        │
│  - By Price Range                   │
└─────────────────────────────────────┘
```

### Design Management Interface
```
Filter Panel:
├─ Search Box (name/code/ID)
├─ Category Dropdown (All, Traditional, etc.)
└─ Search Results Counter

Design Table:
├─ ID | Name | Code | Category | Price | Budget | Actions
├─ Columns sortable
├─ Price editable inline
└─ Actions: Edit, Upload, Delete
```

---

## Data Storage & Management

### Current Storage
- Designs stored in `/data/designsLibrary.js`
- Authentication in `/utils/auth.js` (hardcoded)
- API routes simulate backend

### For Production

#### Database Setup Recommended
```javascript
// Example: Using MongoDB
{
  _id: ObjectId,
  id: "26001",
  name: "Classic Maroon Royal",
  code: "PRT 13692",
  price: 250,
  category: "Traditional",
  style: "Royal",
  budget: "Premium",
  image_url: "https://storage/images/26001.jpg",
  createdAt: Date,
  updatedAt: Date
}
```

#### Authentication Security
1. Hash passwords using bcrypt
2. Use JWT tokens instead of base64
3. Implement refresh tokens
4. Add rate limiting on login
5. Use secure HTTP-only cookies for tokens

#### Image Storage
- Upload to AWS S3 or similar
- Store references in database
- Optimize images for web
- Implement CDN for faster delivery

---

## API Endpoints

### Authentication
```
POST /api/auth/login
Request: { email, password }
Response: { success: true, token, role, email }
```

### Designs Management
```
GET /api/designs              → Get all designs
GET /api/designs?category=X   → Filter by category
PUT /api/designs              → Update design (price, name)
DELETE /api/designs           → Delete design
```

---

## Image Integration

### Current Setup
- Images stored in external path: `C:\Users\khopa\Downloads\ALBUM 01\VOL 01\`
- 81 JPG/JPEG files named: `26001 PRT 13692.jpg` to `26081 PRT 13563.jpg`
- Gallery shows placeholder with design name

### To Display Actual Images

#### Option 1: Copy Images to Public Folder
```bash
cp -r "C:\Users\khopa\Downloads\ALBUM 01\VOL 01\*" "public/designs/"
```

Then update gallery:
```jsx
<img src={`/designs/${design.image}`} alt={design.name} />
```

#### Option 2: Set Up Backend File Server
```javascript
// next.config.js
module.exports = {
  proxy: {
    '/albums': {
      target: 'file://C:/Users/khopa/Downloads/ALBUM 01/VOL 01/',
    }
  }
}
```

#### Option 3: Use Cloud Storage
- Upload all images to AWS S3
- Update image URLs in designsLibrary.js
- Replace `image: '26001 PRT 13692.jpg'` with full S3 URL

---

## Customization Guide

### Change Admin Credentials
Edit `utils/auth.js`:
```javascript
const ADMIN_CREDENTIALS = {
  email: 'your-email@company.com',
  password: 'your-secure-password',
  role: 'admin'
};
```

### Add More Users
Edit `utils/auth.js` and add more constants:
```javascript
const USER_CREDENTIALS = {
  email: 'user@shaadi.com',
  password: 'User@123',
  role: 'user'
};

// Add new role
const MANAGER_CREDENTIALS = {
  email: 'manager@shaadi.com',
  password: 'Manager@123',
  role: 'manager'
};
```

### Change Design Pricing
1. Go to Admin Dashboard
2. Click "Manage Designs"
3. Edit any price inline
4. Changes persist in session

For permanent storage, implement database integration.

### Customize Colors & Branding
Update `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        maroon: { ... },  // Change brand colors
        gold: { ... },
        // Add new colors
      }
    }
  }
}
```

---

## Troubleshooting

### Problem: Login page shows blank
**Solution:** Ensure AuthProvider is wrapped in _app.jsx

### Problem: Protected routes redirect to login
**Solution:** Check localStorage for auth_token, verify token isn't expired

### Problem: Designs don't show prices after edit
**Solution:** State updates are in-memory. For persistence, implement database.

### Problem: Images not displaying
**Solution:** Copy images to `/public/designs/` folder or configure image proxy

### Problem: Can't access admin panel
**Solution:** Use demo credentials or check that email/password match ADMIN_CREDENTIALS

---

## Testing

### Test Admin Workflow
1. Go to login page `/login`
2. Click "Admin Demo" button
3. Verify redirects to `/admin/dashboard`
4. Check statistics display
5. Go to `/admin/designs`
6. Search, filter, edit prices
7. Click logout

### Test User Workflow
1. Go to login page `/login`
2. Click "User Demo" button
3. Verify redirects to `/gallery`
4. Test all filters
5. Try customizing a design
6. Logout and verify session clears

### Test Protected Routes
1. Try accessing `/admin/dashboard` without login
2. Should redirect to login
3. With user role, should redirect to home
4. With admin role, should show dashboard

---

## Performance Tips

### Optimization
- Images are lazy-loaded
- Filters work client-side (fast for 81 items)
- Consider pagination for 1000+ designs
- Memoize expensive computations

### Scaling for More Designs
1. Implement server-side pagination
2. Add caching layer
3. Use database with indexing
4. Implement image compression
5. Use CDN for images

---

## Support & Next Steps

### Immediate Actions
1. ✅ Test login with demo credentials
2. ✅ Browse and manage designs
3. ✅ Update admin credentials with secure password
4. ✅ Copy images to public folder
5. ✅ Test all filter combinations

### For Production
1. Set up MongoDB or PostgreSQL
2. Implement proper authentication (JWT)
3. Add user email verification
4. Set up payment integration (Razorpay)
5. Deploy to production server
6. Set up analytics tracking
7. Configure backup system

---

## Contact & Support

For issues or questions, WhatsApp us at: +919999999999

Last Updated: April 15, 2026
