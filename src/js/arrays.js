const randomArr = [3,2,8,1,56,9,72,30,66,14,99,11,88,65,69,54,77,-10,-75,-69,-90,46,1,12,7,36,-12] 
// Найти максимальный элемент массива
const findMax = (arr) => {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
      }
  }
  return max
}
console.log('Максимальный элемент массива ' + findMax(randomArr)) 
// Найти минимальный элемент массива
const findMin = (arr) => {
  let min = arr[0]
  if (arr[i] < min) {
    min = arr[i]
  }

  return min
}
console.log('Минимальный элемент массива ' + findMin(randomArr))
// Найти индекс максимального элемента массива
const findMaxIndex = (arr) => {
    let max = findMax(arr)
    let index
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === max) {
            index = i
          }
      }
 return index + 1
}
console.log('Индекс максимального элементa массива ' + findMaxIndex(randomArr))
//Найти индекс минимального элемента массива
const findMinIndex = (arr) => {
    let min = findMin(arr)
    let index
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min) {
            index = i
          }
      }
  return index + 1
}
console.log('Индекс минимального элементa массива ' + findMinIndex(randomArr))
//Посчитать сумму элементов массива с нечетными индексами
const sumNotBinary = (arr) => {
  let sum = 0
  for (let i = 1; i<arr.length; i+=2) {
    sum = sum + arr[i]
  }
  return sum
}
console.log('Cуммa элементов массива с нечетными индексами ' + sumNotBinary(randomArr))
//Сделать реверс массива (массив в обратном направлении)
const reversArr = (arr) => {
  let reversedArray =[]
  for (let i = 0; i < arr.length; i++) {
    reversedArray.unshift(el)
  }
  return reversedArray
}
console.log(reversArr(randomArr))
//Поменять местами первую и вторую половину массива,
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
// Посчитать количество нечетных элементов массива
const sumOddElements = (array) => { 
    let sum = 0
    for (let i = 0; i < array.length; i++) { 
        if (array[i] % 2 !== 0) { 
            sum = sum + array[i]
        }
    }
    return sum
}
console.log('Cуммa нечетных элементов массива' + sumOddElements(randomArr))
