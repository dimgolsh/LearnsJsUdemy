let timer = function(){
    let deadline = "2020-03-23";

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));
    // hours =  Math.floor((t/1000/60/60) % 24),
    //days = Math.floor((t(1000*60*60*24)))
    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timerInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      if (t.total > 0) {
        hours.textContent = t.hours < 10 ? "0" + t.hours : t.hours;
        minutes.textContent = t.minutes < 10 ? "0" + t.minutes : t.minutes;
        seconds.textContent = t.seconds < 10 ? "0" + t.seconds : t.seconds;
      }

      if (t.total <= 0) {
        clearInterval(timerInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
  }

  setClock("timer", deadline);
}

module.exports = timer;