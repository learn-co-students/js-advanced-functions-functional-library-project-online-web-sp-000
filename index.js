const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (const element of collection) {
          callback(element)
        }
      } else {
        for (const key in collection) {
          callback(collection[key])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      if (Array.isArray(collection)) {
        for (const element of collection) {
          newCollection.push(callback(element))
        }
      } else {
        for (const key in collection) {
          newCollection.push(callback(collection[key]))
        }
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      if (acc !== undefined) {
        for (const element of collection) {
          let newElement = callback(acc, element, collection)
          acc = newElement
        }
      } else {
        acc = collection[0]
        const newCollection = collection.slice(1)
        for (const element of newCollection) {
          let newElement = callback(acc, element, newCollection)
          acc = newElement
        }
      }
      return acc
    },

    find: function(collection, predicate) {
      for (const element of collection) {
        if (predicate(element) === true) {
          return element
          break;
        }
      }
    },

    filter: function(collection, predicate) {
      let newCollection = [];
      for (const element of collection) {
        if (predicate(element) === true) {
          newCollection.push(element)
        }
      }
      return newCollection;
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(array, n) {
      if (!n) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      if (!n) {
        return array[array.length - 1]
      } else {
        return array.slice(-n)
      }
    },

    compact: function(array) {
      let newArray = [];
      for (const element of array) {
        if (!!element === true) {
          newArray.push(element)
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let copyArray = [...array]
      for (const element of copyArray) {
        copyArray.sort((a, b) => callback(a) - callback(b))
      }
      return copyArray
    },

    flatten: function(array, shallow) {
      let newArray = [];

      if (shallow) {
        for (const element of array) {
          if (Array.isArray(element)) {
            for (const secondElement of element) {
              newArray.push(secondElement)
            }
          } else {
            newArray.push(element)
          }
        }
      } else {
        function checkArray(array) {
          for (const element of array) {
            if (Array.isArray(element)) {
              checkArray(element)
            } else {
              newArray.push(element)
            }
          }
        }
        checkArray(array)
      }
      return newArray
    },

    uniq: function(array, isSorted, callback) {
      let newArray = []
      let callBackArray = []
      if (callback) {
        for (const element of array) {
          if (!callBackArray.includes(callback(element))) {
            callBackArray.push(callback(element))
            newArray.push(element)
          }
        }
      } else {
        for (const element of array) {
          if (!newArray.includes(element)) {
            newArray.push(element)
          }
        }
      }
      debugger
      return newArray

    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      let collection = [];
      for (const property in object ) {
        if (typeof object[property] === "function") {
          collection.push(object[property])
        }
      }
      return collection.sort()
    },
  }
})()

fi.libraryMethod()
const newArr = fi.uniq([1, 2, 2, 3, 4, 6, 9], false, (val => val % 3))
