$(document).ready(function(){
    $(".frontContact").hide();
  });

$(".ctcClose").click(function(){
    $(".frontContact").hide(500);
  });
  
$("#contactid").click(function(){
    $(".frontContact").show(500);
  });

  $("#contactid").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
  });