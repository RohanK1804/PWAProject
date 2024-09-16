const BASE_URL = 'http://localhost:1337';

export async function getCart() {
  const res = await fetch(`${BASE_URL}/cart`);
  return await res.json();
}

export async function addToCart(productId) {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId }),
  });
  return await res.json();
}

export async function removeFromCart(productId) {
  const res = await fetch(`${BASE_URL}/cart/${productId}`, {
    method: 'DELETE',
  });
  return await res.json();
}
