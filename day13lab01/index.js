function parseScores(scoresString) {
   // TODO: Compete the function
   array = scoresString.split(" ");
   return array;  
}

function buildDistributionArray(scoresArray) {
   // TODO: Compete the function
   grades = [0,0,0,0,0];
   
   for(let i = 0; i < scoresArray.length; i++){
      if (parseInt(scoresArray[i]) >= 90){
         grades[0] ++;
      }
      else if (parseInt(scoresArray[i]) >= 80){
         grades[1] ++;
      }
      else if (parseInt(scoresArray[i]) >= 70){
         grades[2] ++;
      }
      else if (parseInt(scoresArray[i]) >= 60){
         grades[3] ++;
      }
      else{
         grades[4] ++;;
      }
   }
   return grades;
}

function setTableContent(userInput) {
   // TODO: Compete the function

   // implement parseScores
   scores = parseScores(userInput);
   // implement buildDistributionArray
   distribution = buildDistributionArray(scores);

   // accessing values for chart bars
   h0 = distribution[0]*10 + "px";
   h1 = distribution[1]*10 + "px";
   h2 = distribution[2]*10 + "px";
   h3 = distribution[3]*10 + "px";
   h4 = distribution[4]*10 + "px";


   // adding innerHTML to set first row
   document.getElementById("firstRow").innerHTML = "<td><div style='height:"+ h0 + "' class='bar0'></div></td> <td><div style='height:" + h1 + "' class='bar1'></div></td> <td><div style='height:" + h2 + "' class='bar2'> </div></td> <td><div style='height:" + h3 + "' class='bar3'></div></td> <td><div style='height:" + h4 + "' class='bar4'></div></td>";

   // adding innerHTML to set third row
   document.getElementById("thirdRow").innerHTML = "<td>"+ distribution[0] + "</td><td>" +distribution[1] + "</td><td>" +distribution[2] + "</td><td>" +distribution[3] + "</td><td>" +distribution[4] + "</td>";
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");