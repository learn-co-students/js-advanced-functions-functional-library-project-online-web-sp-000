const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    each: function (collection, fn) {

      if (typeof collection === "object") {
        let objArray = Object.values(collection)
        for (let i = 0; i < objArray.length; i++) {
          fn(objArray[i])
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          fn(collection[i])
        }
      }
      return collection
    },

    map: function (collection, fn) {
      const mapCollection = []
      if (typeof collection === "object") {
        let objArray = Object.values(collection)
        for (let i = 0; i < objArray.length; i++) {
          mapCollection.push(fn(objArray[i], i, objArray))
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          mapCollection.push(fn(collection[i], i, collection))
        }
      }
      return mapCollection
    },

    reduce: function (collection, fn, acc) {
      let total = 0
      let index = 0
      if (acc) {
        total = acc
      } else {
        total = collection[0]
        index = 1
      }
      for (let i = index; i < collection.length; i++) {
        let tmp = 0
        tmp = fn(0, collection[i], collection)
        if (acc && i > 0) {
          tmp = fn(0, collection[i], collection)
        }
        total += tmp
      }
      return total
    },
    find: function (collection, fn) {
      for (let i = 0; i < collection.length; i++) {
        if (fn(collection[i])) {
          return collection[i]
        }
      }
    },
    filter: function (collection, fn) {
      let arr = []
      for (let i = 0; i < collection.length; i++) {
        if (fn(collection[i])) {
          arr.push(collection[i])
        }
      }
      return arr
    },
    size: function (collection) {
      if (typeof collection === "object") {
        return Object.keys(collection).length
      } else {
        return collection.length
      }
    },

    first: function (collection, n) {
      if (n) {
        let arr = []
        for (let i = 0; i < n; i++) {
          arr.push(collection[i])
        }
        return arr
      } else {
        return collection[0]
      }
    },

    last: function (collection, n) {
      let lastIndex = collection.length - 1
      if (n) {
        let arr = []
        for (let i = lastIndex - (n - 1); i <= lastIndex; i++) {
          arr.push(collection[i])
        }
        return arr
      } else {
        return collection[lastIndex]
      }
    },

    compact: function (collection) {
      let arr = []
      for (let i = 0; i < collection.length; i++) {
        let val = collection[i]
        if (val) {
          arr.push(val)
        }
      }
      return arr
    },

    sortBy: function (collection, fn) {
      let arr = [...collection]
      return arr.sort((a, b) => fn(a) - fn(b))
    },

    flatten: function (array, oneLvl = false) {
      const flatten = (array) => array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
      if (oneLvl) {
        return array.reduce((acc, val) => acc.concat(val), [])
      } else {
        return flatten(array)
      }
    },

    uniq: function (array, isSorted, fn) {
      let final = []

      const getVals = (arr, cb) => {

        for (let i = 0; i < arr.length; i++) {
          let curr = arr[i]
          if (cb) {
            let mod = fn(curr)
            if (!final.some(e => fn(e) === mod)) {
              final.push(curr)
            }
          } else {
            if (!final.some(e => e === curr)) {
              final.push(curr)
            }
          }
        }

      }
      if (!isSorted) {
        let sorted = array.sort()
        final[0] = sorted[0]
        getVals(sorted, fn)

      } else {
        getVals(array, fn)

      }
      return final
    },

    keys: function (obj) {
      let key, keys = []
      for (key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function (obj) {
      let key, vals = []
      for (key in obj) {
        vals.push(obj[key])
      }
      return vals
    },

    functions: function (obj) {
      let methods = []
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          methods.push(key)
        }
      }
      return methods
    },
  }
})()

fi.libraryMethod()
