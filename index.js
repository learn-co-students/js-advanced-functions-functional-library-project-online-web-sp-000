const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const obj = Object.assign({}, collection);
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        callback(collection[keys[i]], keys[i], obj);
      }
      return collection;
    },

    map: function(collection, callback) {
      const obj = Object.assign({}, collection);
      const keys = Object.keys(obj);
      const array = [];
      for (let i = 0; i < keys.length; i++) {
        array.push(callback(collection[keys[i]], keys[i], obj));
      }
      return array;
    },

    reduce: function(collection, callback, acc) {
      const obj = Object.assign({}, collection);
      const keys = Object.keys(obj);
      let total = acc === undefined ? 0 : acc;
      for (let i = 0; i < keys.length; i++) {
        total = callback(total, collection[keys[i]], obj);
      }
      return total;
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      const result = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        } 
      }
      return result;
    },

    size: function(collection) {
      const keys = Object.keys(collection);
      return keys.length;
    },

    first: function(array, num = 1) {
      const result = [];
      if (num === 1) {
        return array[0];
      } else {
        for (let i = 0; i < num; i++) {
          result.push(array[i]);
        }
      }
      return result;
    },

    last: function(array, num = 1) {
      const result = [];
      if (num === 1) {
        return array[array.length - 1];
      } else {
        for (let i = num; i > 0; i--) {
          result.push(array[array.length - i]);
        }
      }
      return result;
    },

    compact: function(array) {
      const result = [];
      for (let i = 0; i < array.length; i++) {
        if(array[i]) {
          result.push(array[i]);
        } 
      }
      return result;
    },

    sortBy: function(array, callback) {
      const copy = array.slice();
      // const result = [];
      // for (let i = 0; i < copy.length; i++) {
      //   result.push(callback(copy[i]));
      // }
      return copy.sort((a, b) => callback(a) - callback(b));
    },

    flatten: (array, shallow) => {
      const result = [];
      for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'object') {
          result.push(array[i]);
        } else if (shallow === true) {
          array[i].map(el => result.push(el));
        } else {
          let recurse = fi.flatten(array[i]);
          for (let i = 0; i < recurse.length; i++) {
            result.push(recurse[i]);
          }
        }; 
      }
      return result;
    },

    uniq: (array, isSorted, callback) => {
      if (callback) {
        const copy = array.map(el => callback(el));
        for (let i = 0; i < array.length - 1; i++) {
          for (let j = i + 1; j < array.length; j++) {
            if (copy[i] === copy[j]) {
              array.splice(j, 1);
            }
          }
        }
        return array;
      }
      if (!isSorted) {
        array.sort((a, b) => a - b);
      } 
      for (let i = array.length - 1; i > 0; i--) {
        if (array[i] === array[i-1]) {
          array.splice(i, 1);
        }
      }
      return array;
    },

    keys: (obj) => Object.keys(obj),

    values: (obj) => {
      return Object.values(obj);
    },

    functions: function(obj) {
      const keys = Object.keys(obj);
      const values = Object.values(obj);
      const result = [];
      keys.map(e => {
        if (typeof obj[e] === 'function') {
          result.push(e);
        }
      });
      return result;
    },


  }
})()

fi.libraryMethod()
