var time, timer, showTime, startBtn, resetBtn, pauseDate;
var bool = false;
var pauseTime = 0;

init();
function init() {
  timer = document.querySelector(".timer");
  showTime = document.querySelector(".showTime");
  startBtn = document.querySelector(".startBtn");
  // startBtn = document.getElementById("startBtn");
  resetBtn = document.querySelector(".resetBtn");

  timer.addEventListener("click", clickHandler);
  startBtn.addEventListener("click", clickHandler);
  resetBtn.addEventListener("click", clickHandler);

  setInterval(animation, 1);
}

function animation() {
  if (!bool) return;
  var times = new Date().getTime() - time - pauseTime;
  var minutes = Math.floor(times / 60000); //毫秒转化为分钟
  var seconds = Math.floor((times - minutes * 60000) / 1000);
  var ms = Math.floor((times - minutes * 60000 - seconds * 1000) / 10);
  showTime.innerHTML =
    (minutes < 10 ? "0" + minutes : minutes) +
    " 分 " +
    (seconds < 10 ? "0" + seconds : seconds) +
    " 秒 " +
    (ms < 10 ? "0" + ms : ms) +
    " 毫秒";
}

function clickHandler(e) {
  e = e || window.event;
  if (this === startBtn || this === timer) {
    bool = !bool;
    if (bool) {
      startBtn.innerHTML = "暂停计时";
      pauseTime += !pauseDate ? 0 : new Date().getTime() - pauseDate;
      if (time) return;
      time = new Date().getTime();
      return;
    }

    startBtn.innerHTML = "继续计时";
    pauseDate = new Date().getTime();
    return;
  }
  startBtn.innerHTML = "开始计时";
  pauseTime = 0;
  pauseDate = null;
  bool = false;
  time = 0;
  showTime.innerHTML = "00 分 00 秒 00 毫秒";
}
