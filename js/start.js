// login
$(window).on('load',function(){
    $("#splash-logo img").delay(2600).fadeOut('slow');
    $("#splash").delay(2300).fadeOut('slow',function(){
        $('body').addClass('appear');
    });
    
    $('.splashbg').on('animationend', function() {
    });
});

window.addEventListener('beforeunload', function () {
  // ページを離れる直前にスクロール位置をリセット
  window.scrollTo(0, 0);
});
