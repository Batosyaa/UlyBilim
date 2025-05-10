let welcomeMessage = "Welcome to UlyBilim!";
const yearEstablished = 2023;
let isUserLoggedIn = false;

function showWelcomeAlert() {
    alert(welcomeMessage + " We're glad you're here!");
}

function calculateYearsOfOperation(currentYear, establishedYear) {
    return currentYear - establishedYear;
}

const currentYear = 2025;
const yearsActive = calculateYearsOfOperation(currentYear, yearEstablished);
const welcomeWithYears = welcomeMessage + " Serving education for " + yearsActive + " years.";

function checkLoginStatus() {
    if (isUserLoggedIn) {
        document.getElementById("loginBtn").textContent = "Logout";
        document.getElementById("registerBtn").style.display = "none";
    } else {
        document.getElementById("loginBtn").textContent = "Login";
        document.getElementById("registerBtn").style.display = "inline-block";
    }
}

function generateRandomTip() {
    const tips = [
        "Try our mobile app for on-the-go learning!",
        "Check out our newest courses in the catalog.",
        "Connect with other students in the forum.",
        "Don't forget to complete your daily exercises!",
        "Set learning goals to track your progress."
    ];
    
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById("randomTip").textContent = tips[randomIndex];
}

let visitorCount = 1500;
function updateVisitorCounter() {
    visitorCount++;
    document.getElementById("visitorCounter").textContent = visitorCount;
}

const featuredCourses = [
    "Introduction to Web Development",
    "Advanced JavaScript",
    "Math for Beginners",
    "English Language",
    "Science for Kids"
];

function displayFeaturedCourses() {
    const coursesList = document.getElementById("featuredCoursesList");
    coursesList.innerHTML = "";
    
    for (let i = 0; i < featuredCourses.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = featuredCourses[i];
        listItem.className = "course-item";
        coursesList.appendChild(listItem);
    }
}

function addNewCourse(courseName) {
    featuredCourses.push(courseName);
    displayFeaturedCourses();
}

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop();
    
    if (currentPage === "index.html" || currentPage === "") {
        showWelcomeAlert();
        
        if (document.getElementById("featuredCoursesList")) {
            displayFeaturedCourses();
        }
        
        if (document.getElementById("randomTip")) {
            generateRandomTip();
        }
        
        if (document.getElementById("visitorCounter")) {
            setInterval(updateVisitorCounter, 10000);
        }
        
        if (document.getElementById("getStartedBtn")) {
            document.getElementById("getStartedBtn").addEventListener("click", function() {
                document.querySelector(".main-content").scrollIntoView({
                    behavior: "smooth"
                });
            });
        }
        
        if (document.getElementById("addCourseBtn")) {
            document.getElementById("addCourseBtn").addEventListener("click", function() {
                const newCourse = prompt("Enter a new course name:");
                if (newCourse && newCourse.trim() !== "") {
                    addNewCourse(newCourse);
                }
            });
        }
    }
    
    if (document.getElementById("loginBtn")) {
        document.getElementById("loginBtn").addEventListener("click", function() {
            if (isUserLoggedIn) {
                isUserLoggedIn = false;
                alert("You have been logged out.");
            } else {
                window.location.href = "log_in.html";
            }
            checkLoginStatus();
        });
    }
    
    if (document.getElementById("searchButton")) {
        document.getElementById("searchButton").addEventListener("click", function(event) {
            const searchInput = document.querySelector("input[type='search']").value;
            if (searchInput.trim() === "") {
                event.preventDefault();
                alert("Please enter a search term!");
            }
        });
    }
    
    const navItems = document.querySelectorAll("nav a");
    navItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            this.style.transition = "all 0.3s";
            this.style.color = "#0056b3";
        });
        
        item.addEventListener("mouseout", function() {
            this.style.color = "";
        });
    });
    
    if (document.getElementById("registrationForm")) {
        document.getElementById("registrationForm").addEventListener("submit", function(event) {
            event.preventDefault();
            validateRegistration();
        });
    }
});

function validateRegistration() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    let isValid = true;
    
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        isValid = false;
    }
    
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        isValid = false;
    }
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        isValid = false;
    }
    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        isValid = false;
    }
    
    if (isValid) {
        alert("Registration successful!");
        document.getElementById("registrationForm").reset();
    }
}

function navigateTo(section) {
    switch(section) {
        case "home":
            window.location.href = "index.html";
            break;
        case "about":
            window.location.href = "about_us.html";
            break;
        case "login":
            window.location.href = "log_in.html";
            break;
        case "register":
            window.location.href = "registration.html";
            break;
        case "studentProfile":
            window.location.href = "profileStudent.html";
            break;
        case "staffProfile":
            window.location.href = "profileStaff.html";
            break;
        case "parentProfile":
            window.location.href = "profileParent.html";
            break;
        default:
            window.location.href = "index.html";
    }
}