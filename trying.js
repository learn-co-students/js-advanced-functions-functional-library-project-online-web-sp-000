let array = [1, 2, 2, 3, 4, 6, 9]
let iteratee = (val => val % 3)

function uniq(array, iteratee) {
      let newArr = [array[0]]
      for (let i = 1; i < array.length; i++){
        if(!newArr.includes(array[i])){
          newArr.push(array[i])
        }
      }
      if(iteratee){
      	let newArr = [array[0]]
        for (let i = 1; i < array.length; i++){
        	let newVal = iteratee(array[i])
          if(!newArr.includes(newVal)){
            newArr.push(newVal)
          }
        }
      }
  		return newArr
    }