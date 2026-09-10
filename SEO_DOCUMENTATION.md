# Panevino Ristorante - SEO Implementation Documentation

Local SEO for Panevino Ristorante, 8853 Tamiami Trail N, Naples, FL 34108 (North Naples).

## Where things live

| What | File |
|------|------|
| Business details, hours, awards, menu/breadcrumb schema, page metadata helper | `src/lib/seo.js` |
| JSON-LD renderer (server-side `<script type="application/ld+json">`) | `src/components/JsonLd.js` |
| Site-wide metadata + Restaurant schema output | `src/app/layout.js` |
| Per-page metadata + MenuSection schema | `src/app/<section>/layout.js`, `src/app/gallery/page.js` |
| Menu items (also feed the menu schema) | `src/data/*.js` |
| Gallery alt text | `src/data/gallery.js` |
| Sitemap | `src/app/sitemap.js` |
| Robots | `public/robots.txt` |
| www -> apex 301 redirect | `next.config.mjs` |

## SEO Features Implemented

### 1. Meta Tags
- Titles use the template `%s | Panevino Naples`; each page title targets "North Naples, FL"
- Unique meta description (under 160 characters) and canonical URL on every page
- Full Open Graph tags on every page, each with its own share image (`pageMetadata()` in `src/lib/seo.js`)
- Twitter/X card uses `summary_large_image` and falls back to each page's Open Graph tags
- Geo meta tags for Naples, FL

### 2. Structured Data (JSON-LD)
Rendered on the server, so it is in the HTML that every crawler receives.

- **Every page:** `Restaurant` with name, address, phone, coordinates, Google Business Profile link (`hasMap`), hours, price range, cuisines, areas served (North Naples, Pelican Bay, Vanderbilt Beach, Park Shore), awards, founding date, reservations, social profiles, plus a `Menu` linking to each menu section; `WebSite`
- **Menu pages** (`/antipasti`, `/salad`, `/pasta`, `/pollo`, `/seafood`, `/specials`): full `MenuSection` with every `MenuItem`, description, image and price (`Offer`), generated from `src/data/*.js`; `BreadcrumbList`
- **Gallery:** `BreadcrumbList`
- **Deliberately not used:** `Review` / `AggregateRating`. Google does not show review stars for reviews a local business publishes about itself, and marking them up risks a manual action.

### 3. Technical SEO
- XML sitemap at `/sitemap.xml`, referenced from `robots.txt`
- `www.panevinonaples.com` 301-redirects to `panevinonaples.com`
- Descriptive alt text on hero, gallery, awards and menu images
- One H1 per page; menu items and prices are real HTML text, not images
- Mobile-friendly responsive design

### 4. Local Keywords Targeted
Primary:
- Italian restaurant North Naples
- Italian restaurant Naples FL
- Panevino Ristorante Naples
- Tamiami Trail North restaurants
- Northern Italian cuisine Naples

Long-tail:
- Homemade pasta Naples FL
- Italian restaurant near Pelican Bay / Vanderbilt Beach
- Family-owned Italian restaurant Naples
- Fresh seafood Italian restaurant Naples

### 5. On-page Local Content
- Name, address and phone shown in the Contact section and footer, written identically to the schema and Google Business Profile: **8853 Tamiami Trail N, Naples, FL 34108 · (239) 514-8655**
- "North Naples" and nearby neighborhoods mentioned in visible copy
- Embedded Google Map with directions link; click-to-call phone links

## Maintenance

When something changes, update it in code **and** on Google Business Profile the same day:
- **Hours:** `openingHoursSpecification` in `src/lib/seo.js` **and** the hours list in `src/components/Footer.js`
- **Address / phone:** `src/lib/seo.js`, `Footer.js`, `Contact.js`, `Header.js`, `Hero.js`
- **New award:** put the image in `public/images/awards/` and add one line (image, name, year) to `src/data/awards.js`; the Awards grid and the `award` schema both update automatically
- **Menu changes:** edit `src/data/*.js`; the menu schema updates automatically
- **New page:** export `metadata = pageMetadata({...})` from it and add it to `src/app/sitemap.js`
- **New gallery photo:** drop it in `public/images/gallery/` and add its alt text to `src/data/gallery.js`

## Off-site Next Steps

1. **Google Search Console:** verify the domain (DNS record, or via the existing GTM container), submit `sitemap.xml`, and check the Enhancements/Rich Results reports after each deploy
2. **Google Business Profile:** hours, categories (Italian restaurant, Northern Italian restaurant), menu link, weekly photos and posts, reply to every review
3. **Citations:** identical name, address and phone on Yelp, TripAdvisor, OpenTable, Facebook, Apple Maps (Business Connect), Bing Places and local Naples directories
4. **Reviews:** ask guests for Google reviews; link to the Google review form from receipts or table cards
5. **Validate:** run the live URLs through https://search.google.com/test/rich-results and https://validator.schema.org

---

**Last updated:** September 2026
