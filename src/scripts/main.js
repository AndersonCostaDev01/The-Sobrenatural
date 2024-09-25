function escondeTodasAbas() {
    document.querySelectorAll("[data-tab-id]").forEach(aba => {
        aba.classList.remove("on__list--active");
    });
}

function removeBotaoAtivo() {
    document.querySelectorAll("[data-tab-button]").forEach(botao => {
        botao.classList.remove("on__tabs__buttons--active");
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("[data-tab-button]").forEach(botao => {
        botao.addEventListener("click", function() {
            const tabId = this.getAttribute("data-tab-button");
            const aba = document.querySelector(`[data-tab-id="${tabId}"]`);
            if (aba) {
                escondeTodasAbas();
                aba.classList.add("on__list--active");
                removeBotaoAtivo();
                this.classList.add("on__tabs__buttons--active");
            }
        });
    });
});
