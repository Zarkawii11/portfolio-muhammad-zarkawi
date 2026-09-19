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
/* ==============================
   ANIMASI SECTION
============================== */

.section {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.7s ease;
}

.section.show {
    opacity: 1;
    transform: translateY(0);
}


/* ==============================
   TOMBOL BACK TO TOP
============================== */

.back-to-top {
    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 45px;
    height: 45px;

    border: 2px solid #111;

    background: white;

    color: #111;

    font-size: 22px;

    cursor: pointer;

    opacity: 0;

    pointer-events: none;

    transition: 0.3s;
}

.back-to-top.show {
    opacity: 1;

    pointer-events: auto;
}

.back-to-top:hover {
    background: #111;

    color: white;
}
