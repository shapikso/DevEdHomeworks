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
console.log(tickets([26, 25, 50, 25 ,100]));
const k = []
//console.log( k[3] )
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

let listOfPosts2 = [
    {
    id: 1,
    post:'some post1',
    title: 'title 1',
    author:'Ivanov',
    comments: [
    {id: 1.1,
    comment: 'some comment1',
    title: 'title',
    author: 'Rimus'},
    {id: 1.2,
    comment: 'some comment2',
    title: 'title' ,
    author: 'Uncle'}]
    },
    {
    id: 2,
    post: 'some post2',
    title: 'title',
    author: 'Ivanov',
    comments: [
    {
    id: 1.1,
    comment: 'some comment1',
    title: 'title 1',
    author: 'Rimus'
    },
    {
    
    id: 1.2,
    comment:'some comment2',
    title: 'title 2',
    author: 'Uncle'
    },
    {
    id: 1.3,
    comment: 'some comment3',
    title: 'title 3',
    author: 'Rimus'
    }
    ]
    },
    {
    id: 3,
    post: 'some post3',
    title:'title 3',
    author: 'Rimus'
    },
    {
    id: 4,
    post: 'some post4',
    title: 'title 4',
    author: 'Uncle'
    }
    ]

    const getQuntityPostsByAuthor = (list, autor) => { 


        
    }

