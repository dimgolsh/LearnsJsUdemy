window.addEventListener("DOMContentLoaded", function() {
  "use strict";
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  info.addEventListener("click", function(e) {
    let target = event.target;
    console.log(target);
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

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

  //Modal

  let more = document.querySelector(".more"),
    overlay = document.querySelector(".overlay"),
    descriptionBtn = document.querySelectorAll(".description-btn"),
    close = document.querySelector(".popup-close");

  function showModal() {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  }

  more.addEventListener("click", showModal.bind(more));

  for (let i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener(
      "click",
      showModal.bind(descriptionBtn[i])
    );
  }

  close.addEventListener("click", function() {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });

  let message = {
    loading: "Загрзука...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так.."
  };

  let form = document.querySelector(".main-form"),
    input = form.querySelectorAll("input"),
    contactForm = document.querySelector("#form"),
    statusMessage = document.createElement("div");
  statusMessage.classList.add("status");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    this.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");

    let formData = new FormData(contactForm);

    let obj = {};

    formData.forEach(function(value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener("readystatechange", function() {
      console.log(request.readyState);
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < input.length; i++) {
      input[i].value = "";
    }
  });
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    form.appendChild(statusMessage);
    let formData = new FormData(form);

    function postData(formData) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.open("POST", "server.php");
        // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.setRequestHeader(
          "Content-type",
          "application/json; charset=utf-8"
        );

        let obj = {};

        formData.forEach(function(value, key) {
          obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener("readystatechange", function() {
          console.log(request.readyState);
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4 && request.status == 200) {
            resolve();
          } else {
            reject();
          }
        });
      });
    }

    postData(formData)
      .then(() => (statusMessage.innerHTML = message.loading))
      .then(() => (statusMessage.innerHTML = message.success))
      .catch(() => (statusMessage.innerHTML = message.failure))
      .then(clearInput());

    function clearInput() {
      for (let i = 0; i < input.length; i++) {
        input[i].value = "";
      }
    }
  });

  //slider

  let slideIndex = 1,
    slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot");

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => {
      item.style.display = "none";
    });
    dots.forEach(item => item.classList.remove("dot-active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  prev.addEventListener("click", function() {
    plusSlides(-1);
  });
  next.addEventListener("click", function() {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click',function(event){

    for(let i =0; i < dots.length +1; i++){
      if(event.target.classList.contains('dot') && event.target == dots[i-1]){
        currentSlide(i);
      }
    }

  });
});

class Timer {}
