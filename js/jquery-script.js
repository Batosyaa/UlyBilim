// jquery-script.js - jQuery functionality
$(document).ready(function() {
    console.log("jQuery is ready");
    
    // Change text with jQuery
    $("#jquery-demo h2").text("Welcome to UlyBilim - Enhanced with jQuery!");
    
    // Change styles with jQuery
    $("#jquery-demo p").css({
        "color": "#3498db",
        "font-size": "18px",
        "line-height": "1.6"
    });
    
    // Add animations
    $("#jquery-fade-button").click(function() {
        $("#fade-target").fadeToggle(500);
    });
    
    $("#jquery-slide-button").click(function() {
        $("#slide-target").slideToggle(500);
    });
    
    // Add or remove elements dynamically
    $("#jquery-add-element").click(function() {
        $("#dynamic-jquery-container").append("<div class='jquery-added-item'>This element was added with jQuery</div>");
        
        // Style the newly added element
        $(".jquery-added-item").css({
            "background-color": "#e74c3c",
            "color": "white",
            "padding": "10px",
            "margin": "5px",
            "border-radius": "5px"
        });
    });
    
    $("#jquery-remove-element").click(function() {
        $(".jquery-added-item:last").remove();
    });
    
    // Manipulate attributes with jQuery
    $("#change-image").click(function() {
        const images = [
            "images/hero-image.jpg",
            "images/course1.jpg",
            "images/course2.jpg"
        ];
        
        // Get random image from the array
        const randomImage = images[Math.floor(Math.random() * images.length)];
        
        // Change the src attribute
        $("#changeable-image").attr("src", randomImage);
        
        // Add animation to the image change
        $("#changeable-image").hide().fadeIn(1000);
    });
    
    // Add hover effects to course cards
    $(".course-card").hover(
        function() {
            // Mouse enter
            $(this).animate({
                marginTop: "-10px"
            }, 200);
        },
        function() {
            // Mouse leave
            $(this).animate({
                marginTop: "0px"
            }, 200);
        }
    );
    
    // Form validation with jQuery
    $("#contact-form").submit(function(e) {
        let isValid = true;
        const nameValue = $("#name-input").val().trim();
        const emailValue = $("#email-input").val().trim();
        const messageValue = $("#message-input").val().trim();
        
        // Reset error messages
        $(".error-message").remove();
        
        // Validate name
        if (nameValue === "") {
            $("#name-input").after("<span class='error-message'>Please enter your name</span>");
            isValid = false;
        }
        
        // Validate email
        if (emailValue === "") {
            $("#email-input").after("<span class='error-message'>Please enter your email</span>");
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            $("#email-input").after("<span class='error-message'>Please enter a valid email address</span>");
            isValid = false;
        }
        
        // Validate message
        if (messageValue === "") {
            $("#message-input").after("<span class='error-message'>Please enter your message</span>");
            isValid = false;
        }
        
        // Show success message or prevent form submission
        if (isValid) {
            // Clear the form
            $("#contact-form")[0].reset();
            
            // Show success message
            $("#form-result").html("<div class='success-message'>Thanks for contacting us! We'll get back to you soon.</div>");
            $(".success-message").css({
                "color": "green",
                "background-color": "#e6ffe6",
                "padding": "10px",
                "border-radius": "5px",
                "margin-top": "10px"
            }).hide().fadeIn(500);
        }
        
        // Prevent actual form submission
        e.preventDefault();
    });
    
    // Helper function for email validation
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Toggle FAQ answers
    $(".faq-question").click(function() {
        $(this).next(".faq-answer").slideToggle(300);
        $(this).toggleClass("active");
        
        // Change the plus/minus icon
        const icon = $(this).find(".toggle-icon");
        if (icon.text() === "+") {
            icon.text("-");
        } else {
            icon.text("+");
        }
    });
    
    // Sticky navigation on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        const target = this.hash;
        const $target = $(target);
        
        if ($target.length) {
            $('html, body').animate({
                'scrollTop': $target.offset().top - 70
            }, 800, 'swing');
        }
    });
    
    // Course filter
    $(".filter-btn").click(function() {
        const filterValue = $(this).attr("data-filter");
        
        // Add active class to current button
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
        
        if (filterValue === "all") {
            $(".course-card").show(300);
        } else {
            $(".course-card").hide();
            $('.course-card[data-category="' + filterValue + '"]').show(300);
        }
    });
    
    // Simple image lightbox
    $(".gallery-image").click(function() {
        const imgSrc = $(this).attr("src");
        
        // Create lightbox elements if they don't exist
        if ($("#lightbox").length === 0) {
            $("body").append('<div id="lightbox"><div id="lightbox-content"><img src="" id="lightbox-img"><span id="lightbox-close">&times;</span></div></div>');
            
            // Style the lightbox
            $("#lightbox").css({
                "position": "fixed",
                "top": 0,
                "left": 0,
                "width": "100%",
                "height": "100%",
                "background-color": "rgba(0,0,0,0.8)",
                "z-index": 1000,
                "display": "flex",
                "justify-content": "center",
                "align-items": "center"
            });
            
            $("#lightbox-content").css({
                "position": "relative",
                "max-width": "90%",
                "max-height": "90%"
            });
            
            $("#lightbox-img").css({
                "max-width": "100%",
                "max-height": "90vh"
            });
            
            $("#lightbox-close").css({
                "position": "absolute",
                "top": "-40px",
                "right": "-40px",
                "font-size": "30px",
                "color": "white",
                "cursor": "pointer"
            });
            
            // Close lightbox on clicking close button or outside the image
            $("#lightbox-close, #lightbox").click(function() {
                $("#lightbox").fadeOut(300);
            });
            
            // Prevent closing when clicking on the image
            $("#lightbox-content").click(function(e) {
                e.stopPropagation();
            });
        }
        
        // Set the image source and show the lightbox
        $("#lightbox-img").attr("src", imgSrc);
        $("#lightbox").fadeIn(300);
    });
    
    // Create animated progress bars
    $(".progress-bar").each(function() {
        const percentage = $(this).attr("data-percentage");
        $(this).animate({
            width: percentage + "%"
        }, 1000);
        $(this).next(".percentage-text").text(percentage + "%");
    });
    
    // Countdown timer for limited time offers
    function startCountdown() {
        // Set the date we're counting down to (24 hours from now)
        const countDownDate = new Date();
        countDownDate.setHours(countDownDate.getHours() + 24);
        
        // Update the countdown every 1 second
        const countdownInterval = setInterval(function() {
            // Get current date and time
            const now = new Date().getTime();
            
            // Find the time remaining
            const distance = countDownDate - now;
            
            // Calculate hours, minutes and seconds
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the countdown
            $("#countdown-timer").html(hours + "h " + minutes + "m " + seconds + "s");
            
            // If the countdown is finished
            if (distance < 0) {
                clearInterval(countdownInterval);
                $("#countdown-timer").html("EXPIRED");
                $("#special-offer").fadeOut(1000);
            }
        }, 1000);
    }
    
    // Start countdown if element exists
    if ($("#countdown-timer").length > 0) {
        startCountdown();
    }
    
    // Animated back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#back-to-top").fadeIn();
        } else {
            $("#back-to-top").fadeOut();
        }
    });
    
    $("#back-to-top").click(function() {
        $("html, body").animate({scrollTop: 0}, 800);
        return false;
    });
    
    // Add testimonial slider functionality
    let currentSlide = 0;
    const testimonials = $(".testimonial-item");
    const totalSlides = testimonials.length;
    
    if (totalSlides > 0) {
        // Hide all testimonials except the first one
        testimonials.hide();
        testimonials.eq(0).show();
        
        // Set up next and previous functionality
        $("#next-testimonial").click(function() {
            testimonials.eq(currentSlide).fadeOut(300, function() {
                currentSlide = (currentSlide + 1) % totalSlides;
                testimonials.eq(currentSlide).fadeIn(300);
            });
        });
        
        $("#prev-testimonial").click(function() {
            testimonials.eq(currentSlide).fadeOut(300, function() {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                testimonials.eq(currentSlide).fadeIn(300);
            });
        });
    }
});