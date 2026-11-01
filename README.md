# PriyoTools

**PriyoTools** is an English-language collection of free online utilities, built as a lightweight static website.

## Pages
- `index.html` — premium-style landing page.
- `tools.html` — searchable and filterable tool directory with interactive browser-based utilities.

## Available tools
- **Text:** Word Counter, Case Converter, Remove Extra Spaces.
- **Calculators:** Basic Calculator, Percentage Calculator, Age & Date Difference.
- **Developer:** JSON Formatter, Base64 Encoder/Decoder, URL Encoder/Decoder, UUID Generator.
- **Image:** Image Resizer.
- **Security:** Password Generator.
- **Productivity:** Focus Timer.
- **Education:** GPA Average Calculator.

## Run locally
Open `index.html` in a modern browser. Select **Explore all free tools** to open the directory. No build step or package installation is required.

## Deploy with GitHub Pages
1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then save.
4. Wait for the Pages deployment to finish. Expected URL: `https://sdk-cloud.github.io/priyolinks/` if Pages is enabled and deployment succeeds.

## Privacy and limitations
- Most tools process input in the browser and do not require an account.
- Favorites are not currently implemented in this release.
- This is a static website; it has no user accounts, server-side database, secure admin dashboard, or cloud file storage.
- The password generator uses the browser's Web Crypto API. For important accounts, store unique passwords in a trusted password manager.
- The GPA tool calculates a simple arithmetic average; grading systems and credit weighting vary by institution.
- Check important calculations independently. The site is a utility collection, not professional or financial advice.

## Roadmap
Add more converters, PDF utilities, accessibility improvements, tool-specific help pages, and automated tests. Keep sensitive data out of any tool unless its processing and privacy behavior are clear.

## License
No license has been declared yet. Add a license file before inviting reuse or redistribution.
