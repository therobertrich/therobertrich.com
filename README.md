# therobertrich.com

Personal CV site for Robert Richter. Plain HTML and CSS with one small script for the light/dark toggle. No build step, frameworks, cookies, or analytics.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | CV (summary, experience, skills, certifications, education, volunteering) |
| `accessibility.html`, `privacy.html` | Accessibility statement and privacy policy |
| `404.html` | Custom not-found page |
| `style.css` | Styles (dark by default, light via toggle, print and forced-colors support) |
| `theme.js` | Theme toggle; saves the choice in the browser's local storage |
| `external-links.js` | Asks for confirmation before opening links to other sites |
| `favicon-32.png`, `icon-192.png`, `apple-touch-icon.png` | Site icons |
| `robots.txt` | Opts out of AI crawlers |
| `.htaccess` | HTTPS redirect, security headers (HSTS, CSP), 404 handling |
| `.well-known/security.txt` | Security contact (expires 2027-10-20; renew annually) |

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Deploy

Hosted on Hostinger and served through Cloudflare. Upload the contents of this repo to `public_html`, including the hidden `.htaccess` and `.well-known` folder.

The CSP in `.htaccess` only allows scripts and styles from the site itself. Loosen it before adding analytics, fonts, or other third-party resources.

## Standards

Targets WCAG 2.2 Level AA. After changes, re-check with WAVE, axe DevTools, Lighthouse, and a keyboard-only pass.
