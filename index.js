const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, cb) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        cb(newCollection[i])
      }
      return collection
    },

    map: function (collection, cb) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      const returnArr = []
      for (let i = 0; i < newCollection.length; i++) {
        returnArr.push(cb(newCollection[i]));
      }
      return returnArr
    },

    reduce: function (collection, cb, acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for (let i = 0; i < collection.length; i++) {
        acc = cb(acc, collection[i])
      }
      return acc
    },

    find: function (collection, predicate) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          return newCollection[i]
        }
      }
    },

    filter: function (collection, predicate) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      const filterArr = []
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          filterArr.push(newCollection[i])
        }
      }
      return filterArr
    },

    size: function (collection) {
      return Object.keys(collection).length
    },

    first: function (collection, n = 1) {
      const firstArr = collection.slice(0, n)
      return firstArr.length === 1 ? firstArr[0] : firstArr
    },

    last: function (collection, n = 1) {
      const lastArr = collection.slice(-n)
      return lastArr.length === 1 ? lastArr[0] : lastArr
    },

    compact: function (collection) {
      const compactArr = [];
      for (let i = 0; i < collection.length; i++) {
        if (collection[i]) {
          compactArr.push(collection[i])
        }
      }
      return compactArr
    },

    sortBy: function (collection, cb) {
      const sortArr = collection.slice()
      return sortArr.sort(function (a, b) {
        return cb(a) - cb(b)
      })
    },

    flatten: function (collection, shallow) {

    },

    uniq(collection, sorted, cb) {

    },



  }
})()

fi.libraryMethod()
