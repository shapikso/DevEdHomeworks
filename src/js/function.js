const getDayName = (x) => {
  
    switch (x) {
      case 1:
        console.log('Понедельник')
      break
      case 2:
        console.log('Вторник')
      break
      case 3:
        console.log('Среда')
      break
      case 4:
        console.log('Четверг')
      break
      case 5:
        console.log('Пятница')
      break
      case 6:
        console.log('Суббота')
      break  
      case 7:
        console.log('Воскресение')
      break 
      default:
        console.log( 'Нет такого дня' )
      }
  }
  getDayName(7)

  const getDistance = (xa,ya,xb,yb) => { 
      const distance = Math.sqrt( Math.pow(xb-xa,2) + Math.pow(yb-ya,2))
      return distance.toFixed(2)
  }
  console.log(getDistance(3,4,10,-8))

  const singleDigit = (number, firstTime) => { 
      number = Number(number)
      switch (number) {
          case 0:
              if(firstTime) {
                  return 'ноль'
              }
              else { 
                  return ''
              }
          case 1:  
                return 'один' 
          case 2:  
                return 'два' 
          case 3:  
                return 'три'
          case 4:  
                return 'четыре'
          case 5:  
                return 'пять'
          case 6:  
                return 'шесть'
          case 7:  
                return 'семь'
          case 8:  
                return 'восемь'
          case 9:  
                return 'девять'
                            
      }
  }
  const doubleDigitExeptions = (number) => { 
    number = Number(number)
    switch (number) {
        case 0:
              return 'десять'
        case 1:  
              return 'одинадцать' 
        case 2:  
              return 'двенадцать' 
        case 3:  
              return 'тринадцать'
        case 4:  
              return 'четырнадцать'
        case 5:  
              return 'пятнадцать'
        case 6:  
              return 'шестнадцать'
        case 7:  
              return 'семнадцать'
        case 8:  
              return 'восемнадцать'
        case 9:  
              return 'девятнадцать'
                          
    }
}
const doubleDigit = (number) => { 
    number = Number(number)
    switch (number) { 
        case 2:  
              return 'двадцать' 
        case 3:  
              return 'тридцать'
        case 4:  
              return 'сорок'
        case 5:  
              return 'пятдесят'
        case 6:  
              return 'шесдесят'
        case 7:  
              return 'семдесят'
        case 8:  
              return 'восемдесят'
        case 9:  
              return 'девяносто'
                          
    }
}
const tripleDigit = (number) => { 
    number = Number(number)
    switch (number) { 
        case 1:  
              return 'сто' 
        case 2:  
              return 'двести' 
        case 3:  
              return 'триста'
        case 4:  
              return 'четыреста'
        case 5:  
              return 'пятсот'
        case 6:  
              return 'шестьсот'
        case 7:  
              return 'семьсот'
        case 8:  
              return 'восемьсот'
        case 9:  
              return 'девятьсот'
                          
    }
}

  const toWords = (number) => {
      let word = ''
      const toWord = String(number)
      if (toWord.length === 1) { 
        word = word + singleDigit(toWord[0],true)
      }
      else if (toWord.length === 2) {
        if (toWord[0] === '1') { 
            word = word + doubleDigitExeptions(toWord[1])
        }
        else {
            word = word + doubleDigit(toWord[0])+ ' ' + singleDigit(toWord[1],false)
        }
      }
      else if (toWord.length === 3) {
          word = word + tripleDigit(toWord[0]) + ' '
        if (toWord[1] === '1') { 
            word = word  + doubleDigitExeptions(toWord[2])
        }
        else {
            word = word + doubleDigit(toWord[1]) + ' ' + singleDigit(toWord[2],false)
        }

    }
    return word
  }
console.log(toWords(717))

const units = (word) => { 
    
    switch (word) {
        case 'ноль':
            return 0
        case 'один':  
              return 1 
        case 'два':  
              return 2 
        case 'три':  
              return 3
        case 'четыре':  
              return 4
        case 'пять':  
              return 5
        case 'шесть':  
              return 6
        case 'семь':  
              return 7
        case 'восемь':  
              return 8
        case 'девять':  
              return 9
                          
    }
}
const tensExeptions = (word) => { 
  switch (word) {
      case 'десять':
            return 10
      case 'одинадцать':  
            return 11 
      case 'двенадцать':  
            return 12 
      case 'тринадцать':  
            return 13
      case 'четырнадцать':  
            return 14
      case 'пятнадцать':  
            return 15
      case 'шестнадцать':  
            return 16
      case 'семнадцать':  
            return 17
      case 'восемнадцать':  
            return 18
      case 'девятнадцать':  
            return 19
      default :
            return false
                        
  }
}
const tens = (word) => { 
  switch (word) { 
      case 'двадцать':  
            return 20
      case 'тридцать':  
            return 30
      case 'сорок':  
            return 40
      case 'пятдесят':  
            return 50
      case 'шесдесят':  
            return 60
      case 'семдесят':  
            return 70
      case 'восемдесят':  
            return 80
      case 'девяносто':  
            return 90
                        
  }
}
const hundreds = (word) => { 
  switch (word) { 
      case 'сто':  
            return 100 
      case 'двести':  
            return 200 
      case 'триста':  
            return 300
      case 'четыреста':  
            return 400
      case 'пятсот':  
            return 500
      case 'шестьсот':  
            return 600
      case 'семьсот':  
            return 700
      case 'восемьсот':  
            return 800
      case 'девятьсот':  
            return 900
                        
  }
}

const toNumber = (word) => {
    let number = 0
    const toNumber =  word.split(' ');
    if (toNumber.length === 1) { 
      if (tensExeptions(toNumber[0])) { 
        number = tensExeptions(toNumber[0])
      }
      else {
         number = units(toNumber[0])
      }
    }
    else if (toNumber.length === 2) {
        if (tensExeptions(toNumber[1])) { 
            number = tensExeptions(toNumber[1]) + hundreds(toNumber[0])
          }
        else {
            number = tens(toNumber[0]) + units(toNumber[1])
         }  
    }
    else if (toNumber.length === 3) {
        number = hundreds(toNumber[0]) + tens(toNumber[1]) + units(toNumber[2])
  }
  return number
}
console.log(toNumber('семьсот семнадцать'))