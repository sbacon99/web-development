// Put this at the start of your JavaScript file
// to make sure everything has loaded.
window.addEventListener("DOMContentLoaded", loadedHandler);
        
function loadedHandler() { 
    console.log("Starting js file...");

    let myOtherH1 = document.getElementsByTagName("h1")[0];
    console.log("DEBUG: myH1: " + myH1);
    myOtherH1.style.backgroundColor = "green";

    // Get actual time
    // let today = new Date();
    // let hour = today.getHours();
    
    // Get random time for testing
    let hour = Math.floor(24*Math.random());

    // Check for daytime
    if (hour < 19 && hour > 7) {
        let h2 = document.createElement("h2");
        h2.innerHTML = "Happy Day!";
        document.documentElement.children[1].appendChild(h2);

        let sun = document.createElement("img");
        sun.src = "day13sun.png";
        sun.alt = "A picture of the sun";
        document.documentElement.children[1].appendChild(sun);
    }
    else {
        let h2 = document.createElement("h2");
        h2.innerHTML = "Happy Night!";
        document.documentElement.children[1].appendChild(h2);

        let moon = document.createElement("img");
        moon.src = "day13moon.png";
        moon.alt = "A picture of the moon";
        document.documentElement.children[1].appendChild(moon);
    }

}
