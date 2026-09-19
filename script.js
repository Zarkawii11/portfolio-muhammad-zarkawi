document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ANIMASI SAAT WEBSITE DIBUKA
    // =========================

    const heroText = document.querySelector(".hero-text");
    const profile = document.querySelector(".profile");

    setTimeout(function () {
        heroText.classList.add("show");
    }, 300);

    setTimeout(function () {
        profile.classList.add("show");
    }, 600);


    // =========================
    // ANIMASI SAAT SCROLL
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
    // TOMBOL KEMBALI KE ATAS
    // =========================

    const backToTop = document.getElementById("backToTop");

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


    // =========================
    // MENU MOBILE
    // =========================

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("open");

            if (navMenu.classList.contains("open")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }

        });

    }

});
