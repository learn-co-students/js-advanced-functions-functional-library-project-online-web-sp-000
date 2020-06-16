const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      for (const key in collection) {
        callback(collection[key], key)
      }
      return collection
    },

    map: function (collection, callback) {
      const newArr = []
      for (const key in collection) {
        newArr.push(callback(collection[key], key))
      }
      return newArr
    },

    reduce: function (collection, callback, acc) {
      let value = acc || collection[0]
      const startingIndex = acc ? 0 : 1

      for (let i = startingIndex; i < collection.length; i++) {
        value = callback(value, collection[i])
      }
      return value
    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function (collection, predicate) {
      const newArr = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArr.push(collection[i])
        }
      }
      return newArr
    },

    size (collection) {
      let total = 0
      for (const value in collection) {
        total += 1
      }
      return total
    },

    first: function (array, n) {
      const newArr = n ? array.slice(0, n) : array[0]
      return newArr
    },

    last: function (array, n) {
      return n ? array.slice(-n) : array.slice(-1)[0]
    },

    compact: function (array) {
      const newArr = []
      array.forEach(element => {
        if (element) {
          newArr.push(element)
        }
      })
      return newArr
    },

    sortBy: function (collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function (a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function (receiver, arr) {
      for (const val of arr) { receiver.push(val) }
    },

    flatten: function (collection, shallow, newArr = []) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (const val of collection) { Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val) }
      } else {
        for (const val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function (collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx - 1] !== collection[idx]) { sorted.push(collection[idx]) }
      }
      return sorted
    },

    uniq: function (collection, sorted = false, iteratee = false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (const val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function (obj) {
      // Using for loop
      const keys = []
      for (const key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function (obj) {
      // Using for loop
      const values = []
      for (const key in obj) {
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)
    },

    functions: function (obj) {
      const functionNames = []

      for (const key in obj) {
        if (typeof obj[key] === 'function') {
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    }

  }
})()

fi.libraryMethod()
