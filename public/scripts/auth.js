export async function login(password) {
  const res = await fetch(
    "https://sunanagoyamemories-production.up.railway.app/api/auth",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    }
  );

  if (res.ok) {
    localStorage.setItem("isAuthed", "true");
    window.location.href = "/home.html";
  } else {
    alert("パスワードが違います！");
  }
}

export function checkAuth() {
  if (localStorage.getItem("isAuthed") !== "true") {
    window.location.href = "/index.html";
  }
}
