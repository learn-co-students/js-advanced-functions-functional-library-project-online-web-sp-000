const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newArray
      if(typeof collection === 'object') {
       newArray = Object.values(collection)
      }
      else {
        newArray = collection
      }
      for (let i = 0; i < newArray.length; i++) {
        callback(newArray[i], i, newArray)
      }
      return collection
    },


    map: function(collection, callback) {
      let newArray
      let copyArray = []

      if(typeof collection === 'object') {
        newArray = Object.values(collection)
      }
      else {
        newArray = collection 
      }
      for (let i = 0; i < newArray.length; i++) {
        copyArray.push(callback(newArray[i], i, newArray))
      }
      return copyArray
    },

    reduce: function(collection, callback, acc = 0) {
      let i = 1
      if(acc) {
        i = 0
      }
      else {
        acc = collection[0]
      }

      for (i; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      
      }
      return acc
    },

    find: function(collection, predicate) {
      
      for(let i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) { return collection[i] }
      } 
      return undefined
    },

    filter: function(collection, predicate) {
      let matchArray = []
      for (let i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) {
          matchArray.push(collection[i])
        }
      }
      return matchArray
    },

    size: function(collection) {
      let newArray
      if(typeof collection === 'object') {
       newArray = Object.values(collection)
      }
      else {
        newArray = collection
      }
      for (let i = 0; i < newArray.length; i++) {
        return newArray.length
      }
    },

    first: function(array, n) {
      if(n) {return array.slice(0, n)}
      else {return array[0]}
    },

    last: function(array, n) {
      if(n) {return array.slice(Math.max(array.length - n, 0)) }
      else { return array[array.length -1] }
    },

    compact: function(array) {
      let newArray = []
      for(let i = 0; i < array.length; i++) {
        if(Boolean(array[i])) {
          newArray.push(array[i])
        } 
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let copyArray = [...array]
      copyArray.sort(function(a, b){return callback(a) - callback(b)});
      return copyArray
    },

    flatten: function(array, shallow) { //NOT DONE
      
    },

    uniq: function(array, isSorted, callback) {
      

    },

    functions: function() {

    },

    


  }
})()

fi.libraryMethod()
