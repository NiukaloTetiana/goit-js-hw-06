// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

function onInputChenge(event) {
  outputRef.textContent =
    inputRef.value !== "" ? event.currentTarget.value : "Anonymous";
}

inputRef.addEventListener("input", onInputChenge);
