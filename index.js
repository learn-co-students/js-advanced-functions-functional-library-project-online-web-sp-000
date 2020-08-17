const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let index = 0; index < newCollection.length; index++)
        callback(newCollection[index])

      return collection
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let mapped = []

      for (let index = 0; index < newCollection.length; index++)
        mapped.push(callback(newCollection[index]))

      return mapped
    },

    reduce: function(c, callback, acc) {
      let collection = c.slice(0)
      let len = collection.length;

        // if there is no accumulator, start with the first value in the collection
  			if (!acc) {
  				acc = collection[0]
          len = len - 1
          collection = collection.slice(1)
  			}

  			for (let i = 0; i < len; i++) {
  				acc = callback(acc, collection[i], collection)
  			}
  			return acc;
    },

    find: function(collection, predicate) {
      // look through each value in collection and check if predicate is true
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let index = 0; index < newCollection.length; index++)
        if (predicate(newCollection[index])) {
          return newCollection[index]
        } else if (index == newCollection.length) {
          return undefined
        }
      },


    filter: function(collection, predicate) {
      let arr = []

      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let index = 0; index < newCollection.length; index++)
        if (predicate(newCollection[index])) {
          arr.push(newCollection[index])
        }
      return arr
    },

    size: function(collection) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      return newCollection.length
    },

    first: function(array, n) {
      if (!n) {
        return array[0]
      } else {
        let arr = []
        for (let index = 0; index < n; index++)
          arr.push(array[index])
        return arr
      }
    },

    last: function(array, n) {
      let newArray = array.slice()
      if (!n) {
        return newArray.pop()
      } else {
        let arr = newArray.slice(newArray.length-n, newArray.length)
        return arr
      }
    },

    compact: function(array) {
      let arr = []
      for(let index = 0; index < array.length; index++)
        if (array[index]) {
          arr.push(array[index])
        }

      return arr
    },

    sortBy: function(array, callback) {
      let arr = array.slice()
      return arr.sort(function(a, b){return callback(a) - callback(b)});
    },

    flatten: function(array, level) {
      let arr = array.slice()
      if (level) {
        return arr.flat(1)
      } else {
        let newArr = arr
        let lenA = newArr.length
        let lenB = newArr.flat().length
        while (lenA != lenB) {
          newArr = newArr.flat()
          lenA = newArr.length
          newArr.flat().length
        }
        newArr = newArr.flat()
        return newArr.flat()
      }
    },

    uniq: function(array, isSorted=false, callback=false) {
      let copy = []

      if (isSorted) {
        return copy = array.slice()
      } else if (!callback) {
        return Array.from(new Set(array))
      } else {
        const mappedSet = new Set()
        const uniqSet = new Set()
        for (let item of array) {
          const mappedValue = callback(item)
          if (!mappedSet.has(mappedValue)) {
            mappedSet.add(mappedValue)
            uniqSet.add(item)
          }
        }
        return Array.from(uniqSet)
      }
    },

    keys: function(object) {
      let keys = []
      for (const objKey in object) {
        keys.push(objKey)
      }
      return keys
    },

    values: function(object) {
      let values = []
      for (const objKey in object) {
        values.push(object[objKey])
      }
      return values
    },

    functions: function(object) {
      let functions = []
      for (const objKey in object) {
        if (typeof object[objKey] === 'function') {
          functions.push(objKey)
        }
      }
      return functions
    }
  }
})()

fi.libraryMethod()
