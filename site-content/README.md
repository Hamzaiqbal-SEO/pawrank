# Paw Rank - WordPress Content, Media & Branding Package

This package contains all extracted textual content, page metadata, media assets, navigation structures, link audits, dynamic feature documentation, and the **complete Paw Rank branding system** from the live website and brand repository.

It is structured specifically for use during the upcoming Astro website rebuild.

---

## 📁 Content Structure

```text
site-content/
├── branding/
│   ├── assets/                                        # Logos (PNG, GIF), Cover photos, Mascot (Ranky), Badges (SVGs)
│   ├── design-system/                                 # PAWRANK_DESIGN_SYSTEM.md & PAWRANK_HANDBOOK.md
│   └── guidelines/                                    # Brand Foundation, Voice Guide, Copywriting OS
│
├── pages/
│   ├── home.md                                        # Homepage (ID: 660)
│   ├── new-seo-pricing.md                             # New SEO Pricing & Detailed Plans (ID: 2293)
│   ├── seo-pricing.md                                 # Veterinary SEO Packages (ID: 1815)
│   ├── your-last-veterinary-seo-company-paw-rank.md   # About / Agency Overview (ID: 2054)
│   ├── blogs.md                                       # Blog Archive Listing (ID: 1790)
│   ├── veterinary-seo-guide.md                        # Pillar Guide / Blog Article (ID: 1766)
│   ├── schedule-an-appointment.md                     # Calendly Booking Page (ID: 1745)
│   ├── contact-us.md                                  # Strategy Call & Ninja Form (ID: 652)
│   └── privacy-policy.md                              # Legal Privacy Policy (ID: 1543)
│
├── media/
│   ├── images/                                        # High-res photography, infographics, screenshots
│   ├── icons/                                         # SVG Badges, Paw Rank logo variants, favicons
│   ├── documents/                                     # Case studies and pricing guide PDFs
│   └── other/                                         # Brand GIF logos and animation assets
│
├── data/
│   ├── pages.json                                     # Overview of all extracted pages and metadata
│   ├── media.json                                     # Attachment metadata, dimensions, and page references
│   ├── navigation.json                                # Active navigation menus and hierarchy
│   └── links.json                                     # Internal & external hyperlink audit
│
└── README.md                                          # This documentation
```

---

## 🎨 Branding & Design System Included

The complete brand suite has been assembled under [`site-content/branding/`](./branding/):

### 1. Brand Guidelines & Voice ([`branding/guidelines/`](./branding/guidelines/))
- **`Paw_Rank_Final_Brand_Foundation.pdf` / `.docx`**: Core brand mission, values, target veterinary persona, value propositions.
- **`PawRank-Voice-Guide-Ryan-Robinson-Style.docx`**: Editorial voice, tone, vocabulary, and communication rules.
- **`Paw_Rank_Conversion_Copywriting_Operating_System.pdf`**: Direct-response copywriting frameworks and CTA strategies.

### 2. Design System & UI Specs ([`branding/design-system/`](./branding/design-system/))
- **`PAWRANK_DESIGN_SYSTEM.md`**: Complete color palette (`#0B2845` Dark Blue, `#325CE8` Primary Blue, `#7C3AED` Accent Purple, `#10B981` Success Green), typography specifications, spacing scale, card styles, and component design tokens.
- **`PAWRANK_HANDBOOK.md`**: Agency handbook and operational guidelines.

### 3. Visual Assets & Badges ([`branding/assets/`](./branding/assets/))
- **Logos**: `Pawrank Logo.png` (512x512), `Pawrank-Hero-logo.png`, `pawrank logo gif.gif`.
- **Mascot**: `Ranky.png` (Paw Rank brand mascot).
- **Hero & Cover**: `Pawrank Coverphoto.png`, `paw-rank-contactus-background.png`.
- **Badges**: Complete SVG badge suite (`badge-01.svg` through `badge-06.svg` with color variations).

---

## 🌐 Source Website & Extraction Details

