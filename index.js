const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // Iterates over a collection of elements,
      let collectionofelements = (collection instanceof Array) ? collection.slice(): Object.values(collection)       // callback's arguments will be (value, key, collection).

      // passing each element in turn to a callback function.
      for (let i = 0; i < collectionofelements.length; i++)
        // Each invocation of callback is called with three arguments:
        // (element, index, collection).
        callback(collectionofelements[i])
      // Returns the original collection for chaining.
      return collection
    },

    map: function(collection, callback) {
      // Produces a new array of values
      if(!(collection instanceof Array))
        collection = Object.values(collection)

      let newcollection = []
      // by mapping each value in collection through a transformation function (callback).
      // The callback is passed three arguments:
      // the value, then the index (or key) of the iteration, and finally a reference to the entire collection.
      for (let i = 0; i < collection.length; i++)
      newcollection.push(callback(collection[i]))
      // Returns a new collection for chaining without modifying the original.
      return newcollection
    },

    reduce: function(collection, callback, acc) {
      let newcollection = []
			if (!!acc) {
        newcollection = collection.slice(0)
      } else {
        acc = collection[0]
        newcollection = collection.slice(1)
      }
			for (let i = 0; i < newcollection.length; i++) {
				acc = callback(acc, newcollection[i], newcollection)
			}
			return acc;
    },

    find: function(collection, predicate) {
      // Looks through each value in the collection,
      // returning the first one that passes a truth test (predicate),
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]))
          return collection[i]
      }
      // or undefined if no value passes the test.
      return undefined
      // The function returns as soon as it finds an acceptable element,
      // and doesn't traverse the entire collection.

    },

    filter: function(collection, predicate) {
      // empty array
      let newcollection = []
      // loop through the array elements.
      // Looks through each value in the collection,
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]))
        newcollection.push(collection[i])
      }
      // returning an array of all the values that pass a truth test (predicate).
      return newcollection
    },

    size: function(collection) {
      // Return the number of values in the collection.
      if (collection.isArray) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(array, n=false) {
      // Returns the first element of an array. Passing n will return the first n elements of the array.
      if (n) {
        return array.slice(0,n)
      } else {
        return array[0]
      }
    },

    last: function(array, n=false) {
      // Returns the last element of an array.
      // Passing n will return the last n elements of the array.
      if (n) {
        return array.splice(array.length-n,array.length)
      } else {
        return array[array.length-1]
      }
    },

    compact: function(array) {
      // Returns a copy of the array with all falsy values removed.
      // In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
      let newarray = array.filter(Boolean);
      return newarray
    },

    sortBy: function(array, callback) {
      // ranked in ascending order by the results of running each value through callback.
      // The values from the original array should be retained within the sorted copy,
      let newarray = array.slice()
      return newarray.sort(function(a,b){
        return callback(a) - callback(b)
      })
      // just in ascending order.

      // Returns a sorted copy of array,
    },

    flatten: function(array, shallow, newArray=[]) {

        let app = Array.from(new Set(array))
        if (shallow == undefined) {
          return app.flat(Infinity);
        } else {
          return app.flat(1);
        }

    },

    uniq: function(array, isSorted=false, iteratee) {
      if (isSorted) {
        let arraySorted = [array[0]]
        for (let i = 1; i < array.length; i++) {
          if (!arraySorted[array[i]])
          arraySorted.push(array[i])
        }
        return arraySorted
      } else if (!iteratee) {
        let app = Array.from(new Set(array))
        return app
      } else {
        let arrayOne = []
        let arrayTwo = []
        for (let i of array) {
          let changedI = iteratee(i)
          if (!arrayOne.includes(changedI)) {
            arrayOne.push(changedI)
            arrayTwo.push(i)
          }
        }
        return arrayTwo
      }
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      // Returns a sorted collection of the names of every function in an object —
      // that is to say, the name of every property whose value is a function.
      let result = []
      for (let m in object) {
        if(typeof object[m] == "function") {
          result.push(m)
        }
      }
      return result
    },

  }
})()

fi.libraryMethod()
