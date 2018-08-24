$(function() {
  $('#mblIcon, #mobile').click(function(){
    $('#mobile a').toggleClass('vis');
    $('#mobile').slideToggle(600);
    $('#hamb').toggleClass('active');
  });
});
