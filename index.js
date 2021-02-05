const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      Object.values(collection).forEach(el => callback(el))
      return collection
    },

    map: function(collection, callback) {
      return Object.values(collection).map((el) => callback(el))
    },

    reduce: function(collection, callback, x = 0) {
      return Object.values(collection).reduce(callback, x)
    },

    find: function(collection, callback){
      return Object.values(collection).find((el) => callback(el))
    },

    filter: function(collection, callback){
      return Object.values(collection).filter((el) => callback(el))
    },

    size: function(collection){
      return Object.values(collection).length
    },

    first: function(collection, n = 1){
     const first = Object.values(collection).slice(0, n)
     switch (first.length){
      case 1:
        return first[0]
      break;

      default:
      return first
      break;

     }
    },

    last: function(collection, n = 1){
      const last = Object.values(collection).slice(-n)
      switch (last.length){
       case 1:
         return last[0]
       break;
 
       default:
       return last
       break;
 
      }
     },

     compact: function(collection){
     return Object.values(collection).filter((el) => !!el == true)
     },

     sortBy: function(collection, sortfunc = undefined){
     let array = Object.values(collection);
      return array.some((el) => typeof el == "number") ? array.sort((a, b) => a - b).sort((a, b) => sortfunc(a) - sortfunc(b)) : array.sort((a, b) => sortfunc(a) - sortfunc(b))
     },

     flatten: function(collection, depth = Infinity){
      return Object.values(collection).flat(depth);
     },

     uniq: function(collection, sorted, iteratee = false){
      return !iteratee ? [...new Set( Object.values(collection))] : [...new Set( Object.values(collection))].map(iteratee)
     
     },

     keys: function(collection){
     return Object.keys(collection)
     },

     values: function(collection){
       return Object.values(collection)
     },
 

    functions: function(collection, callback) {
      
      return Object.values(collection).filter((el) => typeof el == "function")
    },


  }
})()

fi.libraryMethod()
