window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   let button = document.getElementById("convertButton");
   button.addEventListener("click", conversion);

   let cChange = document.getElementById("cInput");
   let fChange = document.getElementById("fInput");
   cChange.addEventListener("input", fReset);
   fChange.addEventListener("input", cReset);
}

function fReset(){
   document.getElementById("fInput").value = "";
}

function cReset(){
   document.getElementById("cInput").value = "";
}

function conversion(){
   if (document.getElementById("fInput").value != ""){ 

      // obtain input fahrenheit value
      let fValue = document.getElementById("fInput").value;

      if (isNaN(parseFloat(fValue))){
         // add error
         document.getElementById("errorMessage").innerHTML = fValue + " is not a number";
      }
      
      else{
         document.getElementById("errorMessage").innerHTML = "";

         // reset celsius value
         document.getElementById("cInput").value = "";

         // convert
         let tempC = convertFtoC(parseFloat(fValue));
         document.getElementById("cInput").value = tempC;

         // update image
         if (fValue < 32){
            document.getElementById("weatherImage").src = "cold.png";
         }
         if (fValue >= 32 && fValue <= 50){
            document.getElementById("weatherImage").src = "cool.png";
         }
         if (fValue > 50){
            document.getElementById("weatherImage").src = "warm.png";
         }
      }
   }

   if (document.getElementById("cInput").value != ""){

      // obtain input celsius value
      let cValue = document.getElementById("cInput").value;

      if (isNaN(parseFloat(cValue))){
         // add error
         document.getElementById("errorMessage").innerHTML = cValue + " is not a number";
      }

      else {
         document.getElementById("errorMessage").innerHTML = "";

         //reset fahrenheit value
         document.getElementById("fInput").value = "";

         // convert
         let tempF = convertCtoF(parseFloat(cValue));
         document.getElementById("fInput").value = tempF;

         // update image
         if (tempF < 32){
            document.getElementById("weatherImage").src = "cold.png";
         }
         if (tempF >= 32 && tempF <= 50){
            document.getElementById("weatherImage").src = "cool.png";
         }
         if (tempF > 50){
            document.getElementById("weatherImage").src = "warm.png";
         }
      }
   }
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius * 9/5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit - 32) * 5/9;
}
