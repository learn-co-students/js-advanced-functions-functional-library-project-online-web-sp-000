const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      if (Array.isArray(collection)){
      for (const c of collection) {
         callback.call(this,collection)
       }
     }else{
       for (const c in collection) {
        callback.call(this,collection[c])
       }
     }
     return collection
    },

    map: function(collection,callback) {
      if (Array.isArray(collection)){
        return collection.map(callback)
      }else{
        return Object.values(collection).map(callback)
      }
    },

    reduce: function(collection,callback,acc) {
      return acc? collection.reduce(callback,acc) : collection.reduce(callback)
    },

    find: function(collection,condition) {
       return collection.find(condition)
    },

    filter: function(collection,condition){
      return collection.filter(condition)
    },

    size: function(collection){
      return Array.isArray(collection)? collection.length : Object.keys(collection).length
    },

    first: function(array,n){
      return !n? array[0] : array.slice(0,n)
    },

    last: function(array,n){
      return n? array.slice(-n) : array[array.length-1]
    },

    compact: function(collection){
      return collection.filter(x=>!!x)
    },

    sortBy: function(collection,callback){
      let copyOfCollection = collection.slice()
      return copyOfCollection.sort(function(a,b){return callback(a)-callback(b)})
    },

    flatten: function(array,name=false){
      if (!name){
        while (array.find(e=>Array.isArray(e))){
          console.log(array)
          array = array.flat()
        }
      }else{
          array = array.flat()
        }
       return array
     },

     uniq: function(array, [isSorted], [callback]){
        return array.uniq()
     },

     keys: function(object){
       return Object.keys(object)
     },

     values: function(object){
       return Object.values(object)
     },

     functions: function(object){
        return Object.getOwnPropertyNames(object).filter(item=>typeof(object[item]) === "function").sort()
     }


  }
})()

fi.libraryMethod()
