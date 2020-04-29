const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
          callback(collection[i], i, collection)
        }
      } else {
        for (let key in collection){
          callback(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const newArray = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
        //create new array
        newArray.push(callback(collection[i], i, collection))
        }
      } else {
        for (let key in collection) {
         newArray.push(callback(collection[key], key, collection))
       }
      }
    return newArray
    },

  reduce: function(collection, callback, acc) {
    let i = 0;
    if (!acc) {
      acc = collection[i];
      i = 1;
    }
    for (; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection)
    }
    return acc
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (let index = 0; index < collection.length; index++)
        if (predicate(collection[index])) return collection[index]
    return undefined
    },

    filter: function(collection, predicate){
      const values = []
      for (let i=0; i<collection.length; i++){
        if (predicate(collection[i])){
          values.push(collection[i])
        }
      }
      return values
    },	   

    size: function(collection){
      if (Array.isArray(collection)){
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(array, num) {
      const newArray = [];
      if (!num) {
        return array[0]
      } else {
        for (let i = 0; i < num; i++) {
          newArray.push(array[i])
        }
        return newArray
      }
    },	    

    last: function(array, num) {
      if (!num) {
        return array[array.length - 1]
      } else {
        const newArray = [];
        let index = 1
        for (let i = 0; i < num; i++) {
          newArray.unshift(array[array.length - index])
          index++
        }
        return newArray
      }
    },

    compact: function(array) {
      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      const newArray = array.slice(0)
      return newArray.sort( (a, b) => callback(a) - callback(b))
    },
    flatten: function(array, shallow) {
      const newArray = [];
      if (shallow) {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
              newArray.push(array[i][j])
            }
          } else {
            newArray.push(array[i])
          }
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            newArray.push(...fi.flatten(array[i]))
          } else {
            newArray.push(array[i])
          }
        }
      }
      return newArray
    },	 
    uniq: function(collection, isSorted, callback) {
      const transformation = new Set()
      const uniqueItems = new Set()

      if (isSorted) {
        return fi.uniqSorted(collection, callback)

      } else if (!callback) {
        return Array.from(new Set(collection))

      } else {

        for (let value of collection) {

          if (!transformation.has(callback(value))) {
            transformation.add(callback(value))
            uniqueItems.add(value)
          }
        }
        return Array.from(uniqueItems)
      }
    },
    keys: function(object) {
      const keys = []
      for (let key in object){
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      const values = []
      for (let key in object){
        values.push(object[key])
      }
      return values
    },   

    functions: function(object) {
      const functionNames = []

      for (let key in object) {
        if (typeof object[key] === "function"){
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },	
  }
})()

fi.libraryMethod()
