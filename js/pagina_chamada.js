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

function atualizarNome() {
    // Escutando as mudanças no Firebase
    const chamadaRef = database.ref('chamada');
    chamadaRef.on('value', function(snapshot) {
        const dados = snapshot.val();

        // Atualiza os elementos com os dados recebidos
        if (dados) {
            document.getElementById("displayPage").style.display = "block";
            document.getElementById("nomeUsuario").innerText = dados.nomeUsuario;
            document.getElementById("nomeMesa").innerText = dados.nomeMesa;
            document.getElementById("servidorSelecionado").innerText = dados.servidorSelecionado;
        }
    });
}

// Executa a função de atualização assim que a Página 2 for carregada
window.addEventListener('load', atualizarNome);
