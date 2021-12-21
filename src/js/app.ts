import { TSet, TTitle } from "./type";

function getCookingTime (eggsAmount:number) {
    return Math.ceil(eggsAmount/5) * 5;
}
console.log(getCookingTime(9)); //returns 5


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
const arr = [{title: 'Some title1'},
    {title:'I like JS'},
    {user: 'This obj doesn\’t have key title js'},
    {title: 'Js - is the best!'}];
console.log(findTitle(arr,'js'));
  
  type TCharacter = {
    [index:string]:number
  }
function countCharacters(string: string) {
    const notValidKeys =' ~`!#$%^&*+=-[]\\\';,/{}|\":<>?';
    const arrayFromString = Array.from(string)
    const result = arrayFromString.reduce((acc:TCharacter, element) => {
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

function getNextPalindrome(number:number): number {
    let result = ++number;
    while (isNotPalindrome(result)) {
        result++;
    }
    return result;
}
function isNotPalindrome (number:number): boolean{
    
    const numberString = String(number);
    const reversedArgument = numberString.split('').reverse().join('');
    return numberString !== reversedArgument ? true : false;
}
console.log(getNextPalindrome(102));
  
  
const objSet:TSet= { 
    add(value) {
        if(!Object.values(this).includes(value)){ 
            this[this.genereteKey()] = value;
        }
        return this
    },
    has(value:any) {
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
    delete(value:any){
        Object.entries(this).forEach(element => {
            if(JSON.stringify(element[1])===JSON.stringify(value)) {
                delete this[+element[0]];
            }
        })
    },
    genereteKey(): number{
        return Object.keys(this).length;
    },
    isEqual(element,value){
        return element === value? true : false;
    }
}
const set: TSet = Object.create(objSet);
console.log(set.add(123));
set.add(123);
set.add('str');
set.add({a:2,b:2});
console.log(set.has('str'));
set.delete('str');
console.log(set);
console.log(set.has('str'));
    
  
  
     
    
  