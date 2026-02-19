# Zyora - Plataforma de Cursos Online 🚀

O **Zyora** é uma plataforma moderna de educação a distância (EAD) desenvolvida com o objetivo de tornar o conhecimento acessível a todos. O site oferece uma interface intuitiva para exploração de cursos em diversas áreas, como Tecnologia, Idiomas, Finanças e Saúde.

---

## 📋 Funcionalidades Principal

* **Navegação Fluida:** Sistema de scroll suave para seções de cursos e informações institucionais.
* **Gestão de Usuário:** Reconhecimento de sessão via `localStorage` (exibe foto do perfil se logado, ou botões de Cadastro/Login se deslogado).
* **Catálogo Interativo:** Cards de cursos dinâmicos que redirecionam para detalhes específicos por categoria.
* **Sistema de Planos:** Apresentação de planos (Pro, Special, Gold) com validação de login antes da compra.
* **Carrossel de Destaques:** Visualização interativa de áreas de estudo.
* **Certificação:** Informações sobre certificados com visualização ampliada (Modal) da imagem do certificado.
* **Animações Personalizadas:** Uso de SVGs animados e loaders customizados (incluindo uma animação temática de capivara).

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** Estilização, layout responsivo e animações complexas (`style.css`, `animation.css`, `animation-header.css`).
* **JavaScript (Vanilla):** Lógica de carrossel, manipulação de DOM, integração com `localStorage` e controle de modais.

---

## 📂 Estrutura de Arquivos Principal

```text
├── index.html          # Página principal
├── css/
│   ├── style.css       # Estilos globais
│   ├── animation.css   # Animações gerais
│   └── ...
├── img/                # Assets, ícones e logos
├── planos.html         # Detalhamento de planos
├── sobre.html          # Informações da empresa
├── login.html          # Tela de acesso
└── cadastro.html       # Tela de registro
