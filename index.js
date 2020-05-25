const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, word) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let idx = 0; idx < newCollection.length; idx++)
      word(newCollection[idx])
      
      return collection  
    },

    map: function(collection, number) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)

      const newArray = []
      for (let idx = 0; idx < collection.length; idx++)
      newArray.push(number(collection[idx]))
      return newArray
    },

    reduce: function(x=[], callback=() => {}, y) {
      let collection = x.slice(0)

      if(!y) {
        y = collection[0]
        collection = collection.slice(1)
      }

      let lngth = collection.length;
      for (let i = 0; i < lngth; i++) {
        y = callback(y, collection[i], collection)
      }
      return y

    },

    find: function(collection, index) {
      if(!(collection instanceof Array))
      collection = Object.values(collection)
      for (let idx = 0; idx < collection.length; idx ++)
      if(index(collection[idx])) return collection[idx]
      return undefined

    },

    filter: function(collection, predicate) {
      if(!(collection instanceof Array))
      collection = Object.values(collection)

      const newArray = []

      for (let idx = 0; idx < collection.length; idx++)
      if(predicate(collection[idx])) newArray.push(collection[idx])

      return newArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, stop=false) {
      return(stop) ? array.slice(0, stop) : array[0]
    },

    last: function(array, start=false) {
      return(start) ? array.slice(array.length-start, array.length) : array[array.length-1]
    },

    compact: function(array) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return array.filter(el => !badBad.has(el)) 
    },

    sortBy: function(array, callback) {
      const newArr = [...array]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      });
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

    uniqSorted: function(collection, interatee) {
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

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

    },

    keys: function(object) {
      const keys = []
      for (let key in object){
        keys.push(key)
      }
      return keys
    },

    functions: function(object) {
      const functions = []

      for (let key in object){
        if (typeof object[key] === 'function') {
          functions.push(key)
        }
      }
      return functions.sort()
    },
  }
})()

fi.libraryMethod()
