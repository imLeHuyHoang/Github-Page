const texts = [
  "want to learn about DevOps",
  "want to become an AWS community builder, but now I'm still dumb :(",
  "want to learn about Cloud",
];

const fixedPrefix = "I ";
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typingSpeed = 50;
const erasingSpeed = 50;
const delayBetweenTexts = 1000;

function type() {
  const typingTextElement = document.getElementById("typing-text");
  if (count < texts.length) {
    currentText = texts[count];
    if (index < currentText.length) {
      letter = currentText.slice(0, ++index);
      typingTextElement.textContent = fixedPrefix + letter;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenTexts);
    }
  } else {
    count = 0;
    type();
  }
}

function erase() {
  const typingTextElement = document.getElementById("typing-text");
  if (index > 0) {
    index--;
    let letter = currentText.slice(0, index);
    typingTextElement.textContent = fixedPrefix + letter;
    setTimeout(erase, erasingSpeed);
  } else {
    count++;
    setTimeout(type, 500);
  }
}

type();

function downloadCV() {
  window.open("HoangCV.pdf", "_blank");
}
