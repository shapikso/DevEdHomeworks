const tryToGiveChange = (array,change,money) => {
    let changeKoefficient = change / 25
    while (change !== 0 && changeKoefficient !== 0) {
        if(array.includes(25*changeKoefficient)){
            array.splice(array.indexOf(25*changeKoefficient), 1);
            change = change-(25*changeKoefficient);
        }
        else {
            changeKoefficient--;
        }
    }
    array.push(money);
    return change === 0 ? array : undefined;
}
const tickets = (person) => {
    const cashbox = person.reduce((acc, money)=>{
        if ( acc && money === 25 )
        {
            return [...acc,money];
        }
        else if (acc && money > 25 && money % 25 === 0){
            return tryToGiveChange(acc,money - 25,money);
        }
        else {
            return undefined;
        }
    },[])
    return cashbox ? 'YES': 'NO'
}
const sum = (arrayNumberOne,arrayNumberTwo) => {
    const result = []
    result[arrayNumberOne.length-1] = 0;
    for (let i = arrayNumberOne.length-1; i >= 0; i--) {
        result[i] = result[i] + Number(arrayNumberOne[i]) + Number(arrayNumberTwo[i]);
        if (i !== 0 && result[i] > 9) {
            result[i] = result[i] - 10;
            result[i-1] = 1; 
        }
        else if(i !== 0 ){
            result[i-1] = 0;
        }
    }
 return result.join('');
}
const getSum = (firstNumber,secondNumber) => {
    arrayNumberOne = Array.from(firstNumber);
    arrayNumberTwo = Array.from(secondNumber);
    while (arrayNumberOne.length !== arrayNumberTwo.length) {
        if (arrayNumberOne.length > arrayNumberTwo.length){
            arrayNumberTwo.unshift('0');
        }
        else {
            arrayNumberOne.unshift('0');
        }
    }
    return sum(arrayNumberOne,arrayNumberTwo)
}
console.log(getSum('923', '123'));
    const getCount = (list, autor) => { 
     let commentCount = 0;
      const count = list.reduce((acc,element) => {
            Object.keys(element).forEach(keyElement => {
                if (keyElement === 'author' && element[keyElement] === autor) {
                    acc++;
                }
                else if (keyElement === 'comments') {
                    commentCount = commentCount + getCount(element[keyElement],autor)
                }
            })
            return acc;
        },0)
        return commentCount !== 0 ? {count,commentCount}: count;
    }
   const getQuntityPostsByAuthor = (list, autor) => {
    const result = getCount(list, autor)
    if (typeof result === 'object')  {
       const {count,commentCount} = result;
        return `post – ${count}, comments – ${commentCount}`
    }
    else {
        return `post – ${result}, comments – 0`
    }
   }
    const complexFunction = function (arg1,arg2) {
        return arg1+arg2;
        }
        const cache = function (complexFunction) {
            const myCache = [];
            return function(arg1,arg2) {
                const element = complexFunction(arg1,arg2)
                if (myCache.includes(element)) {
                    return element
                }
                else {
                    myCache.push(element)
                    return true;
                }
                };
            }


