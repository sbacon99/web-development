$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use $.get() or $.ajax()
   let requestData = { topic: topic, count: count };

   $.get("https://wp.zybooks.com/quotes.php", requestData, function(data){
      console.log("data collected successfully");
      //console.log(data[0].quote);

      if (data.length > 1){
         let html = "<ol>";
         for (let c = 0; c <= count-1; c++) {
            html += "<li>" + data[c].quote +  " - " +  data[c].source + "</li>";
         }
         html += "</ol>";

         $("#quotes").html(html);
      }
      else{
         let html = "Topic '" + topic + "' not found";
         $("#quotes").html(html);
      }

   },"json");

   

}
