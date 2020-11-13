const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(items, callback) {
      if (items.constructor() === []) {
        const arr = items;
      } else if (items.constructor() === {}) {
        const arr = Object.values(items);
      }
      arr.forEach(function(e) {
        callback(e)
      });
      return items;
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
