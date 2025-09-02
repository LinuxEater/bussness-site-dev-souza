document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".service-card");

  window.addEventListener("scroll", checkBoxes);

  checkBoxes();

  function checkBoxes() {
    const windowheight = (window.innerHeight / 2) * 5;
    boxes.forEach((box) => {
      const triggerPoint = box.getBoundingClientRect().top;
      if (triggerPoint < windowheight) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".about-exp");

  window.addEventListener("scroll", checkBoxes);

  checkBoxes();

  function checkBoxes() {
    const windowheight = (window.innerHeight / 2) * 5;
    boxes.forEach((box) => {
      const triggerPoint = box.getBoundingClientRect().top;
      if (triggerPoint < windowheight) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".about-image");

  window.addEventListener("scroll", checkBoxes);

  checkBoxes();

  function checkBoxes() {
    const windowheight = (window.innerHeight / 2) * 5;
    boxes.forEach((box) => {
      const triggerPoint = box.getBoundingClientRect().top;
      if (triggerPoint < windowheight) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".pricing-card");

  window.addEventListener("scroll", checkBoxes);

  checkBoxes();

  function checkBoxes() {
    const windowheight = (window.innerHeight / 2) * 10;
    boxes.forEach((box) => {
      const triggerPoint = box.getBoundingClientRect().top;
      if (triggerPoint < windowheight) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});