import "server-only";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";

function getSupabaseEnvironmentVariables() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl) {
    throw new Error(
      "Missing SUPABASE_URL. Add it to your .env.local file.",
    );
  }

  if (!supabaseSecretKey) {
    throw new Error(
      "Missing SUPABASE_SECRET_KEY. Add it to your .env.local file.",
    );
  }

  return {
    supabaseUrl,
    supabaseSecretKey,
  };
}

export function createSupabaseAdminClient() {
  const { supabaseUrl, supabaseSecretKey } =
    getSupabaseEnvironmentVariables();

  return createClient<Database>(supabaseUrl, supabaseSecretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
}