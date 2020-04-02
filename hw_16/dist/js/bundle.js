/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let tabs = __webpack_require__(/*! ./parts/tabs.js */ "./js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./js/parts/timer.js"),
        modal = __webpack_require__(/*! ./parts/modal.js */ "./js/parts/modal.js"),
        form  = __webpack_require__(/*! ./parts/form */ "./js/parts/form.js"),
        slider = __webpack_require__(/*! ./parts/slider */ "./js/parts/slider.js"),
        calc = __webpack_require__(/*! ./parts/calc */ "./js/parts/calc.js");


    tabs();
    timer();
    modal();
    form();
    slider();
    calc();

})

/***/ }),

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

let calc = function(){
    //calculator 

  let persons = document.querySelectorAll('.counter-block-input')[0],
  restDays = document.querySelectorAll('.counter-block-input')[1],
  place = document.getElementById('select'),
  totalValue = document.getElementById('total'),
  personsSum  = 0,
  daySum = 0,
  total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function(){
    personsSum = +this.value;
    total = (daySum + personsSum) * 4000;

    if(restDays.value == '' || this.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }


  });
  restDays.addEventListener('change', function(){
    daySum = +this.value;
    total = (daySum + personsSum) * 4000;

    if(persons.value == '' || this.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }


  });

  place.addEventListener('change',function(){

    console.log(this.options);

    if(restDays.value == '' || persons.value ==''){
      totalValue.innerHTML = 0;
    }else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });

}

module.exports = calc;

/***/ }),

/***/ "./js/parts/form.js":
/*!**************************!*\
  !*** ./js/parts/form.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

let form = function(){

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
      
}

module.exports = form;

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

let modal = function(){
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
}

module.exports = modal;

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

let slider =function(){
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

}
module.exports = slider;

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

let tabs = function(){
      
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
}
 module.exports = tabs;

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map