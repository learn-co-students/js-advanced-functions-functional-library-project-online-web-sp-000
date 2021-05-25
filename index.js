const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let [key,value] of Object.entries(collection)) {
        callback(value)
      }
      return collection
    },

    map: function(collection, callback) {
      const newArry = []
      for(let [key, value] of Object.entries(collection)) {
        newArry.push(callback(value, key, collection))
      }
      return newArry
    },

    reduce: function(collection, callback, acc = 0) {
      for (let i=0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, callback) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, callback) {
      let matches = []
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          matches.push(collection[i])
        }
      }
      return matches
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      }
      else if (typeof(collection) === "object") {
        return Object.keys(collection).length
      }
    },

    first: function(collection, n = 1) {
      if (n === 1) {
        return (collection[0]);
      }
      return collection.slice(0, n)
    },

    last: function(collection, n = 1) {
      if (n === 1) {
        return collection[collection.length -1]
      }
        return collection.slice(collection.length - n, collection.length)
    },

    compact: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let newCollection = [...array]
      let sortProgress = [-1]
      while(fi.find(sortProgress, e => e === -1)){
        for(let i = 0; i < newCollection.length - 1; i++){
          if(callback(newCollection[i]) > callback(newCollection[i+1])){
            let hold = newCollection[i+1]
            newCollection[i+1] = newCollection[i]
            newCollection[i] = hold
            sortProgress[i] = -1
          } else {
            sortProgress[i] = 0
          }
        }
      }
      return newCollection
    },

    unpack: function(receiver, array) {
      for (let value of array) {
          receiver.push(value);
      }
  },

    flatten: function(collection, shallow, newArray=[]) {
      if (!Array.isArray(collection)) return newArray.push(collection)

      if (shallow) {
          for (let val of collection)
              Array.isArray(val) ? this.unpack(newArray, val) : newArray.push(val)
      } else {
          for (let val of collection) {
              this.flatten(val, false, newArray)
          }
      }

      return newArray
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
  // Using for loop
  const keys = []

  for (let key in obj){
      keys.push(key)
  }

  return keys
},

values: function(obj) {
  // Using for loop
  const values = []

  for (let key in obj){
      values.push(obj[key])
  }

  return values

// Using the custom 'map' method from above
// return this.map(obj, (value) => value)

},

functions: function(object) {
  const functionNames = []

  for (let key in object) {
      if (typeof object[key] === "function"){
          functionNames.push(key)
      }
  }

  return functionNames.sort()
},


  }
})()

fi.libraryMethod()
