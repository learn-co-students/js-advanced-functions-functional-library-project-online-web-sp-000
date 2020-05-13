const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

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
      const updatedCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      return updatedCollection.length;
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

    compact: function(array) {
      return array.filter(Boolean);
    },

    sortBy: function(array, callback) {
      let newArr = array.slice();
      return newArr.sort((a, b) => callback(a) - callback(b));
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

    uniq: function(array, isSorted, callback) {
      let newArr = [];
      if (callback !== undefined) {
        newArr = array.slice();
        newArr.sort((a, b) => callback(a) - callback(b));
      } else if (isSorted){
        for (let i = 0; i < array.length; i++) {
          if (array[i]>array[i-1]){
            newArr.push(array[i]);
          }
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          if (!(newArr.includes(array[i]))) {
            newArr.push(array[i]);
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
        keys.push(key);
      }
      return keys.sort();
    },
  }
})();

fi.libraryMethod()
