const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++)
      callback(newCollection[i])

      return collection 
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)

      let newArray = []

      for (let i = 0; i < collection.length; i++)
      newArray.push(callback(collection[i]))

      return newArray
    },

    reduce: function(x = [], callback = () => {}, acc) {
      let collection = x.slice(0)
      if (!acc) {
        acc = collection[0]
          collection = collection.slice(1)
      }
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)

      for (let i = 0; i < collection.length; i ++)
      if (predicate(collection[i])) return collection[i]

      return undefined
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)

      let newArray = []

      for (let i = 0; i < collection.length; i++)
      if (predicate(collection[i])) newArray.push(collection[i])

      return newArray
    },

    size : function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length 
    },

    first: function(collection, stop=false) {
     return (stop) ? collection.slice(0, stop) : collection[0]
    },

    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      let remove = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(element => !remove.has(element))
    },

    sortBy: function (collection, callback) {
      let newArray = [...collection]
      return newArray.sort(function(x, y){
        return callback(x) - callback(y)
      })
    },

    unpack: function(receiver, array){
      for (let value of array)
        receiver.push(value)
    },

    flatten: function(collection, shallow, newArray=[]) {
      if (!Array.isArray(collection)) return newArray.push(collection)
      if (shallow) {
        for (let value of collection)
          Array.isArray(value) ? this.unpack(newArray, value) : newArray.push(value)
      } else {
        for (let value of collection) {
          this.flatten(value, false, newArray)
        }
      }
      return newArray
    },

    uniq: function(collection, sorted=false, callback=false) {
      if (sorted) {
        return fi.uniqSorted(collection, callback)
      } else if (!callback) {
        return Array.from(new Set(collection))
      } else {
        let newValues = new Set()
        let uniqValues = new Set()
        for (let value of collection) {
          let modifiedValue = callback(value)
          if (!newValues.has(modifiedValue)) {
            newValues.add(modifiedValue)
            uniqValues.add(value)
          }
        }
        return Array.from(uniqValues)
      }
    },

    keys : function(object) {
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
        if (typeof object[key] === "function") {
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },
  }
})()

fi.libraryMethod()
