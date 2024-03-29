// Accessing all the HTML object for manipulation. 
let emailLabel = document.getElementById("email-label");
let emailInput = document.getElementById("email-input");
let emailError = document.getElementById("email-error");

let passwordLabel = document.getElementById("password-label");
let passwordInput = document.getElementById("password-input");
let passwordError = document.getElementById("password-error");

let btn = document.getElementById("submit-button");

//Event listeners for two input and a button.
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);
btn.addEventListener("click", confirmation);

// Checking if email is valid or not?
function validateEmail() {
    const emailPattern = /[@.].*[@.]/;
    const matches = emailInput.value.match(emailPattern);
    if (emailInput.value.length <= 3 || matches === null) {
        emailError.innerHTML = "Please enter a valid email"; 
        emailInput.style.borderColor = "#f00c0c"; 
        emailError.style.color= "#f00c0c";
        return false;
    } else {
        emailError.innerHTML = "";
        emailInput.style.borderColor = "#39eb02";
        return true;
    }
}

// Checking if password is valid or not?
function validatePassword(){
    if(passwordInput.value.length > 8){
        passwordError.innerHTML = "All good to go!";
        passwordError.style.color = "#06ad03";
        passwordInput.style.borderColor = "#39eb02"; 
        return true;
    } else {
        passwordError.innerHTML = "Password should be more than 8 characters!";
        passwordError.style.color= "#f00c0c";
        passwordInput.style.borderColor = "#f00c0c";
        return false;
    }
}

// Confirmation of clicking the Submit button for Submission
function confirmation(){
    if(validatePassword() && validateEmail()){
        event.preventDefault(); //prevent from auto refresh
        
        if(confirm("Are you sure to proceed ?")){
            alert("Successful Signup!");
            window.location.reload();// 
        } else {
            alert("Signup Cancelled");
            window.location.reload();
        }
    }
}

