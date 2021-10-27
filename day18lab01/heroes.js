window.addEventListener("DOMContentLoaded", function () {
  // add click event handler to heroes button
  let button = document.getElementById("heroes");
  let heroURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  

  button.addEventListener("click", function() {
  	fetchHeroes(heroURL);
  	});
});

// Fetch JSON heroes
function fetchHeroes(url) {
     // - make a new XMLHttpRequest
     // - add an event listener for the load event to call gotHeroes (defined below)
     // - open a "get" request from the heroURL (defined above)
     // - set the response type to be json
     // - send the request
     // TODO

     let xhr = new XMLHttpRequest();
      xhr.addEventListener("load", gotHeroes);
      xhr.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
      xhr.responseType = "json"; 
      xhr.send();
}

// JSON Heroes data loaded event handler
function gotHeroes() {
   let json = this.response;
   console.log(json);

   // Fill in the header
   let header = document.getElementById("header");

   
   // create a new h1 element with the squadName from the json and append it to the header
   // TODO

   header.innerHTML = "<h1>" + json.squadName + "</h1>";
   
   // create a new p element with the homeTown and date formed from the json
   // and append it to the header
   // TODO
   header.innerHTML += "<p>Hometown: " + json.homeTown + " // Formed: " +json.formed + "</p>";
   console.log(header.innerHTML);
   
   // Fill in the heroes
   let section = document.getElementById("section");
   let members = json.members;

   // loop through each member
   for (let i = 0; i < members.length; i++) {
       // create an article to hold info for the current hero
       let article = document.createElement("article");
       let h2 = document.createElement("h2");
       let p1 = document.createElement("p");
       let p2 = document.createElement("p");
       let p3 = document.createElement("p");
       let list = document.createElement("ul");

       // fill in the member's name, secret identity, and age
       // from the json data into the h2 and p elements
       // TODO

       article.innerHTML = "<article>" + members[i].name + "</article>";
       p1.innerHTML = "<p>Secret identity: " + members[i].secretIdentity + "</p>";
       p2.innerHTML = "<p>Age" + members[i].age + "</p>";
       


       // Loop through each super power
       // for each one, create an li element to hold the power
       // and append it to the list created above
       // TODO


       // append all the elements to the article for this hero,
       // then append the article to the section element
       // TODO
       
       
   }
}