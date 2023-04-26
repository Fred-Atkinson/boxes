$(document).ready(function() {
    
    for (var i = 0; i < 16; i++) {
      $("#container").append("<div class='box'></div>");
    }


    $(".box").click(function() {
      $(this).toggleClass("clicked");
    });
  });