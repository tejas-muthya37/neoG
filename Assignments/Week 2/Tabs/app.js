let tabsRight = document.getElementsByClassName("scroll-right");
let tabsLeft = document.getElementsByClassName("scroll-left");

for (const tab of tabsRight) {
  tab.addEventListener("click", function (event) {
    let containerRight = event.target.parentNode.parentNode;
    containerRight.scrollBy(200, 0);
    event.preventDefault();
  });
}

for (const tab of tabsLeft) {
  tab.addEventListener("click", function (event) {
    let containerLeft = event.target.parentNode.parentNode;
    containerLeft.scrollBy(-200, 0);
    event.preventDefault();
  });
}
