"use strict"
//====================================================================================================
// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас

document.addEventListener("click", documentActionClick)
function documentActionClick(e) {
  const targetElement = e.target
  if (targetElement.closest(".item")) {
    const currentElement = targetElement.closest(".item")
    currentElement.classList.toggle("active")
  }
}

//====================================================================================================
// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

const bodyElement = document.body
window.addEventListener("load", domLoaded)
function domLoaded(e) {
  bodyElement.classList.add("loaded")
}

//====================================================================================================
// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.
const elementHeader = document.querySelector(".result__header")
const elementFooter = document.querySelector(".result__footer")
document.addEventListener("mouseover", documentActionMouseover)
function documentActionMouseover(e) {
  const targetElement = e.target
  if (elementHeader === targetElement) {
    elementFooter.classList.add("hover")
  } else {
    elementFooter.classList.remove("hover")
  }
}
//====================================================================================================
// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

const elementTimer = document.querySelector(".timer")
const elementTimerItem = document.querySelector(".timer__item")
const dataTimerEelementTimerItem = elementTimerItem.dataset.timer
const dataSpeedEelementTimerItem = elementTimerItem.dataset.speed

// observer параметри
const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1,
}

// що буде відбуватися коли об'єкт з'явиться
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      elementTimerItem.classList.add('animate')
      //запускаємо інтервал який починає рахувати як з'явиться
      let i = 0
      let timer = setInterval(() => {
        i === +dataTimerEelementTimerItem ? clearInterval(timer) : ++i
        elementTimerItem.innerHTML = `я рахую до: ${i}`
      }, dataSpeedEelementTimerItem)
    }
  })
}
// observer створення
const observer = new IntersectionObserver(callback, options)
// observer відслідковування елементу
observer.observe(elementTimer)

// якщо б'єктів багатьох об'єктів
// const animateElements = document.querySelectorAll('[class*="--animate"]')
// animateElements.forEach(animateElement => {
//   observer.observe(animateElement)
// });