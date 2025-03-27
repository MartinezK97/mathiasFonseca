$(document).ready(() => {
    $(".btn-menu").click(() => {
        $("#menu").toggleClass('hide')
        $("#menu .btn-menu i").toggleClass('fa-bars fa-times')
    })


    setTimeout(() => {
        document.querySelectorAll('a[rel="noreferrer"]').forEach(link => {
            link.style.display = "none";
        });
    }, 2000);
})