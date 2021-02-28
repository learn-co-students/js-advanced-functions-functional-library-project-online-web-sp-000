const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++)
        callback(newCollection[i])
      return collection
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection)

        for (let i = 0; i < newCollection.length; i++)
          newCollection[i] = callback(newCollection[i])
        return newCollection
    },

    reduce: function(collection, callback, acc) {
      if (acc){
        let sum = 0
        for (let i = 0; i < collection.length; i++){
          sum += collection[i]
        }
        sum = callback(acc, sum)
        return sum
      }
      else
      {
        let sum = 0
        for (let i = 0; i < collection.length; i++){
          sum += collection[i]
        }
        sum = callback(0, sum)
        return sum
      }
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          return collection[i]
        }
      }
      return undefined
    },


    filter: function(collection, predicate) {
      let newCollection = []
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          newCollection.push(collection[i])
        }
      }

      return newCollection
    },

    size: function(collection) {
      if (collection instanceof Array){
        return collection.length
      } else {
        const num = Object.values(collection)
        return num.length
      }

    },

    first: function(array, n) {
      if (n) {
        return array.slice(0, n)
      }
      return array[0]
    },

    last: function(array, n) {
      if (n){
        return array.slice(-n)
      }
      return array[array.length - 1]

    },

    compact: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++)
        if(array[i]){
          newArray.push(array[i])
        }

      return newArray
    },
    
    sortBy: function(array, callback) {
      const newArray = [...array]

      return newArray.sort(function(a, b) {
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

    uniqSorted: function(collection) {
      const sorted = [collection[0]]
      for (let i = 1; i < collection.length; i++) {
        if (!sorted.includes(collection[i]))
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
      for (let key in object){
        keys.push(key)
      }

      return keys

    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
    },

    functions: function(obj) {
      const funcs = []
      for (let key in obj){
        if(typeof obj[key] === 'function'){
          funcs.push(key)
        }
      }
      return funcs

    },


  }
})()

fi.libraryMethod()
