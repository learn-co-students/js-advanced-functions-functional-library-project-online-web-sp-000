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

  }
})()

fi.libraryMethod()
