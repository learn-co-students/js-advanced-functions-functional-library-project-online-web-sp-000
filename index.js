const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const array = (collection instanceof Array) ? collection : Object.values(collection)

      for (let i = 0; i < array.length; i++) {
      callback(array[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const array = (collection instanceof Array) ? collection : Object.values(collection)

      let newArr = [];
      for (let i = 0; i < array.length; i++) {
      newArr.push(callback(array[i]))
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {

      if (!acc){
        acc = collection[0]
        collection = collection.slice(1)
      }

      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i]
      }

      return undefined
    },

    filter: function(collection, predicate) {
      const array = [];

      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
        array.push(collection[i])
        }
      }
      return array
    },

    size: function(collection) {
      let count = 0;

      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      for (let i = 0; i < collection.length; i++) { count++ }

      return count
    },

    first: function(array, n){
      if (n) {
        return array.slice(0, n)
      } else {
        return array[0]
      }
    },

    last: function(array, n) {
      if (n) {
        return array.slice(-n, array[array.length - 1])
      } else {
        return array[array.length - 1]
      }
    },

    compact: function(array) {
      let newArr = [];
      for (let i = 0; i < array.length; i++){
        if (!!array[i] === true) { newArr.push(array[i]) }
      }
      return newArr

    },

    sortBy: function(collection, callback) {
     const newArr = [...collection]
     return newArr.sort(function(a, b) {
       return callback(a) - callback(b)
     })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let i = 1; i < collection.length; i++) {
        if (sorted[i-1] !== collection[i])
          sorted.push(collection[i])
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

    keys: function(obj) {
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
    }

  }
})()

fi.libraryMethod()
