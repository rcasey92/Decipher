$(document).ready(function () {
    $(document).on('click', '#nav', toggleNav);
    $(document).on('click', '#nav-overlay', hideNav.bind(null, $('#nav-menu')));
});

function toggleNav() {
    var navmenu = $('#nav-menu');
    $('.nav-overlay').length > 0 ? hideNav(navmenu) : showNav(navmenu);
}

function hideNav(navmenu) {
    $(navmenu).css('z-index', 0);
    $(navmenu).hide('drop', 'linear', 400);
    $('#nav-overlay').remove();
    $('body').css('overflow', 'scroll');

    slideIn($('#header'), $('#content-body'), $('#footer'));
}

function showNav(navmenu) {
    var overlay = '<div id="nav-overlay" class="nav-overlay"></div>';
    var body_selector = $('body');

    $(navmenu).css('z-index', 11);
    $(navmenu).show('drop', 'linear', 400);
    $(body_selector).append(overlay);
    $(body_selector).css('overflow', 'hidden');

    slideOut($('#header'), $('#content-body'), $('#footer'));
}

function slideOut(header, body, footer) {
    $(header).css('transform', 'translate(280px)');
    $(body).css('transform', 'translate(280px)');
    $(footer).css('transform', 'translate(280px)');
}

function slideIn(header, body, footer) {
    $(header).css('transform', 'translate(0)');
    $(body).css('transform', 'translate(0)');
    $(footer).css('transform', 'translate(0)');
}