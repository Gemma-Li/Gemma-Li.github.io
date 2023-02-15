$('.hamburger').click(function() {
    $(this).toggleClass('is-opened')
    $('.nav-bar').slideToggle(1500)
})