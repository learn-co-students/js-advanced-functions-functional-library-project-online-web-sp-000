const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, callback) {
      const newCollection = Object.values(collection);

      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }

      return collection;
    },

    map: function (collection, callback) {
      const updatedCollection = Object.values(collection);
      const newCollection = [];

      for (let i = 0; i < updatedCollection.length; i++) {
        newCollection.push(callback(updatedCollection[i]));
      }

      return newCollection;
    },

    reduce: function (collection, callback, accumulator) {
      let i;

      if (!!accumulator) {
        i = 0;
      } else {
        accumulator = collection[0];
        i = 1;
      }

      for (; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }

      return accumulator;
    },

    find: function (collection, callback) {
      for (let i = 0; i < collection.length; i++) {
        if (!!callback(collection[i])) return collection[i];
      }

      return undefined;
    },

    filter: function (collection, callback) {
      const foundElements = [];

      for (let i = 0; i < collection.length; i++) {
        if (!!callback(collection[i])) foundElements.push(collection[i]);
      }

      return foundElements;
    },

    size: function (collection) {
      const collectionValues = Object.values(collection);

      return collectionValues.length;
    },

    first: function (array, n = null) {
      return n ? array.slice(0, n) : array[0];
    },

    last: function (array, n = null) {
      return n
        ? array.slice(array.length - n, array.length)
        : array[array.length - 1];
    },

    compact: function (array) {
      return this.filter(array, (element) => !!element);
    },

    sortBy: function (array, callback) {
      const newArray = array.slice();

      return newArray.sort((a, b) => callback(a) - callback(b));
    },

    flatten: function (array, shallow) {
      function flatDeep(array, d = 1) {
        return d > 0
          ? array.reduce(
              (acc, val) =>
                acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
              []
            )
          : array.slice();
      }
      return !!shallow ? flatDeep(array, 1) : flatDeep(array, Infinity);
    },

    uniq: function (array, isSorted, callback) {
      const arrayCopy = array.slice();
      const finalArray = [arrayCopy.shift()];

      if (!!callback) {
        for (let i = 0; i < arrayCopy.length; i++) {
          if (
            !this.find(
              finalArray,
              (e) => callback(e) === callback(arrayCopy[i])
            )
          ) {
            finalArray.push(arrayCopy[i]);
          }
        }
      } else {
        for (let i = 0; i < arrayCopy.length; i++) {
          if (!this.find(finalArray, (e) => e === arrayCopy[i])) {
            finalArray.push(arrayCopy[i]);
          }
        }
      }
      return finalArray;
    },

    keys: function (object) {
      return Object.keys(object);
    },

    values: function (object) {
      return Object.values(object);
    },

    functions: function (functions) {
      // const functionKeys = Object.keys(this);
      const finalArray = [];

      for (const key in functions) {
        if (typeof functions[key] === "function") {
          finalArray.push(key);
        }
      }

      return finalArray.sort();
    },
  };
})();

fi.libraryMethod();
