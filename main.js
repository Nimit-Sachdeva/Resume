$(document).ready(function(){
$(".col-md-4").hover..bind('touchstart touchend',function(){
    $(this).addClass("animated pulse");
  },
    function () {
    $(this).removeClass("pulse");
  })

});
