var input = document.getElementById("enter-chip");
var chips = document.getElementsByClassName("chip");
var chipContainer = document.getElementsByClassName("chip-container");

function remove(e) {
  var element = e.target.parentElement.parentElement;
  element.remove();
}

input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    let noOfChips = chips.length;
    if (chips.length === 0) {
      input.insertAdjacentHTML(
        "beforebegin",
        `<div class="chip">
                  <span>${input.value}</span>
                  <button onclick="remove(event)"><i class="fas fa-times-circle"></i></button>
                </div>`
      );
    } else {
      chips[noOfChips - 1].insertAdjacentHTML(
        "afterend",
        `<div class="chip">
              <span>${input.value}</span>
              <button onclick="remove(event)"><i class="fas fa-times-circle"></i></button>
            </div>`
      );
    }
    input.value = "";
  }
});
