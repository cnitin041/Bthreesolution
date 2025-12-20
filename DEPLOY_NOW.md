# Quick Deploy to Render - 5 Minutes

Your code is ready! Follow these steps:

## 1. Go to Render Dashboard
🔗 **Open**: https://render.com/dashboard

## 2. Create New Web Service
- Click **"New +"** button (top right)
- Select **"Web Service"**

## 3. Connect GitHub Repository
- Click **"Connect account"** if not connected
- Find repository: `zavame3223/Aspiraedgeapp`
- Click **"Connect"**

## 4. Configure Service

Render will auto-detect your `render.yaml` file! 

If not, use these settings:

| Setting | Value |
|---------|-------|
| **Name** | `bthreesolutions` |
| **Environment** | Node |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Branch** | `main` |

## 5. Add Environment Variables

**IMPORTANT**: Click **"Advanced"** and add:

```
EMAIL_USER = bthreesolutions@gmail.com
EMAIL_PASSWORD = [Your Gmail App Password]
```

### How to get Gmail App Password:
1. Google Account → Security
2. Enable 2-Step Verification
3. Security → App Passwords
4. Generate new password
5. Copy 16-character code

## 6. Select Plan
- **Free** - Good for testing (spins down after 15min)
- **Starter ($7/mo)** - Recommended for production

## 7. Deploy!
Click **"Create Web Service"**

⏱️ Build takes ~2-3 minutes

## 8. Your Site URL
You'll get: `https://bthreesolutions.onrender.com`

---

## ✅ Deployment Checklist

After deployment, test:

- [ ] Homepage loads
- [ ] Click "Get Started" button → Contact form opens
- [ ] Submit contact form → Check email
- [ ] Click WhatsApp widget → Opens WhatsApp
- [ ] Navigate to service pages (Blog Writing, SEO Content, etc.)
- [ ] Test on mobile device

---

## 🔄 Future Updates

Whenever you make changes:

```bash
git add .
git commit -m "Your update message"
git push
```

Render auto-deploys from GitHub! 🚀

---

## Need Help?
- Build logs: Render Dashboard → Your Service → Logs
- Support: https://render.com/docs
