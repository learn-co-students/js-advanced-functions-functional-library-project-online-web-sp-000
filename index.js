const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    
    each: function(collection, callback) {
      // if collection has a .length, it's an array
      if (collection.length) {
        // for each element in collection, call on collection passing in element as an argument
        collection.forEach(element => callback(element, collection))
        return collection
      } else {
        Object.values(collection).forEach(element => callback(element, collection))
        return collection
      }
    },
    
    map: function(collection, callback) {
      // if collection has a .length, it's an array
      if (collection.length) {
        let newColl = collection.map(element => callback(element))
        return newColl
      } else {
        let newColl = Object.values(collection).map(element => callback(element))
        return newColl
      }
    },

    reduce: function(collection, callback, acc=-2) {
      return collection.reduce(callback, acc)
    },

    find: function(collection, pred) {
      return collection.find((element) => pred(element)) 
    },

    filter: function(collection,pred) {
      return collection.filter((element) => pred(element)) 
    },

    size: function (collection) {
      return Object.values(collection).length
    },

    first: function(array, length=0) {
      if (length == 0) {
        return array[0]
      } else {
        return array.slice(0,length)
      }
    },

    last: function(array,length=0) {
      if (length == 0) {
        return array[array.length-1]
      } else {
        return array.splice(array.length-length, array.length-1)
      }
    },

    compact: function(array) {
      return array.filter(element => !!element)
    },

    sortBy: function(array, callback) {
      let newarr = [...array]
      return newarr.sort((a,b) => callback(a) - callback(b))
    },

    flatten: function(array, level=false) {
      if (level==true){
        return array.flat()
      } else {
        let depth = array.filter(Array.isArray).length
        return array.flat(depth+1)
      }
    },

    uniqsorted: function(array, iteratee) {
      const sorted = [array[0]]
      for (let index = 1; index < array.length; index++) {
        if (sorted[index-1] !== array[index])
          sorted.push(array[index])
      }
      return sorted
    },

    uniq: function(array, iteratee=false, sorted=false) {
      if (sorted) {
        return fi.uniqsorted(array, iteratee)
      }
      if (!iteratee) {
        let unique = [...new Set(array)]
        return unique
      } else {

      }
      
    },

    keys: function(collection) {
      return Object.keys(collection)
    },

    values: function(collection) {
      return Object.values(collection)
    },

    functions: function(obj) {
      let names = []
      for (let func in obj) {
        if (typeof (obj[func]) === 'function') {
          names.push(func)
        }
      }
      return names.sort()
    }
    
  }
})()

fi.libraryMethod()
