const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      const newCollection = Object.values(collection);

      for (let i=0; i<newCollection.length; i++)
        alert(newCollection[i]);

      return collection
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newCollection = [];

      for (let i=0; i<collection.length; i++)
        newCollection.push(callback(collection[i]));
      
      return newCollection
    },

    reduce: function(collection = [], callback = () => {}, acc) {
      let newCollection = collection.slice(0)

      if (!acc) {
        acc = newCollection[0]
        newCollection = collection.slice(1)
      }

      for (let i=0; i<newCollection.length; i++){
        acc = callback(acc, newCollection[i], newCollection)
      }
      return acc;
    },

  find: function(collection, predicate) {
    if (!(collection instanceof Array))
      collection = Object.values(collection)
  
    for (let i=0; i<collection.length; i++) 
      if (predicate(collection[i])) return collection[i]

    return undefined
  },

  filter: function(collection, predicate){
    if (!(collection instanceof Array))
      collection = Object.values(collection)
    
    const newCollection = []

    for (let i=0; i<collection.length; i++)
      if (predicate(collection[i])) newCollection.push(collection[i])
    
    return newCollection
  },

  size: function(collection) {
    return (collection instanceof Array) ? collection.length : Object.keys(collection).length
  },

  first: function(array, stop=false){
    return (stop) ? array.slice(0, stop) : array[0]
  },

  last: function(array, start=false){
    return (start) ? array.slice(array.length-start, array.length) : array[array.length-1]
  },

  compact: function(array) {
    const fval = new Set([false, null, 0, "", undefined, NaN])
    return array.filter(el => !fval.has(el))
  },

  sortBy: function(array, callback) {
    const newArray =  [...array]
    return newArray.sort(function(a, b){
      return callback(a) - callback(b)
    })
  },

  unpack: function(receiver, arr) {
    for (let val of arr)
      receiver.push(val)
  },

  flatten: function(array, shallow, newArray=[]) {
    if (!Array.isArray(array)) return newArray.push(array)
    if (shallow) {
      for (let val of array)
        Array.isArray(val) ? this.unpack(newArray, val) : newArray.push(val)
    } else {
      for (let val of array) {
        this.flatten(val, false, newArray)
      }
    }
    return newArray
  },

  uniqSorted: function(array, callback) {
    const sorted = [array[0]]
    for (let i = 1; i < collection.length; i++) {
      if (sorted[i-1] !== array[i])
        sorted.push(array[i])
    }
    return sorted
  },

  uniq: function(array, sorted=false, callback=false) {
    if (sorted) {
      return fi.uniqSorted(array, callback)
    } else if (!callback) {
      return Array.from(new Set(array))
    } else {
      const modifiedVals = new Set()
      const uniqVals = new Set()
      for (let val of array) {
        const moddedVal = callback(val)
        if (!modifiedVals.has(moddedVal)) {
          modifiedVals.add(moddedVal)
          uniqVals.add(val)
        }
      }
      return Array.from(uniqVals)
    }
  },

  keys: function(obj) {
    // Using for loop
    const keys = []
    for (let key in obj){
      keys.push(key)
    }
    return keys
  },

  values: function(obj) {
    const values = []
    for (let key in obj){
      values.push(obj[key])
    }
    return values
  },


    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
