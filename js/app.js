(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    const cardsBox = document.querySelector(".swiper-wrapper");
    cardsBox.addEventListener("click", (e => {
        const activeCard = document.querySelector(".active");
        activeCard.classList.remove("active");
        const card = e.target.closest(".swiper-slide");
        card.classList.add("active");
        checkingInformation();
    }));
    function checkingInformation() {
        const activeCard = document.querySelector(".active");
        const nameItem = document.querySelector(".name");
        const jobItem = document.querySelector(".job");
        const name = activeCard.dataset.name;
        const job = activeCard.dataset.job;
        nameItem.innerHTML = name;
        jobItem.innerHTML = job;
    }
    checkingInformation();
    window["FLS"] = true;
    isWebp();
})();
