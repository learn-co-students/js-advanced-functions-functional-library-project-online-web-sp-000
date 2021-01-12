function arraysEqual(arrA, arrB) {
  if (arrA.length !== arrB.length) return false
  for (let idx = 0; idx < arrA.length; idx++) {
    if (arrA[idx] !== arrB[idx]) {

      if (isNaN(arrA[idx]) && isNaN(arrB[idx])) continue
      return false
    }
  }
  return true
}
const fi = (function() {

  function returnValue(x) {
    return x;
  };

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
    compact: function(collection) {
      let mm = Object.assign([], collection);
      if (mm instanceof Array) {
        for (let i = 0, len = mm.length; i < len; i++) {
          if (i >= mm.length) { break; }

          while (!mm[i]) {
            if (i >= mm.length) { break; }
            mm.splice(i, 1)
          };
        }
      } 
      return mm;
    },

    
    sortBy: function(array, callback) {
      let r = [];
      let copy = Object.assign([], array);
      while (copy.length > 0) {
        let lowest = callback(copy[0]);
        let rememberIdx = 0;
        for (let i = 0, len = copy.length; i < len; i++) {
          if (lowest > callback(copy[i])) { 
              lowest = callback(copy[i]);
              rememberIdx = i;
          }
        }
      r.push(copy.splice(rememberIdx, 1)[0]);
      }
      return r;
    },

    flatten: function(collection, shallow = false) {
      let nested = true;
      let array = Object.assign([], collection);
      let i = 0;

      while (nested) {
        if (i >= array.length) { nested = false;}
        for (let len = array.length; i <=len; i++) {
          if (Array.isArray(array[i])) {
            let tmp = array.splice(i, 1);
            let z = [];
            for (let x = 0; x < tmp[0].length; x++) {
              z.push(tmp[0][x]);
              if (shallow){
                if (i == array.length) { nested = false;}
              }
              array.splice(i+x, 0, tmp[0][x]);
            };
            if (shallow) { 
              break;  
            } else {
              i = 0;
            }
          }
        }
        
      }
      return array;
    },

    
    uniq: function(array, isSorted, callback = returnValue)  {
      
      for (let i = 0, len = array.length; i <=len; i++) {
        let a = array[i];
        for (let x = 0, scan = array.length; x <=scan;x++) {
          let b = array[x];
          if ((a === undefined) && (b === undefined)) {break;}
          // console.log(`call ${callback(a)}`);
          // console.log(`call ${callback(b)}`);

          if ((callback(a) == callback(b)) && (i != x)) {
            

            // console.log(`${a} and ${b} at position i:${i} and x: ${x} are equal`);
            // console.log(`removing ${b} at position x: ${x}`);
            array.splice(x, 1);
            // console.log(`New Array: ${array}`);
            // console.log('----');
            x--;
            // break;
          }
          // x++;
        }
      }
      return array;
    },

    keys: function(object) {
      let props = [];
      for (const property in object) {
        props.push(property);
      }
      return props;
    },

    values: function(object) {
      let props = [];
      for (const property in object) {
        props.push(object[property]);
      }
      return props;
    },

    functions: function(object) {
      let set = [];
      for (const property in object) {
        if (object[property] instanceof Function) {
          set.push(property);
        }
      }
      console.log(set);
      set = set.sort();
      return set;
    },


  }
})()

fi.libraryMethod()

const testObject = {
  a: "",
  z: () => null,
  p: "",
  c: () => null,
  k: () => null,
}