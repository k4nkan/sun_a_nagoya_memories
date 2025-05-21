const localPort = window.location.port === "5500";

export const API_BASE_URL = localPort
  ? "http://localhost:3000"
  : "https://sun-a-nagoya-memories-backend.onrender.com";