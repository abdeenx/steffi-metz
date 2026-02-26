# Website Upgrade & Online Ordering Plan

## 1. Hosting Assessment

### Findings

-   DNS, A, AAAA, and NS records point to Cloudflare.
-   Origin server IP is fully masked by Cloudflare proxy.
-   No MX record configured.
-   No subdomain DNS leaks detected.
-   Server header previously indicated: LiteSpeed.
-   LiteSpeed + small business website strongly suggests shared cPanel
    hosting behind Cloudflare.

### Conclusion

-   Origin hosting type cannot be definitively confirmed.
-   High probability: Shared hosting (cPanel + LiteSpeed).
-   Infrastructure constraint: Must assume PHP + MySQL environment
    without Node.js support.

------------------------------------------------------------------------

## 2. Phase 1 -- Static Website (Low-Cost Replacement)

### Objective

Deliver a fast, modern, SEO-friendly static site deployable on shared
hosting.

### Technology Stack

-   HTML5
-   Tailwind CSS (compiled locally)
-   Minimal Vanilla JavaScript
-   No Node runtime required on server

### Deployment

-   Upload compiled static files via cPanel File Manager or FTP
-   Compatible with Apache/LiteSpeed shared hosting
-   Works behind Cloudflare CDN

------------------------------------------------------------------------

## 3. Phase 2 -- Online Food Ordering System

### Hosting Constraint

Must run on shared hosting (PHP + MySQL).

### Core Stack

-   WordPress
-   WooCommerce
-   PHP 8+
-   MySQL (provided by hosting)

### Food Ordering Plugin (Free & Customizable)

Recommended: - RestroFood Lite (WooCommerce compatible, delivery/pickup
support)

Alternative Free Options: - Food Store -- Online Food Delivery &
Pickup - Menukaart -- Restaurant Menu & Ordering

------------------------------------------------------------------------

## 4. Payment Integration (Rwanda-Compatible)

### Primary Payment Methods

-   MTN Mobile Money (MoMo)
-   Airtel Money

### Integration Options

-   Flutterwave (supports Rwanda mobile money + cards)
-   PayPal (optional, limited local adoption)

### WooCommerce Setup

-   Install Flutterwave WooCommerce plugin
-   Enable Mobile Money (MTN + Airtel)
-   Enable Visa/Mastercard payments if needed
-   Configure local currency (RWF)

### Why This Setup

-   Supports dominant Rwanda payment methods
-   Works on shared hosting
-   No VPS required
-   Scalable for future integrations

------------------------------------------------------------------------

## Final Strategy

1.  Build and present a modern static demo first.
2.  Highlight performance improvement over current site.
3.  Upsell online ordering as revenue expansion.
4.  Keep infrastructure compatible with shared hosting to reduce
    friction.
5.  Emphasize Mobile Money integration as primary revenue driver in
    Rwanda.
