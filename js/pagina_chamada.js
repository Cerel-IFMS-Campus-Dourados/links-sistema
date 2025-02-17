// function atualizarNome() {
//     const nome = localStorage.getItem("nomeUsuario");
//     const mesa = localStorage.getItem("nomeMesa");
//     const servidor = localStorage.getItem("servidorSelecionado");

//     document.getElementById("displayPage").style.display = "block";

//     if (nome) document.getElementById("nomeUsuario").innerText = nome;
//     if (mesa) document.getElementById("nomeMesa").innerText = mesa;
//     if (servidor) document.getElementById("servidorSelecionado").innerText = servidor;
// }

// // Atualiza o nome sempre que o localStorage for alterado
// window.addEventListener('storage', function (event) {
//     if (event.key === 'nomeUsuario' || event.key === 'nomeMesa' || event.key === 'servidorSelecionado') {
//         atualizarNome();
//     }
// });

const channel = new BroadcastChannel('comunicado_channel'); // Canal de comunicação

// Função que atualiza os dados na página da chamada
function atualizarNome() {
    const nome = localStorage.getItem("nomeUsuario");
    const mesa = localStorage.getItem("nomeMesa");
    const servidor = localStorage.getItem("servidorSelecionado");

    // Exibe os dados na página
    document.getElementById("displayPage").style.display = "block";  // Torna visível a área da chamada

    if (nome) document.getElementById("nomeUsuario").innerText = nome;
    if (mesa) document.getElementById("nomeMesa").innerText = mesa;
    if (servidor) document.getElementById("servidorSelecionado").innerText = servidor;
}

// Quando uma nova mensagem for recebida pelo canal, atualiza a página
channel.onmessage = function(event) {
    const data = event.data;
    if (data) {
        document.getElementById("nomeUsuario").innerText = data.nomeUsuario;
        document.getElementById("nomeMesa").innerText = data.nomeMesa;
        document.getElementById("servidorSelecionado").innerText = data.servidorSelecionado;
    }
};

// Chama a função quando a página carrega para exibir os dados caso já existam no localStorage
document.addEventListener("DOMContentLoaded", function() {
    atualizarNome();
});
