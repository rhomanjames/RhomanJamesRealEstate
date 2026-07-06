import { createClient } from "@supabase/supabase-js";

// These come from your Supabase project settings (Settings > API).
// Set them as environment variables in Vercel:
//   NEXT_PUBLIC_SUPABASE_URL
//   NEXT_PUBLIC_SUPABASE_ANON_KEY
// The "anon" key is safe to expose in the browser — Supabase enforces
// access rules via Row Level Security policies on the database side.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ─────────────────────────────────────────────────────────────
// DATABASE SCHEMA (create these tables in Supabase SQL editor)
// ─────────────────────────────────────────────────────────────
//
// -- Tracks a user's subscription status (one row per user)
// create table subscriptions (
//   id uuid primary key default gen_random_uuid(),
//   user_id uuid references auth.users(id) not null unique,
//   status text not null default 'inactive', -- 'active' | 'inactive' | 'canceled' | 'free_grant'
//   plan text default 'monthly', -- 'monthly' | 'free_client_grant'
//   stripe_customer_id text,
//   stripe_subscription_id text,
//   current_period_end timestamp with time zone,
//   granted_via text default 'stripe', -- 'stripe' | 'promo_code' | 'admin'
//   created_at timestamp with time zone default now()
// );
//
// -- Tracks lesson completion per user per course (unchanged)
// create table lesson_progress (
//   id uuid primary key default gen_random_uuid(),
//   user_id uuid references auth.users(id) not null,
//   course_slug text not null,
//   lesson_id text not null,
//   completed_at timestamp with time zone default now(),
//   unique(user_id, course_slug, lesson_id)
// );
//
// -- Free-access codes that grant a full subscription at no cost
// -- (used for your real estate clients)
// create table promo_codes (
//   id uuid primary key default gen_random_uuid(),
//   code text unique not null,
//   grants text not null default 'full_subscription', -- currently only one type, kept flexible for later
//   max_uses integer default null, -- null = unlimited
//   uses integer default 0,
//   expires_at timestamp with time zone, -- null = never expires (good for clients)
//   active boolean default true
// );
//
// Enable Row Level Security on all three tables, then add policies like:
//   "Users can read their own subscription status"
//   "Users can insert their own lesson_progress"
// Supabase's dashboard has a policy template UI that makes this quick.
//
// ─────────────────────────────────────────────────────────────
// HOW ACCESS WORKS NOW
// ─────────────────────────────────────────────────────────────
// Instead of checking "does this user own course X," the whole
// site now checks ONE thing: "does this user have status = 'active'
// or 'free_grant' in the subscriptions table?" If yes, every course
// unlocks. If no, they see the subscribe/redeem-code screen.
//
// This is simpler than the old per-course enrollment model and
// matches the new pricing: $19-29/month for the entire library,
// or a free permanent grant via client promo code.
