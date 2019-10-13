const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else {
        for (let key in collection) {
          callback(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const newArr = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newArr.push(callback(collection[i], i, collection))
        }
      } else {
        for (let key in collection) {
          newArr.push(callback(collection[key], key, collection))
        }
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {
      let i = 0;
      if (!acc) {
        acc = collection[i];
        i = 1;
      }
      for (; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      const newArr = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArr.push(collection[i])
        }
      }
      return newArr
    },

    size: function(collection) {
      let total = 0;
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          total += 1
        }
      } else {
        for (let key in collection) {
          total +=1
        }
      }
      return total
    },

    first: function(array, num) {
      if (!num) {
        return array[0]
      } else {
        const newArr = [];
        for (let i = 0; i < num; i++) {
          newArr.push(array[i])
        }
        return newArr
      }
    },

    last: function(array, num) {
      if (!num) {
        return array[array.length - 1]
      } else {
        const newArr = [];
        let index = 1
        for (let i = 0; i < num; i++) {
          newArr.unshift(array[array.length - index])
          index += 1
        }
        return newArr
      }
    },

    compact: function(array) {
      const newArr = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArr.push(array[i])
        }
      }
      return newArr
    },

    sortBy: function(array, callback) {
      const newArr = array.slice(0)
      return newArr.sort( (a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow) {
      const newArr = [];
      if (shallow) {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
              newArr.push(array[i][j])
            }
          } else {
            newArr.push(array[i])
          }
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            newArr.push(...fi.flatten(array[i]))
          } else {
            newArr.push(array[i])
          }
        }
      }
      return newArr
    },

    // uniq: function(array, isSorted, callback) {
    //   function onlyUnique(value, index, self) {
    //     return self.indexOf(value) === index;
    //   }
    //   if (callback) {
    //     const newArr = array.map(e => callback(e))
    //     return newArr.filter(onlyUnique)
    //   }
    //   return array.filter(onlyUnique)
    // },

    uniq: function (array, isSorted, callback) {

      function argUnique(array){
        const set = new Set(array)
        const keepers = []
        for (let i = 0; i<array.length; i++){
          if (set.has(array[i])){
            keepers.push(i)
            set.delete(array[i])
          }
        }
        return keepers
      }

      let newArr = array.slice(0)
      if (callback){
        newArr = array.map(e => callback(e))
      }

      const keep_inds = argUnique(newArr)
      for (let i = 0; i<keep_inds.length; i++ ){
        keep_inds[i] = array[keep_inds[i]]
      }
      return keep_inds
    },

    keys: function (object) {
      const newArr = [];
      for (const key in object) {
        newArr.push(key)
      }
      return newArr
    },

    values: function(object) {
      const newArr = [];
      for (const key in object) {
        newArr.push(object[key])
      }
      return newArr
    },

    functions: function(object) {
      const functions = []
      const allVal = fi.values(object)
      for (let i = 0; i < allVal.length; i++) {
        if (typeof allVal[i] === 'function') {
          functions.push(allVal[i])
        }
      }
      return functions
    },


  }
})()

fi.libraryMethod()
