const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection)
      let arr = []
      for (let i = 0; i < newCollection.length; i++) {
        arr.push(callback(newCollection[i]))
      }
      return arr
    },

    reduce: function(collection, callback, acc) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection);
      let val = acc ? acc : newCollection[0]
      let i = acc ? 0: 1
      for ( ;i < newCollection.length; i++) {
        val = callback(val, newCollection[i])
      }
      return val
    },

    find: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          return newCollection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection);
      let arr = []
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          arr.push(newCollection[i])
        }
      }
      return arr
    },

    size: function(collection) {
      const newCollection = (collection instanceof Array) ? collection : Object.values(collection);
      return newCollection.length
    },

    first: function(array, n) {
      return n ? array.slice(0, n) : array[0]
    },

    last: function(array, n) {
      return n ? array.slice(-n) : array.slice(-1)[0]
    },

    compact: function(array) {
      const copy = array.slice()
      for( let i = copy.length - 1; i >= 0 ; i--) {
        if (!copy[i]) {
          copy.splice(i, 1)
        }
      }
      return copy
    },

    sortBy: function(array, callback) {
      const copy = array.slice()
      return copy.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    // uniq: function(array, isSorted, callback) {
    //   if (isSorted) {
    //     let newArray = array.slice()
    //     for (let i = newArray.length - 1; i > 0; i--) {
    //       if (newArray[i] === newArray[i-1]) {
    //         newArray.splice(i, 1)
    //       } 
    //     } 
    //     return newArray
    //   } else {
    //     const sortedArray = array.slice().sort(function(a, b) {
    //       if (typeof a === 'object' && typeof b === 'object') {
    //         return a[Object.keys(a)[0]] > b[Object.keys(b)[0]]
    //       } else {
    //         return a > b
    //       } 
    //     })
    //     for (let i = sortedArray.length - 1; i > 0; i--) {
    //       if (sortedArray[i] === sortedArray[i-1]) {
    //         sortedArray.splice(i, 1)
    //       } 
    //     } 
    //     return sortedArray
    //   }
    // },

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

    keys: function(obj) {
      let keys = []
      for (let key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      let vals = []
      for (let key in obj) {
        vals.push(obj[key])
      }
      return vals
    },

    functions: function(obj) {
      let arr = []
      for (let key in obj) {
        if (typeof obj[key] === 'function') {
          arr.push(key)
        }
      }

      return arr.sort(function(a,b){
        return a > b
      })
    },


  }
})()

fi.libraryMethod()


function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const bandA = a.band.toUpperCase();
  const bandB = b.band.toUpperCase();

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}