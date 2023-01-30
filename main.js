let textContainer = document.querySelector(".text-container");
let tryAgain = document.querySelector("button");

let input = document.querySelector("input");
let mistakes = document.querySelector(".mistakes");
let time = document.querySelector(".time");
let timeLeft = document.querySelector('.timeleft');

let currentTyping = document.querySelector(".current-typing");
let totalTyping = document.querySelector(".total-typing");

let paragraph = [
  "Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser displayed DOM efficiently.[11] This process is called reconciliation",
  "This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost.[12] It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.",
  "Where class components are all about the use of classes and the lifecycle methods, functional components have hooks to deal with state management and other problems which arise when writing code in React",
  "To support React's concept of unidirectional data flow (which might be contrasted with AngularJS's bidirectional flow), the Flux architecture was developed as an alternative to the popular model–view–controller architecture. Flux features actions which are sent through a central dispatcher to a store",
];
paragraph[0].split("").map((i) => {
  textContainer.innerHTML += `<span class='value'>${i}</span>`;
});

let spanCount;
spanCount = textContainer.children;
currentTyping.innerHTML = 0;
totalTyping.innerHTML = spanCount.length;

tryAgain.addEventListener("click", (e) => {
  focusinput();
  restarting();
  timeLeft.style.color = 'black'
  timer = 60;
  time.innerHTML = timer + "s";
  input.value = "";
  textContainer.innerHTML = "";
  let randNum = Math.floor(Math.random() * (paragraph.length - 1));
  let serialAlpha = paragraph[randNum].split("");
  serialAlpha.map((alpha) => {
    textContainer.innerHTML += `<span class='value'>${alpha}</span>`;
    textContainer.classList.add("active");
  });
  totalTyping.innerHTML = textContainer.children.length;
  currentTyping.innerHTML  = 0;
  clearInterval(interval);
});

window.addEventListener("load", focusinput);
function focusinput() {
  input.focus();
}


let mistakesCount = 0;
let i = 0;
let timer = 60;
time.innerHTML = timer + "s";
let interval;


function restarting() {
  i = 0;
  mistakesCount = 0;
  mistakes.innerHTML = mistakesCount;
}


input.addEventListener("input", (e) => {
  let currentlength = e.target.value.length;

  let span = document.querySelectorAll(".value");
  if (input.value.length > 0 && input.value.length === 1) {
    interval = setInterval(intervaltime, 1000);
  }
  if (timer === 0) {
    return;
  } else {
    if (e.target.value[i] === span[i].innerHTML) {
      span[i].style.color = "green";
      i += 1;
    } else {
      span[i].style.backgroundColor = "red";
      i += 1;
      mistakesCount += 1;
      mistakes.innerHTML = mistakesCount;
    }

    decrement(currentlength);
  }
});


function intervaltime() {
  timer = timer - 1;
  time.innerHTML = timer + "s";
  timer < 0 ? (timer = 0) : "";
  timer === 0 ? timeLeft.style.color = 'red': ''
  time.innerHTML = timer + "s";
}

function decrement(currentlength) {
  currentTyping.innerHTML = currentlength;

  totalTyping.innerHTML = spanCount.length - currentlength;
}
