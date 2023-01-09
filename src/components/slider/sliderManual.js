var manualNav = function (manual) {
  var slides = document.querySelectorAll(".slide");
  var btns = document.querySelectorAll(".btn");
  slides.forEach((slide) => {
    slide.classList.remove("active");
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

export default manualNav;
