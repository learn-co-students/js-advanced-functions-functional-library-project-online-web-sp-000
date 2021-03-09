const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      let newCollection = Array.isArray(collection) ? collection : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++) {
        const element = newCollection[i];
        callback(element);
      }
      return collection
    },

    map: function (collection, callback) {
      let newCollection = Array.isArray(collection) ? collection : Object.values(collection)

      let newArray = []
      for (let i = 0; i < newCollection.length; i++) {
        const element = newCollection[i];
        newArray.push(callback(element));
      }
      return newArray
    },

    reduce: function (collection, callback, acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        acc = callback(acc, element, collection);
      }
      return acc
    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        if (predicate(element)) {
          return element;
        }
      }
    },

    filter: function (collection, predicate) {
      let newArray = []

      for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        if (predicate(element)) {
          newArray.push(element)
        }
      }
      return newArray
    },

    size: function (collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      } else {
        return Object.values(collection).length;
      }
    },

    // Array Functions

    first: function (array, n = 0) {
      return (n) ? array.slice(0, n) : array[n]
    },

    last: function (array, n = 0) {
      return (n) ? array.slice(-n) : array[array.length - 1]
    },

    compact: function (array) {
      let newArray = []

      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!!element) {
          newArray.push(element);
        }
      }
      return newArray
    },

    sortBy: function (array, callback) {
      // if Integers
      // .sort(function(a, b){return a - b})
      // string
      // .sort()
      let newArray = [...array]
      return newArray.sort(function (a, b) {
        return callback(a) - callback(b);
      })
    },

    unpack: function (receiver, array) {
      for (let value of array) {
        receiver.push(value);
      }
    },

    flatten: function (array, shallow, newArray = []) {
      if (!Array.isArray(array)) return newArray.push(array)

      if (shallow) {
        for (let val of array)
          Array.isArray(val) ? this.unpack(newArray, val) : newArray.push(val)
      } else {
        for (let val of array) {
          this.flatten(val, false, newArray)
        }
      }

      return newArray


    },

    uniqSorted: function (array, i) {
      const sorted = [array[0]]

      for (let idx = 1; idx < array.length; idx++) {
        if (sorted[idx - 1] !== array[idx])
          sorted.push(array[idx])
      }

      return sorted
    },

    uniq: function (array, sorted = false, i = false) {
      if (sorted) {
        return fi.uniqSorted(array, i)
      } else if (!i) {
        return Array.from(new Set(array))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()

        for (let val of array) {
          const moddedVal = i(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }

        return Array.from(uniqVals)
      }
    },

    keys: function (object) {
      return Object.keys(object)
    },

    values: function (object) {
      return Object.values(object)
    },

    functions: function (object) {
      let array = []
      for (let key in object) {
        if (typeof object[key] === "function") {
          array.push(key)
        }
      }
      return array.sort()
    }
  }
})()

fi.libraryMethod()
