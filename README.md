# PriyoLinks AI

PriyoLinks AI is a responsive Bengali-first AI workspace landing page and frontend demo. It brings common AI workflows together in one interface.

## Included
- AI chat workspace UI (demo mode; not connected to a model)
- Writing, translation, coding, idea generation and summarization tool entry points
- Responsive desktop and mobile layout
- Bengali and English interface copy
- No build step or package installation required

## Run locally
Open `index.html` in a browser, or serve this folder with any static web server.

## Connect a real AI model
The current chat intentionally displays a clear demo notice. To enable real AI responses:
1. Create a backend endpoint (for example, `POST /api/chat`).
2. Store the AI provider API key as a server-side environment secret. Never put a private API key in browser JavaScript or commit it to GitHub.
3. Have the backend validate requests, apply rate limits, and call the chosen AI provider.
4. Update `app.js` to send chat messages to your backend endpoint and render the returned response.
5. Add appropriate privacy disclosures and usage limits before making the service public.

## Deploy
This is a static frontend and can be deployed to GitHub Pages, Vercel, or another static hosting provider. A separate backend is required for live AI features.

© PriyoLinks AI