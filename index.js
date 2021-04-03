const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      Array.isArray(collection) ? collection : collection = Object.values(collection)
      let newCollection = []
      for(let i = 0; i < collection.length; i++){
        newCollection.push(callback(collection[i]))
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection.slice(0)
      if (!acc) {
        acc = newCollection[0]
        newCollection.shift()
      }
      for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i])
      }
      return acc
    },

    find: function(collection, predicate){
      Array.isArray(collection) ? collection : Object.values(collection) 
      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) return collection[i]
        return undefined
    },

    filter: function(collection, predicate){
      Array.isArray(collection) ? collection : Object.values(collection)
      let newCollection = [] 
      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) newCollection.push(collection[i])
      return newCollection
    },

    size: function(collection){
      return Array.isArray(collection) ? collection.length : Object.values(collection).length
    },

    first: function(collection, num = 1){
      if (num === 1){
        return (collection[0]);
      }
      return collection.slice(0, num);
    },

    last: function(collection, num = 1){
      if (num === 1){
        return (collection[collection.length - 1]);
      }
      return collection.slice(collection.length - num, collection.length)
    },

    compact: function(array){
      return array.filter(element => !!element)
    },

    sortBy: function(array, callback){
      let sortedArray = [...array];
      return sortedArray.sort(function(a, b){return callback(a) - callback(b)});
    },

    flatten: function(array, shallow = false) {
      let level = "Infinity"
      if (shallow) {level = 1}
      return array.flat(level)
    },

    uniq: function(array, isSorted = false, callback = false) {
      let values = Array.from(array)
      if (!!callback) {
        values = []
        let newArray = []
        let temp = Array.from(array)
        for (let i = 0; i < temp.length; i++) {
          if (!newArray.includes(callback(temp[i]))) {
            newArray.push(callback(temp[i]))
            values.push(temp[i])
            }
        }
      }
      return [...new Set(values)];
    },
    
    keys: function(object){
      return Object.keys(object)
    },

    values: function(object){
      return Object.values(object)
    },

    functions: function(object) {
      let functions = []
      for (const [key, value] of Object.entries(object)) {
        if (typeof value === "function") [
          functions.push(key)
        ]
      }
      let sorted = functions.sort()
      return sorted
    },

  }
})()

fi.libraryMethod()

