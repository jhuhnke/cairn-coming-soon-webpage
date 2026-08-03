import { createClient } from "@supabase/supabase-js";

function getRequiredEnvironmentVariable(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function createSupabaseAdminClient() {
  const supabaseUrl = getRequiredEnvironmentVariable("NEXT_PUBLIC_SUPABASE_URL");
  const supabaseSecretKey = getRequiredEnvironmentVariable(
    "NEXT_PUBLIC_SUPABASE_SECRET_KEY",
  );

  return createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
}