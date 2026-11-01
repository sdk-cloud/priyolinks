# PriyoTools

**PriyoTools** is an English-language collection of free online utilities and a curated directory of free AI services.

## Pages
- `index.html` — premium-style landing page with links to the tool and AI directories.
- `tools.html` — searchable and filterable tool directory with interactive browser-based utilities.
- `ai.html` — curated directory of free AI services, highlighting options that can be tried without signing in and clearly separating services that may require an account.

## Available browser-based tools
- **Text:** Word Counter, Case Converter, Remove Extra Spaces.
- **Calculators:** Basic Calculator, Percentage Calculator, Age & Date Difference.
- **Developer:** JSON Formatter, Base64 Encoder/Decoder, URL Encoder/Decoder, UUID Generator.
- **Image:** Image Resizer.
- **Security:** Password Generator.
- **Productivity:** Focus Timer.
- **Education:** GPA Average Calculator.

## AI directory
The AI directory links to third-party services including ChatGPT, Duck.ai, Gemini, Perplexity, Perchance, gizza.ai, ChatG, Microsoft Copilot, Claude and HuggingChat. Guest access, features, quotas and account requirements can vary by country, browser and provider policy. The directory is informational and is not affiliated with those providers.

## Run locally
Open `index.html` in a modern browser. Choose **Explore tools** or **Free AI tools** to browse the directories. No build step or package installation is required.

## Deploy with GitHub Pages
1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then save.
4. Wait for the Pages deployment to finish. Expected URL: `https://sdk-cloud.github.io/priyolinks/` if Pages is enabled and deployment succeeds.

## Privacy and limitations
- Most utilities process input in the browser and do not require an account.
- External AI services have their own privacy policies and may process prompts on their servers. Do not submit passwords, private documents or sensitive personal information.
- Free AI access is not necessarily unlimited. Features and sign-in requirements can change without notice.
- Favorites are not currently implemented in this release.
- This is a static website; it has no user accounts, server-side database, secure admin dashboard, or cloud file storage.
- The password generator uses the browser's Web Crypto API. For important accounts, store unique passwords in a trusted password manager.
- The GPA tool calculates a simple arithmetic average; grading systems and credit weighting vary by institution.
- Check important calculations independently. The site is a utility collection, not professional or financial advice.

## Roadmap
Add more converters, PDF utilities, accessibility improvements, tool-specific help pages, and automated tests. Keep sensitive data out of any tool unless its processing and privacy behavior are clear.

## License
No license has been declared yet. Add a license file before inviting reuse or redistribution.
