const toggleButton = document.querySelector(".badge-toggle > button");
const toggleBadge = document.querySelector(".badge-toggle span");
toggleButton.addEventListener("click", function () {
  toggleBadge.classList.toggle("hidden");
});
