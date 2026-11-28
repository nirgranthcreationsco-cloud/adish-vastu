# Jain Vastu Solutions — Razorpay / E‑Commerce Compliance Report

**Date:** 2026-11-27  
**Scope:** Physical product e‑commerce only (no consultation / service sales)

---

## 1. Pages modified / added

### Added
| Path | Purpose |
|------|---------|
| `/shop` | Full physical product catalogue |
| `/product/[id]` | Individual product detail pages |
| `/about` | About Us (physical retail) |
| `/contact` | Contact + grievance channel |
| `/policies/terms` | Terms & Conditions |
| `/policies/privacy` | Privacy Policy |
| `/policies/shipping` | Shipping & Delivery |
| `/policies/returns` | Returns & Refunds |
| `/policies/cancellation` | Cancellation Policy |
| `/api/razorpay-webhook` | Webhook signature verification |
| `/sitemap.xml` | Product + policy sitemap |
| `public/robots.txt` | Crawl rules |

### Modified
| Path | Change |
|------|--------|
| `/` (homepage) | Rebuilt as physical-product storefront |
| `app/layout.tsx` | E‑com header/footer; SEO without consultation keywords |
| Checkout | Email + state fields; physical-goods order payload |
| Create-order / Verify | Already present; coupon server-side; webhook added |
| Category browse (`/remedies/...`) | Removed consultation / energy-score CTAs |
| Product status logic | Specialist items → enquire (not “consultation service”) |
| Admin nav | Removed Energy Leads emphasis |

### Legacy components retained but **not linked** from the new storefront
`services.tsx`, `course.tsx`, `herosection.tsx` (old), `homeenergyscoremodal.tsx`, `transformation.tsx`, `final.tsx` consultation form — no longer mounted on `/`. Prefer deleting or quarantining after owner sign-off.

---

## 2. Service references removed from the live storefront

Removed / redirected away from customer paths:
- Vastu consultation booking CTAs
- Jyotish / kundali service CTAs
- Home Energy Score lead funnel on shop paths
- “Talk to a Vastu Expert” consultation booking blocks
- Courses / professional training CTAs on homepage
- SEO copy referencing consultation / astrology services
- Admin “Energy Leads” primary nav item

**Remaining (needs cleanup pass if still reachable):**
- Old component files still in repo (not on new homepage)
- Enquiry type key `consultation_request` in modals (product-availability enquiry, not a paid service) — rename in a follow-up for clarity
- `/admin/leads` route still exists for historical data

---

## 3. Physical products listed

From `productCatalog.ts` (genuine inventory):

| Category | Approx. count |
|----------|----------------|
| Vastu Remedies | 121 |
| Gem Stone | 89 |
| Stone Bracelets | 26 |
| Vastu Statue | 15 |
| **Total** | **251** |
| Direct purchase (priced) | ~118+ |
| Enquire / variable | remainder |

Featured products on homepage: subset of priced items with catalogue images.

**Admin flags on product pages:** missing material/dimensions/weight and placeholder images are called out for administrator completion — not fabricated.

---

## 4. Policy pages completed

All linked from site footer:
- Terms & Conditions
- Privacy Policy (Razorpay processes cards; merchant does not store card data)
- Shipping & Delivery (cautious timelines; owner must confirm actual SLAs)
- Returns & Refunds
- Cancellation Policy
- Contact / grievance via support email (no invented officer name)

---

## 5. Razorpay integration status

| Item | Status |
|------|--------|
| Standard Checkout modal | ✅ Checkout page |
| `POST /api/create-order` | ✅ Server-side order + coupon |
| `POST /api/verify-payment` | ✅ HMAC-SHA256 + timing-safe compare |
| `POST /api/razorpay-webhook` | ✅ Signature verify; payment.captured / failed |
| Secrets in frontend | ❌ Not exposed (`NEXT_PUBLIC` key id only) |
| Payments for services | ❌ Not implemented on new storefront |
| Env: `RAZORPAY_WEBHOOK_SECRET` | ⚠️ **Owner must set** in `.env.local` + Razorpay Dashboard |

---

## 6. Missing business information (OWNER CONFIRMATION)

Do **not** invent these. Update `app/data/business.ts` when confirmed:

1. Registered legal entity name (if different from brand)
2. Full registered / shipping address with PIN code
3. Verified support phone (current footer uses `+91 98765 43210` — appears placeholder)
4. Verified support email (`support@adishacademy.in` — confirm)
5. GSTIN (if registered)
6. Named grievance officer (if legally required for your category)
7. Exact processing / delivery / return window in days
8. Shipping charge schedule (free vs paid slabs)

---

## 7. Remaining legal / operational requirements

- Configure Razorpay webhook URL → `https://<domain>/api/razorpay-webhook` with secret
- Display GST on invoices if applicable (Legal Metrology / GST invoicing)
- Complete package declarations (net qty, MRP, manufacturer) where packaged commodities rules apply
- Delete or permanently disable unused consultation components after sign-off
- Replace placeholder contact details before submitting to Razorpay review
- Test full payment with Razorpay test cards end-to-end after env restart
- Ensure Supabase `orders` table accepts JSON `cart_items` with payment ids

---

## 8. Audit checklist (storefront)

| Check | Result |
|-------|--------|
| No consultation services on homepage/nav/footer | ✅ |
| No appointment booking on new storefront | ✅ |
| No service payment flow | ✅ |
| Physical products with INR pricing | ✅ (priced SKUs) |
| Cart + checkout | ✅ |
| Razorpay for physical goods only | ✅ |
| Policy pages accessible | ✅ |
| Contact visible | ⚠️ Confirm accuracy |
| Mobile responsive layout | ✅ (build + structure) |
| No fabricated GST / officer | ✅ |
| No exposed KEY_SECRET | ✅ |
| Unsupported outcome claims on product pages | Softened with disclaimer |

---

## Final objective status

The live customer experience is now structured as a **physical religious & Vastu products e‑commerce store** with shop, product pages, checkout, policies, and Razorpay payment for goods.  

**Before Razorpay merchant approval:** confirm contact/legal details in `business.ts`, set webhook secret, and remove leftover legacy component files from the repo if desired.
