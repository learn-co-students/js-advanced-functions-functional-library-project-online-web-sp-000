const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
    //console.log("object given:",collection, "function given:", callback);
    if (Array.isArray(collection)){
        for (let i=0; i<collection.length; i++){
        callback(collection[i]);
        }
        return collection
      } else {
        for (let i=0; i<Object.values(collection).length; i++){
        //console.log("index:", i, "value:", Object.values(collection)[i])
        callback(Object.values(collection)[i], Object.keys(collection)[i], collection);
      }
        return collection
        }
          },

    map: function(collection, callback) {
    let newCollection = [];
    if (Array.isArray(collection)){
        newCollection = collection.map(callback)
      return newCollection
    } else {
        newCollection = Object.values(collection).map(callback)
      return newCollection
    }
    },

    reduce: function(collection, callback, acc) {
      //console.log(collection, callback, acc)
      if (acc){
      return collection.reduce(callback, acc)
    } else {
      return collection.reduce(callback)
    }

    },

    find: function(collection, predicate) {
      let found = collection.find(element => predicate(element));
      return found;
    },

    filter: function(collection, predicate) {
      let filter = collection.filter(element => predicate(element));
      return filter;
    },

    size: function(collection) {
      if (Array.isArray(collection)){
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(array, n) {
      let newArray = []
      if (n){
        for (let i=0; i<n; i++){
          newArray.push(array[i])
        }
      return newArray
      } else {
        return array[0]
      }
    },

    last: function(array, n) {
      let newArray = []
      if (n){
      //console.log(n, array)
        for (let i= array.length - n; i<array.length; i++){
          newArray.push(array[i])
          //console.log(array[i], i, n)
        }
      return newArray
      //console.log(newArray)
      } else {
        return array[array.length -1]
        //console.log(array[array.length -1])
      }
    },

    compact: function(array) {
      let newArray = array.filter(Boolean);
      return newArray
    },

    sortBy: function(array, callback) {
      let newArray = [...array];
      return newArray.sort(function(callback(a), callback(b)){return a - b})
    },

  }
})()

fi.libraryMethod()
