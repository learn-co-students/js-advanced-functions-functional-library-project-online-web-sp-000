const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let idx = 0; idx < newCollection.length; idx++) {
        iteratee(newCollection[idx])
      }
      return collection;
    },

    map: function(collection, iteratee) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      const newArr = []
      for (let idx = 0; idx < collection.length; idx++) {
        newArr.push(iteratee(collection[idx]))
      }
      return newArr
    },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0)
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      let len = collection.length
      for (let idx = 0; idx < len; idx++) {
        acc = callback(acc, collection[idx], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      for (let idx = 0; idx < collection.length; idx++) {
        if (predicate(collection[idx])) {
          return collection[idx]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      const newArr = []
      for (let idx = 0; idx < collection.length; idx++) {
        if (predicate(collection[idx])) {
          newArr.push(collection[idx])
        }
      }
      return newArr
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.values(collection).length
    },

    first: function(collection, num = false) {
      return (num) ? collection.slice(0, num) : collection[0]
    },

    last: function(collection, num = false) {
      return (num) ? collection.slice(collection.length - num, collection.length) : collection[collection.length - 1]
    },

    compact: function(collection) {
      const badArray = new Set([false, null, 0, '', undefined, NaN])
      return collection.filter(element => !badArray.has(element))
    },

    sortBy: function(collection, callback) {
      let newArray = [...collection]
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, array) {
      for (let value of array) {
        receiver.push(value)
      }
    },

    flatten: function(collection, shallow, newArray = []) {
      if (!Array.isArray(collection)) {
        return newArray.push(collection)
      }
      if (shallow) {
        for (let value of collection) {
          Array.isArray(value) ? this.unpack(newArray, value) : newArray.push(value)
        }
      } else {
        for (let value of collection) {
          this.flatten(value, false, newArray)
        }
      }
      return newArray
    },

    uniqSorted: function(collection, iteratee) {
      let sorted = [collection[0]]
      for (let idx = 0; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx]) {
          sorted.push(collection[idx])
        }
      }
      return sorted
    },

    uniq: function(collection, sorted = false, iteratee = false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        let modifiedValues = new Set()
        let uniqValues = new Set()
        for (let value of collection) {
          let moddedValue = iteratee(value)
          if (!modifiedValues.has(moddedValue)) {
            modifiedValues.add(moddedValue)
            uniqValues.add(value)
          }
        }
        return Array.from(uniqValues)
      }
    },

    keys: function(object) {
      let keys = []
      for (let key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      let values = []
      for (let key in object) {
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      let functionNames = []
      for (let key in object) {
        if (typeof object[key] === 'function') {
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    }
  }
})()

fi.libraryMethod()
