// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const listItem = document.querySelectorAll(".item");

listItem.forEach((el) => {
  const height = el.querySelector("h2");
  console.log(height.textContent);
  const items = el.querySelectorAll("li");
  console.log(items.length);
});
