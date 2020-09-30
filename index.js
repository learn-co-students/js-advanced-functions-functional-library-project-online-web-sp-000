const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, cb) {
      if (Array.isArray(coll)){
        for (let i = 0; i < coll.length; i++){
          cb(coll[i], i, coll);
        }
        return coll;
      }  else {
        for (let e in coll){
          cb(coll[e], e, coll);
        }
        return coll;
      }
    },

    map: function(coll, cb) {
      if (Array.isArray(coll)){
        let newArr = [];
        for (let i = 0; i < coll.length; i++){
          newArr.push(cb(coll[i]));
        }
        return newArr;
      } else {
        let newArr = [];
        for (let e in coll){
          newArr.push(cb(coll[e]));
        }
        return newArr;
      }

    },

    reduce: function(coll, cb, acc = 0) {
      if (acc == 0){
        acc = coll[0];
        for (let i = 1; i < coll.length; i++){
          acc = cb(acc, coll[i], coll);
        }
        return acc;
      } else {
        for (let i = 0; i< coll.length; i++){
          acc = cb(acc, coll[i], coll);
        }
        return acc;
      }

    },

    find: function(coll, pred){
      if (Array.isArray(coll)){
        return coll.find(pred);
      }
    },

    filter: function(coll, pred){
      if (Array.isArray(coll)){
        return coll.filter(pred);
      }
    },

    size: function(coll){
      if (Array.isArray(coll)){
        return coll.length;
      } else {
        return Object.keys(coll).length;
      }
    },

    first: function(arr, x = 0){
      if (x == 0){
        return arr[0];
      } else {
        return arr.slice(0, x);
      }
    },

    last: function(arr, x){
      if (x === undefined){
        return arr[arr.length -1];
      } else {
        return arr.slice(arr.length - x);
      }
    },

    compact: function(arr){
      return arr.filter(x => Boolean(x));
    },

    sortBy: function(arr, cb){
      let newArr = [...arr];
      return newArr.sort((function(x, y){return cb(x) - cb(y)}));
    },

    flatten: function(arr, shallow) {
      if (shallow) {
        const flat = [].concat(...arr);
        return flat
      }
      else {
      const flat = [].concat(...arr);
      return flat.some(Array.isArray) ? fi.flatten(flat) : flat;
      }
    },

    uniq: function(arr, isSorted, cb){
      let newArr = [];
      if (isSorted === false) {arr.sort()};
      for (let e of arr) {
        if (cb){
          if (!newArr.find(x => cb(x) === cb(e))) {
            newArr.push(e);
          }
        } else {
          if (!newArr.find(x => x === e)) {newArr.push(e)};
        }
      }
      return newArr;
    },

    keys: function(obj){
      let keys = [];
      for (let k in obj) {keys.push(k)};
      return keys;
    },

    values: function(obj){
      let values = [];
      for (let v in obj) {values.push(obj[v])};
      return values;
    },

    functions: function(obj) {
      let funcs = [];
      for (let f in obj){
        if (typeof obj[f] === "function") {funcs.push(f)}
      }
      return funcs.sort()

    },


  }
})()

fi.libraryMethod()
