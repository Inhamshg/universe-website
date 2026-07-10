# Assets & Deployment

This directory contains placeholder assets and guidance for deploying the UniVerse site to Firebase Hosting.

Files added in this commit:
- /images/*.svg — simple vector placeholders for logo and screenshots. Replace with optimized production assets (SVG/PNG/WebP).
- /icons/favicon.svg — minimal favicon placeholder.
- /assets/universe-latest.apk.placeholder — a placeholder file indicating where to store APK if hosting directly in the repo (recommended to host on a CDN instead).
- firebase.json and .firebaserc — example Firebase Hosting configuration. Update `public` or rewrites as needed and replace project id in .firebaserc.

Important:
- Do NOT commit real Firebase credentials (apiKey secrets) into the repo. Use environment-based deployment or CI secret injection when initializing the client SDK.
- Replace the placeholder images with optimized ones (use WebP where possible) and provide og-image.png for social previews.

Deployment steps (quick):
1. Install Firebase CLI: `npm i -g firebase-tools`
2. Login: `firebase login`
3. Initialize (if not already): `firebase init hosting`
   - Choose this repository's directory
   - Set public to `.` and configure SPA rewrites to `/index.html` or adjust as prefered.
4. Deploy: `firebase deploy --only hosting`
