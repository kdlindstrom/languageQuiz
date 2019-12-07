$(document).ready(function(){


  $("#survey form").submit(function(event){
  event.preventDefault();
  var devType = $("#devType").val();
  var age = $("#age").val();
  var animal = $("#animal").val();
  var javaScore=0;
  var pythonScore=0;
  var swiftScore=0;
    if (devType === 'Android apps') {
      javaScore +=1;
    }else if (devType==='GUIs'){
      pythonScore +=1;
    }else if (devType ==='iOS apps'){
      swiftScore +=1;
    }
    alert(javaScore);
    if (javaScore>pythonScore && javaScore>swiftScore){
        $("#output").text("You should learn java.");
    }else if(pythonScore>javaScore && pythonScore>swiftScore){
        $("#output").text("You should learn python.");
    }else {
        $("#output").text("You should learn swift.");
    }

  });
});
