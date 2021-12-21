// 1.Составьте алгоритм, который считает, сколько времени вам нужно на
// приготовление яиц.
function getCookingTime (eggsAmount:number) {
    return Math.ceil(eggsAmount/5) * 5;;
    }
   console.log(getCookingTime(9)); //returns 5
  // // 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме
  // одного. Тебе нужно его найти.
  function getNumber (array:number[]) {
    let result ;
    if (isEvenElements(array.slice(0,3))) { 
      result = array.find(element => element % 2 !== 0)
    }
    else {
      result = array.find(element => element % 2 === 0)
    }
    
    return result;
    }
  function isEvenElements (array:number[]) {
    const count = array.reduce((acc,element) => {
       return element % 2 === 0 ? ++acc : acc
    },0);
   return count > 1 ? true : false ;
  }
  console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])); //returns 4
  console.log(getNumber([0, 12, 8, -4, 0, -122, 15, -4, 28, 12])) //returns 13
  // 3. Принимая массив объектов и случайную строку. У объектов может
  // быть ключ: «title» с разными значениями. Создайте алгоритм, который
  // фильтрует массив, заданный как первый параметр, и возвращает
  // массив объектов, которые содержат в своих заголовках заданную строку
  // в качестве второго параметра (без учета регистра).

  type TTitle = {
      title? : string,
      user? : string
  }

  function findTitle (arr:TTitle[], str:string) {
    return arr.reduce((acc:TTitle[],element:TTitle) => {
      if(isIncludesTitle(element) && isIncludesString(element,str)) {
      return [...acc,{'title' : element['title']}]
    }
    else {
      return [...acc];
    }
    },[])
  }
  function isIncludesTitle(obj:TTitle) {
      return Object.keys(obj).includes('title');
  }
  function isIncludesString(obj:TTitle,str:string) {
      return obj.title?.toLowerCase().includes(str);
  }
  let arr = [{title: 'Some title1'},
  {title:'I like JS'},
  {user: 'This obj doesn\’t have key title js'},
  {title: 'Js - is the best!'}];
  console.log(findTitle(arr,'js'));
  // 4. Принимая строку, ваша функция должна вернуть обьект, в котором
  // ключи – символы строки, значение – количество повторений символов в
  // строке
  function countCharacters(string: string) {
    const notValidKeys =' ~`!#$%^&*+=-[]\\\';,/{}|\":<>?';
    const arrayFromString = Array.from(string)
   const result = arrayFromString.reduce((acc,element) => {
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
    while (isNotPalindrome(result)) {
      result++;
    }
    return result;
    }
    function isNotPalindrome (number){
      // let firstPart;
      // let secondPart;
      //const arr = Array.from(String(number));
      // if(arr.length % 2 === 0){
      //   firstPart = arr.slice(0,arr.length / 2 ).toString();
      //   secondPart = arr.slice(arr.length / 2, arr.length).reverse().toString();
      //   return firstPart === secondPart ?  false :  true
      // }
      // else{
      //   firstPart = arr.slice(0,arr.length / 2  ).toString();
      //   secondPart = arr.slice(arr.length / 2 + 1, arr.length).reverse().toString();
      //   return firstPart === secondPart ?  false :  true
      // }
      const numberString = String(number);
      const reversedArgument = numberString.split('').reverse().join('');
      return numberString !== reversedArgument ? true : false;
    }
   console.log(getNextPalindrome(102));
  //  6. Создать структуру данных Set, используя объект, создать методы add,
  // remove, has
     const objSet = { 
       add(value) {
         if(!Object.values(this).includes(value)){ 
          this[this.genereteKey()] = value;
         }
         return this
       },
       has(value) {
         let result = false;
            Object.values(this).forEach(element => {
              if(typeof value === 'object'){
               if(this.isEqual(JSON.stringify(element), JSON.stringify(value))){
                result = true;
               }
              }
              else {
                if(this.isEqual(element, value)){
                  result = true;
                }
              }
            })
            return result;
      },
      delete(value){
        Object.entries(this).forEach(element => {
          if(JSON.stringify(element[1])===JSON.stringify(value)) {
            delete this[element[0]];
          }
        })
      },
       genereteKey(){
        return Object.keys(this).length;
       },
       isEqual(element,value){
        return element === value? true : false;
       }
     }
     const set = Object.create(objSet);
     //set.genereteKey();
     console.log(set.add(123));
     //console.log(set);
     set.add(123);
     //console.log(set);
     set.add('str');
     //console.log(set.has('str'));
     set.add({a:2,b:2});
     //console.log(set);
     console.log(set.has('str'));
     set.delete('str');
     console.log(set);
     console.log(set.has('str'));
    
  
  
     
    
  