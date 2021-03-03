var text1 = document.getElementById("percentage");
    var text = document.getElementById("hourly");
   function Hourly() {
       var checkBox = document.getElementById("Hourly");

       if (checkBox.checked == true){
           text.style.display = "block";
           text1.style.display = "none";
       } else{
          text.style.display = "none";
       }
   }
   function Percentage() {
       var checkBox = document.getElementById("Percentage");

       if (checkBox.checked == true){
           text1.style.display = "block";
           text.style.display = "none";
       } else {
          text.style.display = "none";
       }
   }