const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const elem in collection) {
        if (collection.hasOwnProperty(elem)) {
          const element = collection[elem];
          callback(element) 
        }
      }
      return collection

    },

    map: function(collection, callback) {
      let newCollection = []

      for (const elem in collection) {
          const element = collection[elem];
          newCollection.push(callback(element))
      }
      return newCollection


    },

    reduce: function(collection, callback, acc) {
      let r = (!!acc ? acc : collection[0])
      let i = 0

    if (acc === undefined) {
        i = 1
    }


    for (;i < collection.length; i++){
      let element = collection[i];
       r = callback(r, element)
    }
    return r


    },

    find: function(collection, predicateFn) {
      let found = false
      for (const elem in collection) {
        const element = collection[elem];
        if (predicateFn(element)) {
          found = true
          return element
        }
      }
      if (found === false) {
        return undefined
      }
    },
    filter: function(collection, predicateFn) {
      let found = []
      for (const elem in collection) {
        const element = collection[elem];
        if (predicateFn(element)) {
          found.push(element)
        }
      }
      return found
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(collection, n) {
      if (n) {
        return collection.slice(0, n)
      } else {
        return collection[0]
      }
    },

    last: function(collection, n) {
      if (n) {
        return collection.slice(collection.length - n, collection.length)
      } else {
        return collection[collection.length - 1]
      }
    },

    compact: function(array) {
      return array.filter(elem => !!elem)
    },

    sortBy: (arr, fn = value => value) => {
      const newArr = [...arr];
      newArr.sort((firstE, secondE) => { return fn(firstE) - fn(secondE) });
      return newArr;
    },
  
    unpack: function(rcvr, arr) {
      for (let val of arr) rcvr.push(val);
    },

    flatten: function(coll, shallow, newArr = []) {
      if (!Array.isArray(coll)) return newArr.push(coll);
      if (shallow) {
        for (let val of coll)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val);
      } else {
        for (let val of coll) {
          this.flatten(val, false, newArr);
        }
      }
      return newArr;
    },

    uniq: (arr, whatever, fn = value => value ) => {
      const newArr = [];
      for(const value of arr) { if(!newArr.find(conflict => fn(value) === fn(conflict) )) { newArr.push(value) } };
      return newArr;
    },

    keys: obj => {
      const newArr = [];
      for(const key in obj) { newArr.push(key) };
      return newArr;
    },

    values: obj => {
      const newArr = [];
      for(const key in obj) { newArr.push(obj[key]) };
      return newArr;
    },

    functions: obj => {
      const keys = obj => {
        const validKeys = [];
        for(const key in obj) {
          if(typeof obj[key] === 'function') { validKeys.push(key) };
        };
        return validKeys;
      };
      return fi.sortBy(keys(obj))
    }


  }
})()

fi.libraryMethod()
