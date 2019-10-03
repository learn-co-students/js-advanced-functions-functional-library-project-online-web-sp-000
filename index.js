const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (collection instanceof Array){
        for (let i=0; i<collection.length; i++){
          callback(collection[i])
        }
      } else {
        const values = Object.values(collection)
        for (let i=0; i<values.length; i++){
          callback(values[i])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      if (Array.isArray(collection)){

        for (let i=0; i<collection.length; i++){
          newCollection.push(callback(collection[i]))
        }
      } else {
        const values = Object.values(collection)
        for (let i=0; i<values.length; i++){
          console.log(callback(values[i]))
          newCollection.push(callback(values[i]))
        }
      }
      return newCollection
    },

    reduce: function (collection, callback, acc=0) {
      for (let i=0; i<collection.length; i++){
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    // intArr, findCBGenerator(4))

    find: function(collection, callback) {
      let found = false
      let value = undefined
      for (let i=0; i<collection.length; i++){
        if (!found && callback(collection[i])){
          found = true
          value = collection[i]
        }
      }
      return value
    },

    filter: function(collection, callback){
      const values = []
      for (let i=0; i<collection.length; i++){
        if (callback(collection[i])){
          values.push(collection[i])
        }
      }
      return values
    },

    size: function(collection){
      if (Array.isArray(collection)){
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(collection, num=1){
      const array = []
      for (let n=0; n<num; n++){
        array.push(collection[n])
      }
      const returnValue = array.length === 1 ? array[0] : array
      return returnValue
    },

    last: function(collection, num=1){
      const array = []
      for (let n=collection.length-1; n>collection.length-num-1; n--){
        array.push(collection[n])
      }
      const returnValue = array.length === 1 ? array[array.length-1] : array.reverse()
      return returnValue
    },

    compact: function(collection){
      const newArray = []
      for(let i=0; i<collection.length; i++){
        if (collection[i]){
          newArray.push(collection[i])
        }
      }
      return newArray
    },

    sortBy: function(collection, callback){
      let newCollection = [...collection]
      return newCollection.sort((a, b) =>{
        return callback(a) - callback(b)
      })
    },

    // [1, [2], [3, [[4]]]]

    flatten: function(array, oneLevel = false) {
      const flatArray = []
      let level = 0
      dig(array)
      function dig(array){
        for(let i=0; i<array.length; i++){
          if (typeof array[i] === "number" || (oneLevel && level > 1)){
            flatArray.push(array[i])
          } else {
            level++
            dig(array[i])
          }
        }
      }
      console.log(flatArray)
      return flatArray
    },

    uniq: function(collection, isSorted = false, callback = undefined){
      const uniqArray = []
      if (!callback){
        for (let i=0; i<collection.length; i++){
          if (!uniqArray.includes(collection[i])){
            uniqArray.push(collection[i])
          }
        }
      } else {
        for (let i=0; i<collection.length; i++){
          if (!uniqArray.includes(callback(collection[i]))){
            uniqArray.push(callback(collection[i]))
          }
        }
      }
      console.log(uniqArray)
      return uniqArray
    },

    keys: function(collection){
      const keys = []
      for (const key in collection){
        keys.push(key)
      }
      return keys
    },

    values: function(collection){
      const values = []
      for (const key in collection){
        values.push(collection[key])
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
      return methods
    },


  }
})()

fi.libraryMethod()
