const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

  

    each: function(collection, callback) {
      if (collection instanceof Array) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else {
        for (let key in collection) {
          //callback args are value, key, collection
          callback(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newArray = [];
      if (collection instanceof Array) {
        for (let i = 0; i < collection; i++) {
          newArray.push(callback(collection[i], i, collection))
        }

      } else {
        for (let key in collection) {
          newArray.push(callback(collection[key], key, collection))
        }
      }
      return newArray
     },

     reduce: function (collection, callback, accum) {
      let i = 0
      if (!accum) {
        accum = collection[0]
        i++
      }
      for (; i < collection.length; i++){
        accum = callback(accum, collection[i], collection)
      }
      return accum
    },

  
    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (!!predicate(collection[i])) {
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      let newArray = []
      for (let i = 0; i < collection.length; i++) {
        if (!!predicate(collection[i])) {
          newArray.push(collection[i]);
        }
      }
      return newArray
    },

    size: function(collection) {
      let numElements = 0;
      let values = (collection instanceof Array) ? collection : Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (!!values[i]) {
          numElements++;
        }
      }
      return numElements;
    },

    first: function(collection, n) {
      let newArray = []
      if (!!n) {
        for (let i = 0; i < n; i++) {
          newArray.push(collection[i])
        }
        return newArray
      } else {
        return collection[0]
      }
      
    },

    last: function(collection, n) {
      let newArray = []
      if (!!n) {
        for (let i = collection.length - n; i < collection.length; i++) {
          newArray.push(collection[i])
        }
        return newArray
      } else {
        return collection[collection.length-1]
      }
    },

    compact: function(collection) {
      let newArray = []
      for (let i = 0; i < collection.length; i++) {
        if (!!collection[i]) {
          newArray.push(collection[i])
        }
      }
      return newArray

    },

    sortBy: function(collection, callback) {
      let copy = collection.slice()
      return copy.sort((a, b) => {return callback(a) - callback(b)});
    }, 

    flatten: function(nestedArray, shallow) {
      if (!!shallow) {
        return nestedArray.flat(1);
      } else {
        return nestedArray.flat(Infinity);
      }
    },
     
    uniq: function(array, isSorted, callback) {
      let uniqueArray = []
      if (!!callback){
        let results = [];
        let originalValues = [];
        for (let i = 0; i < array.length; i++){
          if (!results.includes(callback(array[i]))){
            results.push(callback(array[i]));
            originalValues.push(array[i])
          }
        }
        uniqueArray = [...originalValues];
      } else {
        //A value in the Set may only occur once;
        uniqueArray = [...new Set(array)];
      }
      
      return uniqueArray;
    },

    keys: function(obj) {
      let keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      let values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
    },

    functions: function(obj) {
      let functions = []
      for (let key in obj){
        if (typeof obj[key] === "function"){
          functions.push(key)
        }
      }
      return functions.sort()
    }
    
  }
})()

fi.libraryMethod()
