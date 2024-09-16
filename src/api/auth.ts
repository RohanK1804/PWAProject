const BASE_URL = 'http://localhost:1337';

export async function loginUser(form) {
  const res = await fetch(`${BASE_URL}/auth/local`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identifier: form.email,
      password: form.password,
    }),
  });
  return await res.json();
}

export async function registerUser(form) {
  const res = await fetch(`${BASE_URL}/auth/local/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: form.username,
      email: form.email,
      password: form.password,
    }),
  });
  return await res.json();
}
