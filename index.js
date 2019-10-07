const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      // for(const item in collection)
      // callback(collection[item], item, collection)

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

    // reduce: function(collection, callback, acc) {
    //
    //   for (let i=0; i<collection.length; i++){
    //      acc = callback(acc, collection[i], collection)
    //    }
    //    return acc
    // },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0)
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

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArray = []

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) newArray.push(collection[i])

      return newArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.values(collection).length
    },

    first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    },

    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(array) {
      const falsy = new Set ([false, null, 0, "", undefined, NaN])

      return array.filter(element => !falsy.has(element))
    },

    sortBy: function(array, callback) {
      const newArr = [...array]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function (array, shallow) {
      let newArray = []

      while(array.length) {
        let value = array.shift()
        if(Array.isArray(value)) {
          if (shallow){
            newArray = newArray.concat(value)
          }
          else{
            array = value.concat(array)
          }
        }
        else {
          newArray.push(value)
        }
      }
      return newArray
    },

    // uniq: function(collection, isSorted = false, callback = undefined){
    //   const uniqArray = []
    //
    //   if (!callback){
    //     for (let i=0; i<collection.length; i++){
    //       if (!uniqArray.includes(collection[i])){
    //         uniqArray.push(collection[i])
    //       }
    //     }
    //   } else {
    //     for (let i=0; i<collection.length; i++){
    //       if (!uniqArray.includes(callback(collection[i]))){
    //         uniqArray.push(callback(collection[i]))
    //       }
    //     }
    //   }
    //   return uniqArray
    // },

    uniq: function (array, isSorted, callback = function(e){return e}) {
      const newArray = []
      const cbValues = []

      for(let i = 0; i < array.length; i++){
        if(!cbValues.includes(callback(array[i])))
        {
          cbValues.push(callback(array[i]))
          newArray.push(array[i])
        }
      }
      return newArray
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj){
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

    functions: function(object) {
      const methods = []
      for (const key in object){
        if (typeof object[key] === "function"){
          methods.push(key)
        }
      }
      return methods.sort()
    }
  }
})()

fi.libraryMethod()
