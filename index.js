const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, element) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let index = 0; index < newCollection.length; index++)
        element(newCollection[index])
      return collection
    },

    map: function(collection, element) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      const newArray = []
      for (let index = 0; index < collection.length; index++)
        newArray.push(element(collection[index]))
      return newArray
    },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0)
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      let collectionLength = collection.length;
      for (let i = 0; i < collectionLength; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (let index = 0; index < collection.length; index++)
        if (predicate(collection[index])) return collection[index]
    return undefined
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArray = []

      for (let index = 0; index < collection.length; index++)
        if (predicate(collection[index])) newArray.push(collection[index])

      return newArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    },

    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(element => !badBad.has(element))
    },

    sortBy: function(collection, callback) {
      const newArray = [...collection]
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, array) {
     for (let val of array)
       receiver.push(val)
     },

    flatten: function(collection, shallow, newArray=[]) {
      if (!Array.isArray(collection)) return newArray.push(collection)
      if (shallow) {
        for (let val of collection)
        Array.isArray(val) ? this.unpack(newArray, val) : newArray.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArray)
        }
      }
      return newArray
    },

    uniqSorted: function(collection, element) {
      const sorted = [collection[0]]
      for (let index = 1; index < collection.length; index++) {
        if (sorted[index-1] !== collection[index])
          sorted.push(collection[index])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, element=false) {
      if (sorted) {
        return fi.uniqSorted(collection, element)
      } else if (!element) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = element(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
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
