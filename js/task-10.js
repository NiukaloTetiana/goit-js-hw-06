// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const randomither = (max) => {
//   return Math.floor(Math.random() * max);
// };

// const boxElement = document.createElement("div");

// boxElement.style.cssText = forms[0];
// boxElement.style.backgroundColor = getRandomHexColor();
// document.body.append(boxElement);

// boxElement.addEventListener("click", () => {
//   const randomeIndex = randomither(forms.length);
//   boxElement.style.cssText = forms[randomeIndex];
//   boxElement.style.backgroundColor = getRandomHexColor();
//   boxElement.style.position = "absolute";
//   const height =
//     100 -
//     (boxElement.clientHeight * 100) / document.documentElement.clientHeight;
//   const width =
//     100 - (boxElement.clientWidth * 100) / document.documentElement.clientWidth;
//   boxElement.style.top = `${randomither(height)}%`;
//   boxElement.style.left = `${randomither(width)}%`;
// });

// const controlsRef = document.querySelector("#controls");
// let liElems = [];
// for (let i = 1; i < controls.length; i++) {
//   liElem.classlist.add();
//   liElems.push(liElem);
// }

// console.log(liElems);

// ingredientsElem.append(...liElems);
