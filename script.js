/*jshint esversion: 6 */ 

// Alias commonly used functions for improved legiblity
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// Splash Screen 
document.addEventListener("DOMContentLoaded", () => {
    const splash = $(".splash");
    setTimeout(() => {
        splash.classList.add("display-none");
    }, 5000);

    // Header 
    const header = $(".header");
    window.addEventListener("scroll", () => {
        const top = window.scrollY;
        console.log(top);
        if (top >= 50) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
});

// Filter Selection modified from W3Schools code
function filterSelection(c) {
    let x = $$(".filterDiv"); //Select all elements with class'filterDiv'
    if (c === "all") { // If all is selected
        x.forEach(element => {
            element.classList.add("show"); // Add 'show; class to all elemtns
        });
    } else {
        x.forEach(element => {
            if (element.className.includes(c)) {
                element.classList.add("show");
            } else {
                element.classList.remove("show");
            }
        });
    }
}
// Food name array includes user sumbissons when randomising as well as hard coded list
function addRandom() {
    const allFoodDivs = document.querySelectorAll('.filterDiv');
    const foodNames = [];
    for (var i = 0; i < allFoodDivs.length; ++i) {
        foodNames.push(allFoodDivs[i].innerText);
    }
    const randomFood = foodNames[Math.floor(Math.random() * foodNames.length)];
    alert("Picky has chosen for you to have: " + randomFood);
}
// Add and remove class functions modified from W3Schools code
function addClass(element, name) {
    const arr = element.className.split(" ");
    if (!arr.includes(name)) {
        element.classList.add(name);
    }
}
function removeClass(element, name) {
    element.classList.remove(name);
}
// Add event listener to each button to handle filtering
const buttonContainer = $("#allbuttons");
const buttons = buttonContainer.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const current = $(".active");
        current.classList.remove("active");
        this.classList.add("active");
    });
}
// Submit food form
const foodForm = $("#foodForm");
foodForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const foodName = document.getElementById("foodName").value;
    const flavour = document.getElementById("mainFlavour").value;
    const texture = document.getElementById("mainTexture").value;
    const dietary = document.getElementById("dietaryCategory").value;
    if (foodName === "" || flavour.length === 0 || texture.length === 0 || !dietary) {
        alert("Write your food item and tag it appropiately.");
    } else {
        addFood(foodName, flavour, texture, dietary); // Call addFood() function to handle form submission
    }
});
// Adding new food items using form
function addFood(foodName, flavour, texture, dietary) {
    const foodItem = {
        name: foodName,
        flavour: flavour,
        texture: texture,
        dietary: dietary,
    };
    // Get stored food items from local storage or initialize empty array
    const storedFoods = JSON.parse(localStorage.getItem("newfood")) || [];
    storedFoods.push(foodItem);
    localStorage.setItem("newfood", JSON.stringify(storedFoods));
    const message = "You have added the following meal!" +
        "\nMeal: " + foodName +
        "\nMain Flavours: " + flavour +
        "\nMain Textures: " + texture +
        "\nDietary Category: " + dietary;
    alert(message);
    renderFoodList(); // Render the updated food list
}
// Function to render the list of food items
function renderFoodList() {
    const storedFoods = JSON.parse(localStorage.getItem("newfood")) || [];
    const foodContainer = $(".newfood");
    foodContainer.innerHTML = '';
    storedFoods.forEach(food => {
        const foodElement = document.createElement('div');
        foodElement.className = 'filterDiv ' + food.flavour + food.texture + food.dietary; // Apply relevant classes for filtering by class 'filterDiv'
        foodElement.textContent = food.name;// Set the text content to food name
        foodContainer.appendChild(foodElement);  // Append food element to container
    });
}