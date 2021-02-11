const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      collection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      const newArr = []
      for (let i = 0; i < collection.length; i++){
        newArr.push(callback(collection[i]))
      }
      return newArr
    },

    reduce: function(collection, callback, accumulator) {
      if (!accumulator){
      accumulator = collection[0]
      collection = collection.slice(1)
      }
      for (let i = 0; i < collection.length; i++){
        accumulator = callback(accumulator, collection[i], collection)
      }
      return accumulator
    },

    find: function(collection, predicate) {
      collection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      collection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      const newArr = []
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          newArr.push(collection[i])
        }
      }
      return newArr
    },

    size: function(collection, predicate) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, stop) {
      return (stop) ? collection.slice(0,stop) : collection[0]
    },

    last: function(collection, start = false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length - 1]
    },

    compact: function(collection) {
      const falsySet = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(element => !falsySet.has(element))
    },

    sortBy: function(collection, callback) {
      const newArr =  [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let value of arr){
        receiver.push(value)
      }
    },



  }
})()

fi.libraryMethod()
