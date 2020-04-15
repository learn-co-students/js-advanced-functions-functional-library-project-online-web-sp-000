const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      for(const i of newCollection){ callback(i)}
      return collection
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      for(let i = 0; i < newCollection.length; i++){
        newCollection[i] = callback(newCollection[i])
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let newCollection = [...collection]
      let pointer = (acc) ? acc : newCollection.shift();
      for(let i = 0; i < newCollection.length; i++){
        pointer = callback(pointer, newCollection[i])
      }
      return pointer
    },

    find: function(collection, predicate){
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      let value
      for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
          value = newCollection[i]
          break;
        }
      }
      return value
    },

    filter: function(collection, predicate){
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      let value = []
      for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
          value.push(newCollection[i])
        }
      }
      return value
    },

    size: function(collection){
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      let value = 0;
      for(const i of newCollection){ value++}
      return value
    },

    first: function(collection, number){
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      if(number){
        return newCollection.slice(0, number)
      }
      else {
        return newCollection[0]
      }
    },

    last: function(collection, number){
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      if(number){
        return newCollection.slice(-number)
      }
      else {
        return newCollection.slice(-1)[0]
      }
    },

    compact: function(array){
      let noFalse = []
      for(const i of array){
        if(Boolean(i)){
          noFalse.push(i)
        }
      }
      return noFalse
    },

    sortBy: function(array, callback){
      let newArr = [...array];
      return newArr.sort(function(a,b) {return callback(a)- callback(b)})
    },

    flatten: function(array, shallow, newArr=[]){
      if (!Array.isArray(array)) return newArr.push(array)
      if(shallow){
        newArr = [].concat.apply([], array)
      } else {
        for(let i of array){
          this.flatten(i, false, newArr)
        }
      }
      return newArr
    },

    uniq: function(array, isSorted=false, callback=false){
      let newArr = [array[0]]
      let sortedArray = [...array]
      sortedArray = Array.from(new Set(array))
      if(!isSorted){
        sortedArray = sortedArray.sort(function(a,b) {return a - b})
      }
      if (callback) {
        let changedVals = new Set()
        let uniqVals = new Set()
        for(let i of array){
          let changedVal = callback(i)
          if(!changedVals.has(changedVal)){
            changedVals.add(changedVal)
            uniqVals.add(i)
          }
        }
        return Array.from(uniqVals)
      }
      for(let i = 1; i < sortedArray.length; i++){
        if (sortedArray[i-1] !== sortedArray[i]) newArr.push(sortedArray[i])
      }
      return newArr
    },

    keys: function(object){
      let arr = []
      for(const key in object){
        arr.push(key)
      }
      return arr
    },

    values: function(object){
      let arr = []
      for(const key in object){
        arr.push(object[key])
      }
      return arr
    },

    functions: function(object) {
      let arr = []
      for (let key in object){
        if(typeof object[key] === "function") arr.push(key)
      }
      return arr
    },

  }
})()

fi.libraryMethod()
