function atualizarNome() {
    const nome = localStorage.getItem("nomeUsuario");
    const mesa = localStorage.getItem("nomeMesa");
    const servidor = localStorage.getItem("servidorSelecionado");

    document.getElementById("displayPage").style.display = "block";

    if (nome) document.getElementById("nomeUsuario").innerText = nome;
    if (mesa) document.getElementById("nomeMesa").innerText = mesa;
    if (servidor) document.getElementById("servidorSelecionado").innerText = servidor;
}

// Atualiza o nome sempre que o localStorage for alterado
window.addEventListener('storage', function (event) {
    if (event.key === 'nomeUsuario' || event.key === 'nomeMesa' || event.key === 'servidorSelecionado') {
        atualizarNome();
    }
});

// // Atualiza o nome a cada 500ms
// setInterval(atualizarNome, 500);