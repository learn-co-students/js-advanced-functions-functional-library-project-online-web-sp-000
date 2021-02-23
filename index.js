const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const array = Object.values(collection)
      for (let i = 0; i < array.length; i++) {
        callback(array[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const array = Object.values(collection)
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
      }
      return newArray
    },

    reduce: function(collection, callback, acc = 0) {
      if (!acc){
        acc = collection[0]
        collection = collection.slice(1)
      }
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      const array = Object.values(collection)
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i]
      }
    },

    filter: function(collection, predicate) {
      const array = Object.values(collection)
      let newArray = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) newArray.push(collection[i]) 
      }
      return newArray
    },

    size: function(collection) {
      return Object.values(collection).length
    },

    first: function(array, n) {
      return n ? array.slice(0, n) : array[0]
    },

    last: function(array, n) {
      return n ? array.slice(-n, array[-1]) : array[array.length-1]
    },

    compact: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) newArray.push(array[i]) 
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let newArray = [...array]
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, depth = Infinity) {
      return Object.values(array).flat(depth)
    },

    uniq: function(array, isSorted = false, callback = false) {
      let newArray = []
      if (!callback) {
        newArray.push(array[0])
        for (const e of array) {
          if (newArray.includes(e) == false) {
            newArray.push(e)
          }
        }
      } else {
        let final = []
        final.push(callback(array[0]))
        newArray.push(array[0])
        for (const e of array) {
          if (final.includes(callback(e)) == false) {
            newArray.push(e)
            final.push(callback(e))
          }
        }
      }
      return newArray
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      return Object.values(object).filter((el) => typeof el == "function")
    },

  }
})()

fi.libraryMethod()
