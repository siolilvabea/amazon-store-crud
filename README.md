# 🛒 Amazon Store Clone

Um projeto Front-end que simula o design e as funcionalidades da loja virtual da Amazon. O projeto inclui um fluxo completo de autenticação (login/cadastro), integração com API externa para busca de CEP, gestão de sessões de utilizador e um Painel Administrativo com operações CRUD integradas a uma API local.

## 🚀 Funcionalidades

* **Design Realista:** Interface limpa e responsiva baseada no layout claro (Light Mode) atual da Amazon, com variáveis de cores idênticas às originais.
* **Autenticação de Utilizadores:**
  * Login simulado com persistência de sessão via `localStorage` (`usuarioLogado`).
  * Redirecionamento dinâmico e proteção de rotas (utilizadores não autenticados são reencaminhados para o login).
* **Cadastro Inteligente:**
  * Formulário de criação de conta com validação de dados.
  * Consumo da **API ViaCEP** para preenchimento automático de Rua, Cidade e Estado após digitar o CEP.
* **Painel Administrativo Restrito:**
  * Exclusivo para utilizadores com permissões de administrador (`isAdmin: true`).
  * **CRUD Completo:** Listagem, Busca por CPF, Edição (com máscara de formatação automática) e Exclusão de contas.
  * Comunicação assíncrona (`fetch`, `async/await`) com um backend simulado.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica.
* **CSS3:** Flexbox, CSS Grid, Variáveis globais (`:root`) e Design Responsivo (Media Queries).
* **JavaScript (ES6+):** Manipulação da DOM, consumo de APIs Restful (Fetch API), Event Listeners e Local Storage.
* **JSON Server:** Simulação de um backend/banco de dados REST (Fake API) para armazenar os utilizadores.
* **ViaCEP API:** Serviço externo gratuito para consulta de endereço por CEP.

## 📁 Estrutura de Ficheiros

```text
├── index.html            # Página inicial de redirecionamento ou vitrine
├── login.html            # Tela de autenticação
├── cadastro.html         # Tela de criação de nova conta
├── cadastro.js           # Lógica de validação e API de CEP
├── home.html             # Página principal pós-login (vitrine de produtos)
├── home.js               # Gerencia a sessão do utilizador e exibe botões Admin
├── administrador.html    # Painel de gestão exclusivo para admins
├── administrador.js      # Lógica do CRUD (buscar, editar, deletar) via fetch
└── style.css             # Folha de estilos global (Cores e tipografia padrão Amazon)
