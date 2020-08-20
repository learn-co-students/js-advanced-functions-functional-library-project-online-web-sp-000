const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (var i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

        const newArray = [];

        for (var i = 0; i < collection.length; i++) {
          newArray.push(callback(collection[i]))
        }
        return newArray;
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
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i]
      }
      return undefined
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      
      let newArray = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) newArray.push(collection[i])
      }
      return newArray;
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, n) {
      return n ? collection.slice(0, n) : collection[0]
    },

    last: function(collection, n) {
      return n ? collection.slice(collection.length - n, collection.length) : collection[collection.length - 1]
    },

    // Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
    compact: function(array) {
      const bad = new Set([false, null, 0, "", undefined, NaN])
      return array.filter(el => !bad.has(el))
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },
    // fi.flatten(array, [shallow]) Flattens a nested array (the nesting can be to any depth).
    // If you pass true for the second argument, the array will only be flattened a single level.
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
      for (let i = 0; i < collection.length; i++) {
        if (sorted[i - 1] !== collection[i])
          sorted.push(collection[i])
      }
      return sorted;
    },

    uniq: function(collection, sorted=false, iteratee = false) {
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
      const keys = []
      for (let key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      const values = []
      for (let key in object) {
        values.push(object[key])
      }
      return values
    },
 
    functions: function(obj) {
      let functionNames = []
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
