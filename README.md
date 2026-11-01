# PriyoTools

**PriyoTools** is a growing, English-language collection of free browser-based utilities.

## Current tools
- Text: Word Counter, Case Converter, Text Cleaner
- Calculators: Basic Calculator, Percentage Calculator, Age Calculator
- Developer: JSON Formatter, Base64 Encoder/Decoder, URL Encoder/Decoder
- Images: Image Compressor (client-side canvas)
- Converters: Length Converter
- Security: Password Generator (Web Crypto API)

## Run locally
Open `index.html` in a modern browser, or serve this folder with any static web server. No build step or package installation is required.

## Deploy with GitHub Pages
1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then save.
4. Wait for the Pages deployment to finish. Expected URL: `https://sdk-cloud.github.io/priyolinks/` if Pages is configured and deployment succeeds.

## Privacy and limitations
- Most tools run locally in the browser. The image compressor does not upload selected images.
- Favorites and theme preference are stored in this browser's local storage.
- This is a static website. It has no user accounts, server-side database, analytics, or secure admin dashboard.
- Password generation uses the browser's Web Crypto API. Use a trusted password manager and unique passwords.
- Tool results should be independently checked when used for important decisions.
- Fonts are loaded from Google Fonts; fallback fonts are used if unavailable.

## Adding a tool
Add metadata to the `tools` array in `app.js`, add its interface in `toolMarkup()`, then add event logic to the workspace handlers. Prefer browser-side processing for user privacy.

## License
No license has been declared yet. Add a license file before inviting reuse or redistribution.
