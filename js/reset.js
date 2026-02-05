// As credenciais são importadas do arquivo config.js
// Verifique se o arquivo js/config.js está carregado no seu HTML

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
