const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let arrayCollection;
      if (typeof collection === 'object') {
        arrayCollection = Object.values(collection);
      } else {
        arrayCollection = collection;
      }
      for (let i=0; i < arrayCollection.length; i++) {
        callback(arrayCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      if (typeof collection === 'object') {
        collection = Object.values(collection);
      }
      const mappedArr = [];
      for (let i=0; i < collection.length; i++) {
        mappedArr.push(callback(collection[i]))
      } return mappedArr;
    },

    reduce: function(collection, callback, acc) {
      if (typeof collection === 'object') {
        collection = Object.values(collection);
      }
      let i;
      if (!acc) {
        acc = collection[0];
        i = 1;
      } else {
        i = 0;
      }
      for (; i < collection.length; i++) {
        acc = callback(acc, collection[i])
      } return acc;
    },

    find: function(collection, predicate) {
      if (typeof collection === 'object') {
        collection = Object.values(collection);
      }
      for (let i=0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      } return undefined;
    },

    filter: function(collection, predicate) {
      if (typeof collection === 'object') {
        collection = Object.values(collection);
      }
      let found = [];
      for (let i=0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          found.push(collection[i]);
        }
      } return found;
    },

    size: function(collection, predicate) {
      if (typeof collection === 'object') {
        collection = Object.values(collection);
      }
      return collection.length;
    },

    first: function(array, n=false) {
      if (n) {
        return array.slice(0, n);
      } else {
        return array[0];
      }
    },

    last: function(array, n=false) {
      if (n) {
        return array.slice(-n);
      } else {
        return array[array.length-1];
      }
    },

    compact: function(array) {
      let newArr = [];
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
          newArr.push(array[i]);
        }
      } return newArr;
    },

    sortBy: function(array, callback) {
      let newArr = [...array];
      return newArr.sort((a, b) => callback(a) - callback(b));
    },

    flatten: function(array, shallow=false) {
      if (shallow) {
        return array.flat(1);
      } else {
        return array.flat(Infinity);
      }
    },

    uniq: function(array, isSorted=false, callback=false) {
      const newArray = [...array]
      if(callback) {
        const modifiedArray = new Set()
        const originalArray = new Set()

        for(let value of newArray) {
          const newValue = callback(value) 
          if(!modifiedArray.has(newValue)) {
            modifiedArray.add(newValue)
            originalArray.add(value)
          } 
        }
        return(Array.from(originalArray))
      } else if(isSorted) {
        return newArray.filter((value, index, array) => array.indexOf(value) === index)
      } else {
        return newArray.filter((value, index, array) => array.indexOf(value) === index)
      }
    },

    keys: function(object) {
      const keys = [];
      for (let key in object) {
        keys.push(key);
      } return keys;
    },

    values: function(object) {
      const values = [];
      for (let key in object) {
        values.push(object[key]);
      } return values;
    },

    functions: function(object) {
      const functionValues = [];
      for (let key in object) {
        if (typeof object[key] === 'function') {
          functionValues.push(key);
        }
      } return functionValues;
    },




  }
})()

fi.libraryMethod()
