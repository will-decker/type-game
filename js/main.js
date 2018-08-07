window.addEventListener('load', init);

// Globals
let time = 5;
let score = 0;
let isPlaying;

// DOM Elements

const wordInput = document.getElementById('word-input');
const currentWord = document.getElementById('current-word');
const scoreDisplay = document.getElementById('#score');
const timeDisplay = document.getElementById('time');
const message = document.getElementById('message');
const seconds = document.getElementById('seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// Initialize Game
function init() {
  // Load word from array
  showWord(words);
  //  Call countdown every second
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

// Pick and show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown
function countdown() {
  // Check if time has run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game over
    isPlaying = false;
  }
  // Display Time
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!';
  }
}
