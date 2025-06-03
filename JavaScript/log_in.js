document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "Johnson@example.com" && password === "password") {
            window.location.href = "profileParent.html";
        } else {
            alert("Invalid email or password.");
        }
    });
});
