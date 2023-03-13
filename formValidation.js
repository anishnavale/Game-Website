// Pulling values from the Form

const Name = document.getElementById("name");
const Age = document.getElementById("age").value;
const UName = document.getElementById("uname");
const eMail = document.getElementById("email");
var pass0 = document.getElementById("p0");
var pass1 = document.getElementById("p1");

// Regular expressions

let lettersOnly = /^[A-Z a-z][^0-9]{0,20}$/;
let numbersOnly = /^[0-9]{0,3}$/;
let emailOnly = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
let unameOnly = /^[A-a-z0-9]{4,13}$/i; // Case-sensitive alphanumeric with min. length 4 and max. length 13
var passStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,20}$/; // Strong password with at least one small letter, capital letter, and special character.

// Validation Variable

var validation = Number(validation);

// Validating the Form

validation = 0;

function validate() {
    // Name validation
    if (!Name.value.match(lettersOnly)) {
        document.getElementById("nameError").innerHTML = "Please enter a valid Name.";
        validation = 0;
    } else {
        document.getElementById("nameError").innerHTML = "✓";
    }

    // Age validation
    if (!Age.match(numbersOnly)) {
        document.getElementById("ageError").innerHTML = "Please enter a numeric and valid age value.";
        validation = 0;
    }
    else if(Age.length==0){
      document.getElementById("ageError").innerHTML = "Please enter a numeric and valid age value.";
      validation = 0;
    }
    else {
        document.getElementById("ageError").innerHTML = "✓";
    }

    // Username validation
    if (!UName.value.match(unameOnly)) {
        document.getElementById("unameError").innerHTML = "Please enter a valid alphanumeric username of minimum and maximum lengths 4 and 13 respectively.";
        validation = 0;
    } else {
        document.getElementById("unameError").innerHTML = "✓";
    }

    // Email validation
    if (!eMail.value.match(emailOnly)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        validation = 0;
    } else {
        document.getElementById("emailError").innerHTML = "✓";
    }

    // Strong Password validation
    var passStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,20}$/;
    if (pass0.value.match(passStrong)) {
        document.getElementById("passError").innerHTML = "✓";
        strong = 1;
    } else {
        document.getElementById("passError").innerHTML = "Please enter a strong pasword.";
        strong = 0;
        validation = 0;
    }
    // Password Match validation
    if (strong == 0 || pass0.value != pass1.value) {
        document.getElementById("matchError").innerHTML = "X The passwords do not match.";
        validation = 0;
    } else {
        document.getElementById("matchError").innerHTML = "✓ The passwords match.";
        validation = 1;
    }

    if (validation == 0) {
      alert("Please enter all the details correctly!");
    } else {
      alert("Registration successful!");
      window.location.replace("index23.html");
    }
}
