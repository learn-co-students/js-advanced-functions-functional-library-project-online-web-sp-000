const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newArray = Object.values(collection)
      for (let i = 0; i < newArray.length; i++) {
        callback(newArray[i])
      }
      return collection;
    },

    map: function(collection, callback) {
      const emptyArray = []
      const newArray = Object.values(collection)
      for (let i = 0; i < newArray.length; i++) {
        emptyArray.push(callback(newArray[i]))
      }
    
      return emptyArray
    },

    reduce: function (collection, callback, acc) {
      let total = (acc) ? acc : collection[0]
      let i = (acc) ? 0 : 1
      for (; i < collection.length; i++) {
        total = callback(total, collection[i])
      }
      return total
    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
      return undefined
    },

    filter: function (collection, predicate) {
      let emptyArray = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          emptyArray.push(collection[i])
        }
      }

      return emptyArray
    },

    size: function(collection) {
      let newcollection = Object.values(collection)
      return newcollection.length
    },

    first: function(collection, n) {
      if (n) {
        return collection.slice(0, n)
      }
      return collection[0]
    },

    last: function(collection, n) {
      if (n) {
        return collection.slice(-n)
      }
      return collection[(collection.length)-1]
    },
    
    compact: function(collection) {
      let newArray = []

      for (let i = 0; i < collection.length; i++) {
        if (collection[i]) {
          newArray.push(collection[i])
      }
    }
      return newArray
    },

    sortBy: function(collection, callback) {
     const newArray = [...collection]
        newArray.sort(function(a, b) {
          return callback(a) - callback(b)
        })
     return newArray
    },

    flatten: function(collection, shallow) {
      if (shallow) {
        return collection.flat()
      }
      return collection.flat(Infinity)
    }, 

    uniq: function(array, isSorted, callback) {
      const newArray = [...array] // Takes our original array and makes a new one with the same values.
      if (callback) { // First we check to see if we have a callback function present...
        const modifiedArray = new Set() // Create vars that are equal to objects ready to hold values
        const originalArray = new Set()

        for (let value of newArray) { // For each value of our newArray...
          const newValue = callback(value) // we set newValue equal to the result of passing the array value into our callback function
          if (!modifiedArray.has(newValue)) { // If our modified array object does not have this callback value...
            modifiedArray.add(newValue) // We add this new value to the to the modified array object...
            originalArray.add(value) // and add the original value passed into our original array object.
          }
        }
        return (Array.from(originalArray)) // After all the values that were the same have been removed, be return our values.
      } else if (isSorted) { // If the array is already sorted...
        return newArray.filter((value, index, array) => array.indexOf(value) === index) // we perform a filter to see if there are any duplicates
      } else {
        return newArray.filter((value, index, array) => array.indexOf(value) === index) // same here, only for unsorted arrays
      }
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      let newArray = []
      for (let key in object) {
        if (typeof object[key] === "function") {
          newArray.push(object[key])
        }
      }
      return newArray
    }
    
  }
})()

fi.libraryMethod()
