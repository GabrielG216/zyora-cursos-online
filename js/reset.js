const SUPABASE_URL = "https://jjrhshqrfnywriqmlrkx.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqcmhzaHFyZm55d3JpcW1scmt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzOTc0MzEsImV4cCI6MjA3Mzk3MzQzMX0.81Sn4EC_qJCd764tSRmXHipGGCLPWFVHiRE5ObqTQJQ";
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const verificarEmailForm = document.getElementById("verificarEmailForm");
const alterarSenhaForm = document.getElementById("alterarSenhaForm");

let usuarioId = null;

// 1️⃣ Verificar se o email existe
verificarEmailForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("resetEmail").value;

  const { data, error } = await client
    .from("usuarios")
    .select("id")
    .eq("email", email)
    .single();

  if (error || !data) {
    alert("E-mail não encontrado!");
    return;
  }

  usuarioId = data.id;
  alert("E-mail encontrado! Agora digite sua nova senha.");
  alterarSenhaForm.style.display = "block";
});

// 2️⃣ Atualizar a senha
alterarSenhaForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const novaSenha = document.getElementById("novaSenha").value;

  const { error } = await client
    .from("usuarios")
    .update({ senha: novaSenha })
    .eq("id", usuarioId);

  if (error) {
    alert("Erro ao alterar senha: " + error.message);
  } else {
    alert("Senha alterada com sucesso!");
    window.location.href = "login.html";
  }
});
