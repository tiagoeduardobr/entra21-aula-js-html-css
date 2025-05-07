document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-interesse");
    const input = form.querySelector('input[name="interesse"]');
    const listContent = document.querySelector(".list__content ul");
    const interests = [];

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        const interest = input.value.trim();
        if (interest) {
            interests.push(interest); // Adiciona o interesse ao vetor
            updateList(); // Atualiza a lista exibida
            input.value = ""; // Limpa o campo de input
        }
    });

    function updateList() {
        listContent.innerHTML = ""; // Limpa a lista atual
        interests.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            listContent.appendChild(li);
        });
    }
});