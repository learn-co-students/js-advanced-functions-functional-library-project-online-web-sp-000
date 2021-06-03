const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, callback) {
      const newCollection =
        collection instanceof Array
          ? collection.slice()
          : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function (collection, callback) {
      const newCollection =
        collection instanceof Array
          ? collection.slice()
          : Object.values(collection);
      let newArray = [];
      for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]));
      }
      return newArray;
    },

    reduce: function (collection, callback, acc) {
      if (!acc) {
        let startingValue = collection[0];

        for (let i = 1; i < collection.length; i++) {
          startingValue = callback(startingValue, collection[i]);
          //startingValue = startingValue + element * operation
        }
        return startingValue;
      } else {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i]);
        }
        return acc;
      }
    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) == true) {
          return collection[i];
        }
      }
    },

    filter: function (collection, predicate) {
      let filteredResults = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) == true) {
          filteredResults.push(collection[i]);
        }
      }
      return filteredResults;
    },

    size: function (collection) {
      const newCollection =
        collection instanceof Array
          ? collection.slice()
          : Object.values(collection);
      let size = 0;
      for (let i = 0; i < newCollection.length; i++) {
        size = i + 1;
      }
      return size;
    },

    first: function (array, n) {
      if (n) {
        const changedArray = array.slice(0, n);
        return changedArray;
      } else {
        return array[0];
      }
    },

    last: function (array, n) {
      if (n) {
        const changedArray = array.slice(-n);
        return changedArray;
      } else {
        return array[array.length - 1];
      }
    },

    compact: function (array) {
      let temporaryArray = [];
      for (let i = 0; i < array.length; i++) {
        if (Boolean(array[i]) == true) {
          temporaryArray.push(array[i]);
        }
      }
      return temporaryArray;
    },

    sortBy: function (array, callback) {
      //if (typeof array[0] = "number") { }
      let newArray = [...array];
      return newArray.sort((a, b) => {
        return callback(a) - callback(b);
      });
    },

    uniq: function (array, isSorted, callback) {
      //console.log("array:", array)
      //maybe check and see if they give a callback
      if (callback) {
        // let changedArray = []
        // for ()
        //console.log("callback: ", callback)
        if (isSorted === false) {
          let result = new Set();
          let moddedValues = new Set();
          const sortedArray = array.sort();
          //console.log("sortedArray:", sortedArray)
          for (let i = 0; i < sortedArray.length; i++) {
            let modifiedItem = callback(sortedArray[i]);
            //console.log("modifiedItem:", modifiedItem)
            if (!moddedValues.has(modifiedItem)) {
              moddedValues.add(modifiedItem);
              result.add(sortedArray[i]);
            }
          }
          //console.log("isNotSorted", Array.from(result) )
          return Array.from(result);
        } else {
          let result = new Set();
          let moddedValues = new Set();
          for (let i = 0; i < array.length; i++) {
            let modifiedItem = callback(array[i]);
            if (!moddedValues.has(modifiedItem)) {
              moddedValues.add(modifiedItem);
              result.add(array[i]);
            }
          }
          //console.log("isSorted", Array.from(result) )
          return Array.from(result);
        }
      } else {
        let newSet = new Set(array);
        return Array.from(newSet);
      }
      return array;
    },

    keys: function (object) {
      console.log(object);
      const keys = [];

      for (const k in object) {
        keys.push(k);
      }
      return keys;
    },

    values: function (object) {
      const values = [];

      for (const k in object) {
        values.push(object[k]);
      }
      return values;
    },

    functions: function (object) {
      const keys = [];

      for (const k in object) {
        if (typeof object[k] == "function") {
          keys.push(k);
        }
      }
      return keys.sort();
    },
  };
})();

//fi.libraryMethod()

// })()

// fi.libraryMethod()
