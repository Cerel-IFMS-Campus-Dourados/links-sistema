document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o comportamento padrão de envio de formulário

    const submit = document.getElementById('submit');
    submit.disabled = true;
    submit.innerText = "Enviado...";

    let formData = new FormData(this);
    fetch("https://script.google.com/macros/s/AKfycbzfRPdqrk_HrjNEqZw6tN5MibOO1FdxXq349xZs5qxTAx3PW5cPeV2eyqzfXxtCm4oH/exec", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            // Exibe uma mensagem de sucesso
            document.getElementById("message").style.display = "block";

            // Limpa os campos do formulário
            document.getElementById("form").reset();

            // Após 3 segundos, esconde a mensagem de sucesso
            setTimeout(() => {
                document.getElementById("message").style.display = "none";
            }, 4000);

            submit.disabled = false;
            submit.innerText = "Enviar";
        })
        .catch(error => {
            console.error("Erro ao enviar:", error);
            alert("Houve um erro ao enviar os dados.");
        });
});