const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      // calls alert with each element passed
      // calls alert properly on object values
      // returns the original collection
      if (Array.isArray(collection) == true) {
        // iterates over a collection of elements
        for (const element of collection) {
          // passes each element in turn to a callback function
          cb(element, collection)
        }
      } else {
        for (let key in collection) {
          // if collection is a js obj, callback's argument will be value, key, collection
          cb(key, collection[key], collection)
        }
      }
      return collection;
    },

    map: function(collection, cb) {
      // successfully returns a correctly populated array
      // successfully returns a correctly populated array from modified object values
      let newArray = [];
      if (Array.isArray(collection)===true) {
        for (const element of collection) {
          let newVal = cb(element, collection)
          newArray.push(newVal)
        }
      } else {
        for (let key in collection) {
          let newVal = cb(collection[key])
          newArray.push(newVal)
        }
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

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) return collection[idx]

      return undefined
    },
    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

        const newArray = []

        for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i]))
        newArray.push(collection[i])
        return newArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length:Object.keys(collection).length

    },

    first: function(array, stop=false) {
      return (stop) ? array.slice(0,stop) : array[0]
    },

    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      const stuff = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(el => !stuff.has(el))
    },

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

keys: function(obj) {
  // Using for loop
  const keys = []
  for (let key in obj){
    keys.push(key)
  }
  return keys
},

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
