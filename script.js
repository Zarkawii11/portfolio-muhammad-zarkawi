// ================================
// MENU MOBILE
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


// ================================
// TUTUP MENU SETELAH DIKLIK
// ================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ================================
// ANIMASI SAAT SCROLL
// ================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function (section) {

    observer.observe(section);

});


// ================================
// TOMBOL KEMBALI KE ATAS
// ================================

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);


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
