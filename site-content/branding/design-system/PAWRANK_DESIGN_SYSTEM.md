# PawRank.com — Design System & UI Component Catalog

> **Last verified:** 2026-08-17  
> **Source of Truth:** Homepage (`/`), Contact Us (`/contact-us/`), SEO Pricing (`/seo-pricing/`), New Pricing (`/new-seo-pricing/`)  
> **Status:** Production / Active  

---

## 1. Design Philosophy

PawRank’s visual design communicates **authority, transparency, clinical precision, and modern warmth**. 

Key principles observed across the website:
1. **Alternating Section Rhythm:** Content flows seamlessly through alternating high-contrast section backgrounds: Warm Chalk (`#F7F7F3`) ➔ Clean White (`#FFFFFF`) ➔ Dark Navy (`#0B2845`).
2. **Card-Based Information Architecture:** Long information blocks are never presented as unstructured text. They are partitioned into cards with rounded borders (`16px` to `28px`), subtle borders (`rgba(11, 40, 69, 0.08)`), and soft drop shadows.
3. **Pill Badges & Buttons:** Eyebrows, category tags, and primary action buttons use full pill rounding (`border-radius: 999px`) to soften the technical nature of SEO.
4. **Scannable Micro-Callouts:** Complex service explanations always pair high-level copy with practical summary callouts (e.g. `"In simple terms: ..."`).
5. **High-Contrast CTAs:** Important conversion paths use radial-gradient fills on dark navy backdrops with large tap targets.

---

## 2. Design Tokens

### 2.1 Color Palette

| Token Name | CSS Variable | HEX Value | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| **Primary Blue** | `--blue`, `--pr-blue`, `--nv-primary-accent` | `#325CE8` | Brand primary color. Used for active badges, icons, borders, and CTA gradients. |
| **Secondary Blue** | `--blue-hover`, `--nv-secondary-accent` | `#1747E3` | Hover states, button focus states, link hovers. |
| **Dark Navy** | `--navy`, `--pr-navy`, `--nv-dark-bg` | `#0B2845` | High-impact section backgrounds, featured pricing cards, dark hero banners, headings. |
| **Warm Chalk** | `--chalk`, `--pr-chalk`, `--nv-site-bg` | `#F7F7F3` | Primary body / page background. Provides a warm, premium feel compared to stark gray. |
| **Pure White** | `--white`, `--pr-white`, `--nv-light-bg` | `#FFFFFF` | Card surfaces, container cards, light section backgrounds. |
| **Text Dark** | `--black`, `--pr-black`, `--nv-text-color` | `#121212` | Main headline and bold text color on light backgrounds. |
| **Text Muted** | `--text`, `--pr-text` | `#4A6080` | Body text, paragraph descriptions, supporting meta labels. |
| **Light Blue Tint** | `--light-blue`, `--pr-light-blue` | `#F0F4FE` / `#EBF3FC` | Feature highlight backgrounds, active pills, table hover states, callouts. |
| **Success Green** | `--success`, `--nv-c-1` | `#77B978` | Verified checkmarks, status pills, positive badges. |
| **Accent Coral** | `--accent`, `--nv-c-2` | `#F37262` | Secondary highlights, warning tags, promotional indicators. |

### 2.2 Gradients & Shadows

```css
/* Brand Gradients */
--gradient-hero: radial-gradient(at bottom left, #325CE8 0%, #0B2845 100%);
--gradient-linear: linear-gradient(140deg, #325CE8 0%, #0B2845 67%);
--gradient-btn-hover: radial-gradient(at bottom left, #0B2845 0%, #325CE8 100%);

/* Elevation & Shadows */
--shadow-subtle: 0 8px 24px rgba(11, 40, 69, 0.04);
--shadow-card: 0 12px 35px rgba(11, 40, 69, 0.06);
--shadow-card-hover: 0 20px 48px rgba(11, 40, 69, 0.12);
--shadow-navy-shell: 0 30px 80px rgba(11, 40, 69, 0.18);
--shadow-btn: 0 8px 24px rgba(50, 92, 232, 0.35);
```

---

## 3. Typography Hierarchy

