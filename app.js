const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const userError = document.querySelector(".user-error")


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
}
    
);


function validateInput(input) {
    const userNameValue = userName.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const reg = /[^a-zA-Z0-9]/;


    if (userNameValue === "") {
        setError(userName, "User name can't be empty");
    } else if (userNameValue.length < 3) {
        setError(userName, "User name can't be less than 3");
    } else if (userNameValue.length > 15) {
        setError(userName, "User name can't be more than 15");
     } else if( reg.test(userNameValue)) {
        setError(userNameValue, "User name only can contain numbers & alphabets ")
     }
     else {
        setSuccess(userName);
    }
}

function setError(inputs, msg) {

    userError.className = "error opacity";
const formControl = inputs.parentElement;

const para =  formControl.querySelector("p");
console.log(para)
para.className="error opacity";
para.innerText = msg;
}
function setSuccess(input) {
    userError.className = "error";
}

function isEmailValid(email){
    
const regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

return regex.test(email);
}