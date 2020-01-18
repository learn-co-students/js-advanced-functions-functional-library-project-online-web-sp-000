const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          cb(collection[i], i, collection)
        }
      } else {
        for (let i = 0; i < Object.keys(collection).length; i++) {
          cb(Object.values(collection)[i], Object.keys(collection)[i], collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      if (Array.isArray(collection)) {
        return collection.map(e => callback(e));
      } else {
        return Object.values(collection).map(e => callback(e))
      }
    },

    filter: function(collection, predicate) {
      return collection.filter(e => predicate(e))
    },

    size: function(collection) {
      return (Array.isArray(collection)) ? collection.length : Object.keys(collection).length;
    },

    reduce: function(collection, callback, acc) {
      if (acc) {
        return collection.reduce(callback, acc)
      } else {
        return collection.reduce(callback)
      }
    },

    first: function(arr, num = 1) {
      let returnVal = [];
      for (let i = 0; i < num; i++) {
        returnVal.push(arr[i])
      }
      return (returnVal.length === 1 ? returnVal[0] : returnVal);
    },

    last: function(arr, num = 1) {
      let returnVal = [];
      for (let i = arr.length - num; i < arr.length; i++) {
        returnVal.push(arr[i])
      }
      return (returnVal.length === 1 ? returnVal[0] : returnVal);
    },

    compact: function(arr) {
      return arr.filter(e => !!e === true);
    },

    find: function(collection, predicate) {
      return collection.find(e => predicate(e))
    },

    keys: function(obj) {
      return Object.keys(obj)
    },

    values: function(obj) {
      return Object.values(obj)
    },

    functions: function(collection) {
      let arrayOfFunctions = Object.values(collection).filter(e => (typeof e) === 'function')
      return arrayOfFunctions.sort()
    },

    uniq: function(array, isSorted, callback) {
      let returnArray = [];
      let initialArray = [];
      if (callback) {
        array.forEach(element => {
          if (!initialArray.includes(callback(element))) {
            returnArray.push(element)
            initialArray.push(callback(element))
          }
        })
      } else {
        array.forEach(element => {
          if (!returnArray.includes(element)) {
            returnArray.push(element)
          }
        })
      }
      return returnArray;
    },

    flatten: function(array, shallow = false) {

      const returnArray = [];
      function innerFunction(array) {
        array.forEach(element => {
          if (Array.isArray(element)) {
            innerFunction(element)
          } else {
            returnArray.push(element)
          }
        })
      }

      if (shallow) {
        array.forEach(e => {
          if (Array.isArray(e)) {
            e.forEach(innerE => {returnArray.push(innerE)})
          } else {
            returnArray.push(e)
          }
        })
      } else {
        innerFunction(array)
      }

      return returnArray
    },

    sortBy: function(array, callback) {
      let x = array.slice().sort((a, b) => callback(a) - callback(b))
      return x;
    },

  }
})()

fi.libraryMethod()