PawRank uses Google Fonts: **Raleway** for headings/branding and **Roboto / Raleway** for body text.

| Element | Font Family | Weight | Size (Desktop) | Size (Mobile) | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero Title)** | `Raleway` | `800` | `clamp(36px, 5vw, 64px)` | `28px–34px` | `1.08` | `-0.035em` |
| **H2 (Section Heading)** | `Raleway` | `800` | `clamp(30px, 4vw, 48px)` | `24px–28px` | `1.15` | `-0.03em` |
| **H3 (Card / Sub-Section)** | `Raleway` | `800` | `22px–28px` | `18px–22px` | `1.25` | `-0.02em` |
| **H4 (Item Title)** | `Raleway` | `800` | `18px–20px` | `16px–18px` | `1.3` | `0` |
| **Eyebrow / Pill Badge** | `Raleway` | `700` | `12px` | `11px` | `1.0` | `0.09em` (uppercase) |
| **Body Large / Lead** | `Raleway` | `400` / `500` | `17px–18px` | `15px–16px` | `1.65` | `0` |
| **Body Standard** | `Raleway` / `Roboto` | `400` | `14.5px–15.5px` | `14px` | `1.6` | `0` |
| **Caption / Meta** | `Raleway` | `600` | `12.5px–13.5px` | `12px` | `1.5` | `0.02em` |

---

## 4. Layout System

* **Standard Container Max-Width:** `1280px` (`margin: 0 auto`)
* **Wide Container Max-Width:** `1450px`
* **Reading / Narrow Container:** `960px` – `1080px` (ideal for FAQs, long-form copy)
* **Section Padding (Desktop):** `90px 24px`
* **Section Padding (Tablet):** `60px 20px`
* **Section Padding (Mobile):** `40px 16px`

---

## 5. Button System

### `PR-BUTTON-PRIMARY` (Main Action / Schedule)
* **Usage:** High-priority conversion actions ("Schedule Consultation", "Schedule a Call").
* **Style:**
```css
.pr-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 38px;
  border-radius: 999px;
  background: radial-gradient(circle at bottom left, #325CE8 0%, #0B2845 100%);
  color: #FFFFFF !important;
  border: 2px solid #325CE8;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(50, 92, 232, 0.35);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
.pr-btn-primary:hover {
  background: radial-gradient(circle at bottom left, #0B2845 0%, #325CE8 100%);
  border-color: #1747E3;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(50, 92, 232, 0.45);
}
```

### `PR-BUTTON-SECONDARY` / `PR-BUTTON-NAVY`
* **Usage:** Tier-1 actions on light cards ("Schedule a Call About Get Found").
* **Style:**
```css
.pr-btn-navy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 999px;
  background: #0B2845;
  color: #FFFFFF !important;
  border: 2px solid #0B2845;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
}
.pr-btn-navy:hover {
  background: #325CE8;
  border-color: #325CE8;
  transform: translateY(-2px);
}
```

### `PR-BUTTON-OUTLINE`
* **Usage:** Secondary navigation actions ("Help Me Choose a Plan", "Contact Us").
* **Style:**
```css
.pr-btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 999px;
  background: transparent;
  color: #0B2845 !important;
  border: 2px solid rgba(11, 40, 69, 0.2);
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
}
.pr-btn-outline:hover {
  border-color: #325CE8;
  color: #325CE8 !important;
  background: #F0F4FE;
}
```

---

## 6. UI Component Catalog

### 1. `PR-HERO-01` — Dark Gradient Hero
* **Reference:** Homepage (`/`), New Pricing (`/new-seo-pricing/`)
* **Description:** Full-width dark gradient background with branded top icon, centered high-contrast H1, subtitle, 3-column trust items, and dual CTA buttons.
* **Markup Pattern:**
```html
<section class="pr-hero" style="background: linear-gradient(140deg, #325CE8, #0B2845 67%); padding: 80px 20px; text-align: center; color: #FFFFFF;">
  <div style="max-width: 900px; margin: 0 auto;">
    <span class="pr-hero-icon">🐾</span>
    <h1 style="color: #FFFFFF; font-size: clamp(34px, 4.5vw, 56px); font-weight: 800; line-height: 1.12;">[Hero Headline]</h1>
    <p style="color: rgba(255,255,255,0.9); font-size: 18px; line-height: 1.6;">[Hero Subtitle Copy]</p>
    <div class="pr-hero-actions" style="display: flex; justify-content: center; gap: 16px; margin-top: 32px;">
      <a href="/schedule-an-appointment/" class="pr-btn-primary">Schedule Consultation</a>
      <a href="/contact-us/" class="pr-btn-secondary">Learn More</a>
    </div>
  </div>
</section>
```

