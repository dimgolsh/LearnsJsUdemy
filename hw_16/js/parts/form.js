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