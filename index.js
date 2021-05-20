const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const numbers in collection){
        callback(collection[numbers])
      }
      return collection
    },

    map: function(collection, callback) {
      let arr = []
      for(const numbers in collection){
        arr.push(callback(collection[numbers]))
      }
      return arr
    },

    reduce: function(collection, callback, acc = 0) {
      if (acc == 0) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for (let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection)
      }

      return acc
    },

    find: function(collection,predicate) {
      for(let i=0; i < collection.length; i++){
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection,predicate) {
      let array = []
      for(let i=0; i < collection.length; i++){
        if (predicate(collection[i])) {
          array.push(collection[i])
        }
      }
      return array
    },

    size: function(collection) {
      let i = 0
      for(const numbers in collection){
        i++;
      }
      return i
    },

    first: function(collection, n=1) {
      let array = []
      for(let i=0; i < [n]; i++) {
        if (n === 1){
          return collection[i]
        }
        array.push(collection[i])
      }
      return array
    },
    last: function(collection, start = false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      let array = []
      for (let i=0; i < collection.length; i++) {
        if (collection[i]){
          array.push(collection[i])
        }
      }
      return array
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(arr, shallow, newArr = []) {
        if (shallow) {
          return arr.flat(1)
        } else {
          return arr.flat(Infinity)
        }
    },

    uniq: function(collection, sorted = false, callback = false){
      if (sorted) {
        return fi.uniqueSorted(collection, callback)
      } else if (!callback) {
        return Array.from(new Set(collection))
      } else {
        const modifiedValues = new Set()
        const uniqueValues = new Set()

        for (let ele of collection) {
          const modifiedVal = callback(ele)
          if (!modifiedValues.has(modifiedVal)) {
            modifiedValues.add(modifiedVal)
            uniqueValues.add(ele)
          }
        }
        return Array.from(uniqueValues)
      }
    },

    keys: function(obj){
      return Object.keys(obj)
    },

    values: function(obj){
      return Object.values(obj)
    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
    }

    return functionNames.sort()},

  }
})()

fi.libraryMethod()
