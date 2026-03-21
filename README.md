# Akul Ramasubban — Portfolio XP

An interactive Windows XP-style portfolio.
Forked from [UnMugViolet/portfolio](https://github.com/UnMugViolet/portfolio).

## Quickstart
```bash
npm install
npm run dev
```

## Customisation Checklist
All items marked `[REPLACE: ...]` in the source are placeholders. Find them with:
```bash
grep -r "REPLACE" src/ index.html --include="*.js" --include="*.html" --include="*.ts" --include="*.json" --include="*.vue"
```

### What to replace
- [ ] Your photo → `public/img/icons/cv/paul-jaguin-photo-cv.webp`
- [ ] Project screenshots → update project image references
- [ ] Bio text in About window (en.json + fr.json)
- [ ] Work experience in CV data (cv-data.json)
- [ ] Project details in Projects window (projects-data.json + en.json + fr.json)
- [ ] Email, GitHub, LinkedIn links (left-menu-data.json, .env, ContactMe.vue, Legal.vue)
- [ ] Resume PDFs → `public/pdf/CV_akul_ramasubban_en.pdf` and `CV_akul_ramasubban_fr.pdf`
- [ ] Birthdate in MyCV.vue
- [ ] Legal notice text in locale files
- [ ] EmailJS credentials in .env

## Deploy
```bash
# Netlify: drag & drop the `dist/` folder after `npm run build`
# Vercel: `npx vercel --prod`
# GitHub Pages: use peaceiris/actions-gh-pages action on push to main
```
