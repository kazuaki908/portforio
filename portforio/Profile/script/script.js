$(window).on('load', function() {
    $("#loading").delay(1800).fadeOut('slow'); // ローディング画面を1.8秒待機してからフェードアウト
    $("#loading_box").delay(1000).fadeOut('slow'); // ローディングテキストを1.0秒待機してからフェードアウト
  });


/* jQueryで実装 */
$(function(){
  /*open button */
  $('.modalLink').on('click',function(){
      $(this).next('.modalWindow').addClass('openWindow');
      $('main').append('<div class="modalBackground"></div>');/* */
  });

  /* close button */
  $('.closeModal').on('click',function(){
      $(this).parents('.modalWindow').removeClass('openWindow');
      $('.modalBackground').remove();
  });
  /* modalwindowの外側をクリックしたか判定する */
  $(document).on('click',function(event){
      if($(event.target).closest('.modalBackground').length){
          $('.modalWindow').removeClass('openWindow');
          $('.modalBackground').remove();
      }
  });
});/* fin */