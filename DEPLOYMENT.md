# Deploying to Netlify

## Option 1: Deploy via GitHub (Recommended)

1. **Create a GitHub repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `portfolio-iplays1` or `my-portfolio`
   - Don't initialize with README (you already have one)

2. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Connect to Netlify:**
   - Go to [Netlify](https://www.netlify.com)
   - Sign up/Log in (you can use GitHub to sign in)
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub
   - Select your repository
   - Netlify will auto-detect Next.js settings
   - Click "Deploy site"

4. **Get your link:**
   - After deployment (takes 1-2 minutes), you'll get a link like: `https://random-name-123.netlify.app`
   - You can customize the site name in Site settings → Change site name

## Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

4. **Follow the prompts** to create a new site or link to existing one

## Option 3: Drag and Drop (Quick Test)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Go to Netlify:**
   - Visit [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `.next` folder (but this won't work well for Next.js)

**Note:** Option 1 (GitHub) is recommended because:
- Auto-deploys when you push changes
- Free custom domain options
- Easy to update
- Better for Next.js apps

## After Deployment

1. **Customize your site name:**
   - Go to Site settings → Change site name
   - Choose something like `iplays1-portfolio.netlify.app`

2. **Add to Discord bio:**
   - Copy your Netlify link
   - Paste it in your Discord profile bio

3. **Future updates:**
   - Just push changes to GitHub
   - Netlify will automatically rebuild and deploy

