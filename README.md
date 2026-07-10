# UniVerse — Website scaffold

This commit contains the initial production-ready scaffold for the UniVerse public website:

- index.html: polished homepage with hero, features preview, statistics, testimonials, FAQ preview, footer
- css/: design tokens (theme.css), style.css, animations.css, responsive.css
- js/: theme toggle, small animations and interactions, firebase-actions.js skeleton for Actions handler integration
- robots.txt, sitemap.xml

Deployment (Firebase Hosting)
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize hosting in this project (if you haven't): `firebase init hosting`
   - Select the project and set `public` to `.` (root) or `public/` if you copy files there
   - Configure as a single-page app? Answer depends on your setup — for this static website choose No and configure rewrites for actions if needed.
4. Deploy: `firebase deploy --only hosting`

Notes and next steps
- Add real images into `/images` and optimized assets into `/assets`.
- Integrate Firebase SDK in `js/firebase-actions.js` using your Firebase config. Do not commit secret keys publicly.
- I can continue by generating all other pages and detailed legal documents as separate commits.
