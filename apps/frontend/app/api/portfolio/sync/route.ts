export async function POST(request: Request) {
  const { wallet } = await request.json();
  if (!wallet) {
    return new Response(JSON.stringify({ error: 'wallet missing' }), { status: 400 });
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL!}/functions/v1/sync_wallet`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}` },
      body: JSON.stringify({ wallet }),
    });
    const text = await response.text();
    console.log('Supabase response status:', response.status, 'body:', text);
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'failed to sync wallet' }), { status: 500 });
  }
  

  return new Response(null, { status: 204 });
}