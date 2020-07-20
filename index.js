const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, callback) {
      Object.values(obj).forEach(x => callback(x))
      return obj
    },

    map: function(obj, callback) {
      let newArray = []
      Object.values(obj).map(x => newArray.push(callback(x)))
      return newArray
    },

    reduce: function(collection, callback, acc) {

      if(!acc){
        acc = collection[0]
        collection = collection.slice(1)
      }

      collection.forEach(element => acc = callback(acc, element, collection))
      return acc
    },


    find: function(collection, predicate) {
      return collection.find(element => predicate(element))
    },


    filter: function(collection, predicate) {
      return collection.filter((element) => predicate(element));
    },


    size: function(collection) {
      if(Array.isArray(collection)) {
        return collection.length
      } else {
        let k = Object.keys(collection)
        return k.length
      }
    },

    first: function(array, n) {
      return n ? array.slice(0, n) : array[0]
    },

    last: function(array, n) {
      if(n){
        return array.slice(1).slice(-n)
      } else {
        return parseInt(array.slice(-1))
      }
    },

    compact: function(array) {
      return array.filter(Boolean)
    },

    sortBy: function(array, callback) {
      let newArray = [...array]
      return newArray.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow) {
      let x = []
      if(shallow){
        x = array.flat()
      } else {
        x = array.flat(Infinity)
      }
      return x
    },

    uniq: function(array, isSorted, callback) {
        let sortArray = array instanceof Array ? array.slice() : Object.values(array);
        let newArray = [];
        let valueArray = [];
        if (callback) {
          for (let i = 0; i < sortArray.length; i++) {
            let v = callback(sortArray[i]);
            if (!valueArray.includes(v)) {
              newArray.push(sortArray[i]);
              valueArray.push(v);
            }
          }
        } else {
          for (let i = 0; i < sortArray.length; i++) {
            if (!newArray.includes(sortArray[i])) {
              newArray.push(sortArray[i]);
            }
          }
        }
        return newArray;

    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(fi) {
      let funcs = []
      for(const key in fi){
        if(typeof fi[key] === 'function') {
          funcs.push(key)
        }
      }
      return funcs.sort()
    },


  }
})()

fi.libraryMethod()



