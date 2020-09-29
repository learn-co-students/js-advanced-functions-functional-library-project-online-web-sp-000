const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // Iterates over a collection of elements, passing each element in turn to a callback function.
    // Each invocation of callback is called with three arguments: (element, index, collection).
    // If collection is a JavaScript object, callback's arguments will be (value, key, collection).
    // Returns the original collection for chaining.
    each: function(collection, callback) {
      const updatedCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      for (let i = 0; i < updatedCollection.length; i++) {
        callback(updatedCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        newCollection[i] = callback(newCollection[i]);
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      let returnValue;
      let i;
      if (acc === undefined) {
        returnValue = collection[0];
        i=1;
      } else {
        returnValue = acc;
        i=0;
      }

      for (; i< collection.length; i++){
        returnValue = callback(returnValue, collection[i], collection);
      }
      return returnValue;
    },

    find: function(collection, predicate) {
      let returnValue;
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          returnValue = collection[i];
          break;
        }
      }
      return returnValue;
    },

    filter: function(collection, predicate) {
      let returnValue = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          returnValue.push(collection[i]);
        }
      }
      return returnValue;
    },

    size: function(collection) {
      let numberOfValues = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      return numberOfValues.length;
    },

    first: function(array, n) {
      if (n === undefined) {
        return array[0];
      } else {
        return array.slice(0,n);
      }
    },

    last: function(array, n) {
      if (n === undefined) {
        return array.slice(-1)[0];
      } else {
        return array.slice(-n);
      }
    },

// Returns a copy of the array with all falsy values removed.
    compact: function(array) {
      return array.filter(Boolean);
    },

    sortBy: function(array, callback) {
      let sortedArray = array.slice();
      return sortedArray.sort((x,y) => callback(x) - callback(y));
    },

    flatten: function(array, shallow=false) {
      let tf = shallow;
      let flatArr = [];

      if (tf === true) {
        flatArr = array.reduce((r, a) => r.concat(a), []);
      } else {
        soFlat(array);
      }

      function soFlat(array) {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            soFlat(array[i]);
          } else {
            flatArr.push(array[i])
          }
        }
      }
      return flatArr;
    },

    uniq: function(collection, isSorted, callback=false) {
      let sortArr = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      let newArr = [];
      let valArr = [];
      if (callback) {
        //let sortArr = array.slice();
        for (let i = 0; i < sortArr.length; i++) {
          let val = callback(sortArr[i]);
          if (!(valArr.includes(val))) {
            newArr.push(sortArr[i]);
            valArr.push(val);
          }
        }
      } else if (isSorted){

      } else {
        for (let i = 0; i < sortArr.length; i++) {
          if (!(newArr.includes(sortArr[i]))) {
            newArr.push(sortArr[i]);
          }
        }
      }
      return newArr;
    },

    keys: function(object) {
      let keys = [];
      for (const key in object) {
        keys.push(key);
      }
      return keys;
    },

    values: function(object) {
      let values = [];
      for (const key in object) {
        values.push(object[key]);
      }
      return values;
    },

    functions: function(object) {
      let keys = [];
      for (const key in object) {
        if (typeof object[key] === 'function'){
          keys.push(key);
        }
      }
      return keys.sort();
    },

  }
})()

fi.libraryMethod()