---

### 2. `PR-TIMELINE-01` — 3-Step Process / Billing Stepper
* **Reference:** New Pricing (`/new-seo-pricing/#pawrank-billing`)
* **Description:** 3-column responsive grid displaying sequential stages (Day 0 ➔ Days 1–30 ➔ Month 2+) with dark navy badges and price callout pills.
* **Markup Pattern:**
```html
<div class="pr-timeline" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
  <div class="pr-step-card" style="background: #FFFFFF; border: 1px solid rgba(11,40,69,0.08); border-radius: 20px; padding: 32px; box-shadow: 0 10px 30px rgba(11,40,69,0.05);">
    <span style="display: inline-block; padding: 6px 14px; border-radius: 8px; background: #0B2845; color: #FFFFFF; font-size: 12px; font-weight: 800;">DAY 0 — YOUR CAMPAIGN BEGINS</span>
    <h4 style="font-size: 20px; font-weight: 800; color: #0B2845; margin: 14px 0;">[Stage Title]</h4>
    <p style="color: #4A6080; font-size: 14.5px; line-height: 1.6;">[Stage description...]</p>
  </div>
  <!-- Steps 2 and 3 -->
</div>
```

---

### 3. `PR-DELIVERABLE-GRID-01` — Feature Cards with "In simple terms" Callout
* **Reference:** New Pricing (`/new-seo-pricing/#pawrank-billing`)
* **Description:** 2 or 3-column card grid where each item has an H3, detailed paragraph, and a blue-accented `"In simple terms:"` translation pill.
* **Markup Pattern:**
```html
<div class="pr-deliverable-card" style="background: #FFFFFF; border: 1px solid rgba(11,40,69,0.08); border-radius: 18px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between;">
  <div>
    <h3 style="font-size: 19px; font-weight: 800; color: #0B2845; margin: 0 0 12px;">[Deliverable Name]</h3>
    <p style="color: #4A6080; font-size: 14.5px; line-height: 1.6; margin: 0 0 16px;">[Technical description...]</p>
  </div>
  <div style="background: #F7F9FD; border-left: 3px solid #325CE8; padding: 10px 14px; border-radius: 0 8px 8px 0; font-size: 13px; color: #0B2845;">
    <strong style="color: #325CE8;">In simple terms:</strong> [Plain-English translation...]
  </div>
</div>
```

---

