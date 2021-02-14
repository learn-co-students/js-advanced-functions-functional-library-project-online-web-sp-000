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

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
