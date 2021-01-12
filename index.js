    let testObj1 = [1, 2, 3, 4];
    let callback1 = x => (x * 3);

    const testObj2 = {one: 1, two: 2, three: 3, four: 4}
    const resultObj2 = {one: 3, two: 6, three: 9, four: 12}

    // const arrResult1 = fi.map(testObj1, callback1);
    // let m = arraysEqual([3, 6, 9, 12], arrResult1);

    const testArr = testObj1.slice() // arr is [1, 2, 3, 4]
    const callback = (acc, val, collection) => (acc + (val * 3))

    function arraysEqual(arrA, arrB) {
      if (arrA.length !== arrB.length) return false
      for (let idx = 0; idx < arrA.length; idx++) {
        if (arrA[idx] !== arrB[idx]) {
          
          if (isNaN(arrA[idx]) && isNaN(arrB[idx])) continue
          return false
        }
      }
      // console.log(arrA);
      // console.log(arrB);
      return true
    }

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    each: function(collection, callback) {
      if (collection instanceof Array) {
        let x = Object.assign([], collection);
        for (let i = 0, len = x.length; i < len; i++) {
          callback(x[i]);
        }
      } else {
        let x = Object.values(collection);
        for (let i = 0, len = x.length; i < len; i++) {
          callback(x[i]);
        }
      } 
      return collection;
    },

// fi.map(testObj1, callback1)
    map: function(obj, func) {    
      if (Array.isArray(obj)) {
        let x = Object.assign([], obj);
        let result = Object.assign([]);
        for (let i = 0, len = x.length; i < len; i++) {
          result.push(func(x[i]));
        }
        return result;
      } else {
        let x = Object.assign({},obj);
        let result = Object.assign({});
        for (const property in x) {
          // console.log(x[property]);
          result[property] = func(x[property]);
          // console.log(Object.values(result));
        }
        return Object.values(result);
      }
    },

    reduce: function(obj, func, acc = 0) {
      if (acc != 0) {
        let x = Object.assign([], obj);
        for (let i = 0, len = x.length; i < len; i++) {
          acc = func(acc, x[i]);
        }
        return acc;
      } else {
        let x = Object.assign([], obj);
        acc = obj[0];
        for (let i = 1, len = x.length; i < len; i++) {
          acc = func(acc, x[i]);
        }
        return acc;
      }
    },

    find: function(collection, predicate) {
      if(Array.isArray(collection)) {
        for(let x of collection) {
          if (predicate(x)) {
            return x;
          }
        }
      }
    },

    filter: function(collection, predicate) {
        let r = [];
        for(let x of collection) {
          if (predicate(x)) {
            r.push(x);
          }
        }
        return r;
    },

    size: function(collection) {
        let r = 0;
        if(Array.isArray(collection)) {
          for(let x of collection) {
              r++;
            }
        } else {
          r = Object.keys(collection).length;
        }
        return r;
    },

    first: function(array, set = 1) {
      let r = [];
      for(let x of array) {
        if (r.length == set) { break; }
        r.push(x);
        }
      return (set == 1) ? r[0] : r ;
    },

    last: function(array, set = 1) {
      let r = [];
      for(let i = array.length - set; i < array.length; i++) {
        if (r.length == set) { break; }
        r.push(array[i]);
        }
      return (set == 1) ? r[0] : r ;
    },
    compact: function(array) {

    },
    sortBy: function(array, callback) {

    },
    flatten: function(array, [shallow]) {

    },
    uniq: function(array, [isSorted], [callback]) {

    },
    keys: function(object) {

    },
    values: function(object) {

    },
    functions: function(object) {

    },


  }
})()

fi.libraryMethod()

const objResult = fi.map(testObj2, callback1)
let m = arraysEqual([3, 6, 9, 12], objResult)