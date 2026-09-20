document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // HERO ANIMATION
    // =========================

    const heroText = document.querySelector(".hero-text");
    const profile = document.querySelector(".profile");

    setTimeout(function () {
        if (heroText) {
            heroText.classList.add("show");
        }
    }, 300);

    setTimeout(function () {
        if (profile) {
            profile.classList.add("show");
        }
    }, 600);


    // =========================
    // SECTION ANIMATION
    // =========================

    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });


    sections.forEach(function (section) {
        observer.observe(section);
    });


    // =========================
    // BACK TO TOP
    // =========================

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // =========================
    // MOBILE MENU
    // =========================

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("open");

            if (navMenu.classList.contains("open")) {

                menuToggle.textContent = "✕";

            } else {

                menuToggle.textContent = "☰";

            }

        });


        // Tutup menu setelah memilih menu
        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("open");
                menuToggle.textContent = "☰";

            });

        });

    }

});
