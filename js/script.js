// script.js - Vanilla JavaScript functionality
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    // Welcome alert when the page loads
    setTimeout(function() {
        alert("Welcome to UlyBilim! Explore our educational resources.");
    }, 1000);
    
    // Initialize all JavaScript functionality
    initVariables();
    setupEventListeners();
    generateRandomNumber();
    createDynamicElements();
    workWithArrays();
    
    // Load user data with callback function (advanced)
    loadUserData(displayUserData);
});

// Variables and Data Types
function initVariables() {
    // String variable
    let websiteName = "UlyBilim";
    
    // Number variable
    let studentCount = 150;
    
    // Boolean variable
    let isNewUser = true;
    
    // String concatenation
    let welcomeMessage = "Welcome to " + websiteName + "! We have " + studentCount + " students.";
    
    // Basic arithmetic
    let totalCourses = 15;
    let completedCourses = 7;
    let remainingCourses = totalCourses - completedCourses;
    
    // Modulo operator
    let moduleNumber = totalCourses % 4; // Remainder when divided by 4
    
    // Increment and decrement
    studentCount++; // Increment student count
    let availableSlots = 200;
    availableSlots--; // Decrement available slots
    
    // Display some of these values on the page
    const statsContainer = document.getElementById("stats-container");
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="stat-card">
                <h3>Students</h3>
                <p>${studentCount}</p>
            </div>
            <div class="stat-card">
                <h3>Courses</h3>
                <p>${totalCourses}</p>
            </div>
            <div class="stat-card">
                <h3>Available Slots</h3>
                <p>${availableSlots}</p>
            </div>
        `;
    }
}

// Functions
function calculateProgress(completed, total) {
    return Math.floor((completed / total) * 100);
}

function showProgress() {
    const progressPercentage = calculateProgress(7, 15);
    alert(`You have completed ${progressPercentage}% of your courses!`);
}

// If-Else Conditionals
function checkEligibility() {
    const age = parseInt(document.getElementById("age-input").value);
    const resultElement = document.getElementById("eligibility-result");
    
    if (isNaN(age)) {
        resultElement.textContent = "Please enter a valid age.";
        resultElement.style.color = "red";
    } else if (age < 15) {
        resultElement.textContent = "Sorry, you must be at least 15 years old to enroll.";
        resultElement.style.color = "red";
    } else if (age >= 15 && age <= 18) {
        resultElement.textContent = "You're eligible for our teen programs!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "You're eligible for all our programs!";
        resultElement.style.color = "green";
    }
}

// Random Number Generation
function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    const randomElement = document.getElementById("random-number");
    if (randomElement) {
        randomElement.textContent = `Random Course ID: KZ${randomNum}`;
    }
}

// Loops and Dynamic Element Creation
function createDynamicElements() {
    const container = document.getElementById("dynamic-content");
    if (!container) return;
    
    container.innerHTML = ""; // Clear existing content
    
    // Create elements using a loop
    for (let i = 1; i <= 5; i++) {
        const element = document.createElement("div");
        element.className = "dynamic-item";
        element.textContent = `Dynamic Element ${i}`;
        element.style.padding = "10px";
        element.style.margin = "5px";
        element.style.backgroundColor = `hsl(${i * 50}, 70%, 80%)`;
        element.style.borderRadius = "5px";
        element.style.cursor = "pointer";
        
        // Add event listener to each element
        element.addEventListener("click", function() {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
        });
        
        container.appendChild(element);
    }
}

// Arrays
function workWithArrays() {
    const coursesArray = ["Programming", "Mathematics", "Science", "Language Arts", "History"];
    const arrayContainer = document.getElementById("array-container");
    if (!arrayContainer) return;
    
    // Display array elements
    updateArrayDisplay(coursesArray, arrayContainer);
    
    // Setup add course button
    const addButton = document.getElementById("add-to-array");
    const courseInput = document.getElementById("course-input");
    
    if (addButton && courseInput) {
        addButton.addEventListener("click", function() {
            const newCourse = courseInput.value.trim();
            if (newCourse !== "") {
                coursesArray.push(newCourse);
                updateArrayDisplay(coursesArray, arrayContainer);
                courseInput.value = "";
            }
        });
    }
}

function updateArrayDisplay(array, container) {
    container.innerHTML = "<h3>Available Courses:</h3>";
    const list = document.createElement("ul");
    
    array.forEach(function(item) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
    
    container.appendChild(list);
}

// DOM Manipulation and Event Listeners
function setupEventListeners() {
    // Check age eligibility
    const checkButton = document.getElementById("check-eligibility");
    if (checkButton) {
        checkButton.addEventListener("click", checkEligibility);
    }
    
    // Show progress
    const progressButton = document.getElementById("show-progress");
    if (progressButton) {
        progressButton.addEventListener("click", showProgress);
    }
    
    // Change theme
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function() {
            document.body.classList.toggle("dark-theme");
            if (document.body.classList.contains("dark-theme")) {
                this.textContent = "Switch to Light Theme";
            } else {
                this.textContent = "Switch to Dark Theme";
            }
        });
    }
    
    // Mouseover event on navigation menu
    const navItems = document.querySelectorAll("nav ul li a");
    navItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            this.style.color = "#ff6b6b";
        });
        
        item.addEventListener("mouseout", function() {
            this.style.color = "";
        });
    });
}

// Advanced JavaScript - Switch Statement
function navigateMenu(option) {
    switch(option) {
        case "home":
            alert("Navigating to Home page");
            window.location.href = "index.html";
            break;
        case "courses":
            alert("Navigating to Courses page");
            window.location.href = "courses.html";
            break;
        case "about":
            alert("Navigating to About page");
            window.location.href = "about.html";
            break;
        case "contact":
            alert("Navigating to Contact page");
            window.location.href = "contact.html";
            break;
        default:
            alert("Invalid option");
    }
}

// Advanced JavaScript - Callback function
function loadUserData(callback) {
    setTimeout(function() {
        const userData = {
            name: "Sample User",
            completedCourses: 3,
            totalCourses: 10
        };
        callback(userData);
    }, 2000);
}

function displayUserData(userData) {
    const userDataContainer = document.getElementById("user-data");
    if (userDataContainer) {
        userDataContainer.innerHTML = `
            <h3>User: ${userData.name}</h3>
            <p>Completed: ${userData.completedCourses}/${userData.totalCourses} courses</p>
            <p>Progress: ${calculateProgress(userData.completedCourses, userData.totalCourses)}%</p>
        `;
    }
}