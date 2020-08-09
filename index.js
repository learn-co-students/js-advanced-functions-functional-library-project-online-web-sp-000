const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      let arrIteration = (arr) => {
        arr.forEach((e,i) => cb(e,i,arr))
      }
      let objIteration = (obj) => {
        for (const property in obj) {
          cb(obj[property], property, obj)
        }
      }
      Array.isArray(collection) ? arrIteration(collection) : objIteration(collection);
      return collection;
    },

    map: function(collection, cb) {
      let newCollection = []
      let arrIteration = (arr) => {
        arr.forEach((e,i) => newCollection.push(cb(e,i,arr)))
      }
      let objIteration = (obj) => {
        for (const property in obj) {
          newCollection.push(cb(obj[property],property,obj))
        }
      }
      Array.isArray(collection) ? arrIteration(collection) : objIteration(collection);
      return newCollection;
    },

    reduce: function(collection,cb,acc) {
      let initVal;
      acc ? initVal = acc :initVal = collection[0];
   
      let i = acc ? 0 : 1;
   
      for (; i < collection.length; i++) {
          initVal = cb(initVal, collection[i], collection)
      }
   
      return initVal;
    },

    find: function(collection, predicate) {
      let result;
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result = collection[i];
          break;
        }
      }
      return result;
    },

    filter: function(collection, predicate) {
      let result = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
      return result;
    },

    size: function(collection) {
      let counter = 0;
      for (const prop in collection) {
        counter += 1;
      }
      return counter;
    },

    first: function(arr, n) {
      return n ? arr.slice(0,n) : arr[0];
    },

    last: function(arr, n) {
      return n ? arr.slice(-n) : arr[arr.length-1];
    },

    compact: function(arr) {
      let falsy = [false, null, 0, "", undefined, NaN];
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        if (!falsy.includes(arr[i])) {
          result.push(arr[i])
        }
      }
      return result;
    },

    sortBy: function(arr,cb) {
      let copy = [...arr]
      return copy.sort(function(a, b){return cb(a) - cb(b)})
    },

    flatten: function(arr,shallow) {
      return shallow ? arr.flat() : arr.flat(Infinity);
    },

    uniq: function(arr,isSorted,cb) {
      let result = [];
      if (cb) {
        for (let i = 0; i < arr.length; i++) {
          if (!result.find(e => cb(e) === cb(arr[i]))) {
            result.push(arr[i])
          }
        }
        return result;
      } else {
        let result = [...new Set(arr)]
        return result;
      }
    },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      let result = [];
      for (const prop in obj) {
        if (obj[prop].call) {
          result.push(prop)
        }
      }
      return result;
    },





  }
})()

fi.libraryMethod()
