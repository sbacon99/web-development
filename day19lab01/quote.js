window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      console.log(selectedTopic);
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
      console.log(selectedCount);
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
   var url = "https://wp.zybooks.com/quotes.php?topic=" + topic + "&count=" + count;
   var quoteHttp = new XMLHttpRequest();
   quoteHttp.addEventListener("load", responseReceivedHandler);
   quoteHttp.responseType = "json";
   quoteHttp.open("GET", url, true);
   quoteHttp.send();


   //for (let c = 1; c <= count; c++) {
   //   html += `<li>Quote ${c} - Anonymous</li>`;
   //}
   //html += "</ol>";

   //document.querySelector("#quotes").innerHTML = html;
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler(){
   var html = "";

   if (this.response.error){
      console.log(this.response.error);
      document.querySelector("#quotes").innerHTML = this.response.error;
   }
   else { 
      html = "<ol>"
      for (let i = 0; i < this.response.length; i++){
         html += "<li>" + this.response[i].quote + " - " + this.response[i].source + "</li>";
      }
   html += "</ol>"

      console.log(html);

      document.querySelector("#quotes").innerHTML = html;
      //console.log(html);
   }
}