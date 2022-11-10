const SETTING_TIME = 5;
let words = ["Banana", "Apple", "Monkey", "Car", "korea", "javascript", "document"];
let time;
let isloading;
let score = 0;
let timeInterval;


time = 3;


//function
const countDown = () => {
    if(time > 0) {
        time--
        clearInterval(timeInterval);
    }
    timeDisplay.innerText = time
}

const run = () => {
    timeInterval = setInterval(countDown, 1000);
}

const wordDisplay = document.querySelector(".word-display");
const wordInput = document.querySelector(".word-input");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");


const checkMatch = () => {
    if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
        score++
        wordInput.value = ""
        const randomIndex = Math.floor(Math.random() * words.length)
        wordDisplay.innerText = words[randomIndex]
    }
    scoreDisplay.innerText = score;
}

//event handle
wordInput.addEventListener("input", checkMatch)
