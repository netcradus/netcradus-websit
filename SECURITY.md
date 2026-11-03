# Security Configuration

The following HTTP security headers are configured in `vercel.json` to fortify the application against common web vulnerabilities.

## Implemented Headers

### 1. Content-Security-Policy (CSP)
Restricts the resources (such as JavaScript, CSS, Images) that the browser is allowed to load for a given page.
- `default-src 'self'`: Only allow content from our own domain by default.
- `script-src 'self'`: Only allow scripts bundled with the application. No external scripts or `eval()` are allowed.
- `style-src 'self' 'unsafe-inline'`: Allow styles from our domain and inline styles (required for dynamic animations and React-based styling).
- `img-src 'self' data: https:`: Allow images from our domain, data URIs, and any secure HTTPS source.
- `font-src 'self' data: https://fonts.gstatic.com`: Allow font files from our domain and Google's font CDN.
- `connect-src 'self' https://api.emailjs.com https://unpkg.com https://fonts.googleapis.com`: Allow connections to our own API (if any), EmailJS for form submissions, unpkg for map data, and Google Fonts for CSS.
- `frame-src 'none'`: Prevent the site from being embedded in iframes or using iframes.
- `object-src 'none'`: Disable plugins like Flash.
- `base-uri 'self'`: Restrict the URLs that can be used in a `<base>` tag.
- `form-action 'self'`: Restrict the URLs that forms can submit to.

### 2. Strict-Transport-Security (HSTS)
Ensures the browser only communicates with the server over HTTPS.
- `max-age=31536000`: Applies the policy for 1 year.
- `includeSubDomains`: Applies the policy to all subdomains.
- `preload`: Indicates consent to be included in the HSTS preload list maintained by browsers.

### 3. X-Frame-Options: DENY
Prevents Clickjacking by disallowing the site from being rendered in a `<frame>`, `<iframe>`, `<embed>`, or `<object>`.

### 4. X-Content-Type-Options: nosniff
Prevents the browser from MIME-sniffing a response away from the declared content-type, reducing exposure to drive-by downloads.

### 5. Referrer-Policy: strict-origin-when-cross-origin
Restricts the amount of information sent in the `Referer` header to protect user privacy.

### 6. Permissions-Policy
Disables browser features that the application does not use, reducing the attack surface.
- `camera=(), microphone=(), geolocation=(), payment=()`: Disables access to camera, microphone, location, and payment APIs.

## Hardening & Best Practices

### Subresource Integrity (SRI)
All external assets should be version-pinned and, where possible, verified with SRI hashes.
- **Map Data**: Version-pinned to `world-atlas@2.0.2`. Fetched with integrity verification in `LiveThreatMap.jsx`.

### Vercel Preview Deployments
- **CSP & Environments**: The CSP is configured to allow necessary external origins for all environments.
- **Key Restriction**: EmailJS public keys are restricted via Dashboard settings to `https://www.netcradus.com`. Ensure preview deployments do not bypass this unless using dedicated test keys.
