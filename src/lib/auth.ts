import { createSupabaseServerClient } from './supabase';
import { redirect } from 'next/navigation';

// Get current user — returns null if not logged in
export async function getUser() {
  const supabase = await createSupabaseServerClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) return null;
  return user;
}

// Require auth — redirects to login if not authenticated
// Use this at the top of protected server components
export async function requireAuth(locale = 'en') {
  const user = await getUser();
  if (!user) redirect(`/${locale}/login`);
  return user;
}

// Require admin role
export async function requireAdmin(locale = 'en') {
  const user = await requireAuth(locale);
  const supabase = await createSupabaseServerClient();
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (profile?.role !== 'admin') redirect(`/${locale}/`);
  return user;
}
