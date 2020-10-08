const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        for (const [index, el] of collection.entries()) {
          callback(el, index, collection)
         }
      }else{
        for (const [key, value] of Object.entries(collection)) {
          callback(value, key, collection)
         }
      }
      return collection
    },

    map: function(collection, callback) {
      var newCollection = []

      if (Array.isArray(collection)){
        for (const [index, el] of collection.entries()) {
          newCollection.push(callback(el, index, collection))
         }
      }else{
        for (const [key, value] of Object.entries(collection)) {
          newCollection.push(callback(value, key, collection))
         }
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      if (acc){
        for (var el of collection) {
          acc = callback(acc, el, collection)
        }
      }else{
        acc = collection[0]
        for (var i = 1; i < collection.length; i++ ) {
          acc = callback(acc, collection[i])
        }
      }
      return acc
    },

    find: function(collection, predicate) {
      for (var el of collection) {
        if (predicate(el)){
          return el
        }
      }
    },

    filter: function(collection, predicate){
      var newCollection = []
      for (var el of collection) {
        if (predicate(el)){
          newCollection.push(el)
        }
      }
      return newCollection
    },

    size: function(collection){
      if (Array.isArray(collection)){
        return collection.length
      }else{
        return Object.keys(collection).length
      }
    },

    first: function(collection, n){
      if(n){
        return collection.slice(0, n)
      }else{
        return collection[0]
      }
    },

    last: function(collection, n){
      if(n){
        return collection.slice(-n)
      }else{
        return collection[collection.length - 1]
      }
    },

    compact: function(collection){
      var newCollection = []
      const falsies = [0,"", null, NaN, false, undefined]
      for (const el of collection) {
        if (falsies.includes(el)){
          continue
        }
        newCollection.push(el)
      }
      return newCollection
    },

    sortBy: function(collection, callback){
      var newCollection = collection.slice()

      if (collection.every( e => Number.isInteger(e))){
        return newCollection.sort(function(a, b) { return callback(a) - callback(b)})
      }else{
        return newCollection.sort()
      }
    },

    flatten: function(collections, shallow){
      if(shallow){
        return [].concat.apply([], collections)
      }else{
        return collections.flat(Infinity)
      }
    },

    uniq: function(collection, isSorted, callback){
      let newCollection = []

      function uniqueCollection(array){
        newCollection.push(collection[0])
        for(const el of array){
          if(newCollection.includes(el)){
            continue
          }else{
            newCollection.push(el)
          }
        }
        return newCollection
      }

      if(callback){
        var uniqueCollection = uniqueCollection(collection)
        var callbackCollection = uniqueCollection.map(callback)
        var uniqueCallbackCollection = []

        //make callbackCollection uniq
        uniqueCallbackCollection.push(callbackCollection[0])
        for(const el of callbackCollection){
          if(uniqueCallbackCollection.includes(el)){
            continue
          }else{
            uniqueCallbackCollection.push(el)
          }
        }
         return uniqueCollection.slice(0, uniqueCallbackCollection.length)
        

      }else{
        return uniqueCollection(collection)
      }    
    },

    keys: function(object){
      return Object.keys(object)
    },

    values: function(object){
      return Object.values(object)
    },

    functions: function(object){
      var nameOfFunctions = this.values(object).map(x => { return x.name })
      const alphabet = "abcdefghijklmnopqrstuvwxyz"

      var functionKeys = []
      for(var el of nameOfFunctions){
        if(alphabet.includes(el)){
          functionKeys.push(el)
        }
      }
    return this.sortBy(functionKeys)  
    }

  }
})()

fi.libraryMethod()
