//EXAMPLE 1
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
//EXAMPLE 2
function setButtonText() {
    //change text content of the empty div element I placed to output the message
    document.getElementById("button-click-text").textContent = "You clicked the button!";
}
//EXAMPLE 3
function displayDateTime() {
    let now = new Date();
    //formatting the date so that it's in M/D/Y format by getting certain parts of the date
    let date = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
    //outputting by replacing HTML text
    document.getElementById("date-time-text").textContent = "Date: " + date + "\n Time: " + now.getHours() + ':' + now.getMinutes();
}
//EXAMPLE 4
function findSum() {
    //declaring variables
    let Number1, Number2, sum;
    //fetching inputs through html input elements
    Number1 = document.getElementById("Number-1").valueAsNumber;
    Number2 = document.getElementById("Number-2").valueAsNumber;
    //calculating sum
    sum = 0 + Number1 + Number2
    //output
    document.getElementById("sum-display").textContent = "The sum is " + sum + '!';
}
//EXAMPLE 5
function findLength() {
    //fetching input
    let input = document.getElementById("length-input").value;
    //calculating and storing length
    let length = input.length;
    //output
    document.getElementById("length-display").textContent = "\"" + input + "\" has " + length + " characters";
}
//EXAMPLE 6
function updatePassword() {
    //fetching and storing the status of the checkbox so JS knows what to do
    let showPassword = document.getElementById("show-password").checked;
    //storing a reference to the element for simplicity
    let passwordInput = document.getElementById("password-input");
    //if statement to determine whether JS hides or shows the password
    if (showPassword) {
        //changing the attribute accordingly to what the user/checkbox wants
        passwordInput.type = 'text';
    }
    else {
        passwordInput.type = 'password';
    }
}
//EXAMPLE 7
function changeText() {
    //creating random numbers for each of the values in an rgb color
    let red = Math.floor(Math.random() * (256));
    let blue = Math.floor(Math.random() * (256));
    let green = Math.floor(Math.random() * (256));
    //creating a random number for the font size
    let fontSize = Math.floor(Math.random() * 300) + 1;
    //storing a reference for the changing text for readability
    let text = document.getElementById("changing-text");
    //changing the style by using these random variables
    text.style.color = `rgb(${red} ${blue} ${green})`;
    text.style.fontSize = `${fontSize}px`;
}
//EXAMPLE 8
//creating a global variable so that we make sure the starting value on website load is true
let display = true
function toggleDisplay() {
    //changes the value of the boolean variable to its opposite
    display = !display;
    //displays/hides according to the value of the display variable
    if (display) {
        //changing the hidden attribute accordingly to the display says.
        document.getElementById("display-area").hidden = false;
    }
    else {
        document.getElementById("display-area").hidden = true;
    }
}
//what the JS does when the website loads
window.onload = function () {
    //this function automatically triggers without any user input or contribution since it doesn't need any
    setGreeting();
}
