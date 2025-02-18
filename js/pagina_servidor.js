function enviarNome() {
    const nome = document.getElementById("nome-chamada").value;
    const mesa = document.getElementById("numero-mesa").value;
    const servidor = document.querySelector('input[name="servidor"]:checked');

    if (nome && mesa && servidor) {
        // Salva o nome no localStorage
        localStorage.setItem("nomeUsuario", nome);
        localStorage.setItem("nomeMesa", mesa);
        localStorage.setItem("servidorSelecionado", servidor.value);

        // Exibe uma confirmação de envio
        document.getElementById("confirmation").style.display = "block";

        // Limpa o campo de input
        document.getElementById("nome-chamada").value = "";
        document.getElementById("numero-mesa").value = "";
        servidor.checked = false;

        // Recarrega a página após 2 segundos para permitir o envio de outro nome
        setTimeout(function () {
            document.getElementById("confirmation").style.display = "none";
        }, 2000); // Esconde a confirmação após 2 segundos
    } else {
        alert("Por favor, insira um nome!");
    }

}