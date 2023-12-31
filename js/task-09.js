// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

//   Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector(".color");
const chengeColorBtn = document.querySelector(".change-color");
const body = document.body;

const changeColor = () => {
  textColor.textContent = body.style.backgroundColor = getRandomHexColor();
};
chengeColorBtn.addEventListener("click", changeColor);
