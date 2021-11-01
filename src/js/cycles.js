// Найти сумму четных чисел и их количество в диапазоне от 1 до 99
const sumBinary = () => {
    let sum = 0
    let count = 0;
    for(let i = 2; i < 99; i+=2) {
      sum = sum +i;
      count++
    }
    console.log(`Cумма всех четных элементов от 1 до 99 равна: ${sum}, а их число равно: ${count}`)
  }
  sumBinary()
  // Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
  const isPrimeNumber = (number) => {
    number = Math.abs(number)
    for(let i = 2; i < number; i++) {
      if(number % i === 0) { 
        return true
      }
    }
    return false
  }
  console.log(isPrimeNumber(-16))
  // Вычислить факториал числа n. n! = 1*2*…*n-1*n;
  const findFactorial = (number) => {
    let fact = 1
    for(let i = 2; i < number; i++) {
      fact = fact * i
    }
    console.log(`Факториал числа ${number} равен: ${fact}`)
  }
  findFactorial(10)
  // Посчитать сумму цифр заданного числа
  const numberSum = (number) => {
    number = String(number)
    let sum = 0
    for(let i = 0; i < number.length; i++) {
      sum = sum + +number[i]
    }
    console.log(`Сумма цифр числа ${number} равна: ${sum}`)
  }
  numberSum(1113)
  //Вывести число, которое является зеркальным отображением последовательности
// цифр заданного числа, например, задано число 123, вывести 321.
  const numberMirror = (number) => {
    number = String(number)
    let sum = ''
    for(let i = number.length-1; i >= 0; i--) {
      sum = sum + number[i]
    }
    console.log(`Зеркальное отображение числа ${number} равна: ${sum}`)
  }
  numberMirror(123)

//Найти корень натурального числа с точностью до целого (рассмотреть вариант
//последовательного подбора и метод бинарного поиска
const findSqrt = (number) => {
    
    let consistentSelection, binaryMethod
    const target = Math.trunc(Math.sqrt(number))
    //последовательного подбор
    for (let i = 1; i <= number; i++) {
        if (target === i ) { 
            consistentSelection = i
            i = number
        } 
    }
    // метод бинарного поиска
    let firstNumber = 0
    let lastNumber = number
    let midle
    let flag = true
    while (flag) {
        midle = Math.round((lastNumber-firstNumber)/2)+firstNumber
        if (target === midle) {
            binaryMethod = midle
            flag = false
        }
        else if (target < midle) {
            lastNumber = midle - 1
        }
        else { 
            firstNumber = midle + 1
        }
    }
    return {consistentSelection,binaryMethod}
}
console.log(findSqrt(81))