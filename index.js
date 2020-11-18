const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callbackFn) {
      let values = [];
      if (collection instanceof Array) {
        values = collection.slice()
      }
      else if (typeof collection === "object") {
        values = Object.values(collection)
      }
      for (let i = 0; i < values.length; i++) {
        callbackFn(values[i])
      }
      return collection
    },

    map: function(collection, callback) {
      let values = [];
      if (collection instanceof Array) {
        values = collection.slice()
      }
      else if (typeof collection === "object") {
        values = Object.values(collection)
      }
      let result = [];
      for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i]))
      }
      return result
    },

    reduce: function(collection, callback, acc=0) {
      let values = collection.slice()
      if (!acc) {
        acc = values[0]
        values = values.slice(1)
      }
      for (let i = 0; i < values.length; i++){
        acc = callback(acc, values[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      let values = Object.values(collection)
      if (collection instanceof Array) {
        values = collection.slice()
      }
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          return values[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let values = Object.values(collection)
      let result = []
      if (collection instanceof Array) {
        values = collection.slice()
      }
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          result.push(values[i])
        }
      }
      return result
    },

    size: function(collection){
      let values = Object.values(collection)
      if (collection instanceof Array) {
        values = collection.slice()
      }
      return values.length
    },

    first: function(array, n = 1) {
      if (n === 1) {
        return array[0]
      }
      return array.slice(0, n)
    },

    last: function(array, n = 1) {
      if (n === 1) {
        return array[array.length - 1]
      }
      return array.slice(array.length - n, array.length)
    },

    compact: function(array) {
      return array.filter(element => !!element)
    },

    sortBy: function(collection, callback) {
      let values = [...collection]
      return values.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow = false) {
      let level = "Infinity"
      if (shallow) {level = 1}
      return array.flat(level)
    },

    uniq: function(array, isSorted = false, callback = false) {
      let values = Array.from(array)
      if (!!callback) {
        values = []
        let newArray = []
        let temp = Array.from(array)
        for (let i = 0; i < temp.length; i++) {
          if (!newArray.includes(callback(temp[i]))) {
            newArray.push(callback(temp[i]))
            values.push(temp[i])
            }
        }
      }
      return [...new Set(values)];
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      let functions = []
      for (const [key, value] of Object.entries(object)) {
        if (typeof value === "function") [
          functions.push(key)
        ]
      }
      let sorted = functions.sort()
      return sorted
    },
  }
})()

fi.libraryMethod()
