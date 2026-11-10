const form = document.getElementById("contactForm");

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    showError("nameError", "");
    showError("emailError", "");
    showError("phoneError", "");
    showError("messageError", "");
    document.getElementById("successMsg").textContent = "";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    let valid = true;

    if (name === "") {
        showError("nameError", "Name is required.");
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        showError("emailError", "Email is required.");
        valid = false;
    } else if (!emailPattern.test(email)) {
        showError("emailError", "Please enter a valid email address.");
        valid = false;
    }

    const phonePattern = /^\d+$/;
    if (phone === "") {
        showError("phoneError", "Phone number is required.");
        valid = false;
    } else if (!phonePattern.test(phone)) {
        showError("phoneError", "Phone number must contain digits only.");
        valid = false;
    }

    if (message === "") {
        showError("messageError", "Message is required.");
        valid = false;
    }

    if (valid) {
        document.getElementById("successMsg").textContent =
            "Thank you, " + name + "! Your message has been sent.";
        form.reset();
    }
});