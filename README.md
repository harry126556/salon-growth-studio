# Salon Growth Studio

A responsive Next.js website portfolio and lead-generation landing page for a freelance web designer targeting salons and barbers in Dehradun and nearby cities.

## Before publishing

1. Open `app/page.tsx`.
2. Replace the placeholder WhatsApp number `919876543210` with your own country code + number, without the plus sign or spaces.
3. Review the starting budget options and update them to match your offer.
4. Update the brand name `STUDIO / SALON WEB` if you prefer your own brand.
5. The salon called “The Mane Room” is a fictional design concept, not a real client project.
6. The site uses remote Unsplash images and Google Fonts, so those assets need internet access.

The contact form opens WhatsApp with the enquiry details prefilled; it does not store submissions.

## Run locally

Use Node.js 20.9 or later:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Cloudflare Pages

1. In Cloudflare Dashboard, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Connect GitHub and choose `salon-growth-studio`.
3. Build command: `npm run build`
4. Build output directory: `out`
5. Use Node.js 20 or newer, then save and deploy.

This project uses Next.js static export (`output: "export"`) and is intended for Cloudflare Pages. The static build is generated in `out`.
