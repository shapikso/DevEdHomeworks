// // 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме
// одного. Тебе нужно его найти.
function getNumber (array) {
  let result ;
  if (isEvenElements(array.slice(0,3))) { 
    result = array.find(element => element % 2 !== 0)
  }
  else {
    result = array.find(element => element % 2 === 0)
  }
  
  return result;
  }
function isEvenElements (array) {
  let count = 0;
  array.forEach(element => {
    element % 2 === 0 ? count++ : 0 ;
  });
 return count > 1 ? true : false ;
}
console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])); //returns 4
console.log(getNumber([0, 13, 8, -4, 0, -122, 12, -4, 28, 12])) //returns 13
// 3. Принимая массив объектов и случайную строку. У объектов может
// быть ключ: «title» с разными значениями. Создайте алгоритм, который
// фильтрует массив, заданный как первый параметр, и возвращает
// массив объектов, которые содержат в своих заголовках заданную строку
// в качестве второго параметра (без учета регистра).
function findTitle (arr, str) {
  return arr.reduce((acc,element) => {
    if(isIncludesTitle(element) && isIncludesString(element,str)) {
    return [...acc,{'title' : element['title']}]
  }
  else {
    return [...acc];
  }
  },[])
}
function isIncludesTitle(obj,str) {
  if (Object.keys(obj).includes('title')) {
    return true;
  }
  else {
    return false;
  }
}
function isIncludesString(obj,str) {
  if (obj['title'].toLowerCase().includes(str)) {
    return true;
  }
  else {
    return false;
  }
}
let arr = [{title: 'Some title1'},
{title:'I like JS'},
{user: 'This obj doesn\’t have key title js'},
{title: 'Js - is the best!'}];
console.log(findTitle(arr,'js'));
// 4. Принимая строку, ваша функция должна вернуть обьект, в котором
// ключи – символы строки, значение – количество повторений символов в
// строке
function countCharacters(string) {
  const notValidKeys =' ~`!#$%^&*+=-[]\\\';,/{}|\":<>?';
  let result;
  const arrayFromString = Array.from(string)
  result = arrayFromString.reduce((acc,element) => {
    if (notValidKeys.includes(element)){
      return {...acc};
    }
    else if(acc[element]) {
      acc[element]++;
      return {...acc};
    }
    else {
      return {...acc,[element]: 1}
    }
  },{})
  return result;
  }
console.log(countCharacters('ssparrow'));
console.log(countCharacters('a 2ab !d'));
// 5. Принимая число, ваша функция должна найти следующий
// положительный палиндром большего размера.
function getNextPalindrome(number) {
  let result = ++number;
  while (isNotPalindrome(result))
  {
    result++;
  }
  return result;
  }
  function isNotPalindrome (number){
    let firstPart;
    let secondPart;
    const arr = Array.from(String(number));
    if(arr.length % 2 === 0){
      firstPart = arr.slice(0,arr.length / 2 ).toString();
      secondPart = arr.slice(arr.length / 2, arr.length).reverse().toString();
      return firstPart === secondPart ?  false :  true
    }
    else{
      firstPart = arr.slice(0,arr.length / 2  ).toString();
      secondPart = arr.slice(arr.length / 2 + 1, arr.length).reverse().toString();
      return firstPart === secondPart ?  false :  true
    }
    return false;
  }
 console.log(getNextPalindrome(102));