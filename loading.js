// Loading screen functionality
const loadingTextElement = document.getElementById('loading-text');
const funnyTextElement = document.getElementById('funny-text');
const progressBarElement = document.getElementById('progress-bar');
const progressTextElement = document.getElementById('progress-text');

// Funny loading texts
const funnyTexts = [
  'Blowing up balloons...',
  'Wrapping presents...',
  'Baking the cake...',
  'Hiding the surprise...',
  'Gathering the confetti...',
  'Tuning the birthday song...',
  'Lighting the candles...',
  'Sending out invitations...',
  'Preparing the dance floor...',
  'Almost ready to party!'
];

let dots = '';
let progress = 0;
let currentFunnyText = 0;

// Animate the dots
const dotInterval = setInterval(() => {
  dots = dots.length < 3 ? dots + '.' : '';
  loadingTextElement.textContent = `Preparing your birthday surprise${dots}`;
}, 500);

// Progress bar animation
const progressInterval = setInterval(() => {
  progress += Math.random() * 5;
  if (progress > 100) progress = 100;
  
  progressBarElement.style.width = `${progress}%`;
  progressTextElement.textContent = `${Math.floor(progress)}% complete`;
  
  if (progress >= 100) {
    clearInterval(progressInterval);
  }
}, 200);

// Change funny text
const textInterval = setInterval(() => {
  currentFunnyText = (currentFunnyText + 1) % funnyTexts.length;
  funnyTextElement.textContent = funnyTexts[currentFunnyText];
}, 1500);

// Clean up intervals when loading is complete
function cleanupLoadingIntervals() {
  clearInterval(dotInterval);
  clearInterval(progressInterval);
  clearInterval(textInterval);
}

// Add event listener to clean up when loading is done
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(cleanupLoadingIntervals, 3000);
});