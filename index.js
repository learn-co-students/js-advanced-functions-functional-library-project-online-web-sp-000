const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const key in collection) {
        callback(collection[key], key, collection);
      }
      return collection
    },

    map: function(collection, callback) {
      const newArray = [];
      for (const key in collection) {
        newArray.push(callback(collection[key], key, collection));
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      //if no acc is supplied,
      //first run through the loop is just added to the acc with no pass through the function
      // let memo = collection[0];
      // for (let i = 1, i < collection.length, i++) {
      //   memo = callback(memo, element, collection);
      // }
      // return memo;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
