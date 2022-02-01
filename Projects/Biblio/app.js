const slideFunction = function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-items");
  const items = document.querySelectorAll(".nav-items li");

  burger.addEventListener("click", function () {
    nav.classList.toggle("navSlide");

    items.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navLinkFade 0.3s ease forwards ${index / 7}s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

slideFunction();
