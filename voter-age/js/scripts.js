$(document).ready(function(){
  $("form#age").submit(function(event){
    event.preventDefault();
    var age2 = parseInt($("#age2").val());

    if (age2 < 18){
        $("#links").show();
        $("#voter").hide();
    }
    else{
        $("#voter").show();
        $("#links").hide();
    }

  });
});
