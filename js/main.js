$(document).ready(function() {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* Click event on menu */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    });

    // Click to scroll top
    $('.move-up span').click(function() {
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    });

    // AOS Instance
    AOS.init();
});