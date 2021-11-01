// Условные операторы

const binary = (a,b) => {
  if((a % 2) === 0) {
    return a*b;
  }
  else {  
    return a+b
  }
}

console.log(binary(2,3))

const axis = (x,y) => {

  switch (true) {
    case x > 0 && y > 0:
      console.log('Первая четверть')
    break
    case x < 0 && y > 0:
      console.log('Вторая четверть')
    break
    case x < 0 && y < 0:
      console.log('Третья четверть')
    break
       
    default:
      console.log( 'Четвертая четверть' );
    }
}
axis(-2,-5)

const sumPositive = (a,b,c) => {
  let arr = [a,b,c]
  let sum = 0
  arr.forEach( elem => {
    if(elem > 0) {
      sum = sum + elem
    }
  }) 
  return sum
}
console.log(sumPositive(-1,2,3))

const sumMultMax = (a,b,c) =>{ 
  if((a+b+c)>(a*b*c)){
    return (a+b+c)+3
  }
  else {
    return (a*b*c)+3
  }
}
console.log(sumMultMax(1,0,3))

const mark = (mark) => {
  switch (true) {
    case mark > 19 && mark < 40:
      console.log('E')
    break
    case mark > 39 && mark < 60:
      console.log('D')
    break
    case mark > 59 && mark < 75:
      console.log('C')
    break
    case mark > 74 && mark < 90:
      console.log('B')
    break
    case mark > 89 && mark < 101:
      console.log('A')
    break
       
    default:
      console.log( 'D' );
    }

}
mark(75)

//Циклы


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


// Массивы
const randomArr = [3,2,8,1,56,9,72,30,66,14,99,11,88,65,69,54,77,-10,-75,-69,-90,46,1,12,7,36,-12] 

const findMax = (arr) => {
  let max = arr[0]
  arr.forEach( el => {
    if (el > max) {
      max = el
    }
  })
  return max
}
console.log('Максимальный элемент массива ' + findMax(randomArr)) 

const findMin = (arr) => {
  let min = arr[0]
  arr.forEach( el => {
    if (el < min) {
      min = el
    }
  })
  return min
}
console.log('Минимальный элемент массива ' + findMin(randomArr))

const findMaxIndex = (arr) => {
 return arr.indexOf(findMax(arr))+1
}
console.log('Индекс максимального элементa массива ' + findMaxIndex(randomArr))

const findMinIndex = (arr) => {
  return arr.indexOf(findMin(arr))+1
}
console.log('Индекс минимального элементa массива ' + findMinIndex(randomArr))

const sumNotBinary = (arr) => {
  let sum = 0
  for (let i = 1; i<arr.length; i+=2) {
    sum = sum + arr[i]
  }
  return sum
}
console.log('Cуммa элементов массива с нечетными индексами ' + sumNotBinary(randomArr))

const reversArr = (arr) => {
  let reversedArray =[]
  arr.forEach(el => {
    reversedArray.unshift(el)
  })
  return reversedArray
}
console.log(reversArr(randomArr))

const reversHalf = (arr) => { 
  let reversedHalf = []
  for (let i = (arr.length/2).toFixed(0); i < arr.length; i++) {
    reversedHalf.push(arr[i])
  }
  for (let i = 0; i < arr.length/2; i++) {
    reversedHalf.push(arr[i])
  }
   return reversedHalf
}
console.log(reversHalf(randomArr))
