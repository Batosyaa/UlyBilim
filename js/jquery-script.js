$(document).ready(function() {
    const currentPage = window.location.pathname.split("/").pop();
    
    if (currentPage === "index.html" || currentPage === "") {
        $("#welcomeHeading").fadeIn(1500);
        
        $("#getStartedBtn").hover(
            function() {
                $(this).addClass("btn-hover");
                $(this).animate({ padding: "10px 25px" }, 200);
            },
            function() {
                $(this).removeClass("btn-hover");
                $(this).animate({ padding: "8px 20px" }, 200);
            }
        );
        
        $("#featuresSection").hide().fadeIn(1000);
        
        $(".course-item").hover(
            function() {
                $(this).css("background-color", "#e9f5ff");
            },
            function() {
                $(this).css("background-color", "");
            }
        );
        
        $("#addCourseBtn").click(function() {
            const newCourse = prompt("Enter a new course name:");
            if (newCourse && newCourse.trim() !== "") {
                $("#featuredCoursesList").append(
                    $("<li>").text(newCourse).addClass("course-item").hide().fadeIn(500)
                );
            }
        });
        
        setInterval(function() {
            $("#randomTip").fadeOut(500, function() {
                generateRandomTip();
                $(this).fadeIn(500);
            });
        }, 5000);
    }
    
    if (currentPage === "registration.html") {
        $("#registrationForm input").focus(function() {
            $(this).css("border", "2px solid #4285f4");
        }).blur(function() {
            $(this).css("border", "");
        });
        
        $("#registrationForm").submit(function(event) {
            event.preventDefault();
            if (validateFormJQuery()) {
                $(this).slideUp(500, function() {
                    $("<div>")
                        .addClass("alert alert-success")
                        .text("Registration successful! Redirecting to login page...")
                        .insertAfter(this)
                        .hide()
                        .fadeIn(500);
                    
                    setTimeout(function() {
                        window.location.href = "log_in.html";
                    }, 3000);
                });
            }
        });
    }
    
    if (currentPage === "log_in.html") {
        $("#loginForm").submit(function(event) {
            event.preventDefault();
            const username = $("#username").val();
            const password = $("#password").val();
            
            if (username && password) {
                $(this).slideUp(500, function() {
                    $("<div>")
                        .addClass("alert alert-success")
                        .text("Login successful! Redirecting to dashboard...")
                        .insertAfter(this)
                        .hide()
                        .fadeIn(500);
                    
                    setTimeout(function() {
                        window.location.href = "index.html";
                    }, 2000);
                });
            } else {
                $("<div>")
                    .addClass("alert alert-danger")
                    .text("Please enter both username and password")
                    .insertBefore(this)
                    .delay(3000)
                    .fadeOut(500, function() {
                        $(this).remove();
                    });
            }
        });
    }
    
    if (currentPage === "about_us.html") {
        $(".team-member").hover(
            function() {
                $(this).find(".member-details").slideDown(300);
            },
            function() {
                $(this).find(".member-details").slideUp(300);
            }
        );
    }
    
    if (currentPage.includes("profile")) {
        $(".tab-content > div").not(":first").hide();
        
        $(".tabs a").click(function(event) {
            event.preventDefault();
            $(".tabs a").removeClass("active");
            $(this).addClass("active");
            
            const target = $(this).attr("href");
            $(".tab-content > div").hide();
            $(target).fadeIn(500);
        });
        
        $(".edit-profile").click(function() {
            $(".profile-info").toggleClass("editing");
            $(".profile-info span").each(function() {
                const value = $(this).text();
                $(this).html(`<input type="text" value="${value}">`);
            });
            
            if ($(this).text() === "Edit Profile") {
                $(this).text("Save Changes");
            } else {
                $(this).text("Edit Profile");
                $(".profile-info span input").each(function() {
                    const value = $(this).val();
                    $(this).parent().text(value);
                });
                
                $("<div>")
                    .addClass("alert alert-success")
                    .text("Profile updated successfully!")
                    .insertAfter(".profile-info")
                    .delay(3000)
                    .fadeOut(500, function() {
                        $(this).remove();
                    });
            }
        });
    }
    
    $("nav a").hover(
        function() {
            $(this).stop().animate({ paddingLeft: "15px" }, 200);
        },
        function() {
            $(this).stop().animate({ paddingLeft: "8px" }, 200);
        }
    );
    
    $("#searchButton").click(function(event) {
        const searchInput = $("input[type='search']").val();
        if (!searchInput.trim()) {
            event.preventDefault();
            $("input[type='search']").effect("shake", { times: 2, distance: 5 }, 300);
            $("<div>")
                .addClass("alert alert-warning")
                .text("Please enter a search term!")
                .insertAfter("input[type='search']")
                .delay(2000)
                .fadeOut(500, function() {
                    $(this).remove();
                });
        }
    });
});

function validateFormJQuery() {
    let isValid = true;
    
    const username = $("#username").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();
    
    if (username.length < 3) {
        showError("#username", "Username must be at least 3 characters long");
        isValid = false;
    } else {
        clearError("#username");
    }
    
    if (!email.includes("@")) {
        showError("#email", "Please enter a valid email address");
        isValid = false;
    } else {
        clearError("#email");
    }
    
    if (password.length < 6) {
        showError("#password", "Password must be at least 6 characters long");
        isValid = false;
    } else {
        clearError("#password");
    }
    
    if (password !== confirmPassword) {
        showError("#confirmPassword", "Passwords do not match");
        isValid = false;
    } else {
        clearError("#confirmPassword");
    }
    
    return isValid;
}

function showError(fieldId, message) {
    $(fieldId).css("border", "1px solid #ff3860");
    
    if (!$(fieldId).next(".error-message").length) {
        $("<div>")
            .addClass("error-message")
            .text(message)
            .insertAfter(fieldId)
            .hide()
            .fadeIn(300);
    } else {
        $(fieldId).next(".error-message").text(message);
    }
}

function clearError(fieldId) {
    $(fieldId).css("border", "1px solid #dbdbdb");
    $(fieldId).next(".error-message").fadeOut(300, function() {
        $(this).remove();
    });
}