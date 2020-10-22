const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = (collection instanceof Array) ? collection : Object.values(collection);

      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = (collection instanceof Array) ? collection : Object.values(collection);

      let newArray = [];

      for (let i = 0; i < newCollection.length; i++ ) {
        newArray.push(callback(newCollection[i]));
      }

      return newArray;
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      let newCollection = (collection instanceof Array) ? collection : Object.values(collection);

      for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection);
      }

      return acc;
    },

    find: function(collection, predicate) {
      let newCollection = (collection instanceof Array) ? collection : Object.values(collection);

      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          return newCollection[i];
          break; }
      }
      
      return undefined;
    },

    filter: function(collection, predicate) {
      let newCollection = (collection instanceof Array) ? collection : Object.values(collection);

      let array = [];

      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          array.push(newCollection[i]);
        }
      }

      return array;
    },

    size: function(collection) { 
      return Object.values(collection).length;
    },
    
    first: function(array, n) {
      if (n) {
        return array.slice(0, n);
      } else {
        return array[0];
      }
    },

    last: function(array, n) {
      if (n) {
        return array.slice(-n);
      } else { 
        return array.slice(-1)[0];
      }
    },

    compact: function(array) {
      let newArray = [];

      for (let i = 0; i < array.length; i++ ) {
        if (!!array[i]) {
          newArray.push(array[i]);
        }
      }
      
      return newArray;
    },

    sortBy: function(array, callback) {
      let newArray = [...array];

      return newArray.sort(function(a, b) { return callback(a) - callback(b) });
    },

    // flatten: function(arr, shallow, newArr = []) {
    //   // if the element in an array is not na array, then push it onto the new function
    //   // otherwise, pry into that & startthe process again
    //   // let flattened = [];

    //   // for (const a of array) {
    //   //   if (Array.isArray(a)) {
    //   //     flattened = [...flattened, ...a];
    //   //     flattened = [...flatten(flattened)];
    //   //   } else {
    //   //     flattened.push(a);
    //   //   }
    //   // }
    //   // return flattened;

    //   for (let i = 0; i < arr.length; i++) {
    //     if(typeof(arr[i]) === 'object' && a !== null) {
    //       flatten(arr[], newArr);
    //     } else {
    //       newArr.push(arr[i]);
    //     }

    //     return newArr;
    //   }
    // },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },
    
    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object) {
      let keys = [];
      for (const a in object) {
        keys.push(a);
      }
      return keys;
    },
    
    values: function(object) {
      let values = [];
      for (const a in object) {
        values.push(object[a]);
      }
      return values;
    },

    functions: function(object) {

      let functionNames = [];

      for (const key in object) {
        if (typeof(object[key]) === 'function') { 
          functionNames.push(key);
        }
      }
       
      return functionNames.sort();
    },
    // uniq: function(array, isSorted = false) {
    //   let newArray = [...array];
    //   if (!isSorted) {
    //     newArray = newArray.sort();
    //   }

    //   let newNewArray = [];
    //   for (let i = 0; i < newArray.length; i ++) {
    //     if (newArray[i] !== newArray[i+1]) {
    //       newNewArray.push(newArray[i]);
    //     }
    //   }

    //   return newNewArray;
    // }
  }
})()

// fi.libraryMethod()
