//Если а – четное посчитать а*б, иначе а+б
const binary = (a,b) => {
  let answer
    ((a % 2) === 0) ? answer = a*b : answer = a+b 
    return answer
  }
  console.log(binary(2,3))
  //Определить какой четверти принадлежит точка с координатами (х,у)
  const axis = (x,y) => {
  
    switch (true) {
      case x > 0 && y > 0:
        return 'Первая четверть'
      case x < 0 && y > 0:
        return 'Вторая четверть'
      case x < 0 && y < 0:
        return 'Третья четверть'
      default:
        return 'Четвертая четверть'
      }
  }
  axis(-2,-5)
  //Найти суммы только положительных из трех чисел
  const sumPositive = (a,b,c) => {
    let arr = [a,b,c]
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
        sum = sum + arr[i]
      }
    }
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
        return 'E'
      break
      case mark > 39 && mark < 60:
        return'D'
      break
      case mark > 59 && mark < 75:
        return'C'
      break
      case mark > 74 && mark < 90:
        return'B'
      break
      case mark > 89 && mark < 101:
        return'A'
      break     
      default:
        return 'F' 
      }
  }
  mark(75)
  