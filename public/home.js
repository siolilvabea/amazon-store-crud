document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    // Se não estiver logado, volta pro login
    if (!usuarioLogado) {
        window.location.href = 'login.html';
        return;
    }

    // Pega o primeiro nome para as saudações do novo layout
    const primeiroNome = usuarioLogado.nome.split(" ")[0];
    
    // Preenche o nome no topo e no banner gigante
    document.getElementById("nav-nome-usuario").textContent = primeiroNome;
    document.getElementById("banner-nome-usuario").textContent = primeiroNome;

    // Área onde entram os botões de Admin e Sair
    const navArea = document.getElementById('nav-area');
    let htmlNav = '';

    // Verifica se é admin para mostrar o link do painel
    if (usuarioLogado.isAdmin) {
        // Usa a cor amarela/laranja da Amazon para destacar o Admin
        htmlNav += `<a href="administrador.html" style="color: var(--amz-orange); margin-right: 20px; text-decoration: none; font-weight: bold; font-size: 14px;">Painel Admin</a>`;
    }
    
    // Botão de sair com o estilo de link do topo da Amazon
    htmlNav += `<a href="#" onclick="logout()" style="color: white; font-size: 14px; font-weight: bold; text-decoration: none;">Sair</a>`;
    
    navArea.innerHTML = htmlNav;
});

function logout() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'login.html';
}