const SETTING_TIME = 9;
let words = [];
// let isReady = false;
let time;
let isloading;
let score = 0;
let timeInterval;
let isPlaying;

time = 3;

const url = "https://random-word-api.herokuapp.com/word?number=100";
//function
const getWords = () => {
  axios
    .get(url)
    .then((res) => {
      words = res.data.filter((word) => {
        return word.length < 8;
      });
      // button.innerText = "시작"
      // button.classList.remove('loading')
      // isReady = true;
    })
    .catch((err) => console.log(err));
};

const init = () => {
  time = SETTING_TIME;
  getWords();
};

const countDown = () => {
  if (time > 0) {
    time--;
  } else {
    clearInterval(timeInterval);
    isPlaying = false;
  }
  timeDisplay.innerText = time;
};

const run = () => {
  // if (isReady === false) {
  //     return
  // }
  timeInterval = setInterval(countDown, 1000);
  wordInput.value = "";
  score = 0;
  isPlaying = true;
};

const wordDisplay = document.querySelector(".word-display");
const wordInput = document.querySelector(".word-input");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

const checkMatch = () => {
  if (!isPlaying) return;
  if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
    score++;
    time = SETTING_TIME;
    wordInput.value = "";
    const randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerText = words[randomIndex];
  }
  scoreDisplay.innerText = score;
};

//event handle
wordInput.addEventListener("input", checkMatch);

//getting ready
init();
