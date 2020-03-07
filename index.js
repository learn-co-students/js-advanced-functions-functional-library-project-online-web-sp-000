const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++)
        callback(newCollection[i])
      return collection
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      const newArray = []
      for (let i = 0; i < collection.length; i++)
        newArray.push(callback(collection[i]))
      return newArray
    },

    reduce: function(collection = [], callback = () => {}, acc) {
      let c = collection.slice(0)
      if (!acc) {
        acc = c[0]
        c = c.slice(1)
      }
      let length = c.length;
      for (let i = 0; i < length; i++) {
        acc = callback(acc, c[i], c)
      }
      return acc;

    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) return collection [i]
      return undefined
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      const newArray = []
      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) newArray.push(collection[i])
      return newArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, stop = false) {
      return (stop) ? array.slice(0, stop) : array[0]
    },

    last: function(array, start = false) {
      return (start) ? array.slice(array.length - start, array.length) : array[array.length - 1]
    },
    
    compact: function(array) {
      const na = new Set([false, null, 0, "", undefined, NaN])
      return array.filter(bad => !na.has(bad))
    },

    sortBy: function(array, callback) {
      const newArray = [...array]
      return newArray.sort(function(a, b){
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, array) {
      for (let val of array)
        receiver.push(val)
    },

    flatten: function(array, shallow, newArray = []) {
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

    uniqSorted: function(collection, iterate) {
      const sorted = [collection[0]]
      for (let i = 1; i < collection.length; i++) {
        if (sorted[i - 1] !== collection[i])
          sorted.push(collection[i])
      }
      return sorted
    },

    uniq: function(collection, sorted = false, iterate = false) {
      if (sorted) {
        return false.uniqSorted(collection, iterate)
      } else if (!iterate) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iterate(val)
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
      for (let key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      const values = []
      for (let key in object) {
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      const functionNames =[]
      for (let key in object) {
        if (typeof object[key] === "function") {
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
