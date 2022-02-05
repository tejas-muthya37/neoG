const btnIncrement = document.querySelectorAll(".btn-increment");
const btnDecrement = document.querySelectorAll(".btn-decrement");
const quantitySpan = document.querySelectorAll(".quantity-group span");

for (const [index, btn] of btnIncrement.entries()) {
  btn.addEventListener("click", function () {
    var presentQuantity = parseInt(quantitySpan[index].innerText);
    quantitySpan[index].innerText = presentQuantity + 1;
  });
}

for (const [index, btn] of btnDecrement.entries()) {
  btn.addEventListener("click", function () {
    var presentQuantity = parseInt(quantitySpan[index].innerText);
    if (presentQuantity > 0)
      quantitySpan[index].innerText = presentQuantity - 1;
  });
}
