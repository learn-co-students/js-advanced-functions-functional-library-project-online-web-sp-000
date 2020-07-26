/*

Given the same input your functions should always return the same value.

Below you will find a list of function descriptions detailing what their name, parameters and return value 
should be. Your job is to develop the code to implement these functions.

The entire fi library should be wrapped in an Immediately Invoked Function Expression (IIFE)
*/



const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    /*
    fi.each
    fi.each(collection, callback)
    Iterates over a collection of elements, passing each element in turn to a callback
    function. Each invocation of callback is called with three arguments: (element, index, collection). 
    If collection is a JavaScript object, callback's arguments will be (value, key, collection).
    Returns the original collection for chaining.

        each
      ✓ calls alert with each element passed
      ✓ calls alert properly on object values
      ✓ returns the original collection

    */
    each: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let idx = 0; idx < newCollection.length; idx++)
        iteratee(newCollection[idx])

      return collection
    },

    /*
    fi.map
    fi.map(collection, callback)
    Produces a new array of values by mapping each value in collection through a transformation 
    function (callback). The callback is passed three arguments: the value, then the index
    (or key) of the iteration, and finally a reference to the entire collection. 
    Returns a new collection for chaining without modifying the original.

        map
      ✓ successfully returns a correctly populated array
      ✓ does not modify the original array
      ✓ successfully returns a correctly populated array from modified object values
      ✓ does not modify the original object
    */

    map: function(collection, iteratee) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = []

      for (let idx = 0; idx < collection.length; idx++)
        newArr.push(iteratee(collection[idx]))

      return newArr
    },

    /*
    fi.reduce
    fi.reduce(collection, callback, acc)
    Reduce boils down a collection of values into a single value. Acc (short for accumulator) 
    starts as the initial state of the reduction, and with each successive step it should be 
    accumulate the return value of callback. The callback is passed three arguments: 
    the acc, the current value in our iteration (the element in the array), and finally 
    a reference to the entire collection.

        reduce
      ✓ returns the correct reduced value when passed an initial value
      ✓ returns the correct reduced value when not passed an initial value
      ✓ does not modify the original array
    */
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
    
    /*
    fi.find
    fi.find(collection, predicate)
    Looks through each value in the collection, returning the first one that passes a truth 
    test (predicate), or undefined if no value passes the test. The function returns as soon 
    as it finds an acceptable element, and doesn't traverse the entire collection.

    find
      ✓ returns the value if found
      ✓ does not traverse the whole array if the value is found early
      ✓ returns undefined if the value is not present

    */

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) return collection[idx]

      return undefined
    },

    /*
    fi.filter
    fi.filter(collection, predicate)
    Looks through each value in the collection, returning an array of all the values that pass 
    a truth test (predicate).

    filter
      ✓ correctly filters for values that the callback evaluates as true
    */
    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = []

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) newArr.push(collection[idx])

      return newArr
    },
    /*
    fi.size
    fi.size(collection)
    Return the number of values in the collection.

    size
      ✓ correctly returns the size of the collection when an array is passed
      ✓ correctly returns the size of the collection (amount of keys) when an object is passed
    */
    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    /*
    Array Functions
    */

    /*
    fi.first
    fi.first(array, [n])
    Returns the first element of an array. Passing n will return the first n elements of the array.

    first
      ✓ returns the first element of the collection
      ✓ returns the first n elements of the collection when the second optional argument (n) is provided
    */

    first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    },
    
    /*
    fi.last
    fi.last(array, [n])
    Returns the last element of an array. Passing n will return the last n elements of the array.

    last
      ✓ returns the last element of the collection
      ✓ returns the last n elements of the collection when the second optional argument (n) is provided
    */
    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    /*
    fi.compact
    fi.compact(array)
    Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "",
     undefined and NaN are all falsy.

     compact
      ✓ returns a copy of the **array** with all falsy values removed. In JavaScript, _false_, _null_, _0_, _""_, _undefined_ and _NaN_ are all falsy.
      ✓ does not modify the original array
    */
    compact: function(collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(el => !badBad.has(el))
    },

    /*
    fi.sortBy
    fi.sortBy(array, callback)
    Returns a sorted copy of array, ranked in ascending order by the results of running each value 
    through callback. The values from the original array should be retained within the sorted copy, 
    just in ascending order.

    sortBy
      ✓ correctly sorts arrays of integers and arrays of strings
      ✓ does not modify the original arrays
      ✓ correctly sorts arrays of integers with non-standard sort
    */
    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

 
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    /*
    fi.flatten (bonus function)
    fi.flatten(array, [shallow]) Flattens a nested array (the nesting can be to any depth).
    If you pass true for the second argument, the array will only be flattened a single level.
    
    flatten
      ✓ correctly flattens a ludicrously nested array
      ✓ correctly flattens a single level when a second argument of "true" is passed
    */
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

    /*
    fi.uniq
    fi.uniq(array, [isSorted], [callback])
    Produces a duplicate-free version of the array, using === to test object equality. 
    In particular only the first occurrence of each value is kept.
    fi.uniq([1, 2, 1, 4, 1, 3]);
     => [1, 2, 4, 3]
    If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm.
    fi.uniq(['a', 'a', 'b', 'c', 'e', 'e', 'e', 'e'], true)
    => ['a', 'b', 'c', 'e']
    If you want to compute unique items based on a transformation, pass a callback function.
    Specifically, if the callback function returns the same value that a previous execution 
    of the callback also returned, we don't include that item in the return array - even if 
    the original array's elements are different. 
    The output array will be made up of a subset of the values of the original array - not the transformed values.
    fi.uniq([1, 2, 3, 6], false, (x => x % 3));
    => [1, 2, 3]
    fi.uniq([4,8,6,5,7], false, (x => x % 3));
    => [4,8,6]

        uniq
      ✓ removes duplicate values from an array [ 1, 2, 3 ]
      ✓ removes duplicate values from an array when an iteratee is applied
    */
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

    /*
    Object Functions
    */

    /*
    fi.keys
    fi.keys(object)
    Retrieve all the names of the object's own enumerable properties.

    keys
      ✓ retrieves all the names of the object's own enumerable properties
      ✓ does not modify the original object you crazy DOGE!
    */

    keys: function(obj) {
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    /*
    fi.values
    fi.values(object) Return all of the values of the object's own properties.

    values
      ✓ retrieves all the values of the object's own properties
      ✓ does not modify the original object you crazy DOGE!
    */
    values: function(obj) {
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

    },

    /*
    fi.functions
    fi.functions(object)
    Returns a sorted collection of the names of every function in an object — that is to say, 
    the name of every property whose value is a function.

    functions
      ✓ returns a sorted collection of the names of every method in an object
    */
    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()
