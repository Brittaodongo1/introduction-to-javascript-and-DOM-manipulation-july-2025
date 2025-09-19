// Part 1: Variables & Conditionals

let userName = "Alice";
let isMember = true;

if (isMember) {
  console.log("Welcome back, " + userName + "!");
} else {
  console.log("Please sign up to enjoy more features.");
}


// Part 2: Custom Functions

function greetUser(name) {
  alert("Hello, " + name + "! Thanks for visiting.");
}

function calculateSquare(number) {
  return number * number;
}

console.log("The square of 5 is: " + calculateSquare(5));


// Part 3: Loops


// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For Loop Iteration: " + i);
}

// Example 2: While loop
let counter = 1;
while (counter <= 3) {
  console.log("While Loop Iteration: " + counter);
  counter++;
}


// Part 4: DOM Interactions
// 

// Change title color when page loads
document.getElementById("title").style.color = "darkgreen";

// Add click event to greet button
document.getElementById("greetBtn").addEventListener("click", function() {
  greetUser(userName);
});

// Add list items dynamically
document.getElementById("listBtn").addEventListener("click", function() {
  let fruits = ["Apple", "Banana", "Cherry"];
  let listElement = document.getElementById("list");
  listElement.innerHTML = ""; // Clear before adding
  for (let fruit of fruits) {
    let li = document.createElement("li");
    li.textContent = fruit;
    listElement.appendChild(li);
  }
});