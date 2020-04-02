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