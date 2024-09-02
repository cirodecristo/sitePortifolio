function abrirModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "block";
}

function fecharModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Fechar o modal se o usuário clicar fora dele
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        fecharModal();
    }
};