### 4. `PR-COMPARISON-01` — Side-by-Side Tier Cards (Foundation vs Growth)
* **Reference:** New Pricing (`/new-seo-pricing/#pawrank-comparison`)
* **Description:** 2-column comparative cards. The left card uses light chalk styling with navy button; the right card uses dark navy styling with vibrant blue button to highlight higher capacity.
* **Markup Pattern:**
```html
<div class="pr-compare-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
  <!-- Card 1: Light Foundation -->
  <div class="pr-compare-card" style="background: #F7F7F3; border: 1px solid rgba(11,40,69,0.1); border-radius: 24px; padding: 40px; display: flex; flex-direction: column; justify-content: space-between;">
    <div>
      <span style="font-size: 12px; font-weight: 800; color: #325CE8; text-transform: uppercase;">Foundation Tier</span>
      <h3 style="font-size: 26px; font-weight: 800; color: #0B2845;">Get Found</h3>
      <ul style="list-style: none; padding: 0; margin: 20px 0;">
        <li style="position: relative; padding-left: 28px; margin-bottom: 12px; color: #4A6080;">✓ [Feature claim...]</li>
      </ul>
    </div>
    <div class="pr-price-tag" style="font-size: 20px; font-weight: 800; color: #325CE8; padding: 14px; background: #FFFFFF; border-radius: 12px;">$750 to start → then $995/mo</div>
    <a href="/schedule-an-appointment/" class="pr-btn-navy">Schedule a Call About Get Found</a>
  </div>

  <!-- Card 2: Featured Dark Navy -->
  <div class="pr-compare-card featured" style="background: #0B2845; color: #FFFFFF; border: 1px solid #325CE8; border-radius: 24px; padding: 40px; display: flex; flex-direction: column; justify-content: space-between;">
    <div>
      <span style="font-size: 12px; font-weight: 800; color: #79A3FF; text-transform: uppercase;">Growth Tier</span>
      <h3 style="font-size: 26px; font-weight: 800; color: #FFFFFF;">Grow Appointments</h3>
      <ul style="list-style: none; padding: 0; margin: 20px 0;">
        <li style="position: relative; padding-left: 28px; margin-bottom: 12px; color: rgba(255,255,255,0.9);">✓ [Feature claim...]</li>
      </ul>
    </div>
    <div class="pr-price-tag" style="font-size: 20px; font-weight: 800; color: #FFFFFF; padding: 14px; background: rgba(255,255,255,0.1); border-radius: 12px;">$1,250 to start → then $1,695/mo</div>
    <a href="/schedule-an-appointment/" class="pr-btn-primary">Schedule a Call About Grow Appointments</a>
  </div>
</div>
```

---

### 5. `PR-TABLE-01` — Comparison Matrix Table
* **Reference:** New Pricing (`/new-seo-pricing/#pawrank-comparison`)
* **Description:** Responsive comparison table with dark navy header (`#0B2845`), zebra-striped rows, light-blue hover states, and smooth touch-scroll wrapper on mobile.
* **Markup Pattern:**
```html
<div class="pr-table-container" style="overflow-x: auto; border-radius: 16px; border: 1px solid rgba(11,40,69,0.1); box-shadow: 0 8px 24px rgba(11,40,69,0.04);">
  <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14.5px; background: #FFFFFF;">
    <thead>
      <tr style="background: #0B2845; color: #FFFFFF;">
        <th style="padding: 18px 22px;">Campaign Element</th>
        <th style="padding: 18px 22px;">Get Found ($995/mo)</th>
        <th style="padding: 18px 22px;">Grow Appointments ($1,695/mo)</th>
        <th style="padding: 18px 22px;">What the Extra $700 Actually Funds</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 16px 22px; border-bottom: 1px solid #EAECEF;"><strong>Service Focus</strong></td>
        <td style="padding: 16px 22px; border-bottom: 1px solid #EAECEF;">3–5 core services</td>
        <td style="padding: 16px 22px; border-bottom: 1px solid #EAECEF;">6–10 core & growth services</td>
        <td style="padding: 16px 22px; border-bottom: 1px solid #EAECEF;">Double the active service coverage</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

### 6. `PR-FAQ-ACCORDION-01` — Interactive Expandable FAQ Accordion
* **Reference:** Old Pricing (`/seo-pricing/`), New Pricing (`/new-seo-pricing/#pawrank-faq`)
* **Description:** Smoothly expandable FAQ list. Click toggles `.open` state with animated rotating `+` icon, blue border highlight, and clean body text.
* **Markup Pattern:**
```html
<div class="pr-faq-accordion" style="display: flex; flex-direction: column; gap: 16px;">
  <div class="pr-faq-item" style="border: 1px solid rgba(11,40,69,0.1); border-radius: 16px; background: #F7F7F3; overflow: hidden; transition: all 0.3s ease;">
    <div class="pr-faq-header" style="padding: 22px 28px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-size: 17px; font-weight: 800; color: #0B2845;">
      <span>Why do SEO prices vary so much between agencies?</span>
      <div class="pr-faq-icon" style="width: 28px; height: 28px; border-radius: 50%; background: #FFFFFF; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #325CE8;">+</div>
    </div>
    <div class="pr-faq-body" style="padding: 0 28px 24px; color: #4A6080; font-size: 15px; line-height: 1.65; display: none;">
      <p>[Answer content...]</p>
    </div>
  </div>
</div>
<script>
  document.querySelectorAll('.pr-faq-header').forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('open');
    });
  });
</script>
```

