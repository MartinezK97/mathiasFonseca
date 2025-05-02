document.addEventListener("DOMContentLoaded", function () {
    const btnMenu = document.querySelector(".btn-menu");
    const menu = document.getElementById("menu");
    const menuIcon = menu.querySelector(".btn-menu i");

    btnMenu.addEventListener("click", function () {
        menu.classList.toggle("hide");
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-times");
    });

    document.addEventListener("click", function (e) {
        const clickedOutsideMenu = !e.target.closest("#menu");
        const clickedOutsideButton = !e.target.closest(".btn-menu");
        const clickedLinkInsideMenu = e.target.closest("#menu a");

        if (clickedOutsideMenu && clickedOutsideButton && !menu.classList.contains("hide")) {
            menu.classList.add("hide");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        } else if (clickedLinkInsideMenu) {
            menu.classList.add("hide");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        }
    });

    setTimeout(() => {
        const ellipsisBtn = document.querySelector(".ButtonBase__Ellipsis-sc-11c179a3-5.haApKJ");
        if (ellipsisBtn) {
            ellipsisBtn.textContent = "Agregar reseña";
            ellipsisBtn.style.color = "#ffffff";
        }
    
        const ekqxgElements = document.querySelectorAll(".EkQXg");
        ekqxgElements.forEach(el => {
            el.style.background = "#fff";
            el.style.boxShadow = "0 0 5px #0003";
            el.style.margin = "5px";
        });
    
        const dibzjhElements = document.querySelectorAll(".dIBzjh");
        dibzjhElements.forEach(el => {
            el.style.setProperty("background", "#fff", "important");
        });
    
        const eappsLink = document.querySelector('.elfsight-app-c258c807-c999-48fa-acb4-990dd3b6d0b5.eapps-widget.eapps-widget-show-toolbar > a');
        if (eappsLink) {
            eappsLink.style.setProperty("display", "none", "important");
            eappsLink.style.setProperty("opacity", "0", "important");
        }
    }, 4000);

    
})

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("location");
    const dataSrc = iframe.getAttribute('data-src');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Mapa en viewport, cargando...");
                iframe.src = dataSrc;
                observer.disconnect();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(iframe);

    // Fallback por si falla el observer
    setTimeout(() => {
        if (!iframe.src) {
            console.log("Fallback activado, cargando mapa...");
            iframe.src = dataSrc;
        }
    }, 5000);
});

