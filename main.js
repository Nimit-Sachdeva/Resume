$(document).ready(function(){
$(".col-md-4").hover(function(){
    $(this).addClass("animated pulse");
  },
    function () {
    $(this).removeClass("pulse");
  })

});
