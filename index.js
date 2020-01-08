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
      return Array.isArray(collection)? collection.map(callback) : Object.values(collection).map(callback)
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

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },


    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
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
