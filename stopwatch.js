let sound = new Audio("./sound.mp3");

let btnStart = document.getElementById("btnStart");
let btnStop = document.getElementById("btnStop");
let btnReset = document.getElementById("btnReset");

let btnSave = document.getElementById("btnSave");
let lblSave = document.getElementById("lblSave");

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let isRunning = false;
let timeoutId;
btnStart.addEventListener("click", () => {
  isRunning = true;
  stopWatch();
  btnStart.disabled = true;
});

btnStop.addEventListener("click", () => {
  isRunning = false;
  sound.pause();
  btnStart.disabled = false;
});

btnReset.addEventListener("click", () => {
  sound.pause();
  clearTimeout(timeoutId);
  isRunning = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  btnStart.disabled = false;
});

btnSave.addEventListener("click", () => {
  let hr = document.getElementById("hr").innerHTML;
  let min = document.getElementById("min").innerHTML;
  let sec = document.getElementById("sec").innerHTML;

  saveString = hr + ":" + min + ":" + sec;
  lblSave.innerHTML += saveString + "</br>";
  localStorage.setItem("time", saveString);
});

function stopWatch() {
  if (isRunning) {
    count++;
    console.log(count);
    if (count == 1) {
      second++;
      count = 0;
      sound.play();
    }

    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hrString = hour;
    let minString = minute;
    let secString = second;

    if (hour < 10) {
      hrString = "0" + hrString;
    }
    if (minute < 10) {
      minString = "0" + minString;
    }
    if (second < 10) {
      secString = "0" + secString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;

    timeoutId = setTimeout(stopWatch, 1000);
  }
}

/* 
      let counter = 0;
      let timeoutId;
      let isRunning = false;
      let count = () => {
        document.getElementById("demo").innerHTML = counter;
        counter++;
        timeoutId = setTimeout(count, 1000);
        //console.log(timeout);
      };
      let startCount = () => {
        if (!isRunning) {
          isRunning = true;
          count();
        }
      };
      document.getElementById("start").addEventListener("click", startCount);
      document.getElementById("pause").addEventListener("click", () => {
        if (isRunning) {
          isRunning = false;
          clearTimeout(timeoutId);
        }
      });

      document.getElementById("restart").addEventListener("click", () => {
        clearTimeout(timeoutId);
        counter = 0;
        isRunning = false;
        startCount();
      });
     */
