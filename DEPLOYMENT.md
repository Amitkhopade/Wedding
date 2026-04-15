# 🚀 Deployment Guide - Shaadi Invitations

This guide covers how to deploy the Shaadi Invitations website to various platforms.

## Prerequisites

- Domain name (optional but recommended)
- Node.js 16+ installed locally
- Git (for version control)
- GitHub account (recommended)

---

## Option 1: Deploy on Vercel (Recommended)

Vercel is the creator of Next.js and provides the best integration and performance.

### Steps:

1. **Create Git Repository:**
   ```bash
   cd Wedding
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub:**
   - Create repository on GitHub
   - Push code: `git push origin main`

3. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select Next.js framework
   - Click Deploy

4. **Configure Environment Variables:**
   - In Vercel dashboard, go to Settings > Environment Variables
   - Add: `NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999`

5. **Update WhatsApp Link:**
   - Replace all instances of `919999999999` with your actual WhatsApp number

### Cost: Free tier available (~100k requests/month)

---

## Option 2: Deploy on AWS

### Using AWS Amplify (Easiest):

1. **Connect Repository:**
   - Go to AWS Amplify
   - Click "New App"
   - Choose "Host web app"
   - Connect your GitHub repository
   - Select Next.js

2. **Configure Build Settings:**
   - Build command: `npm run build`
   - Start command: `npm start`

3. **Deploy:**
   - Click Deploy

### Using AWS EC2 (More Control):

1. **Launch EC2 Instance:**
   ```bash
   # Use Ubuntu 22.04 LTS
   # t3.micro or t3.small instance type
   ```

2. **SSH into Instance:**
   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

3. **Setup Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Deploy Application:**
   ```bash
   git clone your-repo-url
   cd Wedding
   npm install
   npm run build
   ```

5. **Setup PM2 (Process Manager):**
   ```bash
   npm install -g pm2
   pm2 start npm --name "shaadi-invitations" -- start
   pm2 startup
   pm2 save
   ```

6. **Setup Nginx Reverse Proxy:**
   ```bash
   sudo apt-get install nginx
   ```

   Edit `/etc/nginx/sites-available/default`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Restart Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

---

## Option 3: Deploy on Railway

1. **Create Railway Account:**
   - Go to [railway.app](https://railway.app)

2. **Connect GitHub:**
   - Create New Project
   - Select "Deploy from GitHub repo"
   - Authorize Railway to access your GitHub

3. **Configure:**
   - Select Next.js preset
   - Add environment variables
   - Click Deploy

### Cost: Free tier included (~5GB/month)

---

## Option 4: Deploy on Netlify

1. **Connect Repository:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub

2. **Configure Build:**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy:**
   - Netlify will automatically start deployment

### Note: Netlify has limitations with Next.js server-side features. Use Vercel or Railway for better compatibility.

---

## Option 5: Docker Deployment (Any Cloud Platform)

### Create Dockerfile:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Create .dockerignore:

```
node_modules
.next
.git
.env
.env.local
```

### Build and Run:

```bash
docker build -t shaadi-invitations:latest .
docker run -p 3000:3000 shaadi-invitations:latest
```

### Push to Docker Hub:

```bash
docker tag shaadi-invitations:latest your-username/shaadi-invitations:latest
docker push your-username/shaadi-invitations:latest
```

---

## Custom Domain Setup

### For Vercel:
1. Go to Project Settings > Domains
2. Add your custom domain
3. Vercel provides DNS instructions
4. Point DNS records to Vercel

### For AWS:
1. Register domain (Route 53 or external registrar)
2. Go to Route 53
3. Create hosted zone for your domain
4. Point nameservers at registrar

### For Railway/Railway:
1. Add domain in project settings
2. Follow platform-specific DNS instructions

---

## SSL Certificate Setup

Most platforms (Vercel, Railway, AWS Amplify) provide free SSL via Let's Encrypt.

### For AWS EC2 with Nginx:

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d your-domain.com
sudo certbot renew --dry-run  # Test automatic renewal
```

---

## Environment Variables to Configure

Create `.env.production` or configure in platform dashboard:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
NEXT_PUBLIC_PHONE_NUMBER=919999999999
NEXT_PUBLIC_EMAIL=hello@shaadi-invitation.com
```

---

## Performance Optimization for Production

### 1. Image Optimization
```bash
npm install sharp  # For image optimization
```

### 2. Enable Compression
```javascript
// next.config.js
module.exports = {
  compress: true,
};
```

### 3. Setup CDN
- Recommended: Cloudflare (free)
- AWS CloudFront
- Vercel automatically includes CDN

### 4. Database & Caching (Optional)
- Redis for session storage
- MongoDB for design gallery expansion
- Firebase for real-time updates

---

## Monitoring & Analytics

### Setup Google Analytics:

Add to `pages/_document.jsx`:

```jsx
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'YOUR-GA-ID');
    `,
  }}
/>
```

### Setup Error Monitoring:

```bash
npm install @sentry/react @sentry/tracing
```

---

## Continuous Deployment

### GitHub Actions (Automatic Deployment on Push):

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: vercel --prod
```

---

## Quick Deploy Commands

### Vercel:
```bash
npm install -g vercel
vercel --prod
```

### Railway:
```bash
npm install -g railway
railway login
railway up
```

### AWS CLI:
```bash
aws s3 cp .next s3://your-bucket/.next --recursive
```

---

## Troubleshooting

### Build Fails:
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### WhatsApp Links Not Working:
- Verify WhatsApp number format (without +, with country code)
- Test: `https://wa.me/919999999999`

### Images Not Loading:
- Check image paths in components
- Verify image optimization settings
- Check CORS headers

### Slow Performance:
- Enable image optimization
- Setup CDN
- Check bundle size: `npm run build -- --analyze`

---

## Post-Deployment Checklist

- [ ] Test all pages on desktop
- [ ] Test all pages on mobile
- [ ] Test WhatsApp links
- [ ] Test contact form
- [ ] Test gallery filters
- [ ] Test customizer
- [ ] Check page load speed
- [ ] Verify meta tags
- [ ] Test social sharing
- [ ] Setup monitoring
- [ ] Backup database/content
- [ ] Configure error logging
- [ ] Setup email notifications
- [ ] Create backup deployment

---

## Support & Next Steps

1. **SEO**: Submit sitemap to Google Search Console
2. **Monitoring**: Setup uptime monitoring
3. **Backups**: Configure automated backups
4. **Scaling**: Plan for traffic spikes during wedding season
5. **Payments**: Integrate Razorpay for online payments
6. **CRM**: Integrate CRM for lead management

---

**Happy Deploying! 🎉**
