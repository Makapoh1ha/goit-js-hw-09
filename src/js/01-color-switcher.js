const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = 0;
const INTERVAL_DURATION = 1000;
let timerActive = false;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function updateBodyBgColor (){
    body.style.backgroundColor =  getRandomHexColor();
}  

startBtn.addEventListener('click', () => { 
  if (timerActive) {
    return;
  }
  onStartBtnClick();
});

function onStartBtnClick(){
      timerId = setInterval(updateBodyBgColor, INTERVAL_DURATION);
  timerActive = true;
};

stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick(){
    
  clearInterval(timerId);
  timerActive = false;
  console.log(`Interval has stopped!`);
  
};


