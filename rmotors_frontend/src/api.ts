// src/api.ts

const API_BASE_URL =
  import.meta.env.MODE === 'development'
    ? 'http://127.0.0.1:8000/api' // fallback for local dev (optional)
    : import.meta.env.VITE_API_URL;

export default API_BASE_URL;
