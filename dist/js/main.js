function escondeTodasAbas(){document.querySelectorAll("[data-tab-id]").forEach(t=>{t.classList.remove("on__list--active")})}function removeBotaoAtivo(){document.querySelectorAll("[data-tab-button]").forEach(t=>{t.classList.remove("on__tabs__buttons--active")})}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("[data-tab-button]").forEach(t=>{t.addEventListener("click",function(){var t=this.getAttribute("data-tab-button"),t=document.querySelector(`[data-tab-id="${t}"]`);t&&(escondeTodasAbas(),t.classList.add("on__list--active"),removeBotaoAtivo(),this.classList.add("on__tabs__buttons--active"))})})});