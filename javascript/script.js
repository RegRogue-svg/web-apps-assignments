function setGreeting() {
    let now = new Date(); //built-in class in Javascript
    let greeting;
    console.log("Date: " + now);
    console.log("Hour: " + now.getHours())

    //good morning if <12
    //good afternoon if <18
    //good evening if otherwise
    if (now.getHours() < 12) {
        greeting = "Good Morning!";
    }
    else if (now.getHours < 18) {
        greeting = "Good Afternoon!";
    }
    else {
        greeting = "Good night!";
    }
    console.log(greeting);
    document.getElementById("greeting-output").textContent = greeting;
}
function setButtonText() {
    document.getElementById("button-click-text").textContent = "You clicked the button!";
}
function displayDateTime() {
    let now = new Date();
    let date = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
    document.getElementById("date-time-text").textContent = "Date: " + date + "\n Time: " + now.getHours() + ':' + now.getMinutes();
}
function findSum() {
    let Number1, Number2, sum;
    Number1 = document.getElementById("Number-1").valueAsNumber;
    Number2 = document.getElementById("Number-2").valueAsNumber;
    sum = 0 + Number1 + Number2
    document.getElementById("sum-display").textContent = "The sum is " + sum + '!';
}
function findLength() {
    let input = document.getElementById("length-input").value;
    let length = input.length;
    document.getElementById("length-display").textContent = "\""+input+"\" has "+length+" characters";
}
function updatePassword() {
    let showPassword = document.getElementById("show-password").checked;
    let passwordInput = document.getElementById("password-input");
    if (showPassword) {
        passwordInput.type = 'text';
    }
    else {
        passwordInput.type = 'password';
    }
}
function changeText() {
    let red = Math.floor(Math.random() * (256));
    let blue = Math.floor(Math.random() * (256));
    let green = Math.floor(Math.random() * (256));
    let fontSize = Math.floor(Math.random() * 300)+1;
    let text = document.getElementById("changing-text");
    text.style.color = `rgb(${red} ${blue} ${green})`;
    text.style.fontSize = `${fontSize}px`;
}
function toggleDisplay() {
    
}
window.onload = function () {
    setGreeting();
    updatePassword();
}
