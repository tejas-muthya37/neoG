const dismiss = document.querySelector(".dismiss");
const cardToDismiss = document.querySelector(".dismiss-card");

dismiss.addEventListener("click", function () {
  cardToDismiss.classList.add("dismissed");
});
