// As credenciais são importadas do arquivo config.js
// Verifique se o arquivo js/config.js está carregado no seu HTML

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
