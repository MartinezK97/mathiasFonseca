$(document).ready(() => {
    $(".btn-menu").click(() => {
        $("#menu").toggleClass('hide')
        $("#menu .btn-menu i").toggleClass('fa-bars fa-times')
    })


    setTimeout(() => {

        $(".EkQXg").css({
            'background': '#fff',
            'box-shadow': '0 0 5px #0003',
            'margin': '5px'
        })

        $(".dIBzjh").css({
            'background': '#fff !important'
        })
        $('.elfsight-app-c258c807-c999-48fa-acb4-990dd3b6d0b5.eapps-widget.eapps-widget-show-toolbar > a').css({ 'display': 'none !important', 'opacity': '0 !important' })
    }, 4000);

})