# therobertrich.com

Personal CV site for Robert Richter. Plain HTML and CSS with three small scripts: a light/dark toggle, an external-link confirmation, and a beta-only content switch. No build step, frameworks, cookies, or analytics.

The site links to two related subdomains: `links.therobertrich.com` (link page, in the header) and `beta.therobertrich.com` (preview site, in the footer).

## Files

| File | Purpose |
| --- | --- |
| `index.html` | CV (summary, experience, key projects, skills, certifications, education, volunteering) |
| `accessibility.html`, `privacy.html` | Accessibility statement and privacy policy |
| `404.html` | Custom not-found page |
| `style.css` | Styles (dark by default, light via toggle, print and forced-colors support) |
| `theme.js` | Theme toggle; saves the choice in the browser's local storage |
| `env.js` | On `beta.therobertrich.com`, shows elements marked `data-beta-only` and hides elements marked `data-prod-only` |
| `external-links.js` | Asks for confirmation before opening links to other sites (links within `therobertrich.com` and its subdomains open directly) |
| `favicon-32.png`, `icon-192.png`, `apple-touch-icon.png` | Site icons |
| `bimi.svg` | Logo for BIMI email branding |
| `robots.txt` | Opts out of AI crawlers |
| `.htaccess` | HTTPS redirect, security headers (HSTS, CSP), noindex on the beta host, 404 handling |
| `.well-known/security.txt` | Security contact (expires 2027-10-20; renew annually) |

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Branches

- `beta`: work in progress, previewed at `beta.therobertrich.com`
- `main`: the live site at `therobertrich.com`. Merge `beta` into `main` once changes are reviewed.

Hostinger deploys each branch to its own subdomain, but keep the two branches' files identical so pull requests merge cleanly. For anything that should differ between the sites, check the hostname instead of the branch:

- **Beta-only content:** add `data-beta-only hidden` to the element. `env.js` reveals it on the beta host, so it stays hidden in production. It is still in the page source, so never use this for anything private.
- **Production-only content:** add `data-prod-only` to the element (no `hidden`). `env.js` hides it on the beta host, as with the footer's "Beta site" link.
- **Beta-only server behavior:** use the `IS_BETA` variable set in `.htaccess`, as the `X-Robots-Tag: noindex` header does.

Do not keep different files on each branch, for example with `.gitattributes merge=ours`. GitHub ignores custom merge drivers when it merges pull requests.

This repo is public, so keep employer-specific details off the site and out of commits: no vendor or product names for your employer's security stack, no team size, and no internal system lists. Describe the type of work instead (for example, "enterprise EDR platform").

## Deploy

Hosted on Hostinger and served through Cloudflare. Upload the contents of this repo to `public_html`, including the hidden `.htaccess` and `.well-known` folder.

The CSP in `.htaccess` only allows scripts and styles from the site itself. Loosen it before adding analytics, fonts, or other third-party resources.

## Standards

Targets WCAG 2.2 Level AA. After changes, re-check with WAVE, axe DevTools, Lighthouse, and a keyboard-only pass.
