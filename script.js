const signupForm = document.getElementById("signup-form")
const loginForm = document.getElementById("login-form")
const logoutSection = document.getElementById("logout-section")

function showSignupForm() {
    signupForm.style.display = "block"
    loginForm.style.display = "none"
    logoutSection.style.display = "none"
}

function showLoginForm() {
    signupForm.style.display = "none"
    loginForm.style.display = "block"
    logoutSection.style.display = "none"
}

function signup() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    if (!username || !password) {
        alert("Please enter in both username and password.");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose a different one.")
    } else {
        localStorage.setItem(username, password);
        alert("Signup successful! Please login.");
        showLoginForm();
    }
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (!username || !password) {
        alert("Please enter in both username and password.");
        return;
    }

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        localStorage.setItem("loggedInUser", username);
        alert("Login successful");
        checkLoginStatus();
    } else {
        alert("Invalid username or password.");
    }
}

function checkLoginStatus() {
    const username = localStorage.getItem("loggedInUser");

    if (username) {
        document.getElementById("username-display").textContent = username;
        signupForm.style.display = "none"
        loginForm.style.display = "none"
        logoutSection.style.display = "block"
    } else {
        showLoginForm();
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!")
    checkLoginStatus();
}


window.onload = checkLoginStatus;