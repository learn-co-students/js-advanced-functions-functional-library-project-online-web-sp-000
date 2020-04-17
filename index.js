const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === "object") {
        const keys = Object.keys(collection)
        for (let i=0; i<keys.length; i++){
          callback(collection[keys[i]], keys[i], collection)
        }
      }
      else if (typeof collection === "array") {
        for (let i=0; i<collection.length; i++){
          callback(collection[i], i, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const returnArray = []
      if (typeof collection === "object") {
        const keys = Object.keys(collection)
        for (let i=0; i<keys.length; i++){
          returnArray.push(callback(collection[keys[i]], keys[i], collection))
        }
      }
      else {
        for (let i=0; i < collection; i++){
          returnArray.push(callback(collection[i], i, collection))
        }
      }
      return returnArray
    },

    reduce: function(collection, callback, acc) {
      let reducedValue
      if (acc){
        reducedValue = callback(acc, collection[0], collection)
      }
      else{
        reducedValue = collection[0]
      }
      for(let i=1; i<collection.length; i++){
        reducedValue = callback(reducedValue, collection[i], collection)
      }
      return reducedValue
    },

    functions: function() {
      
    },

    find: function(collection, predicate) {
      for(let i=0; i<collection.length; i++){
        if (predicate(collection[i])){
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      const returnArray = []
      for(let i=0; i<collection.length; i++){
        if (predicate(collection[i])){
          returnArray.push(collection[i])
        }
      }
      return returnArray
    },

    size: function(collection){
      let counterArray
      if (typeof collection === "array"){
        counterArray = collection
      }
      else {
        counterArray = Object.keys(collection)
      }
      let count = 0
      for(let i=0; i<counterArray.length; i++){
        count += 1
      }
      return count
    },

    first: function(array, count){
      if (count){
        return array.slice(0, count)
      }
      else {
        return array[0]
      }
    },

    last: function(array, count){
      if (count){
        return array.slice(array.length-count, array.length)
      }
      else {
        return array[array.length-1]
      }
    },

    compact: function(array){
      const returnArray = []
      for (let i=0; i<array.length; i++){
        if (array[i]){
          returnArray.push(array[i])
        }
      }
      return returnArray
    },

    sortBy: function(array, callback){
      let workingArray = array.slice()
      for (let i=1; i<workingArray.length; i++){
        for(let j=0; j<i; j++){
          if (callback(workingArray[i])<callback(workingArray[j])){
            let iElement = workingArray[i]
            workingArray.splice(i, 1)
            workingArray.splice(j,0, iElement)
          }
        }
      }
      return workingArray
    },

    flatten: function(array, shallow){
      let arrayElementIndex
      let arrayElement
      if (shallow && array.find(e => typeof e === "object")){
        let firstLevelArrays = array.filter(e => typeof e === "object")
        for (let i=0; i<firstLevelArrays.length; i++){
          arrayElementIndex = array.findIndex(e => e === firstLevelArrays[i])
          arrayElement = array[arrayElementIndex]
          array.splice(arrayElementIndex, 1)
          for (let j=0; j<arrayElement.length; j++){
            array.splice(arrayElementIndex+j,0, arrayElement[j])
          }
        }
        return array
      }
      else{
      // if you can find an arrayElement in your array, return the index of that arrayElement
      // go through each element of that array and splice it into the original array
      // repeat until there are no elements that are arrays
        while (array.find(e => typeof e === "object")){
          arrayElementIndex = array.findIndex(e => typeof e === "object")
          arrayElement = array[arrayElementIndex]
          array.splice(arrayElementIndex, 1)
          for (let i=0; i<arrayElement.length; i++){
            array.splice(arrayElementIndex+i,0, arrayElement[i])
          }
        }
      }
      return array
    },

    uniq: function(array, isSorted, callback){
      if (isSorted){
        for (let i=array.length-1; i>0; i--){
          if (array[i-1]===array[i]){
            array.splice(i, 1)
          }
        }
      }
      else{
        for (let i=array.length-1; i>0; i--){
          if (array.filter(e => e===array[i]).length > 1){
            array.splice(i, 1)
          }
        }
      }
      if (callback){
        for (let i=array.length-1; i>0; i--){
          if (array.filter(e => callback(e)===callback(array[i])).length > 1){
            array.splice(i, 1)
          }
        }
      }
      return array

    },

    keys: function(object){
      return Object.keys(object)
    },

    values: function(object){
      return Object.values(object)
    },

    functions: function(object){
      let properties = Object.getOwnPropertyNames(object)
      return properties.filter(e => typeof object[e] === "function")
    }

  }
})()

fi.libraryMethod()