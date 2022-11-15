import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mefwlzduhgtfmpfagmvg.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lZndsemR1aGd0Zm1wZmFnbXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1NDU4NzEsImV4cCI6MTk4NDEyMTg3MX0.Ve35qidj20Srk--tRi1_T3slf9FJ4dGBJlPPj8_qEm4';
let client = null;

export const signUp = (email, password) => {
  const supabase = getSupabase();
  return supabase.auth.signUp({ email, password });
};

export const signIn = (email, password) => {
  const supabase = getSupabase();
  return supabase.auth.signInWithPassword({ email, password });
};

export const signOut = () => {
  const supabase = getSupabase();
  return supabase.auth.signOut();
};

export const getSession = () => {
  const supabase = getSupabase();
  return supabase.auth.getSession();
};

const getSupabase = () => {
  if (!client) {
    client = createClient(SUPABASE_URL, SUPABASE_KEY);
  }
  return client;
};
