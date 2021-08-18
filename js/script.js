$(function(){
  //バーガ-メニュー
  $(".nav-btn").click(function(){
    $(".header-nav").fadeToggle();
    $(".nav-musk").fadeToggle();
    $("body").toggleClass("noscroll");
    $(this).toggleClass("btn-close");
    return false;
  });

  //スティッキーヘッダーの配色設定
  $(window).scroll(function(){
    //ロゴ
    if($(window).scrollTop() > $(".kv-wrapper").height()){
      $(".header-logo").addClass("black");
    }else{
      $(".header-logo").removeClass("black");
    }
    //ハンバーガーボタン
    if($(window).scrollTop() > $(".fv").height()){
      $(".nav-btn").addClass("black");
      $(".bar").addClass("black");
    }else{
      $(".nav-btn").removeClass("black");
      $(".bar").removeClass("black");
    }
  });



});