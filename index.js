const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0';
    },

    each: function(collection, callback) {
      for (const key in collection) {
        callback(collection[key], key);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = [];

      for (const key in collection) {
        newCollection.push(callback(collection[key], key));
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      let value = acc ? acc : collection[0];
      const startingIndex = acc ? 0 : 1;

      for (let i = startingIndex; i < collection.length; i++) {
        value = callback(value, collection[i]);
      }
      return value;
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      const newCollection = [];

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newCollection.push(collection[i])
        }
      }
      return newCollection;
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

    first: function(array, n) {
      return n ? array.slice(0, n) : array[0];
    },

    last: function(array, n) {
      return n ? array.slice(-n) : array.slice(-1)[0];
    },

    compact: function(array) {
      const newArray = [];

      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray;
    },

    sortBy: function(array, callback) {
      const newArray = [...array];

      newArray.sort(function(a, b) {
        return callback(a) > callback(b);
      })
      return newArray;
    },

    flatten: function(array, shallow) {
      if (shallow) {
        return [].concat(...array)
      }

      const newArray = [];

      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          newArray.push(...fi.flatten(array[i], shallow))
        } else {
          newArray.push(array[i])
        }
      }
      return newArray;
    },

    uniq: function(array, isSorted, callback) {
      const uniqArray = [];
      const newArray = [...array]
      const transformedArray = [];

      if (!isSorted) {
        newArray.sort(function(a, b) {
          return a > b;
        })
      }

      if (!callback) {
        callback = (item) => item;
      }

      for (let i = 0; i < newArray.length; i++) {
        const item = newArray[i];
        const transformedItem = callback(item);

        if (transformedArray.indexOf(transformedItem) < 0) {
          transformedArray.push(transformedItem);
          uniqArray.push(item);
        }
      }
      return uniqArray;
    },

    keys: function(object) {
      const array = [];

      for (let key of Object.entries(object)) {
        array.push(key);
      }
      return array;
    },

    values: function(object) {
      const array = [];

      for (const value in object) {
        array.push(object[value]);
      }
      return array;
    },

    functions: function(object) {
      const array = [];

      for (const key in object) {
        if (typeof object[key] === "function") {
          array.push(key);
        }
      }
      return array.sort();
    }

  }
})()

fi.libraryMethod()