const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let c = [];
      if (Array.isArray(collection)) {
        c = [...collection];
      } else {
        c = Object.values(collection);
      };

      for (let i = 0; i < c.length; i++){
        callback(c[i]);
      };

      return collection;
    },

    map: function(collection, callback) {
      let c = [];
      const newC = [];
      if (Array.isArray(collection)) {
        c = [...collection];
      } else {
        c = Object.values(collection);
      };

      for (let i = 0; i < c.length; i++){
        newC.push(callback(c[i]));
      };

      return newC;
    },

    reduce: function(collection, callback, acc) {
      const c = [...collection];
      let result;

      if (acc) {
        result = acc;
        for (let i = 0; i < collection.length; i++){
          result = callback(result, collection[i], collection);
        }
      } else {
        result = collection[0];
        for (let i = 1; i < collection.length; i++){
          result = callback(result, collection[i], collection);
        }
      }

      return result;
    },

    find: function(collection, predicate) {
      const c = [...collection];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])){
          return collection[i];
        };
      };

      return undefined;
    },

    filter: function(collection, predicate) {
      const c = [...collection];
      const results = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])){
          results.push(collection[i]);
        };
      };

      return results;
    },
    
    size: function(collection) {
      let c = [];
      if (Array.isArray(collection)) {
        c = [...collection];
      } else {
        c = Object.keys(collection);
      };

      return c.length;
    },

    first: function(array, n) {
      if (n) {
        return array.slice(0, n);
      } else {
        return array[0];
      }
    },

    last: function(array, n) {
      if (n) {
        return array.slice(array.length - n);
      } else {
        return array[array.length-1];
      }
    },

    compact: function(array) {
      const c = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]){
          c.push(array[i]);
        };
      };
      return c;
    },

    sortBy: function(array, callback) {
      const c = [...array];
      return c.sort( (a, b) => callback(a) - callback(b) );
    },

    flatten: function(array, shallow, c = []) {
      if (!Array.isArray(array)) return c.push(array);
      if (shallow) {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            for (let elem of array[i]) {
              c.push(elem);
            };
          } else {
            c.push(array[i]);
          };
        };
      } else {
        for (let i = 0; i < array.length; i++) {
          this.flatten(array[i], false, c);
        };
      };

      return c;
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

    keys: function(object) {
      const keys = [];
      for (const key in object){
        keys.push(key);
      };
      return keys;
    },

    values: function(object) {
      const values = [];
      for (const key in object){
        values.push(object[key]);
      };
      return values;
    },

    functions: function(object) {
      const funcNames = [];
      for (const key in object) {
        if (typeof object[key] === "function") {
          funcNames.push(key);
        };
      };

      return funcNames;
    },


  }
})()

fi.libraryMethod()
