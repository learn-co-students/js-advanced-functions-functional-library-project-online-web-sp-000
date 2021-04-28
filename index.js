const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const key in collection) {
        callback(collection[key], key, collection);
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      for (const key in collection) {
        newCollection.push(callback(collection[key], key, collection))
      }
      return newCollection

    },

    reduce: function(collection, callback, acc) {
      let i = typeof acc === "undefined" ? 1 : 0;
      let memo = typeof acc === "undefined" ? collection[0] : acc;
      for(; i < collection.length; i++) {
        memo = callback(memo, collection[i], collection);
      }
      return memo
    },

    functions: function(object) {
      let answer = []
      for (const key in object) {
        if (typeof(object[key]) === "function" ) {
          answer.push(key);
        }
      }
      return answer
    },

    find: function(collection, predicate) {
      let bool;
      for (const key in collection) {
        if (predicate(collection[key])) {
          return bool = collection[key]
        }
      }
      return bool
    },

    filter: function(collection, predicate) {
      let answer = [];
      for (const key in collection) {
        let thisRound = predicate(collection[key]);
        if (thisRound) {
          answer.push(collection[key]);
        }
      }
      return answer
    },

    size: function(collection) {
      let count = 0;
      for (const key in collection) {
        count ++;
      }
      return count
    },

    first: function(collection, num) {
      if (!num) {
        return collection[0]
      } else {
        let items = [];
        for (let i = 0; i < num; i++ ) {
          items.push(collection[i])
        }
        return items
      }
    },

    last: function(collection, num) {
      if (!num) {
        return collection[collection.length - 1]
      } else {
        let items = [];
        let lastIndex = collection.length - 1
        for ( let i = lastIndex; i > (lastIndex - num); i-- ) {
          items.push(collection[i]);
        }
        return items.reverse();
      }
    },

    compact: function(array) {
      let items = [];
      for (const element in array) {
        let bool = array[element]
        if (bool) {
          items.push(bool);
        }
      }
      return items;
    },

    sortBy: function(array, callback) {
      let arrayCopy = array.slice();
      return arrayCopy.sort( function(a, b) {
        return callback(a) - callback(b);
      })
    },

    flatten: function(array, onlyOneDepth = false) {
      const newArray = [];

      function recurse(collection = [], depth = 0) {
        if (onlyOneDepth && depth > 1) {
          newArray.push(collection);
          return;
        }

        if (typeof collection !== "object") {
          newArray.push(collection);
          return;
        }

        for (const element of collection) {
          recurse(element, depth + 1);
        }
      }

      recurse(array);

      return newArray;

      if (boolean === true) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
          if (typeof(array[i]) === "number") {
            newArray.push(array[i]);
          } else {
            let thisArray = array[i].slice();
            for (let o = 0; o < thisArray.length; o++) {
              newArray.push(thisArray[o]);
            }
          }
        }
        return newArray
      } else {
        let noNestArray = [];
        let unnesting = (array) => {
          for (let i = 0; i < array.length; i++) {
            if (typeof(array[i]) === "number") {
              noNestArray.push(array[i]);
            } else {
              let thisArray = array[i].slice()
              unnesting(thisArray);
            }
          }
        }
        unnesting(array);
        return noNestArray
      }
    },

    uniq: function(array, isSorted, callback) {
      //didn't use is sorted, can apparently simplify if it is
      let newArray = [];

      if (callback) {
        let callbackValues = [];
        for (let i = 0; i < array.length; i++) {
          let thisRound = callback(array[i]);
          if (!callbackValues.includes(thisRound)) {
            newArray.push(array[i]);
          }
          callbackValues.push(thisRound);
        }

      } else {
        for (let i = 0; i < array.length; i++) {
          if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
          }
        }
      }

      return newArray
    },

    keys: function(object) {
      let keys = [];
      for (const key in object) {
        keys.push(key);
      }
      return keys
    },

    values: function(object) {
      let values = [];
      for (const key in object) {
        values.push(object[key]);
      }
      return values
    }

  }
})()

fi.libraryMethod()
