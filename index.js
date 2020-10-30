const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // console.log(typeof collection)
      let temp = []
      if (collection instanceof Array){
        temp = collection.slice()
      }
      else if (typeof collection === "object"){
        temp = Object.values(collection)
      }
      for (let i=0; i<temp.length; i++){
        callback(temp[i])
      }
      return collection
    },

    map: function(collection, callback) {
      let tempOut = []
      let temp = Object.values(collection)
      if (collection instanceof Array){
        temp = collection.slice()
      }
      for (let i=0; i<temp.length; i++){
        tempOut.push(callback(temp[i]))
      }
      // console.log(tempOut)
      return tempOut
    },

    reduce: function(collection, callback, acc=0) {
      let temp = collection.slice()
      for (let i=0; i<temp.length; i++){
        // console.log(callback(acc, temp[i], collection))
        acc = callback(acc, temp[i], collection)
      }
      // console.log(acc)
      return acc
    },

    find: function(collection, predicate) {
      // console.log(collection.length, predicate)
      let tempOut = []
      let temp = Object.values(collection)
      if (collection instanceof Array){
        temp = collection.slice()
      }
      for (let i=0; i<temp.length; i++){
        if (predicate(temp[i])){
          return temp[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let tempOut = []
      let temp = Object.values(collection)
      if (collection instanceof Array){
        temp = collection.slice()
      }
      for (let i=0; i<temp.length; i++){
        if (predicate(temp[i])){
          tempOut.push(temp[i])
        }
      }
      // console.log(tempOut)
      return tempOut
    },

    size: function(collection) {
      let tempOut = []
      let temp = Object.values(collection)
      if (collection instanceof Array){
        temp = collection.slice()
      }
      return temp.length
    },

    first: function(array, n=1) {
      if (n==1){
        return array[0]
      }
      return array.slice(0,n)
    },

    last: function(array, n=1) {
      if (n==1){
        return array[array.length-1]
      }
      return array.slice(array.length-n,array.length)
    },

    compact: function(array) {
      return array.filter(function(v) { return !!v; });
    },

    sortBy: function(collection, callback) {
      let temp = Array.from(collection)
      let a = temp.sort(function(a, b) {return callback(a) - callback(b)})
      // console.log(a)
      return a
    },

    flatten: function(array, shallow=false) {
      let l="Infinity"
      if (shallow) l=1
      // console.log(array,array.flat(l))
      return array.flat(l)
    },

    uniq: function(array, isSorted=false, callback=false) {
      let tempOut = Array.from(array)
      if (!!callback){
        tempOut = []
        let setTest = new Set
        let temp = Array.from(array)
        for (let i=0; i<temp.length; i++){
          if (!setTest.has(callback(temp[i]))){
            setTest.add(callback(temp[i]))
            tempOut.push(temp[i])
            }
        }
        // console.log(tempOut)
      }
      return [...new Set(tempOut)];
    },

    keys: function(obj) {
      // console.log(Object.keys(obj))
      return Object.keys(obj)
    },

    values: function(obj) {
      // console.log(Object.values(obj))
      return Object.values(obj)
    },

    functions: function(obj) {
      let tempOut = []
      for (const [key, value] of Object.entries(obj).sort()) {
        if (typeof value == "function"){
          tempOut.push(key)
        }
      }      
      return tempOut
    },


  }
})()

fi.libraryMethod()
// fi.flatten([1, [2], [3, [[4]]]]);
// => [1, 2, 3, 4];
 
// fi.flatten([1, [2], [3, [[4]]]], true);
// => [1, 2, 3, [[4]]];
// fi.uniq([1, 2, 2, 3, 4, 6, 9], false, (val => val % 3))
// const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}
// fi.reduce([1, 2, 3, 4], function(acc, val, collection) { return acc + (val * 3); }, 10);