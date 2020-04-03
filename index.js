const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++) {
        iteratee(newCollection[i])
      }
      return collection
    },

    map: function(collection, iteratee) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const array = []

      for (let i = 0; i < collection.length; i++) {
        array.push(iteratee(collection[i]))
      }

      return array

    },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0)

      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for (let i=0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc 
    },

    find: function(collection, value) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++)
        if (value(collection[i])) return collection[i]

      return undefined
    },

    filter: function(collection, value) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const array = []

      for (let i = 0; i < collection.length; i++) 
        if (value(collection[i])) array.push(collection[i])

      return array
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    }, 

    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(element => !badBad.has(element))
    },

    sortBy: function(collection, callback) {
      const array = [...collection]
      return array.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, array) {
      for (let value of array)
      receiver.push(value)
    },

    flatten: function(collection, shallow, array=[]) {
      if (!Array.isArray(collection)) return array.push(collection)
      if (shallow) {
        for (let value of collection) 
          Array.isArray(value) ? this.unpack(array, value) : array.push(value)
      } else {
        for (let value of collection) {
          this.flatten(value, false, array)
        }
      }
      return array
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let i = 0; i < collection.length; i++) {
        if (sorted[i-1] !== collection[i])
          sorted.push(collection[i])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedValues = new Set()
        const uniqueValues = new Set()
        for (let value of collection) {
          const moddedValues = iteratee(value)
          if (!modifiedValues.has(moddedValues)) {
            modifiedValues.add(moddedValues)
            uniqueValues.add(value)
          }
        }
        return Array.from(uniqueValues)
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


    functions: function(object) {
      const functionNames = []

      for (let key in object) {
        if (typeof object[key] ==="function") {
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
