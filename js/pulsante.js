        // Mostra il pulsante quando si scorre verso il basso
        window.addEventListener("scroll", function () {
            var topButton = document.querySelector(".top-button");
            if (window.scrollY > 100) {
                topButton.classList.add("show");
            } else {
                topButton.classList.remove("show");
            }
        });

        // Funzione per tornare in alto
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }