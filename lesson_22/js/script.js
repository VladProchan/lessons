"use strict"

//що потрапить в консоль
let someVar = 0
++someVar;

if (someVar) {
  console.log(someVar)
}
//====================================================================================================
for (let i = 1; i < 11; ++i){
  console.log(`Пункт № ${i}`)
}
//====================================================================================================
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
  console.log('000')
}
//====================================================================================================
function calcDivision(a, b) {
  return a / b
}

function showMessage(calcDivision) {
  if (Number.isNaN(calcDivision) || Math.abs(calcDivision) === Infinity) {
    console.log(`Ні так не ділиться`)
  } else {
    let result = `Результат ділення: ${calcDivision}`
    console.log(result)
  }
}

showMessage(calcDivision(10,2))


//====================================================================================================

let someArray = [37, "Владислав", false, 10, "Фрілансер по життю"]
someArray.forEach((item) => {
  if (item === 10) {
    console.log(`Елемент ${item} був знайдений в масиві`)
  }
})

