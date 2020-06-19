const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
          callback(collection[i]);
        }
      } else {
        for(const key in collection) {
          callback(collection[key]);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = [];
      if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
          newCollection = [...newCollection, callback(collection[i])];
        }
      } else {
        for(const key in collection) {
          newCollection = [...newCollection, callback(collection[key])];
        }
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc=0) {
      let sum = acc;
      for (let i = 0; i < collection.length; i++) {
        sum = callback(sum, collection[i], collection);
      }
      return sum;
    },

    find: function(collection, predicate) {
      let item;
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          item = collection[i];
          break;
        }
      }
      return item;
    },

    filter: function(collection, predicate) {
      let items = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          items = [...items, collection[i]];
        }
      }
      return items;
    },

    size: function(collection) {
      let i = 0;
      if (Array.isArray(collection)) {
        while (!!collection[i]) {
          i++;
        }
      } else {
        let keys = Object.keys(collection);
        while (!!keys[i]) {
          i++;
        }
      }
      return i;
    },

    first: function(collection, n=1) {
      let firstN = [];
      for (let i = 0; i < n; i++) {
        firstN = [...firstN, collection[i]];
      }
      if (firstN.length === 1) {
        firstN = firstN[0];
      }
      return firstN;
    },

    last: function(collection, n=1) {
      let lastN = [];
      for (let i = collection.length - n; i < collection.length; i++) {
        lastN = [...lastN, collection[i]];
      }
      if (lastN.length === 1) {
        lastN = lastN[0];
      }
      return lastN;
    },

    compact: function(collection) {
      let copy = [];
      for (let i = 0; i < collection.length; i++) {
        if (!!collection[i]) {
          copy = [...copy, collection[i]];
        }
      }
      return copy;
    },

    sortBy: function(array, callback) {
      let sortedArray = [array[0]];
      let j;
      for (let i = 1; i < array.length; i++) {
        j = 1;
        while(callback(sortedArray[sortedArray.length - j]) > callback(array[i])) {
          j++;
        }
        if (j === 1) {
          sortedArray.push(array[i]);
        } else if (j - 1 === sortedArray.length) {
          sortedArray.unshift(array[i]);
        } else {
          j--;
          sortedArray = [...sortedArray.slice(0, sortedArray.length - j), (array[i]), ...sortedArray.slice(sortedArray.length - j, i), ...sortedArray.slice(i + 1, sortedArray.length)];
        }
      }
      return sortedArray;
    },

    flatten: function(array, shallow=false) {
      let newArray = [];
      if (!shallow) {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            newArray = [...newArray, ...undoArray(array[i])];
            while(Array.isArray(newArray[newArray.length - 1])) {
              newArray = [...newArray.slice(0, newArray.length - 1), ...undoArray(newArray[newArray.length - 1])];
            }
          } else {
            newArray = [...newArray, array[i]];
          }
        }
      } else {
        newArray = undoArray(array);
      }
      return newArray;
      // helper function
      function undoArray(arr) {
        let undoneArray = [];
        for (let j = 0; j < arr.length; j++) {
          if (Array.isArray(arr[j])) {
            undoneArray = [...undoneArray, ...arr[j]];
          } else {
            undoneArray = [...undoneArray, arr[j]];
          }
        }
        return undoneArray;
      }
    },

    uniq: function(array, isSorted=false, callback=false) {
      let noDupes = [];
      let callbackArray = [];
      if (isSorted) {
        for(let i = 0; i < array.length; i++) {
          if (noDupes[i - 1] !== array[i]) {
            noDupes.push(array[i]);
          }
        }
      } else if (callback){
        for (let i = 0; i < array.length; i++) {
          if (callbackArray.indexOf(callback(array[i])) === -1) {
            noDupes.push(array[i]);
            callbackArray.push(callback(array[i]));
          }
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          if (noDupes.indexOf(array[i]) === -1) {
            noDupes.push(array[i]);
          }
        }
      }
      return noDupes;
    },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      let keys = Object.keys(obj);
      let fns = [];
      for(let i = 0; i < keys.length; i++) {
        if (typeof(obj[keys[i]]) === 'function') {
          fns.push(keys[i]);
        }
      }
      return fns;
    }
  }
})()

fi.libraryMethod()
