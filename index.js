const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let i;
      for (i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      return newCollection.map(callback)
    },

    reduce: function(collection, callback, acc) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      if (!acc) {
        return newCollection.reduce(callback)
      } else {
        let i;
        for (i = 0; i < newCollection.length; i++) {
          acc = callback(acc, newCollection[i], newCollection);
        }
        return acc
      }
    },

    find: function (collection, callback) {
      let i;
      for (i = 0; i < collection.length; i++) {
        if (!!callback(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function (collection, callback) {
      let newCollection = []
      let i;
      for (i = 0; i < collection.length; i++) {
        if (!!callback(collection[i])) {
          newCollection.push(collection[i])
        }
      }
      return newCollection
    },

    size: function (collection) {
      let newCollection = Object.keys(collection);
      return newCollection.length
    },

    first: function (collection, elements=1) {
      let newCollection = []
      let i;
      for (i = 0; i < elements; i++) {
        newCollection.push(collection[i])
      }
        if (newCollection.length === 1) {
          return newCollection[0]
        }
      return newCollection
    },

    last: function (collection, elements=1) {
      let newElements = elements;
      let reverseCollection = collection.slice().reverse();
      let newCollection = [];
      for (let i = 0; i < newElements; i++) {
        let element = reverseCollection[i];
        newCollection.push(element);
      }
      if(newElements === 1){
        return newCollection[0];
      }
      return newCollection.reverse();
    },
  
    compact: function (collection) {
      let fixedCollection = collection.slice()
      let newCollection = []
      for (let i = 0; i < collection.length; i++) {
        if (!!fixedCollection[i]) {
          let element = fixedCollection[i]
          newCollection.push(element)
        }
      }
      return newCollection
    },

    sortBy: function (collection, callback) {
      let newCollection = Object.values(collection)
      return newCollection.sort((a,b) => callback(a) - callback(b))
    },

    flatten: function (array, shallow, newArray=[]) {
      if (!shallow) {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            this.flatten(array[i], false, newArray)
          } else {
            newArray.push(array[i])
          }
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            for (let a = 0; a < array[i].length; a++) {
              newArray.push(array[i][a])
            }
          } else {
            newArray.push(array[i])
          }
        }
      }
      return newArray
    },


    uniq: function (array, sorted, callback) {
      let newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (callback) {
          if (!newArray.find(element => callback(element) === callback(array[i]))) {
            newArray.push(array[i]);
          }
        } else {
          if (!newArray.find(element => element === array[i])) {
            newArray.push(array[i]);
          }
        }
      }
      return newArray;
    },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      let newArray = []
      for (let key in obj) {
        if (typeof obj[key] === 'function') {
          newArray.push(key);
        }
      }
      return newArray
    },

  }

})()

fi.libraryMethod()