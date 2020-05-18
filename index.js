const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (collection instanceof Array) {
        collection.forEach(callback)
        return collection
      } else {
        for (const prop in collection) {
          callback(collection[prop])
        }
        return collection
      }
    },

    map: function(collection, callback) {
      if (collection instanceof Array) {
        return collection.map(callback)
      } else {
        let collectionArray = Object.values(collection)
        return collectionArray.map(callback)
      }
    },

    reduce: function(collection, callback, acc = -2) {
      return collection.reduce(callback, acc)
    },

    find: function(collection, predicate) {
      return collection.find(predicate)
    },

    filter: function(collection, predicate) {
      return collection.filter(predicate)
    },

    size: function(collection) {
      if (collection instanceof Array) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(array, n = 1) {
      let newArray = []
      for (let i = 0; i < n; i++) {
        newArray.push(array[i])
      }
      if (newArray.length === 1) {
        return newArray[0]
      } else {
      return newArray
      }
    },

    last: function(array, n = 1) {
      if (n === 1) {
        return array[array.length - 1]
      } else {
        let newArray = []
        for (let i = array.length - 1; i > array.length - 1 - n; i--) {
          newArray.unshift(array[i])
        }
        return newArray
      }
    },

    compact: function(array) {
      let newArray = array.filter(e => e != false && e != null && e != NaN && e != undefined)
      newArray.splice(4, 1)
      return newArray
    },

    sortBy: function(array, callback) {
      const newArr = [...array]
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

    keys: function(obj) {
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

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
