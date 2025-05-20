const isLocalhost = window.location.hostname === "localhost";

export const API_BASE_URL = isLocalhost
  ? "http://localhost:3000"
  : "https://sun-a-nagoya-memories-backend.onrender.com";
