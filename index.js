const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++)
        callback(newCollection[i])
      return collection
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      const newArray = []
      for (let i = 0; i < collection.length; i++)
        newArray.push(callback(collection[i]))
      return newArray
    },

    reduce: function(coll = [], callback = () => {}, acc) {
      let collection = coll.slice(0)
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      let collectionLength = collection.length;
      for (let i = 0; i < collectionLength; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) return collection[i]
      return undefined
    },

    filter: function(collection, predicate){
      const values = []
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          values.push(collection[i])
        }
      }
      return values
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function (array, n) {
      if (!!n){
        let newArray = [];
        for (let i = 0; i < n; i++){
          newArray.push(array[i]);
        }
        return newArray;
      } else {
        return array[0];
      }
    },

    last: function(array, n) {
      if (!!n) {
        let newArray = [];
        for (let i = 0; i < n; i++){
          newArray.unshift(array.pop());
        }
        return newArray;
      } else {
        return array[array.length - 1];
      }
    },

    compact: function(array) {
      const falsy = new Set ([false, null, 0, "", undefined, NaN])
      return array.filter(value => !falsy.has(value))
    },

    sortBy: function(array, callback) {
      const newArray = [...array]
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function (array, shallow) {
      let newArray = []
      while(array.length) {
        let val = array.shift()
        if(Array.isArray(val)) {
          if (shallow){
            newArray = newArray.concat(val)
          }
          else{
            array = val.concat(array)
          }
        }
        else {
          newArray.push(val)
        }
      }
      return newArray
    },

    uniq: function(array, isSorted = false, callback = undefined) {
      if (isSorted) {
        return fi.uniqisSorted(array, callback)
      } else if (!callback) {
        return Array.from(new Set(array))
      } else {
        const newVals = new Set()
        const uniqVals = new Set()
        for (let val of array) {
          const editedVal = callback(val)
          if (!newVals.has(editedVal)) {
            newVals.add(editedVal)
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

    values: function(object) {
      const values = []
      for (let key in object){
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      const functions = []
      for (const key in object){
        if (typeof object[key] === "function"){
          functions.push(key)
        }
      }
      return functions.sort()
    }

  }
})()

fi.libraryMethod()
