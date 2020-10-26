const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0';
    },

    each: function (collection, callback) {
      for (let element in collection) {
        callback(collection[element]);
      }
      return collection;
    },

    map: function (collection, callback) {
      let newCollection = [];
      for (let element in collection) {
        newCollection.push(callback(collection[element]));
      }
      return newCollection;
    },

    reduce: function (collection, callback, acc) {
      let i = (!!acc) ? 0 : 1;
      for (; i < collection.length; i++) {
        let total = (!!acc) ? acc : acc = collection[0];
        acc = callback(acc, collection[i], total);
      }
      return acc;
    },

    find: function (collection, predicate) {
      for (let element of Object.values(collection)) {
        if (predicate(element)) { return element; };
      }
    },

    filter: function (collection, predicate) {
      let newCollection = [];
      for (let element in collection) {
        if (predicate(collection[element])) {
          newCollection.push(collection[element]);
        }
      }
      return newCollection;
    },

    size: function (collection) {
      return Object.values(collection).length;
    },

    first: function (array, n) {
      return (!!n) ? array.slice(0, n) : array[0];
    },

    last: function (array, n) {
      return (!!n) ? array.slice(-n) : array.slice(-1)[0];
    },

    compact: function (array) {
      let newArray = [];
      for (let element in array) {
        if (!!array[element]) {
          newArray.push(array[element]);
        }
      }
      return newArray;
    },

    sortBy: function (array, callback) {
      let newArray = array.slice();
      return newArray.sort((a, b) => { return callback(a) - callback(b); });
    },

    flatten: function (array, shallow) {
      function flatDeep(array, d = 1) {
        return d > 0 ? array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
          : array.slice();
      };
      return (!!shallow) ? flatDeep(array) : flatDeep(array, Infinity);
    },

    uniq: function (array, isSorted, callback) {
      let newArray = [];
      let cbArray = [];

      if (!callback) {
        for (let element of array) {
          if (!newArray.includes(element)) { newArray.push(element); }
        }
      } else {
        for (let element of array) {
          if (!cbArray.includes(callback(element))) {
            cbArray.push(callback(element));
            newArray.push(element);
          }
        }
      }
      return newArray;
    },

    keys: function (object) {
      let keys = [];
      for (let key in object) {
        keys.push(key);
      }
      return keys;
    },

    values: function (object) {
      let values = [];
      for (let key in object) {
        values.push(object[key]);
      }
      return values;
    },

    functions: function (object) {
      const functionNames = [];
      for (let key in object) {
        if (typeof object[key] === "function") {
          functionNames.push(key);
        }
      }
      return functionNames.sort();
    },

  };
})();

fi.libraryMethod();
