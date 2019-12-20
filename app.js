const prevbtn = document.querySelector(".prevbtn");
const nextbtn = document.querySelector(".nextbtn");
const container = document.querySelector(".images");
prevbtn.addEventListener("click", goBack);
nextbtn.addEventListener("click", goNext);
let counter = 0;

function goNext() {
  if (counter === 4) {
    counter = -1;
  }
  counter++;
  container.style.backgroundImage = `url(images/bgc-${counter}.jpg)`;
}

function goBack() {
  if (counter === 0) {
    counter = 5;
  }
  counter--;
  container.style.backgroundImage = `url(images/bgc-${counter}.jpg)`;
}
