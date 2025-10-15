# Vercel Deployment Guide - RK Industries Website

## ✅ Email Functionality Configured for Vercel

Your contact form is now ready to work with Vercel deployment!

## Quick Start - Deploy to Vercel

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Update website with products, contact form, and Vercel email integration"
git push origin main
```

### Step 2: Vercel Will Auto-Deploy

Since your project is already connected to Vercel:
- Vercel will automatically detect the push
- It will build and deploy your updated site
- Check the Vercel dashboard for deployment status

### Step 3: Add Environment Variables in Vercel

**IMPORTANT**: Add these environment variables in Vercel dashboard:

1. Go to your project on [vercel.com](https://vercel.com)
2. Click **Settings** → **Environment Variables**
3. Add each variable:

```
MAILTRAP_HOST = sandbox.smtp.mailtrap.io
MAILTRAP_PORT = 2525
MAILTRAP_USER = 4e78804bdc8e3f
MAILTRAP_PASS = 6f473cb21c0841
RECIPIENT_EMAIL = rkindustriespdp@gmail.com
```

4. After adding variables, **redeploy** your site:
   - Go to **Deployments**
   - Click on the latest deployment
   - Click **Redeploy**

## What Was Changed

### ✅ Converted from Netlify to Vercel

**Created:**
- `api/send-email.ts` - Vercel serverless function
- `vercel.json` - Vercel configuration

**Deleted:**
- `netlify/functions/` folder
- `netlify.toml` file

**Unchanged:**
- All React components
- Products with 5 new images
- Contact form UI
- Manufacturing video
- All styling

## Contact Form Features

- 📧 Sends emails to: `rkindustriespdp@gmail.com`
- 📱 Includes: Name, Email, Phone, Requirements
- 🎨 Beautiful HTML email template
- ✅ Success/error messages
- 🗺️ Location map with contact details

## Testing

### Local Development

**Note**: Contact form won't work with `npm run dev` because Vercel functions need the Vercel environment.

**To test locally:**
```bash
# Install Vercel CLI
npm install -g vercel

# Run with Vercel dev server
vercel dev
```

### Production Testing

After deployment:
1. Visit your live site
2. Fill out the contact form
3. Submit
4. Check Mailtrap inbox at: https://mailtrap.io

## Switching to Real Email

Currently using **Mailtrap** (testing). To send real emails:

### Use Gmail SMTP

Update these variables in Vercel:
```
MAILTRAP_HOST = smtp.gmail.com
MAILTRAP_PORT = 587
MAILTRAP_USER = youremail@gmail.com
MAILTRAP_PASS = your-gmail-app-password
```

**Get Gmail App Password:**
1. Google Account → Security
2. 2-Step Verification → App passwords
3. Generate password for "Mail"
4. Use that password

## Troubleshooting

### Error: "Could not connect to the server"

**Cause**: Environment variables not set in Vercel
**Solution**: Add all 5 environment variables in Vercel dashboard and redeploy

### Form works locally but not in production

**Cause**: Environment variables missing
**Solution**: Verify all variables are added in Vercel Settings

### Emails not arriving

**Check**:
1. Mailtrap inbox (emails go here in testing mode)
2. Vercel function logs for errors
3. Environment variables are correct

## File Structure

```
project/
├── api/
│   └── send-email.ts        # ✅ Vercel serverless function
├── src/
│   ├── components/
│   │   ├── CTASection.tsx   # Contact form
│   │   ├── Footer.tsx       # Updated contact info
│   │   └── ...
│   └── pages/
│       └── Products.tsx     # 5 products with images
├── public/
│   ├── D-Cut Carry bags.png
│   ├── Garbage bags.png
│   ├── Grocery packing covers.png
│   ├── Nursery bags.png
│   ├── W-Cut Carry Bags.png
│   └── LOGO.png
├── .env.local              # Local environment variables
├── vercel.json             # ✅ Vercel configuration
└── package.json
```

## Environment Variables Summary

```env
# Email SMTP Settings (Mailtrap)
MAILTRAP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_PORT=2525
MAILTRAP_USER=4e78804bdc8e3f
MAILTRAP_PASS=6f473cb21c0841

# Email Recipient
RECIPIENT_EMAIL=rkindustriespdp@gmail.com
```

## Next Steps

1. ✅ Code converted for Vercel
2. 📤 Push to GitHub
3. ⚙️ Add environment variables in Vercel
4. 🚀 Vercel auto-deploys
5. ✉️ Test contact form
6. 🎉 Your site is live!

---

**Everything is ready for Vercel deployment!** 🚀
