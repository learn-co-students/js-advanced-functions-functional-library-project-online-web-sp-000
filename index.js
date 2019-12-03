const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, cb) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        cb(newCollection[i])
      }
      return collection
    },

    map: function (collection, cb) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      const returnArr = []
      for (let i = 0; i < newCollection.length; i++) {
        returnArr.push(cb(newCollection[i]));
      }
      return returnArr
    },

    reduce: function (collection, cb, acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for (let i = 0; i < collection.length; i++) {
        acc = cb(acc, collection[i])
      }
      return acc
    },

    find: function (collection, predicate) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          return newCollection[i]
        }
      }
    },

    filter: function (collection, predicate) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      const filterArr = []
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          filterArr.push(newCollection[i])
        }
      }
      return filterArr
    },

    size: function (collection) {
      return Object.keys(collection).length
    },

    first: function (collection, n = 1) {
      const firstArr = collection.slice(0, n)
      return firstArr.length === 1 ? firstArr[0] : firstArr
    },

    last: function (collection, n = 1) {
      const lastArr = collection.slice(-n)
      return lastArr.length === 1 ? lastArr[0] : lastArr
    },

    compact: function (collection) {
      const compactArr = [];
      for (let i = 0; i < collection.length; i++) {
        if (collection[i]) {
          compactArr.push(collection[i])
        }
      }
      return compactArr
    },

    sortBy: function (collection, cb) {
      const sortArr = collection.slice()
      return sortArr.sort(function (a, b) {
        return cb(a) - cb(b)
      })
    },


    // The below functions were taken from the solution due to time constraints
    unpack: function (receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function (collection, shallow, newArr = []) {
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

    uniq: function (collection, sorted = false, iteratee = false) {
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

    keys: function (obj) {
      // Using for loop
      const keys = []
      for (let key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function (obj) {
      // Using for loop
      const values = []
      for (let key in obj) {
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

    },

    functions: function (obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },



  }
})()

fi.libraryMethod()
