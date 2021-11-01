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
  
  const findFactorial = (number) => {
    let fact = 1
    for(let i = 2; i < number; i++) {
      fact = fact * i
    }
    console.log(`Факториал числа ${number} равен: ${fact}`)
  }
  findFactorial(10)
  
  const numberSum = (number) => {
    number = String(number)
    let sum = 0
    for(let i = 0; i < number.length; i++) {
      sum = sum + +number[i]
    }
    console.log(`Сумма цифр числа ${number} равна: ${sum}`)
  }
  numberSum(1113)
  
  const numberMirror = (number) => {
    number = String(number)
    let sum = ''
    for(let i = number.length-1; i >= 0; i--) {
      sum = sum + number[i]
    }
    console.log(`Зеркальное отображение числа ${number} равна: ${sum}`)
  }
  numberMirror(123)