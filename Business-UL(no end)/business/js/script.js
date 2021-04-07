// При нажатии на бургер ============================================================
$(document).ready(function () {
  $('.menu-header__icon').click(function (event) {
    $(this).toggleClass('active');
    $('.menu-header__menu').toggleClass('activ');
    if ($(this).hasClass('activ')) {
      $('body').data('scroll', $(window).scrollTop());
    }
    $('body').toggleClass('lock');
    if (!$(this).hasClass('activ')) {
      $('body,html').scrollTop(parseInt($('body').data('scroll')));
    }
  });
});