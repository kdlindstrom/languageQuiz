$(document).ready(function(){

  $("#survey form").submit(function(event){
  event.preventDefault();

  var devType = $("#devType").val();
  var foodType = $("#foodType").val();
  var artistType = $("#artistType").val();
  var dryerWasher =$("#dryerWasher").val();
  var favNumber=$("#favNumber").val();

  var javaScore=0;
  var pythonScore=0;
  var swiftScore=0;



    if (devType === 'Android apps') {
      javaScore +=2;
    }else if (devType ==='GUIs'){
      pythonScore +=3;
    }else if (devType ==='iOS apps'){
      swiftScore +=1;
    }

    if (foodType === 'burritos') {
      javaScore +=5;
    }else if (foodType ==='pizza'){
      pythonScore +=3;
    }else if (foodType ==='pizza burritos'){
      alert("I don't think pizza burritos are a real food, and if it is it probably shouldn't be.");
    }

    if (artistType === 'Ja Rule') {
      javaScore +=1;
    }else if (artistType==='Whitesnake'){
      pythonScore +=1;
    }else if (artistType ==='Taylor Swift'){
        swiftScore +=7;
    }

    if (dryerWasher === 'dryer'){
      javaScore +=1;
    }else if (dryerWasher ==='washer'){
      alert("...Are you serious? Trying to put on wet clothes sounds terrible.")
    }

    if (favNumber === '7'){
      pythonScore =+3;
    }else if (favNumber === '13'){
      swiftScore =+ 2;
    }else if (favNumber === '22'){
      javaScore =+ 2;
    }
    
    console.log("java" +javaScore);
    console.log("python"+pythonScore);
    console.log("swift"+swiftScore);


    if (javaScore>pythonScore && javaScore>swiftScore){
        $("#output").text("You should learn java.");
    }else if(pythonScore>javaScore && pythonScore>swiftScore){
        $("#output").text("You should learn python.");
    }else if(swiftScore>javaScore && swiftScore>pythonScore){
        $("#output").text("You should learn swift.");
    }else if(javaScore===swiftScore && javaScore===pythonScore){
          $("#output").text("You are equally suited to learning java, python and swift.")
    }else if(javaScore===swiftScore){
        $("#output").text("You are equally suited to learning java and swift.")
    }else if(javaScore===pythonScore){
        $("#output").text("You are equally suited to learning java and python.")
    }else if(pythonScore===swiftScore){
        $("#output").text("You are equally suited to learning python and swift.")

    }






});
  });
