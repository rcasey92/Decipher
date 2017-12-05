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

    slideHeaderIn($('#header'));
    slideContentBodyIn($('#content-body'));
    slideFooterIn($('#footer'));
}

function showNav(navmenu) {
    var overlay = '<div id="nav-overlay" class="nav-overlay"></div>';
    var body_selector = $('body');

    $(navmenu).css('z-index', 11);
    $(navmenu).show('drop', 'linear', 400);
    $(body_selector).append(overlay);
    $(body_selector).css('overflow', 'hidden');

    slideHeaderOut($('#header'));
    slideContentBodyOut($('#content-body'));
    slideFooterOut($('#footer'));
}

function slideHeaderOut(header) {
    $(header).css('transform', 'translate(280px)');
    $(header).css('transition', 'all 400ms linear');
}

function slideHeaderIn(header) {
    $(header).css('transform', 'translate(0)');
    $(header).css('transition', 'all 400ms linear');
}

function slideContentBodyOut(body) {
    $(body).css('transform', 'translate(280px)');
    $(body).css('transition', 'all 400ms linear');
}

function slideContentBodyIn(body) {
    $(body).css('transform', 'translate(0)');
    $(body).css('transition', 'all 400ms linear');
}

function slideFooterOut(footer) {
    $(footer).css('transform', 'translate(280px)');
    $(footer).css('transition', 'all 400ms linear');
}

function slideFooterIn(footer) {
    $(footer).css('transform', 'translate(0)');
    $(footer).css('transition', 'all 400ms linear');
}