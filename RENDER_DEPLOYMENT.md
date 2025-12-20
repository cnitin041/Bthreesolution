# Deploy to Render - Complete Guide

## Prerequisites
- GitHub account
- Render account (sign up free at https://render.com)
- Gmail App Password ready

## Step-by-Step Deployment

### 1. Push Code to GitHub (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Create Render Web Service

1. Go to https://render.com/dashboard
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Select the repository containing this project

### 3. Configure Build Settings

**Basic Settings:**
- **Name**: `bthreesolutions` (or your choice)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main`

**Build & Deploy:**
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Auto-Deploy**: Yes (recommended)

### 4. Add Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**

Add these two variables:

| Key | Value |
|-----|-------|
| `EMAIL_USER` | bthreesolutions@gmail.com |
| `EMAIL_PASSWORD` | Your Gmail App Password (16 characters) |

**How to get Gmail App Password:**
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to Security → 2-Step Verification → App passwords
4. Generate new app password
5. Copy the 16-character code

### 5. Select Instance Type

- **Free** tier works great for testing
- **Starter** ($7/month) recommended for production

### 6. Deploy!

Click **"Create Web Service"**

Render will:
- Clone your repository
- Install dependencies
- Build the project
- Start the server

### 7. View Your Site

Once deployed, you'll get a URL like:
`https://bthreesolutions.onrender.com`

## Testing After Deployment

✅ Check homepage loads  
✅ Test navigation to service pages  
✅ Submit contact form  
✅ Click WhatsApp widget  
✅ Test mobile responsive design  

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Ensure all dependencies are in package.json
- Verify Node version compatibility

### Contact Form Not Working
- Verify EMAIL_USER and EMAIL_PASSWORD are set correctly
- Check Gmail App Password is valid
- Review function logs in Render dashboard

### 404 Errors on Routes
- Ensure the project is properly built
- Check that routing is configured for SPA mode

## Custom Domain (Optional)

1. Go to your service settings
2. Click "Custom Domains"
3. Add your domain
4. Update DNS records as instructed

## Monitoring

Render provides:
- Automatic health checks
- Build & deploy logs
- Runtime logs
- Metrics dashboard

## Updating Your Site

Simply push to GitHub:
```bash
git add .
git commit -m "Update website"
git push
```

Render will automatically rebuild and deploy! 🚀

## Free Tier Limitations

- Service spins down after 15 min of inactivity
- First request after sleep takes ~30 seconds
- 750 hours/month free (sufficient for most sites)

## Upgrading to Paid

For production use, consider:
- **Starter**: $7/month - Always on, no sleep
- **Standard**: $25/month - More resources

---

**Support**: https://render.com/docs
