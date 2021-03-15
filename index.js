const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // ✓ calls alert with each element passed
    // ✓ calls alert properly on object values
    // ✓ returns the original collection
    each: function(collection, fn) {
      if (Array.isArray(collection)) {
        collection.forEach(e => fn(e))
      } else {
        let arr = Object.values(collection);
        arr.forEach(e => fn(e))
      }
      return collection
    },

    map: function(collection, fn) {
      let newCollection = [];
      if (Array.isArray(collection)) {
        collection.forEach(e => newCollection.push(fn(e)))
      } else {
        let arr = Object.values(collection);
        arr.forEach(e => newCollection.push(fn(e)))
      }
      return newCollection
    },

    
    reduce: function(arr, fn, init) {
      let result = (!!init) ? init : arr[0]
      let i = (!!init) ? 0 : 1
      
      for (; i < arr.length; i++) {
        result = fn(result, arr[i], arr)
      }

      return result;
    },

    find: function(arr, fn) {
      let result;
      for (let i=0; i < arr.length; i++) {
        if (fn(arr[i])) {
          result = arr[i]
          return result
        }
      };
      return result
    },

    filter: function(arr, fn) {
      let result = [];
      for (let i=0; i < arr.length; i++) {
        if (fn(arr[i])) {
          result.push(arr[i])
        }
      };
      return result
    },

    size: function(collection) {
      let arr = Object.values(collection);
      return arr.length
    },

    first: function(arr, n) {
      if (n) {
        return arr.slice(0, n)
      } else {
        return arr[0]
      }
    },

    last: function(arr, n) {
      if (n) {
        return arr.slice(-n)
      } else {
        return arr[arr.length - 1]
      }
    },

    compact: function(arr) {
      let truthyArr = [];
      for (let i=0; i < arr.length; i++) {
        if (!!arr[i]) {
          truthyArr.push(arr[i])
        }
      };
      return truthyArr
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection] // Spread the collection into an array, so our modifications do not affect the original array
      return newArr.sort(function(a, b) { // Sort with compare function
        return callback(a) - callback(b) // Sort based on callback function supplied in argument
      })
    },

    flatten: function(collection, shallow, newArr = []) { // Need newArr in the arguments because we call this function INSIDE this function and need to be able to pass the newArr argument into it
      if (!Array.isArray(collection)) return newArr.push(collection) // If the collection is not an array, push it into an array and return it
      if (shallow) { // if shallow is true then flatten only one level
        for (let val of collection) // Uses for...of to repeat for-loop over iterable elements of collection
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val) // If the element is an array, unpack it. Else push it into the new array
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr) // For a deep flatten, call THIS FLATTEN FUNCTION on each element
        }
      }
      return newArr // Return the newArr
    },

    unpack: function(receiver, arr) { // Send the unpack function the newArr and the arr to unpack
      for (let val of arr) // for each element of the arr
        receiver.push(val) // Push it into newArr
    },

    uniqSorted: function(collection) {
      const sorted = [collection[0]] // Set a variable to an array hold only the first element in the collection
      for (let i = 1; i < collection.length; i++) { // For loop with i-counter set to 1 (because element at index 0 is in sorted variable)
        if (sorted[i-1] !== collection[i])  // If the element in the sorted array 1 index behind the collection index is NOT the same,
          sorted.push(collection[i]) // Push the collection element into the sorted arr
      }
      return sorted // returns a sorted array that has only had the unique elements pushed into it
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) { // If the collection is already sorted, call the unique sorted (fi.uniqSorted) method and pass it the collection
        return fi.uniqSorted(collection)
      } else if (!iteratee) { // Else if there's no callback function, return Set from...
        return Array.from(new Set(collection)) // Set makes a UNIQUE collection, each value only occurs once. Makes a new array from the Set of the collection
      } else { // Else if the collection is NOT already sorted, and there IS a callback function...
        const modifiedVals = new Set() //Create 2 new sets to hold the unique values (unmodified from the original array) and modified values
        const uniqVals = new Set()
        for (let val of collection) { // For each iterable in the collection
          const moddedVal = iteratee(val) // Invoke the callback function on the value and save it to the moddedVal variable
          if (!modifiedVals.has(moddedVal)) { // If the modifiedVals set does NOT have the moddedVal
            modifiedVals.add(moddedVal) // Add the new moddedVal to the set
            uniqVals.add(val) // Add the original, unmodified val to the uniqVals set
          }
        }
        return Array.from(uniqVals) // Return the uniqVals as an array, unmodified values, but filtered by whether their RESULTS through the callback were unique
      }
    },

    keys: function(obj) {
      return Object.keys(obj)
    },

    values: function(obj) {
      return Object.values(obj)
    },

    functions: function(obj) {
      let keys = Object.keys(obj);
      let results = [];
      for (let i=0; i < keys.length; i++) {
        if (typeof obj[keys[i]] === 'function') {
          results.push(keys[i])
        }
      }
      return results.sort()
    }


  }
})()

fi.libraryMethod()