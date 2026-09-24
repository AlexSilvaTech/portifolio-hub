const fotos = document.querySelectorAll(".foto-card");

const modal = document.querySelector(".modal-fotografia");
const modalImagem = document.querySelector("#modalImagem");
const modalTitulo = document.querySelector("#modalTitulo");
const modalCategoria = document.querySelector("#modalCategoria");
const modalData = document.querySelector("#modalData");
const modalLocal = document.querySelector("#modalLocal");
const modalDescricao = document.querySelector("#modalDescricao");

const botaoFechar = document.querySelector(".modal-fechar");


/* =========================
   ABRIR FOTOGRAFIA
========================= */

fotos.forEach(function (foto) {

    const botao = foto.querySelector(".foto-moldura");
    const imagem = foto.querySelector("img");

    botao.addEventListener("click", function () {

        const titulo = foto.dataset.titulo;
        const categoria = foto.dataset.categoria;
        const data = foto.dataset.data;
        const local = foto.dataset.local;
        const descricao = foto.dataset.descricao;

        modalImagem.src = imagem.src;
        modalImagem.alt = imagem.alt;

        modalTitulo.textContent = titulo;
        modalCategoria.textContent = categoria;
        modalData.textContent = data;
        modalLocal.textContent = local;
        modalDescricao.textContent = descricao;

        modal.classList.add("aberta");

        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    });

});


/* =========================
   FECHAR MODAL
========================= */

function fecharModal() {

    modal.classList.remove("aberta");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


/* BOTÃO X */

botaoFechar.addEventListener("click", fecharModal);


/* CLICAR FORA */

modal.addEventListener("click", function (evento) {

    if (evento.target === modal) {
        fecharModal();
    }

});


/* TECLA ESC */

document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {
        fecharModal();
    }

});