export default async function fetcher(...args) {
  const res = await fetch(...args);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const data = await res.json();
    const error = new Error(data.detail);
    // Attach extra info to the error object.
    error.info = data;
    error.status = res.status;
    throw error;
  }

  return res.json();
}
