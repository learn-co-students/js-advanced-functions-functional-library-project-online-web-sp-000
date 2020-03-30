const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (Array.isArray(collection)) ? collection : Object.values(collection)
              for (let i = 0; i < newCollection.length; i++)
              callback(newCollection[i])
            return collection
          },

    map: function(collection, callback) {
      let newArray = (Array.isArray(collection)) ? collection : Object.values(collection)
      let newCollection = newArray.map(x => callback(x))
      return newCollection
    },

    reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
              if (predicate(collection[i]) === true) {
                return collection[i];
              }
            }
    },

    filter: function(collection, predicate) {
      const result = collection.filter(x => predicate(x))
      return result
    },

    size: function(collection) {
      let newArray = (Array.isArray(collection)) ? collection : Object.values(collection)
      return newArray.length
    },

    first: function(array, n) {
      if (n) {
        return array.slice(0, n)
      }
      else {
        return array[0]
      }
    },

    last: function(array, n) {
      if (n) {
        return array.slice(-n)
      }
      else {
        return array.slice(-1)[0]
      }
    },

    compact: function(array) {
      const collection = [];
      for (let num of array) {
        if (num) {
          collection.push(num);
        }
      }
      return collection;
    },

    sortBy: function(array, callback) {
      let newArray = [...array]
      return newArray.sort(function(a, b) {
              return callback(a) - callback(b);
            })

    },

    flatten: function(array, d) {
      function flatDeep(array, d) {
        return d > 0 ? array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []) : array.slice();
      };
      if (d === true) {
        d = 1;
      } else {
        d = Infinity;
      }
      return flatDeep(array, d);
    },

    uniq: function (array, isSorted = false, callback = (x) => x) {
     //[1, 2, 3, 6], false, (x => x % 3)
     let newCol = [];
     for (let i of array) {
       let counter = 0;
       for (let n of newCol) {
         if (callback(n) === callback(i)) {
           counter++;
         }
       }
       if (counter < 1) {
         newCol.push(i)
       }
     }
     return newCol;
   },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      const funcObj = [];
      for (const [key, val] of Object.entries(obj)) {
        if (typeof(val) === "function") {
          funcObj.push(key);
        }
      }
      return funcObj.sort();
    },


  }
})()

fi.libraryMethod()
