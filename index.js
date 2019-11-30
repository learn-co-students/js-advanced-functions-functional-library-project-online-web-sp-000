const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, fn) {
      for(const value of Object.values(obj)) {
        fn(value);
      };
      return obj;
    },

    map: function(obj, fn) {
      const newArr = [];
      for(const value of Object.values(obj)) {
        newArr.push(fn(value));
      };
      return newArr
    },

    reduce: function(obj, fn, accumulator) {
      let i = 0;
      const array = Object.values(obj);
      if(!accumulator) {
        accumulator = array[0];
        i = 1;
      };
      for(; i < array.length; i++) {
        accumulator = fn(accumulator, array[i]);
      };
      return accumulator;
    },

    find: (obj, fn) => { for(const value of Object.values(obj)) { if(fn(value)) { return value } } },

    filter: (obj, fn) => {
      const newArr = [];
      for(const value of Object.values(obj)) {
        if(fn(value)) { newArr.push(value) };
      };
      return newArr;

    },

    size: obj => { return Object.values(obj).length },

    first: (arr, amt = 1) => { return amt > 1 ? arr.slice(0, amt) : arr[0] },

    last: (arr, amt = 1) => { return amt > 1 ? arr.slice(arr.length - amt) : arr[arr.length - 1] },

    compact: arr => { return arr.filter(value => !!value) },

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
