const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callBack) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      
      for (let i=0; i<newCollection.length; i++) {
        callBack(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callBack) {
      let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let newMap = [];
      for (let i=0; i<newCollection.length; i++) {
        let adjustedElement = callBack(newCollection[i]);
        newMap.push(adjustedElement);
      }
      return newMap;
    },
    
    reduce: function(collection = [], callBack = () => {}, accumulator) {
      
      // let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let newCollection = collection.slice(0)
      
      if (!accumulator) {
        accumulator = newCollection[0]
        newCollection =  newCollection.slice(1);
      }
      
      for (let i = 0; i<newCollection.length; i++) {
        accumulator = callBack(accumulator, newCollection[i], newCollection);
      }
      return accumulator;
    },
    
    find: function(collection, predicate) {
      let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      
      for(let i = 0; i < newCollection.length; i++) {
        if (!!predicate(newCollection[i])) {
          return newCollection[i];
        }
      }
    },
    
    filter: function(collection, predicate) {
      let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      let filteredCollection = [];
      for(let i = 0; i < newCollection.length; i++) {
        if(!!predicate(newCollection[i])) {
          filteredCollection.push(newCollection[i]);
        }
      }
      return filteredCollection;
    },
    
    size: function(collection) {
      let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      return newCollection.length;
    },
    
    first: function(collection, number = false) {
      let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      return (number) ? newCollection.slice(0, number) : newCollection[0]
    },
    
    last: function(collection, number = false){
      let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      return (number) ? newCollection.slice(newCollection.length-number, newCollection.length) : newCollection[newCollection.length-1]
    },
    
    compact: function(collection) {
      let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      let compactedCollection = [];
      for (let i=0; i<newCollection.length; i++) {
        if (!!newCollection[i]) {
          compactedCollection.push(newCollection[i]);
        }
      }
      return compactedCollection;
    },
    
    sortBy: function(collection, callback) {
      const newCollection = [...collection]
      return newCollection.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },
    
    
    
    //NUTS! STUDY THIS ONE
    unpack: function(receiver, arr) {
      for (let val of arr)
      receiver.push(val)
    },
    
    //STUDY THIS ONE
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
      const keys = [];
      for(let key in obj) {
        keys.push(key);
      }
      return keys;
    },

    values: function(obj) {
      const values = [];
      for(let value in obj) {
        values.push(obj[value])
      }

      return values;
    },

    functions: function(obj) {
    const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key)
        }
      }
      return functionNames.sort();
    }
    
  }
})()

fi.libraryMethod()
