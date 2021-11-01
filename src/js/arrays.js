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