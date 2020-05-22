const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(Array.isArray(collection)) {    
        for (var i = 0; i < collection.length; i++){                    
          callback(collection[i], i, collection);    
        }  
      } else if(typeof(collection) === 'object') {    
        for(let prop in collection){  
          callback(collection[prop],prop, collection);    
        }  
      }
      return collection
    },

    map: function(collection, callback) {
      if (typeof collection === 'object') {
        collection = Object.values(collection)
      }
      let newCollection = []
      for (let i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc = -2) {
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      const trueCollect = (collection instanceof Array) ? collection.slice(0) : Object.values(collection)
      for (let i = 0; i < trueCollect.length; i++) {
        if (predicate(trueCollect[i])){return trueCollect[i]}
      }
      return undefined
    },

    filter: function(collection, predicate) {
      const trueCollect = (collection instanceof Array) ? collection.slice(0) : Object.values(collection)
      let truthBox = []
      for (let i = 0; i < trueCollect.length; i++) {
        if (predicate(trueCollect[i])){truthBox.push(trueCollect[i])}
      }
      return truthBox
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, n = 1) {
      let newCollect = []
      for (let i = 0; i < n; i++) {
        newCollect.push(array[i])
      }
      if (newCollect.length === 1) {
        return newCollect[0]
      } else {
        return newCollect
      }
    },

    last: function(array, n = 1) {
      let newCollect = array.slice(n * -1)
      if (newCollect.length === 1) {
        return newCollect[0]
      } else {
        return newCollect
      }
    },

    compact: function(array) {
      let newCollect = []
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
          newCollect.push(array[i])
        }
      }
      return newCollect
    },

    sortBy: function(array, callback) {
      let newCollect = [...array]
      return newCollect.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(array, shallow, newCollect = []) {
      if (!Array.isArray(array)) return newCollect.push(array)
      if (shallow) {
        for (let index of array) {
          Array.isArray(index) ? this.unpack(newCollect, index) : newCollect.push(index)
        }
      } else {
        for (let index of array) {
          this.flatten(index, false, newCollect)
        }
      }
      return newCollect
    },

    uniq: function(array, isSorted=false, callback=false) {
      let newCollect = []
      if (!callback) {
        for (let i = 0; i < array.length; i++) {
          if (!newCollect.includes(array[i])) {
            newCollect.push(array[i])
          }
        }
        return newCollect
      } else {
        const transformed = new Set()
        const unique = new Set()
        for (let index of array) {
          if (!transformed.has(callback(index))) {
            transformed.add(callback(index))
            unique.add(index)
          }
        }
        return Array.from(unique)
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
      let functions = []
      for (let key in object) {
        if (typeof object[key] === "function") {
          functions.push(key)
        }
        functions.sort()
      }
      return functions
    }

  }
})()

fi.libraryMethod()
