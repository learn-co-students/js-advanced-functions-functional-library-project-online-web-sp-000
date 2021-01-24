const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection; 
    },

    map: function(collection, callback) {
      const mappedCollection = []; 
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection); 
      for (let i = 0; i < newCollection.length; i++) {
        mappedCollection.push(callback(newCollection[i])); 
      }
      return mappedCollection; 
    },

    reduce: function(collection, callback, acc) {
      let newAcc = acc; 
      let i = 0; 
      if (!acc) {
        newAcc = collection[0];
        i = 1; 
      } 
      for (; i < collection.length; i++) {
        newAcc = callback(newAcc, collection[i], collection);
      }
      return newAcc; 
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
      const filteredCollection = []; 
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          filteredCollection.push(collection[i]); 
        }
      }
      return filteredCollection; 
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length; 
    },

    first: function(collection, n) {
      return n ? collection.slice(0, n) : collection[0]
    },

    last: function(collection, n) {
      return n ? collection.slice(collection.length - n) : collection[collection.length - 1]
    }, 

    compact: function(array) {
      const compactArr = []; 
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          compactArr.push(array[i]); 
        }
      }
      return compactArr; 
    }, 

    sortBy: function(array, callback) {
      const arrToSort = [];
      const sortMap = {}; 
      for (let i = 0; i < array.length; i++) {
        let mappedValue = callback(array[i]); 
        arrToSort.push(mappedValue); 
        sortMap[mappedValue] = array[i]; 
      }
      arrToSort.sort(function(a, b) {return a - b}); 
      const sortedArr = []; 
      for (let i = 0; i < arrToSort.length; i++) {
        sortedArr.push(sortMap[arrToSort[i]]); 
      }
      return sortedArr; 
    }, 

    flatten: function(array, single) {
      const flattenedArr = [] 
      for (let i = 0; i < array.length; i++) {
        if (typeof array[i] != 'object') {
          flattenedArr.push(array[i]); 
        }
        else {
          if (single) {
            flattenedArr.push(...array[i]);
          }
          else {
            flattenedArr.push(...fi.flatten(array[i])); 
          }
        }
      }
      return flattenedArr; 
    },

    uniq: function(array, isSorted, callback) {
      const uniqArr = []; 
      if (callback) {
        const cbArr = []; 
        for (let i = 0; i < array.length; i++) {
          if (! cbArr.includes(callback(array[i]))) {
            cbArr.push(callback(array[i])); 
            uniqArr.push(array[i]); 
          }
        }
      } else if (isSorted) {
        let prevVal = array[0]; 
        uniqArr.push(prevVal); 
        for (let i = 1; i < array.length; i++) {
          if (array[i] != prevVal) {
            uniqArr.push(array[i]); 
          }
          prevVal = array[i]; 
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          if (! uniqArr.includes(array[i])) {
            uniqArr.push(array[i]); 
          }
        }
      }
      return uniqArr; 
    }, 

    keys: function(object) {
      const keys = []; 
      for (let key in object) {
        keys.push(key); 
      }
      return keys; 
    }, 

    values: function(object) {
      const values = []; 
      for (let key in object) {
        values.push(object[key]); 
      }
      return values; 
    }, 

    functions: function(object) {
      const functions = []; 
      for (let key in object) {
        console.log(typeof key); 
        console.log(object[key]); 
        if (typeof object[key] === 'function') {
          functions.push(key);
        }
      }
      console.log('functions:');
      console.log(functions); 
      // return fi.sortBy(function () {return val}); 
      return functions.sort(function(a, b) {return a - b}); 
    }
  }
})()

fi.libraryMethod()
