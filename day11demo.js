// alert('Hello, World!');
console.log("Hello, World!");

// var name = "Scott";
let name = "Scott";
console.log("name is a " + typeof(name));
name = 42;
console.log("name is a " + typeof(name));
name = true;
console.log("name is a " + typeof(name));

name = 42;
if (name == "42") {
    console.log("Same with ==");
}
if (name === "42") {
    console.log("Same with ===");
}
else {
    console.log("Not same with ===");
}

// let userName = prompt("What is your name?");
// console.log("Hello, " + userName + "!");

let num = 0;
if (num != 0) {
    console.log("Weird, this is truthy");
}
else {
    console.log("Weird, this is falsey");
}

// ---------------------
// Loops
let keepRunning = true;
while (keepRunning) {
    console.log("Robot is stilllll going");
    keepRunning = false;
}

for(let i = 0; i < 10; i++) {
    console.log("Hello " + (i + 1));
}

//----------------------
console.log("Making a function...");

function sayHello(name) {
    console.log("Hello, " + name + "!");
}
for (let i = 0; i < 5; i++) {
    sayHello(i);
}

let findSum = (a, b) => a + b;
let sum = findSum(3, 6);

// -----------------------
// Strings
let myString = "The quick brown fox";
console.log(myString.length);
let qIndex = myString.indexOf("q");
console.log("First q is at index " + qIndex);

//----------------------------
// Challenge 1: Greeter function
function greeter(name, greeting) {
    console.log(greeting + ", " + name + "!");
}
greeter("Charlene", "Hey");

//----------------------------
// Challenge 2: compound interest function
// vers 1 with a for loop
function after40(principal, contrib, interest) {
    let total = principal;
    let years = 40;

    for (let i = 0; i < years; i++) {
        total = total + (total + contrib*12) * interest
    }
    return total;
}
console.log("Calling after40..." + after40(100, 3000, .25));

// vers 2 with a while loop
function whenMil(principal, contrib, interest) {
    let total = principal;
    let years = 0;

    // Keep looping until total is a mil
    while (total < 1000000) {
        let totalInt = total * interest;
        total += contrib * 12 + totalInt;
        years++;
    }
    return years;
}
console.log("Millionaire in " + whenMil(10000, 500, 0.08) + " years");

//----------------------------
// Challenge 3: year eval function

//----------------------------
// Challenge 4: tweet topic function
function findTopic(tweet) {
    let hashIndex = tweet.indexOf("#");
    let nextSpaceIndex = tweet.indexOf(" ", hashIndex);
    let topicLength = nextSpaceIndex - hashIndex;
    // console.log(hashIndex + " ... " + nextSpaceIndex + " ... " + topicLength);

    let topic = "";
    if (nextSpaceIndex > 0) {
        topic = tweet.substr(hashIndex, topicLength);
    }
    else {
        topic = tweet.substr(hashIndex);
    }

    return topic;
}

let myTweet = "Sharing is #caring";
console.log(findTopic(myTweet));