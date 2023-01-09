var repeat = function (activeClass) {
  var slides = document.querySelectorAll(".slide");
  var btns = document.querySelectorAll(".btn");
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active"); //prevents active from stacking if you click
      });
      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length === i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();

export default repeat;
