const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (typeof collection === "Array") ? collection : Object.values(collection);

      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }

      return collection;
    },

    map: function(collection, callback) {
      if(!Array.isArray(collection)) collection = Object.values(collection);

      const newCollection = [];

      for (let i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]));
      }

      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      let finalValue = acc ? acc : collection[0];

      for(let i = 0; i < collection.length; i++) {
        if(i == 0 && finalValue === collection[0]) continue;
        finalValue = callback(finalValue, collection[i], collection);
      }

      return finalValue;
    },

    find: function(collection, predicate) {
      for(let i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) return collection[i];
      }
    },

    filter: function(collection, predicate) {
      const returnArray = [];
      for(let i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) returnArray.push(collection[i]);
      }
      return returnArray;
    },

    size: function(collection) {
      return (Array.isArray(collection)) ? collection.length : Object.keys(collection).length;
    },

    first: function(array, n) {
      return (n) ? array.slice(0, n) : array[0];
    },

    last: function(array, n) {
      return (n) ? array.slice(-1 * n) : array[array.length - 1];
    },

    compact: function(array) {
      let returnArr = [];
      for(let i = 0; i < array.length; i++) {
        if(!!array[i]) returnArr.push(array[i]);
      }
      return returnArr;
    },

    sortBy: function(array, callback) {
      let result = [...array];
      return result.sort(function(a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function(array, shallow, newArr=[]) {
      if (!Array.isArray(array)) return newArr.push(array);

      if(shallow) {
        for (let element of array) {
          if(Array.isArray(element)) {
            for (let innerEl of element) {
              newArr.push(innerEl);
            }
          } else {
            newArr.push(element);
          }
        }
      } else {
        for(let element of array) {
          this.flatten(element, false, newArr);
        }
      }

      return newArr;
    },

    uniq: function(array, isSorted, callback) {
      let myMethod = (callback) ? callback : element => element;
      let newArr = [];

      for(let i = 0; i < array.length; i++) {
        if(isSorted && i !== 0) {
          if(array[i] !== array[i-1]) newArr.push(array[i]);
        } else {
          if (!newArr.find(element => myMethod(element) === myMethod(array[i]))) newArr.push(array[i]);
        }
      }
      return newArr;
    },

    keys: function(object) {
      return Object.keys(object);
    },

    values: function(object) {
      return Object.values(object);
    },

    functions: function(object) {
      const myFuncs = [];
      for(let key in object) {
        if(typeof object[key] === "function") myFuncs.push(key);
      }

      return myFuncs.sort();
    }

  }
})()

fi.libraryMethod()
