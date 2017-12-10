$(document).ready(function () {
    $(document).on('click', '#nav', toggleNav);
    $(document).on('click', '#nav-overlay', hideNav.bind(null, $('#nav-menu')));
});

function toggleNav() {
    var navmenu = $('#nav-menu');
    $('.nav-overlay').length > 0 ? hideNav(navmenu) : showNav(navmenu);
}

function hideNav(navmenu) {
    $(navmenu).hide('linear', 'linear' ,400);
    $('#nav-overlay').remove();

    slideIn($('#header'), $('#content-body'), $('#footer'));
}

function showNav(navmenu) {
    var overlay = '<div id="nav-overlay" class="nav-overlay"></div>',
        body_selector = $('body');

    $(navmenu).css('z-index', 11);
    $(navmenu).show('linear', 'linear', 400);
    $(body_selector).append(overlay);

    slideOut($('#header'), $('#content-body'), $('#footer'));
}

function slideOut(header, body, footer) {
    $(header).css('width', 'calc(100% - 280px');
    $(header).css('transform', 'translate(280px)');
    $(body).css('width', 'calc(100% - 280px');
    $(body).css('transform', 'translate(280px)');
    $(footer).css('width', 'calc(100% - 280px');
    $(footer).css('transform', 'translate(280px)');
}

function slideIn(header, body, footer) {
    $(header).css('width', '');
    $(header).css('transform', 'translate(0)');
    $(body).css('width', '');
    $(body).css('transform', 'translate(0)');
    $(footer).css('width', '');
    $(footer).css('transform', 'translate(0)');
}