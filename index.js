const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, alert) {
      for (let element in obj) {
        alert(obj[element])
      }
      return obj
    },

    map: function(array, fn) {
      let newArr = []
      for (let element in array) {
        newArr.push(fn(array[element]))
      }
      return newArr
    },

    reduce: function(array, callback, start) {
      let memo
      if (start) {
        memo = start
        for (let i = 0; i < array.length; i++) {
          memo = callback(memo, array[i], array)
        }
      } else {
        memo = array[0]
        for (let i = 1; i < array.length; i++) {
          memo = callback(memo, array[i], array)
        }
      }
      return memo
    },

    find: function(arr, test) {
      let result = undefined;
      for (let element in arr) {
          test(element)
      };
      return result;
    },

    filter: function() {

    },

    size: function(obj) {
      let counter = 0
      for (let element in obj) {
        counter += 1
      }
      return counter
    },

    first: function(obj, n) {
      if (n) {
        return obj.slice(0, n)
      } else {
        return obj[0]
      }
      
    },

    last: function(obj, n) {
      if (n) {
        return obj.slice(obj.length - n, obj.length)
      } else {
        return obj[obj.length - 1]
      }
    },

    compact: function() {

    },

    sortBy: function() {

    },

    flatten: function() {

    },

    uniq: function() {

    },

    keys: function(obj) {
      let result = []
      for (let element in obj) {
        result.push(element)
      }
      return result
    },

    values: function(obj) {
      let result = []
      for (let element in obj) {
        result.push(obj[element])
      }
      return result
    },

    functions: function(obj) {
      let result = []
      for (let element in obj) {
        if (typeof obj[element] === "function") {
          result.push(element)
          console.log(element)
        }
      }
      return result.sort();
    },


  }
})()

fi.libraryMethod()
