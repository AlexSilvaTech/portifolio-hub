const jogos = document.querySelectorAll(".jogo");

const modal = document.querySelector(".modal-jogo");

const modalPosicao = document.querySelector("#modalPosicao");
const modalTitulo = document.querySelector("#modalTitulo");
const modalGenero = document.querySelector("#modalGenero");
const modalDescricao = document.querySelector("#modalDescricao");

const botaoFechar = document.querySelector(".modal-fechar");


/* =========================
   ABRIR DETALHES
========================= */

jogos.forEach(function (jogo) {

    const botao = jogo.querySelector(".botao-detalhes");


    botao.addEventListener("click", function () {

        const posicao = jogo.dataset.posicao;
        const titulo = jogo.dataset.titulo;
        const genero = jogo.dataset.genero;
        const descricao = jogo.dataset.descricao;


        modalPosicao.textContent =
            `${posicao} — POSIÇÃO`;


        modalTitulo.textContent =
            titulo;


        modalGenero.textContent =
            genero;


        modalDescricao.textContent =
            descricao;


        modal.classList.add("aberto");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    });

});


/* =========================
   FECHAR MODAL
========================= */

function fecharModal() {

    modal.classList.remove("aberto");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


botaoFechar.addEventListener(
    "click",
    fecharModal
);


/* =========================
   CLICAR FORA
========================= */

modal.addEventListener(
    "click",
    function (evento) {

        if (evento.target === modal) {
            fecharModal();
        }

    }
);


/* =========================
   TECLA ESC
========================= */

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {
            fecharModal();
        }

    }
);s