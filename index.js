const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let realCollection

      if (Array.isArray(collection)){
        realCollection = collection
      } else {
        realCollection = Object.values(collection)
      }
      
      realCollection.forEach((element) => callback(element))

      return collection

    },

    map: function(collection, callback) {
      let newCollection
      let newArray = []

      if (Array.isArray(collection)){
        newCollection = collection
      } else {
        newCollection = Object.values(collection)
      }

      newCollection.forEach((element) => newArray.push(callback(element)))
      
      return newArray


    },

    reduce: function(collection, callback, acc = -2) {

      this.each(collection, element => {
        acc = callback(acc, element, collection)
      })

      return acc
    },

    find: function(collection, predicate){

      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          return collection[i]
        }
      }
      return undefined

    },

    filter: function(collection, predicate){
      let newArray = []
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          newArray.push(collection[i])
        }
      }

      return newArray
    },

    size: function(collection){
      let size

      if (Array.isArray(collection)){
        size = collection.length
      } else {
        size = Object.values(collection).length
      }

      return size
    },

    first: function(collection, n = 1){

      let newCollection = []

      for (let i = 0; i < n; i++){
        newCollection.push(collection[i])
      }

      if (newCollection.length === 1){
        return newCollection[0]
      } else {
        return newCollection
      }

    },

    last: function(collection, n = 1){
      let newCollection = []

      for (let i = 0; i < n; i++){
        newCollection.push(collection[collection.length - i -1])
      }

      if (n === 1){
        return newCollection[0]
      } else {
        return newCollection.reverse()
      }

    },

    compact: function(collection){
      let newArray = []
      collection.forEach(function(element){
        if (element){
          newArray.push(element)
        }
      })
      return newArray
    },

    sortBy: function(array, callback){
      let newArray = [...array]
      return newArray.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow = false){
      if (shallow === false){
        return array.flat(Infinity)
      } else {
        return array.flat()
      }
    },

    uniq: function(array, isSorted, callback) {
      let newArray = []
      if (!!callback){
        let results = [];
        let originalValues = [];
        for (let i = 0; i < array.length; i++){
          if (!results.includes(callback(array[i]))){
            results.push(callback(array[i]));
            originalValues.push(array[i])
          }
        }
        newArray = [...originalValues];
      } else {
        newArray = [...new Set(array)];
      }
      
      return newArray;
    },

    keys: function(object){
      return Object.keys(object)
    },

    values: function(object){
      return Object.values(object)
    },

    functions: function(obj) {
      let functions = []
      for (let key in obj){
        if (typeof obj[key] === "function"){
          functions.push(key)
        }
      }
      return functions.sort()
    }


  }
})()

fi.libraryMethod()

