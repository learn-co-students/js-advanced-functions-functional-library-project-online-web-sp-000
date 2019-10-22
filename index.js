const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
      newCollection.forEach(function(element) {
        callback(element);
      })
      return collection;
    },

    map: function(collection, callback) {
      if (!Array.isArray(collection))
        collection = Object.values(collection)

      const newArray = []

      for (let i = 0; i < collection.length; i++)
        newArray.push(callback(collection[i]))

      return newArray
    },

    reduce: function(collection, callback, acc) {
      let i = 0;
      if (!acc) {
        acc = collection[0]
        i++
      }
      for(; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) return collection[i]

      return undefined
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArray = []

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) newArray.push(collection[i])

      return newArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    },

    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      const falsy = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(el => !falsy.has(el))
    },

    sortBy: function(collection, callback) {
      const newArray = [...collection]
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(reciever, arr) {
      for (let val of arr)
      reciever.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
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

    uniq: function(collection, sorted, callback) {
      let newArray = []
      if (!!callback) {
        let results = [];
        let originalValues = [];
        for (let i = 0; i < collection.length; i++) {
          if (!results.includes(callback(collection[i]))) {
            results.push(callback(collection[i]));
            originalValues.push(collection[i])
          }
        }
        newArray = [...originalValues];
      } else {
        newArray = [...new Set(collection)];
      }
      return newArray;
    },

    keys: function(obj) {
      const keys= []
      for (let key in obj) {
        keys.push(key)
      }
      return keys;
    },

    values: function(obj) {
      const values = []
      for (let key in obj) {
        values.push(obj [key])
      }
      return values;
    },

    functions: function(obj) {
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
