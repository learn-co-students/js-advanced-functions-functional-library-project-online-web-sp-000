const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, text) {
      let arrayOfArrays = Object.values(array)
        for(let i = 0; i<arrayOfArrays.length; i++){
          text(arrayOfArrays[i])
        }
            return array
    },

    map: function(numbers) {
      let numbersList = Object.values(numbers)
      let tripleArray=[]

      for( let i= 0; i< numbersList.length; i++){
          tripleArray.push(numbersList[i] * 3)
      }
      return tripleArray

    },

    reduce: function(c = [], callback = () => {}, acc){
      let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc
    },

    find: function(collection, predicate) {
      for(let i = 0; i < collection.length; i++){
       if(predicate(collection[i]))
         return collection[i]
      }

       
      
    },
    filter: function(collection, predicate){
      //console.log(collection)
      const arr = []

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) arr.push(collection[i])

      return arr
        
      

    },
    size: function(collection){
      let newCollection = Object.values(collection)
       let i = 0 

       while (i<newCollection.length){ 
         i++}
         
         return i 
      
    },

    first: function(collection, n=1){
      if(n===1){
        return collection[0]
   }else{
        return collection.slice(0, n)
    }
  },

  last: function(collection, n=1){
    if(n===1){
      return parseInt(collection.slice(-1))
    }else{
      let num = n * -1
      return collection.slice(num)
  }


  },
  compact: function(array){
    let arr1= array.filter(Boolean)
    return arr1
  },
  sortBy: function(collection,callback){
    const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
  },
  flatten: function(collection, shallow){
    if(shallow){
      return collection.flat(1)
    }else{
      return collection.flat(10)
    }
  },
  uniqSorted: function(collection, iteratee) {
    const sorted = [collection[0]]
    for (let idx = 1; idx < collection.length; idx++) {
      if (sorted[idx-1] !== collection[idx])
        sorted.push(collection[idx])
    }
    return sorted
  },

  uniq: function(collection, sorted=false, iteratee=false) {
    if (sorted) {
      return fi.uniqSorted(collection, iteratee)
    } else if (!iteratee) {
      return Array.from(new Set(collection))
    } else {
      const modifiedVals = new Set()
      const uniqVals = new Set()
      for (let val of collection) {
        const moddedVal = iteratee(val)
        if (!modifiedVals.has(moddedVal)) {
          modifiedVals.add(moddedVal)
          uniqVals.add(val)
        }
      }
      return Array.from(uniqVals)
    }
  },

  keys: function(obj){
   let keyArray = Object.keys(obj)
   return keyArray
  }, 

  values: function(obj){
    let valueArray = Object.values(obj)
    return valueArray
  },

  functions: function(obj){
    let names = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          names.push(key)
        }
      }

      return names.sort()
  }



  }
})()

fi.libraryMethod()
