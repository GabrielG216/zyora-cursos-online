const SUPABASE_URL = "https://jjrhshqrfnywriqmlrkx.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqcmhzaHFyZm55d3JpcW1scmt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzOTc0MzEsImV4cCI6MjA3Mzk3MzQzMX0.81Sn4EC_qJCd764tSRmXHipGGCLPWFVHiRE5ObqTQJQ";
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { data, error } = await client
    .from("usuarios")
    .select("*")
    .eq("email", email)
    .eq("senha", senha);

  if (error) {
    alert("Erro ao buscar usuário: " + error.message);
  } else if (data && data.length > 0) {
    localStorage.setItem("usuario_nome", data[0].nome);
    localStorage.setItem("usuario_email", data[0].email);
    window.location.href = "index.html";
  } else {
    alert("E-mail ou senha incorretos!");
  }
});
