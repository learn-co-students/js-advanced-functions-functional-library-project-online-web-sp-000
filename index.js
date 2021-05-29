const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === "object") {
        let keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
          callback(collection[keys[i]]);
        }
      } else {
        for (let j = 0; j < collection.length; j++) {
          collection[j] = callback(collection[j]);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let results = [];
      if (typeof collection === "object") {
        let keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
          results.push(callback(collection[keys[i]]));
        }
      } else {
        for (let j = 0; j < collection.length; j++) {
          collection[j] = callback(collection[j]);
          results.push(collection[j])
        }
      }
      return results;
    },

    reduce: function(collection, callback, acc) {
      let result;
      if (acc) {
        result = acc;
        for (let i = 0; i < collection.length; i++) {
          result = callback(result, collection[i]);
        }
      } else {
        result = collection[0];
        for (let i = 1; i < collection.length; i++) {
          result = callback(result, collection[i]);
        }
      }
      return result;
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (!!predicate(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      let result = [];
      for (let i = 0; i < collection.length; i++) {
        if (!!predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
      return result;
    },

    size: function(collection) {
      if (typeof collection === "object") {
        return Object.keys(collection).length;
      } else {
        return collection.length;
      }
    },

    first: function(collection, n) {
      if (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
          result.push(collection[i]);
        }
        return result;
      } else {
        return collection[0];
      }
    },

    last: function(collection, n) {
      if (n) {
        let result = [];
        let lastIndex = collection.length - 1;
        for (let i = collection.length - n; i < collection.length; i++) {
          result.push(collection[i]);
        }
        return result;
      } else {
        return collection[collection.length - 1];
      }
    },

    compact: function(array) {
      let result = [];
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
          result.push(array[i]);
        }
      }
      return result;
    },

    sortBy: function(array, callback) {
      let result = Array.from(array);
      return result.sort((a, b) => callback(a) - callback(b));
    },

    flatten: function(array, shallow) {
      let result = [];
      let flattenMore;
      if (shallow === true) {
        this.each(array, function(x) {
          if (Array.isArray(x)) {
            result = result.concat(x);
          } else {
            result.push(x);
          }
        })
      } else {
        this.each(array, function(x) {
          if (Array.isArray(x)) {
            result = result.concat(x);
          } else {
            result.push(x);
          }
        })
        while(this.find(result, x => Array.isArray(x))) {
          flattenMore = Array.from(result);
          result = [];
          for (let i = 0; i < flattenMore.length; i++) {
            if (Array.isArray(flattenMore[i])) {
              result = result.concat(flattenMore[i]);
            } else {
              result.push(flattenMore[i]);
            }
          }
        }
      }
      return result;
    },

    uniq: function(array, isSorted, callback) {
      let result = [];
      if (isSorted) {
        for (let i = 0; i < array.length; i++) {
          if(!this.find(result, (x) => x === array[i])) {
            result.push(array[i]);
          }
        }
      } else {
        let sorted = Array.from(array).sort((a,b) => a - b);
        for (let i = 0; i < sorted.length; i++) {
          if (callback) {
            if (!this.find(result, (x) => callback(x) === callback(sorted[i]))) {
              result.push(sorted[i]);
            }
          } else {
            if (!this.find(result, (x) => x === sorted[i])) {
              result.push(sorted[i]);
            }
          }
        }
      }
      return result;
    },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      let result = [];
      this.each(Object.keys(obj), function(i) {
        if (typeof obj[i] === "function") {
          result.push(obj[i]);
        }
      });
      return result.sort();
    }

  }
})()

fi.libraryMethod()
