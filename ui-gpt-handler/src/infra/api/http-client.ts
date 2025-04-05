const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function httpRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  const contentType = response.headers.get('content-type');

  if (!response.ok) {
    const error = contentType?.includes('application/json')
      ? await response.json()
      : await response.text();
    throw new Error(
      typeof error === 'string' ? error : error?.message || 'Request failed'
    );
  }

  return contentType?.includes('application/json')
    ? response.json()
    : (response.text() as unknown as T);
}
