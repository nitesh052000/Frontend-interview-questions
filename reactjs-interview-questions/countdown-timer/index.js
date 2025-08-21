(function () {
  let hour = document.querySelector(".hour");
  let min = document.querySelector(".min");
  let sec = document.querySelector(".sec");

  console.log("hour", hour);

  let startBtn = document.querySelector(".start");
  console.log("start btn", startBtn);
  let stopBtn = document.querySelector(".stop");
  let resetBtn = document.querySelector(".reset");

  let countDownTimer = null;

  startBtn.addEventListener("click", function () {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;

    console.log("value", hour.value);

    function startInterval() {
      startBtn.style.display = "none";
      stopBtn.style.display = "initial";

      countDownTimer = setInterval(function () {
        timer();
      }, 1000);
    }
    l;
    startInterval();
  });
  //   start timemr Button - end

  function timer() {
    if (sec.value > 60) {
      min.value++;
      sec.value = parseInt(sec.value) - 59;
    }

    if (min.value > 60) {
      hour.value++;
      min.value = parseInt(min, value) - 60;
    }

    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      hour.value = "";
      min.value = "";
      sec.value = "";
    } else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value != 0 && sec.value == 0) {
      sec.value = 59;
      min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
    } else if (hour.value != 0 && min.value == 0) {
      min.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
    return;
  }

  // stop interval logi -start
  function stopInterval(state) {
    startBtn.innerHTML = state === "pause" ? "Continue" : "Start";

    stopBtn.style.display = "none";
    startBtn.style.display = "initial";
    clearInterval(countDownTimer);
  }

  stopBtn.addEventListener("click", function () {
    stopInterval("pause");
  });

  resetBtn.addEventListener("click", function () {
    hour.value = "";
    min.value = "";
    sec.value = "";

    stopInterval();
  });
})();
