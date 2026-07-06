"use client";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "./supabase";
import type { User } from "@supabase/supabase-js";

export function useAcademyAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  return { user, loading, signOut };
}

// ─────────────────────────────────────────────────────────────
// SUBSCRIPTION ACCESS — one flat check unlocks the whole library
// ─────────────────────────────────────────────────────────────

export async function hasActiveSubscription(userId: string): Promise<boolean> {
  const { data } = await supabase
    .from("subscriptions")
    .select("status")
    .eq("user_id", userId)
    .maybeSingle();

  if (!data) return false;
  return data.status === "active" || data.status === "free_grant";
}

export async function redeemPromoCode(userId: string, code: string): Promise<{ success: boolean; message: string }> {
  const { data: promo, error } = await supabase
    .from("promo_codes")
    .select("*")
    .eq("code", code.trim().toUpperCase())
    .eq("active", true)
    .maybeSingle();

  if (error || !promo) {
    return { success: false, message: "That code isn't valid. Double-check and try again." };
  }

  if (promo.expires_at && new Date(promo.expires_at) < new Date()) {
    return { success: false, message: "That code has expired." };
  }

  if (promo.max_uses !== null && promo.uses >= promo.max_uses) {
    return { success: false, message: "That code has already reached its usage limit." };
  }

  // Upsert subscription row as a permanent free grant
  const { error: subError } = await supabase.from("subscriptions").upsert(
    {
      user_id: userId,
      status: "free_grant",
      plan: "free_client_grant",
      granted_via: "promo_code",
    },
    { onConflict: "user_id" }
  );

  if (subError) {
    return { success: false, message: "Something went wrong redeeming that code. Try again." };
  }

  await supabase.from("promo_codes").update({ uses: promo.uses + 1 }).eq("id", promo.id);

  return { success: true, message: "Code redeemed! You now have full access to every course in the Academy." };
}
