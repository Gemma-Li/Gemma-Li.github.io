$(document).ready(function () {

  // Gotop
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.gotop').fadeIn();
    } else {
      $('.gotop').fadeOut();
    }
  });
  $(".gotop").click(function () {
    $('html,body').animate({ scrollTop: $('body').offset().top }, 500);
  });

  // Sticky
  $(function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass("sticky");
    } else {
      $('.header').removeClass("sticky");
    }
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.header').addClass("sticky");
      } else {
        $('.header').removeClass("sticky");
      }
    });
  });

  //下拉
  $(function () {
    if (window.matchMedia('(min-width: 769px)').matches) {
    } else {
      $(".tabsdrop").find(".tabsdrop-list").hide();  //隱藏left_page下的category
      $(".tabsdrop").click(function () {
        $(this).toggleClass("open");		//切換class="open"
        $(this).find(".tabsdrop-list").slideToggle();	//切換left_page下的category的slide效果
        $(".tabsdrop .tabsdrop-title").toggleClass("icontran");
      });
    }
  });
});