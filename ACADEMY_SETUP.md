# Rhoman James Academy — Setup Guide

This is the framework for a paid course platform with free-access codes,
built on top of your existing static Next.js site. Here's exactly what
to set up so it goes live.

---

## What's already built (this session)

- `/academy` — course catalog page
- `/academy/[slug]` — individual course sales/access page with gating logic
- `/academy/signup` — account creation
- `/academy/login` — login
- `/academy/dashboard` — student dashboard showing enrolled + locked courses
- `lib/academyCourses.ts` — the course catalog data. **Add new courses here.**
- `lib/supabase.ts` — Supabase client + full database schema as SQL comments
- `lib/useAcademyAuth.ts` — auth hook + promo code redemption logic

The 5 existing free courses are already listed in the catalog at $0,
linking back to their existing free pages. Nothing about your current
free courses changes — this is additive.

---

## Step 1 — Create a Supabase project (free tier)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project (pick any name, e.g. "rhoman-james-academy")
3. Once created, go to **Settings → API** and copy:
   - Project URL
   - `anon` public key
4. In Vercel, go to your project → **Settings → Environment Variables** and add:
   ```
   NEXT_PUBLIC_SUPABASE_URL = <your project URL>
   NEXT_PUBLIC_SUPABASE_ANON_KEY = <your anon key>
   ```
5. In Supabase, go to the **SQL Editor** and run the three `create table`
   statements from the comment block at the bottom of `lib/supabase.ts`.
   This creates the `enrollments`, `lesson_progress`, and `promo_codes` tables.
6. Turn on **Row Level Security** on all three tables (toggle in the
   Supabase table editor), then add a policy allowing users to read/write
   only their own rows. Supabase's policy UI has a one-click template
   called "Enable read access for users based on user_id" — use that.

Once this is done, signup/login on `/academy` will actually work.

---

## Step 2 — Create your subscription product in Stripe

1. Go to [stripe.com](https://stripe.com) and create an account
   (start in **test mode** — toggle in the top right — until you're ready to go live)
2. Go to **Product Catalog → Add Product**. Name it "Rhoman James Academy —
   Full Access." Set it as a **recurring price**, $24/month (or whatever
   you land on).
3. Go to **Payment Links** and create a payment link for that recurring
   product.
4. Under the payment link's settings, enable **"Allow promotion codes"**
   if you also want Stripe-side discount codes available at checkout —
   though the simpler path for your real estate clients is the in-site
   free code redemption already built (see Step 4 below), which doesn't
   touch Stripe or billing at all.
5. Copy the Payment Link URL and paste it into `SUBSCRIPTION_PAYMENT_LINK`
   at the top of `app/academy/[slug]/AcademyCourseClient.tsx`.

This is now the ONLY product you need in Stripe — one flat monthly
subscription that unlocks the entire library. No per-course products.

---

## Step 3 — Granting access after a real Stripe subscription payment

This is the one piece that needs a small serverless function, because
your Next.js site is a static export with no backend. The cleanest way:

1. In Supabase, go to **Edge Functions** and create a new function
   called `stripe-webhook`.
2. In Stripe, go to **Developers → Webhooks → Add endpoint**, point it
   at your Supabase Edge Function URL, and subscribe to these events:
   - `checkout.session.completed` (new subscription started)
   - `customer.subscription.updated` (renewed or changed)
   - `customer.subscription.deleted` (canceled)
3. The Edge Function's job: upsert a row in `subscriptions` matching the
   buyer's email to their `auth.users` account, setting `status: 'active'`
   on subscribe/renew, and `status: 'canceled'` on cancellation.

This part isn't built yet — it's a short, well-defined task for next
session once your Stripe and Supabase accounts exist.

---

## Step 4 — Creating free-access codes (no Stripe needed)

Once Supabase is set up, you can create a free-access code anytime by
inserting a row directly in the `promo_codes` table via the Supabase
table editor:

| column | example |
|---|---|
| `code` | `CLIENT2026` |
| `max_uses` | leave blank for unlimited, or set a cap |
| `expires_at` | leave blank so client access never expires |
| `active` | `true` |

Anyone who creates an account and enters that code on any course page
gets a permanent `free_grant` subscription status — full access to
every course, no billing, nothing else required. This is the code you
hand to every real estate client.

---

## Step 5 — Adding new courses going forward

Every new course — free or paid — just needs one new entry added to
the `academyCourses` array in `lib/academyCourses.ts`. The catalog page,
the course access page, and the dashboard all pull from that single file
automatically. No other code changes needed for a new course.

---

## What's next session

- Wire up the actual course *content* (lesson viewer) for paid courses —
  right now `/academy/[slug]` handles the sales page and access gate,
  but paid-course lesson content still needs a `/academy/[slug]/watch`
  build similar to your existing `CourseLayout.tsx`, gated behind the
  access check that's already working.
- Build the Supabase Edge Function for Stripe webhook → auto-enrollment
- Add password reset flow
- Consider adding course reviews/testimonials to sales pages once you
  have real students
