import { json, LoaderFunction } from '@remix-run/cloudflare';
import { supabase } from '~/db/supabase';

export const loader: LoaderFunction = async () => {
  const { data, error } = await supabase.from('wallets').select('*');
  if (error) {
    throw new Response(error.message, { status: 500 });
  }
  return json({ wallets: data });
};


