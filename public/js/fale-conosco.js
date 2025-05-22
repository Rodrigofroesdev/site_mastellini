document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-fale-conosco");
    const btnEnviar = document.querySelector(".btn-enviar");

    btnEnviar.addEventListener("click", function (event) {
        event.preventDefault();

        // Remove mensagens anteriores
        const errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach(msg => msg.remove());

        let isValid = true;

        const fields = [
            { id: "iName", message: "O nome é obrigatório." },
            { id: "iTelefone", message: "O telefone é obrigatório." },
            { id: "iEmail", message: "O e-mail é obrigatório.", type: "email" },
            { id: "iTipoContato", message: "Informe como prefere ser contactado." },
            { id: "iDescobriu", message: "Informe como nos conheceu." },
            { id: "iMsg", message: "A mensagem é obrigatória." }
        ];

        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const value = input.value.trim();

            if (!value || (field.type === "email" && !validateEmail(value))) {
                isValid = false;
                showError(input, field.message);
            }
        });

        if (isValid) {

            const data = {
                iName: document.getElementById("iName").value.trim(),
                iTelefone: document.getElementById("iTelefone").value.trim(),
                iEmail: document.getElementById("iEmail").value.trim(),
                iTipoContato: document.getElementById("iTipoContato").value,
                iDescobriu: document.getElementById("iDescobriu").value,
                iMsg: document.getElementById("iMsg").value.trim()
            };

            fetch('/fale-conosco', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Mensagem enviada com sucesso!');
                        form.reset();
                    } else {
                        alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
                    }
                })
                .catch(error => {
                    console.error('Erro na requisição:', error);
                    alert('Erro ao enviar. Verifique sua conexão e tente novamente.');
                });
        }
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
        // Expressão regular simples para validar email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