---

### 7. `PR-CTA-BANNER-01` — Full-Width Dark Closing Banner
* **Reference:** Homepage (`/`), Old Pricing (`/seo-pricing/`), New Pricing (`/new-seo-pricing/#pawrank-final-cta`)
* **Description:** Dark navy container (`#0B2845`) with centered white headline, generous paragraph spacing, dual action buttons, and contact trust signals.
* **Markup Pattern:**
```html
<div class="pr-banner-dark" style="background: #0B2845; color: #FFFFFF; border-radius: 28px; padding: 64px 40px; text-align: center; box-shadow: 0 30px 80px rgba(11,40,69,0.2);">
  <span style="display: inline-block; padding: 6px 18px; background: rgba(50,92,232,0.3); border-radius: 999px; color: #79A3FF; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px;">Take Action</span>
  <h2 style="color: #FFFFFF; font-size: clamp(30px, 4vw, 48px); font-weight: 800;">Let’s Build a Clear SEO Plan for Your Practice</h2>
  <p style="color: rgba(255,255,255,0.85); font-size: 17px; line-height: 1.6; max-width: 750px; margin: 0 auto 36px;">[Closing encouragement...]</p>
  <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
    <a href="/schedule-an-appointment/" class="pr-btn-primary">Schedule an Appointment</a>
    <a href="/contact-us/" class="pr-btn-outline" style="color: #FFFFFF !important; border-color: rgba(255,255,255,0.4);">Contact Us</a>
  </div>
</div>
```

---

## 7. Responsive Design Rules

| Breakpoint | Target Devices | Layout Conventions |
| :--- | :--- | :--- |
| **Desktop (≥ 1025px)** | Laptops, Desktops, Monitors | Full multi-column grids (2, 3, 4 columns), max-width 1280px, section padding `90px 24px`. |
| **Tablet (768px – 1024px)** | iPads, Tablets | 3 & 4 column grids collapse to 2 columns, section padding `60px 20px`, typography scales down ~15%. |
| **Mobile (≤ 767px)** | Smartphones (iPhone, Android) | All grids collapse to 1 column (`grid-template-columns: 1fr`). Buttons take full width (`width: 100%`). Tables enable horizontal touch scrolling (`overflow-x: auto`). Section padding `40px 16px`. |

---

## 8. Visual Reference Index

| Component Type | Best Page Reference | Section / Location | Key Characteristics |
| :--- | :--- | :--- | :--- |
| **Hero (Marketing)** | Homepage (`/`) | Top | Blue-to-navy radial gradient, paw icon mask, dual CTAs |
| **Value Props / Tabs** | New Pricing (`/new-seo-pricing/`) | Top (`#pawrank-transparency`) | 3-tab interactive card with active tab indicators |
| **Pricing Cards (Dark)** | New Pricing (`/new-seo-pricing/`) | Middle (`#pawrank-pricing`) | Dual dark navy plan cards with price blocks |
| **Billing Timeline** | New Pricing (`/new-seo-pricing/`) | Middle (`#pawrank-billing`) | 3-step sequential cards with day badges |
| **Feature Grids** | New Pricing (`/new-seo-pricing/`) | Middle (`#pawrank-billing`) | 3-column cards with "In simple terms" blue callout |
| **Comparison Matrix** | New Pricing (`/new-seo-pricing/`) | Middle (`#pawrank-comparison`) | Side-by-side cards + responsive HTML table |
| **Proof & Case Studies** | New Pricing (`/new-seo-pricing/`) | Middle (`#pawrank-proof`) | Case cards + 5-step numbered conversion funnel |
| **FAQ Accordions** | New Pricing (`/new-seo-pricing/`) | Lower (`#pawrank-faq`) | 15 collapsible questions with animated toggle |
| **Closing CTA Banner** | Homepage (`/`) & New Pricing (`/new-seo-pricing/`) | Bottom (`#pawrank-final-cta`) | Full-width dark navy shell with primary button |

---

## 9. Documentation History

* **2026-08-17:** Comprehensive PawRank Design System and UI Component Catalog created following the production release and verification of the redesigned New SEO Pricing Page (`/new-seo-pricing/`).