- **Source Domain**: `https://pawrank.com`
- **Database / CMS**: WordPress 6.x + Elementor 4.1.5 + Rank Math SEO + Ninja Forms
- **Extraction Protocol**: Direct SSH connection & WP-CLI execution, querying database records, `_elementor_data` trees, Rank Math postmeta, and the WordPress media library.
- **Cleaning Applied**:
  - Removed all Elementor container div classes, wrapper boilerplate, and inline CSS styles.
  - Stripped Gutenberg comments (`<!-- wp:... -->`).
  - Decoded HTML entities and formatted headings, bullet lists, blockquotes, and CTA cards into standard GitHub Flavored Markdown.
  - High-resolution source images preserved (discarding redundant WordPress thumbnail variants).

---

## 📑 Live Pages Inventory

| Title | Slug | Type | Content File | Original URL |
| :--- | :--- | :--- | :--- | :--- |
| **Home** | `home` | page | `pages/home.md` | `https://pawrank.com/` |
| **New SEO Pricing** | `new-seo-pricing` | page | `pages/new-seo-pricing.md` | `https://pawrank.com/new-seo-pricing/` |
| **Veterinary SEO Packages** | `seo-pricing` | page | `pages/seo-pricing.md` | `https://pawrank.com/seo-pricing/\` |
| **Your Last Veterinary SEO Company: Paw Rank** | `your-last-veterinary-seo-company-paw-rank` | page | `pages/your-last-veterinary-seo-company-paw-rank.md` | `https://pawrank.com/your-last-veterinary-seo-company-paw-rank/` |
| **Veterinary SEO Blogs** | `blogs` | page | `pages/blogs.md` | `https://pawrank.com/blogs/` |
| **Veterinary SEO: The Complete Guide to Get More Clients** | `veterinary-seo-guide` | post | `pages/veterinary-seo-guide.md` | `https://pawrank.com/veterinary-seo-guide/` |
| **Schedule an Appointment** | `schedule-an-appointment` | page | `pages/schedule-an-appointment.md` | `https://pawrank.com/schedule-an-appointment/` |
| **Contact Us** | `contact-us` | page | `pages/contact-us.md` | `https://pawrank.com/contact-us/` |
| **Privacy Policy** | `privacy-policy` | page | `pages/privacy-policy.md` | `https://pawrank.com/privacy-policy/` |

---

## ⚡ Dynamic Features & Forms Detected

1. **Contact Form (Ninja Forms ID: 2 - "Contact Me")**:
   - Location: `/contact-us/`
   - Fields: `Name`, `Email`, `Your Clinic Name and Location (optional)`, `Website (if any)`, `Tell us more about your business`, `Submit`.
2. **Calendly Appointment Scheduler Embed**:
   - Locations: `/schedule-an-appointment/`, `/contact-us/#calendly-contact`
   - Embed URL: `https://calendly.com/pawrankofficial/30min`
   - Parameters: `hide_event_type_details=1&hide_gdpr_banner=1&background_color=0b2845&text_color=ffffff&primary_color=325ce8`
3. **VET SEO Income & ROI Calculator**:
   - Location: `/` (`#vet-seo-roi-calculator`)
   - Functionality: Interactive revenue calculator for veterinary practices estimating ROI based on new patient lifetime value and search ranking improvements.
4. **Blog Post Grid**:
   - Location: `/blogs/`
   - Functionality: Dynamic query grid displaying published blog guides and articles.

---

## 🧭 Navigation Menus

The active primary menu assigned on the site is **Pawrank Menu** (Term ID: 32):
- **Contact Us**: `https://pawrank.com/contact-us/`
- **Pricing**: `https://pawrank.com/seo-pricing/`

Legacy theme menus (`mobile-menu-agency-pro` and `web-agency-pro-main-menu`) have been preserved in `data/navigation.json` for reference.

---

## 🖼️ Media & Document Assets

All referenced images and brand documents have been downloaded into `site-content/media/`:
- **Original Photography & Illustrations**: `media/images/`
- **SVG Badges & Logos**: `media/icons/`
- **Case Studies & Whitepapers**: `media/documents/` (includes `Veterinary_SEO_Pricing_and_Packaging_Guide.pdf`, Sajjad Pets Clinic Case Study, Local SEO Case Study)
