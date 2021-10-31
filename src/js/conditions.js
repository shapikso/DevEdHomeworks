//Если а – четное посчитать а*б, иначе а+б
const binary = (a,b) => {
    if((a % 2) === 0) {
      return a*b;
    }
    else {  
      return a+b
    }
  }
  
  console.log(binary(2,3))
  //Определить какой четверти принадлежит точка с координатами (х,у)
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
  //Найти суммы только положительных из трех чисел
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
  //Посчитать выражение (макс(а*б*с, а+б+с))+3
  const sumMultMax = (a,b,c) =>{ 
    if((a+b+c)>(a*b*c)){
      return (a+b+c)+3
    }
    else {
      return (a*b*c)+3
    }
  }
  console.log(sumMultMax(1,0,3))
  //Написать программу определения оценки студента по его рейтингу, на основе следующих правил
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
  