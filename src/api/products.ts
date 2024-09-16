const BASE_URL = 'http://localhost:1337';

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return await res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return await res.json();
}
