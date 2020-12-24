const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      Object.values(collection).map( e => callback(e))
      return collection;
    },

    map: function(collection, callback) {
      let values = Object.values(collection)
      let newArray = []
      for (let i = 0; i < values.length; i++) {
        newArray.push(callback(values[i]));
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      for (let i = 0; i < collection.length; i++) {
        if (!acc) {
          i = 1;
          acc = collection[0];
        }
        acc = callback(acc, collection[i]);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (let e of collection) {
        if (predicate(e)) {
          return e;
        }
      }
    },

    filter: function(collection, predicate) {
      let newArray = [];
      for (let e of collection) {
        if (predicate(e)) {
          newArray.push(e);
        }
      }
      return newArray;
    },

    size: function(collection) {
      let s = 0;
      let arr = Object.keys(collection);
      for (let e of arr) {
        s++;
      }
      return s;
    },

    first: function(array, n) {
      if (n) {
        return array.slice(0, n)
      } else {
        return array[0]
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
      let newArray = []
      for (let n of array) {
        if (n) {
          newArray.push(n);
        }
      }
      return newArray;
    },

    sortBy: function(array, callback) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    
      let newArray = array.slice();
      if (Array.isArray(newArray) && typeof newArray[0] === 'object') {
      
      //     newArray.sort(compare)

      // // sort by value
      // items.sort(function (a, b) {
      //   return a.value - b.value;
      // });

      // // sort by name
      // items.sort(function(a, b) {
      //   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      //   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      //   if (nameA < nameB) {
      //     return -1;
      //   }
      //   if (nameA > nameB) {
      //     return 1;
      //   }

      //   // names must be equal
      //   return 0;
      // })

      } else if (Array.isArray(newArray)) {
        
        function compare(a, b) {
          return callback(a) - callback(b);
        }
        return newArray.sort(compare);
      }
    },

    flatten: function(array, shallow){
      let newArray;
      function flattenOnce(array) {
        newArray = [];
        array.map(e => {
          if (Array.isArray(e)) {
            for (let a of e) {
              newArray.push(a)
            }
          } else {
            return newArray.push(e)
          } 
        })
      }
      if (shallow) {
        flattenOnce(array);
        return newArray;
      } else {
        let done = false;
        while (done === false) {
          flattenOnce(array);
          if (newArray.every(e => !Array.isArray(e))) {
            done = true;
            return newArray;
          } else {
            array = newArray
          }
        }
      }
    },

    uniq: function (array, isSorted, callback) {
      let result;
      let results = [];
      let newArray = [];
      for (let i = 0; i < array.length; i++) {

        function addToNewArray(result) {
          if (!results.some(e => e === result)) {
            results.push(result);
            newArray.push(array[i]);
            return newArray;
          }
        }

        if (!callback) {
          result = array[i];
          addToNewArray(result);
        } else if (!isSorted || array[i] !== array[i + 1]) {
          result = callback(array[i])
          addToNewArray(result);
        }
        
      }
      return newArray;
    },

    keys: function (obj) {
      let newArray =[];
      for (let k in obj) {
        newArray.push(k);
      }
      return newArray;
    },

    values: function (obj) {
      let newArray =[];
      for (let k in obj) {
        newArray.push(obj[k]);
      }
      return newArray;      
    },

    functions: function (obj) {
      let newArray =[];
      for (let k in obj) {
        if (typeof obj[k] === 'function') {
          newArray.push(k);
        }
      }
      return newArray;      
    }

  }
})()

fi.libraryMethod()
