"use strict";
//====================================================================================================
// Задача №1
// Отримати в константу елемент <body>

const bodyElement = document.body;
console.log(bodyElement);

//====================================================================================================
// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

const list = document.querySelector(".list")
function addingAnElement(number = 3) {
  let newUl = document.createElement("ul")
  list.insertAdjacentElement("beforeend", newUl)
  for (let i = 1; i < number + 1; ++i) {
    let newLi = document.createElement("li")
    newLi.innerHTML = `Рядок №${i}`
    newUl.insertAdjacentElement("beforeend", newLi)
  }
}
addingAnElement(6)

//====================================================================================================
// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

const text = document.querySelector(".text");
text.classList.add("loaded");
if (text.classList.contains("loaded")) {
  text.style.color = `green`;
}

//====================================================================================================
// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const item = document.querySelectorAll(".item")
item.forEach((userName, index) => {
  userName.classList.add("active")
  userName.innerHTML = `Елемент №${index + 1}`
})

//====================================================================================================
// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector('.button')
function scrollToBlock(element) {
  const block = element.dataset.scroll
  element.scrollIntoView({
    //"start", "center", "end". За замовчуванням "center".
    block: block,
    //"start", "center", "end" чи "nearest". За замовчуванням "nearest".
    inline: "nearest",
    behavior: "smooth"
  })
}
scrollToBlock(button)

//====================================================================================================
// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector('.link')
link.dataset.number = "100"
const number = link.dataset.number
if (+number < 200 ) {
  link.style.color = `red`
}


