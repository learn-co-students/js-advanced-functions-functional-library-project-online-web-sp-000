const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection;
      if (Array.isArray(collection)) {
        newCollection = collection.slice();
      } else {
        newCollection = Object.values(collection);
      };

      newCollection.forEach(element => {
        callback(element);
      });

      return collection;
    },

    map: function(collection, callback) {
      let newCollection = [];
      if (Array.isArray(collection)) {
        collection.forEach(element => {
          newCollection.push(callback(element));
        })
      } else {
        let values = Object.values(collection);
        let keys = Object.keys(collection);

        for (let i = 0; i < values.length; i++) {
          newCollection.push(callback(values[i], keys[i]));
        }
      }

      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      let reducedValue, i;
      reducedValue = acc;
      if (acc === undefined) {
        reducedValue = collection[0];
        i = 1;
      } else {
        reducedValue = acc;
        i = 0;
      };

      for (i; i<collection.length;i++) {
        reducedValue = callback(reducedValue, collection[i], collection)
      };
      return reducedValue
    },

    find: function(collection, callback) {
      let returnValue = false;
      let j = 0;

      while (returnValue === false && j < collection.length) {
        returnValue = !!(callback(collection[j]));
        j++;
      }

      if (returnValue === false) {
        return undefined;
      } else {
        return collection[j-1]
      }
    },

    filter: function(_collection, callback) {
      let returnArray = [];
      _collection.forEach(element => {
        if (!!(callback(element))) {
          returnArray.push(element);
        };
      });

      return returnArray;
    },

    size: function(_collection) {
      if (Array.isArray(_collection)) {
        return _collection.length;
      } else {
        let keys = Object.keys(_collection).length;
        return keys;
      }
    },

    first: function(collection, num) {
      let newArray = [];
      let parsedNumber;
      let i = 0;

      if (num === undefined) {
        return collection[0]
      } else {
        parsedNumber = parseInt(num, 10);
      };

      while (i < parsedNumber) {
        newArray.push(collection[i]);
        i++
      }

      return newArray;
    },

    last: function(collection, number) {
      let newArray = [];
      let parsedNumber;
      let i = 1;

      if (number === undefined) {
        return collection[collection.length - 1];
      } else {
        parsedNumber = parseInt(number, 10);
      };

      while (i <= parsedNumber) {
        newArray.unshift(collection[collection.length - i])
        i++
      };
      return newArray;
    },

    compact: function(_collection) {
      let newArray = [];
      _collection.forEach(element => {
        if (!!(element)) {
          newArray.push(element)
        };
      });

      return newArray;
    },

    sortBy: function(collection, callback) {
      let index = [];
      let callbackValues = [];
      let sortedCollection = [];

      collection.forEach(element => {
        callbackValues.push([element, callback(element)]);
      })

      if (typeof callbackValues === "string") {
        callbackValues.sort();
      } else {
        callbackValues.sort((a,b) => {
          return a[1] - b[1]
        });
      }

      callbackValues.forEach(array => {
        sortedCollection.push(array[0])
      })

      return sortedCollection;
    },

    //STUDY THIS ONE
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    //STUDY THIS ONE
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

    // uniq: function(collection, iteratee) {
    //   const sorted = [collection[0]]
    //   for (let idx = 1; idx < collection.length; idx++) {
    //     if (sorted[idx-1] !== collection[idx])
    //       sorted.push(collection[idx])
    //   }
    //   return sorted
    // },

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

    keys: function(obj) {
      const keys = [];
      for (let key in obj) {
        keys.push(key)
      }

      return keys;
    },

    values: function(obj) {
      const values = [];
      for (let key in obj) {
        values.push(obj[key])
      }

      return values;
    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key)
        }
      }

      return functionNames.sort();
    },


  }
})()

fi.libraryMethod()
