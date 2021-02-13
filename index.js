const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      Object.values(collection).forEach(x => alert(x))
      return collection
    },

    map: function(collection, callback) {
      return Object.values(collection).map((el) => callback(el))
    },

    reduce: function(collection, callback, x = -2) {
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
 
    uniq: function(arr, isSorted=false, callback=false) {

      if (isSorted) {
        return arr.filter((el, index) => {
          if (callback) {
            return (callback(el) !== callback(arr[index+1]))
          } else {
            return (el !== arr[index+1])
          }
        })
      }
      else if (!callback) {
        return Array.from(new Set(arr))
      }
      else {
        let modVals = []
        let vals = []
        for (let val of arr) {
          const mod = callback(val)
          if (modVals.indexOf(mod) === -1) {
            modVals.push(mod)
            vals.push(val)
          }
        }
        return Array.from(vals)
      }
    },
 
    keys: function(collection){
      return Object.keys(collection)
    },
 
    values: function(collection){
      return Object.values(collection)
    },
 
 
    functions: function(collection) {
      return Object.values(collection).filter((el) => typeof el == "function")
    },
  }
})()

fi.libraryMethod()
