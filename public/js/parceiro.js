document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-trabalhe-conosco");
    const btnEnviar = document.querySelector(".btn-enviar");

    btnEnviar.addEventListener("click", function (event) {
        event.preventDefault();

        // Remove mensagens de erro anteriores
        form.querySelectorAll(".error-message").forEach(el => el.remove());

        let isValid = true;

        // Campos obrigatórios
        const campos = [
            { id: "iName", message: "Nome é obrigatório." },
            { id: "iTelefone", message: "Telefone é obrigatório." },
            { id: "iEmail", message: "Email é obrigatório.", type: "email" },
            { id: "iEstado", message: "Estado é obrigatório." },
            { id: "iCidade", message: "Cidade é obrigatória." },
            { id: "iMsg", message: "Mensagem é obrigatória." },
            { id: "iFile", message: "Anexe um currículo." }
        ];

        campos.forEach(campo => {
            const input = document.getElementById(campo.id);
            const valor = (campo.id === "iFile") ? input.files.length : input.value.trim();

            if (!valor || (campo.type === "email" && !validateEmail(input.value.trim()))) {
                isValid = false;
                showError(input, campo.message);
            }
        });

        if (!isValid) return;

        // Envio com FormData
        const formData = new FormData(form);

        fetch('/trabalhe-conosco', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert("Mensagem enviada com sucesso!");
                    form.reset();
                } else {
                    alert("Erro ao enviar. Tente novamente.");
                }
            })
            .catch(err => {
                console.error("Erro:", err);
                alert("Erro de envio. Verifique sua conexão.");
            });
    });

    function showError(input, message) {
        const span = document.createElement("span");
        span.className = "error-message";
        span.style.color = "red";
        span.style.fontSize = "12px";
        span.textContent = message;
        input.parentNode.appendChild(span);
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
