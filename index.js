const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (collection instanceof Array) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], collection);
        }
      } else {
        const newCol = Object.values(collection);
        for (let j = 0; j < newCol.length; j++) {
          callback(newCol[j], newCol);
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let result = [];
      let newCol = (collection instanceof Array) ? collection : Object.values(collection);
      for (let i = 0; i < newCol.length; i++) {
        result.push(callback(newCol[i]));
      }
      return result;
    },

    reduce: function(col, callback, acc) {
      let r = acc;
      let i = 0;
      if (!acc) {
        r = col[0];
        i = 1;
      }
      for (i; i < col.length; i++) {
        r = callback(r, col[i], col);
      }
      return r;
    },
    
    find: function(col, predicate) {
      for (let i = 0; i < col.length; i++) {
        if (!!predicate(col[i])) {
          return col[i];
        }
      }
    },
    
    filter: function(col, predicate) {
      let r = [];
      for (let i = 0; i < col.length; i++) {
        if (predicate(col[i])) {
          r.push(col[i]); 
        }
      }
      return r;
    },
    
    size: function(col) {
      let count = 0;
      let values = (col instanceof Array) ? col : Object.values(col);
      for (let i = 0; i < values.length; i++) {
        if (!!values[i]) {
          count++;
        }
      }
      return count;
    },
    
    first: function(arr, n) {
      let r;
      if (n) {
        r = [];
        for (let i = 0; i < n; i++) {
          r.push(arr[i]);
        }
      } else {
        r = arr[0];
      }
      return r;
    },
    
    last: function(arr, n) {
      let r;
      if (n) {
        r = [];
        for (let i = 1; i <= n; i++) {
          r.unshift(arr[arr.length - i]);
        }
      } else {
        r = arr[arr.length - 1];
      }
      return r;
    },
    
    compact: function(arr) {
      let r = [];
      for (let i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
          r.push(arr[i]);
        }
      }
      return r;
    },
    
    sortBy: function(arr, callback) {
      let r = arr.slice();
      return r.sort((a, b) => {return callback(a) - callback(b)});
    },
    
    flatten: function(arr, shallow) {
      function insertArr(target, position) {
        
      }
    },
    
    uniq: function(arr, isSorted, callback) {
      let r = [];
      for (let i = 0; i < arr.length; i++) {
        if (callback) {
          if (!r.find(item => callback(item) === callback(arr[i]))) {
            r.push(arr[i]);
          }
        } else {
          if (!r.find(item => item === arr[i])) {
            r.push(arr[i]);
          }
        }
      }
      return r;
    },
    
    keys: function(obj) {
      return Object.keys(obj);
    },
    
    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      let r = [];
      for (let key in obj) {
        if (typeof obj[key] === 'function') {
          r.push(key);
        }
      }
      console.log(r);
      return r.sort();
    },


  }
})()

fi.libraryMethod()
