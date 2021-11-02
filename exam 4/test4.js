/*******************************
 * CSC 3123 Web Development
 * Test 4 - Hands-on
 * Sam Bacon
 *******************************/

// Make sure everything is loaded
window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() {
    console.log("DOMContentLoaded");

    let searchForm = document.querySelector('form');

    // Register a click event handler for the search button
    searchForm.addEventListener("submit", function (event) {
        // Prevent default form action. DO NOT REMOVE THIS LINE
        event.preventDefault();
        let valid = checkForm();
        if (valid) {
            fetchResults();
        }
    });
}


function checkForm() {
    // This function performs input validation:
    // - the keyword text field should have a value
    // - the created_after text field is not required to have a value, but if it does
    //   it should be a number between -1000 and last year (determined dynamically
    //   based on the current year using a Date object).
    // - If either field is invalid, the associated error element defined in the HTML
    //   should become visible with appropriate text and the function should return false.
    // - Otherwise, if both fields are ok, the error elements should not be displayed and
    //   the function should return true.

    console.log("Performing data validation...");

    let valid = true;

    let term = document.getElementById("keyword");
    let termErr = document.getElementById("keywordErr");
    let created = document.getElementById("created_after");
    let createdErr = document.getElementById("createdAfterErr");
    let today = new Date();
    let lastYear = today.getFullYear() - 1;

    // Make sure the search term is provided (keyword text field).
    // TODO

    let termValid = term.value.length >= 1;
    if (!termValid){
        valid = false;
        termErr.textContent
        termErr.textContent = "missing search term";
        termErr.removeAttribute("hidden");

    } 

    // Make sure the Created After field is either blank or 
    // is a number between -1000 and last year.
    // TODO

    let createdValid = !isNaN(created.value) && created.value > -1000 && created.value <= lastYear;
    if (!createdValid){
        valid = false;
        createdErr.textContent = "year should be between -1000 and " + lastYear;
        createdErr.removeAttribute("hidden");


    }
    // Return whether or not the fields are valid (true or false).

    return valid;

}

function fetchResults() {
    // This function should construct the complete URL based on the form fields,
    // register an event handler for the data load event, and call the API.
    console.log("Fetching results from API...");
    let baseURL = 'https://openaccess-api.clevelandart.org/api/artworks/';
    let term = document.getElementById("keyword");
    let created = document.getElementById("created_after");
    let type = document.getElementById("type");
    let hasImage = document.getElementById("hasImage");
    let range = document.getElementById("range");

    // Construct query string by concatenating pieces together.
    // Example: https://openaccess-api.clevelandart.org/api/artworks/?q=forest&type=Painting&limit=17&created_after=1700&has_image=1 
    let qStr = "";
    qStr += baseURL + "?q=" + term.value + "&type=" + type.value + "&limit=" + range.value ;

    // Append data if necessary
    if(created.value.length > 0){
        qStr += "&created_after=" + created.value;
    }

    // Append image indicator if necessary
    if (hasImage.checked){
        qStr += "&has_image=1";
    }

    console.log("Query String: " + qStr);

    // Make a new Http Request to call the API to request JSON-formatted data.
    // When the response is complete, the function displayResults should be called. 

    var searchHttp = new XMLHttpRequest();
    searchHttp.addEventListener("load", displayResults);
    searchHttp.responseType = "json";
    searchHttp.open("GET", qStr);
    searchHttp.send();    
}

function displayResults() {
    // This function handles the JSON response from the API call and displays
    // formatted output under the form.
    console.log("Displaying data...");
    let response = this.response;
    console.log("DEBUG\n" + JSON.stringify(response, null, "  "));

    let searchResults = document.getElementById("output");
    let objects = this.response.data;


    // Show the number of results, e.g., 5 of 25 result(s) returned.

    let range = document.getElementById("range");

    let total = document.createElement("p");
    if (range.value < response.info.total){
        total.innerHTML = range.value + " of " + response.info.total + " result(s) returned";
    }
    else{
        total.innerHTML = "All " + response.info.total + " result(s) returned";
    }

    searchResults.appendChild(total);

    // Loop through each item in the json data to pull out the title, creation_date, etc.
    // and display it formatted in the results.

    for (let article of objects) {

        // Title
        let title = article.title;
        let artTitle = document.createElement("p");
        artTitle.innerHTML = title;
        artTitle.style.fontWeight = "bold";
        searchResults.appendChild(artTitle);

        // Description (tombstone)
        let description = article.tombstone;
        let artDescription = document.createElement("p");
        artDescription.innerHTML = description;
        searchResults.appendChild(artDescription);

        // Image
        if (hasImage.checked){
            let artImage = document.createElement('img');
            artImage.src = article.images.web.url;
            artImage.style.width = '300px';
            searchResults.appendChild(artImage);
        }

        // Separator
        let separator = document.createElement("hr");
        searchResults.appendChild(separator);

    }

    searchResults.style.display = "block";
}