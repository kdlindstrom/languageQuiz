$(document).ready(function(){


  $("#survey form").submit(function(event){
  event.preventDefault();
  var devType = $("#devType").val();
  var foodType = $("#foodType").val();
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

    if (foodType === 'burritos') {
      javaScore +=1;
    }else if (foodType==='pizza'){
      pythonScore +=1;
    }else if (foodType ==='pizza burritos'){
      alert("I don't think that's a real food, and if it is it probably shouldn't be.");
    }

    if (artistType === 'Ja Rule') {
      javaScore +=1;
    }else if (artistType==='Whitesnake'){
      pythonScore +=1;
    }else if (artistType ==='Taylor Swift'){
        swiftScore +=1;
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
    }else(
        alert("please complete the form")
    );

  });
});
