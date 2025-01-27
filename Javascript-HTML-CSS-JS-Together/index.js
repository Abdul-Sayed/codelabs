// Exercise 1: Create a Welcome Alert Build a webpage that shows an alert with the message "Welcome to My Website!" when the page is loaded.
// alert('Welcome to My Website!');

// Exercise 2: Change Text Content Add a paragraph with some placeholder text. Create a button that, when clicked, changes the paragraph text to "You clicked the button!"
let paragraph = document.querySelector("#text");
document.querySelector('#change-btn').addEventListener('click', ()=>{
    paragraph.textContent = "You clicked the button!"
})

// Exercise 3: Dynamic Image Switcher Create two buttons labeled "Image 1" and "Image 2." When either button is clicked, display a different image below the buttons.
const carImg = document.querySelector('#car-img');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', ()=>{
    console.log('clicked btn 1');
    carImg.src="./assets/lambo.jpg"
})
btn2.addEventListener('click', ()=>{
    console.log('clicked btn 2');
    carImg.src="./assets/ferrari.jpg"
})


//Exercise 4: Simple Input Logger Add an input box and a button. When the button is clicked, display the text the user entered in a <p> tag below the input box.
const input = document.querySelector('#input');
const formBtn = document.querySelector('#form-btn');
const formText = document.querySelector('#form-text');

formBtn.addEventListener('click', ()=> {
    formText.textContent = input.value;
})

// Exercise 5: Create a Countdown Timer Create a countdown timer that starts at 10 seconds and counts down to zero. Allow the user to start and stop the timer. Display the timer value on the page.
let timer = 10;
let timerBtn = document.querySelector('#start-timer-btn');
let stopBtn = document.querySelector('#stop-timer-btn');
let countdownText = document.querySelector('#timer');

timerBtn.addEventListener('click', ()=> {
    countdownText.textContent = timer;
    const interval = setInterval(() => {
        if (timer === 1) {
            clearInterval(interval)
        }
        timer--;
        countdownText.textContent = timer;
    }, 1000);
})

stopBtn.addEventListener('click', ()=>{
    timer = 1;
})


// Exercise 6: Create a Simple Calculator Build a simple calculator that can add, subtract, multiply, and divide two numbers. Display the result on the page.
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let addBtn = document.querySelector('#add');
let subtractBtn = document.querySelector('#subtract');
let multiplyBtn = document.querySelector('#multiply');
let divideBtn = document.querySelector('#divide');
let resultText = document.querySelector("#result");

addBtn.addEventListener('click', ()=>{
    resultText.textContent = parseInt(num1.value) + parseInt(num2.value)
})
subtractBtn.addEventListener('click', ()=>{
    resultText.textContent = parseInt(num1.value) - parseInt(num2.value)
})
multiplyBtn.addEventListener('click', ()=>{
    resultText.textContent = parseInt(num1.value) * parseInt(num2.value)
})
divideBtn.addEventListener('click', ()=>{
    resultText.textContent = parseInt(num1.value) / parseInt(num2.value)
})
