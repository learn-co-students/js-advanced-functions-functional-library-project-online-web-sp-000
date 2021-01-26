const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const key in collection) {
          const element = collection[key];
          callback(element, key, collection)
      }
      return collection;
    },

    map: function(collection, callback) {
      let result = [];
for (const key in collection) {
    const element = collection[key];
  result.push(callback(element, key, collection));
}
return result;
    },

    reduce: function(collection, callback, acc) {
      let result = !!acc ? acc : collection[0]
      let i = !!acc ? 0 : 1
      
      for (; i < collection.length; i++) {
        const element = collection[i];
        result = callback(result, element, collection)
      }
      return result;
    },


find: function(collection, predicate) {
let result;
let found = false;
  for (let i = 0; (i < collection.length && found == false); i++) {
    const element = collection[i];
    if (predicate(element)) {
      found = true;
      result = element;
    }
  }
return result;
},

filter: function(collection, predicate) {
let result = [];

for (const key in collection) {
  const element = collection[key];
    predicate(element) ? result.push(element) : false
  
}
return result;
},

size: function(collection) {
let count = 0;
for (const key in collection) {
  const element = collection[key];
    count++
}
return count;

},

first: function(arr, n = 1) {

return n > 1 ?  arr.slice(0, n) : arr[0]

},

last: function(arr, n = 1) {

  return n > 1 ?  arr.slice(n*-1) : arr[arr.length -1]

},

compact: function(arr) {
let result = [];

for (const element of arr) {
  !!element == false ? false : result.push(element)
}
return result;
},

sortBy: function(arr, callback) {
  let sorted = [...arr];
 sorted.sort((a, b) => callback(a) - callback(b))
 return sorted;
},

unpack: function(receiver, arr) {
  for (let val of arr)
    receiver.push(val)
},

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

uniq: function(arr, isSorted = false, callback = false) {
  let uniqArr = [];
if (!callback) {
  uniqArr.push(arr[0]);
  for (const e of arr) {
    if (uniqArr.includes(e) == false) {
      uniqArr.push(e)
    }
  }
}
else {
  let worked = []
  worked.push(callback(arr[0]));
  uniqArr.push(arr[0]);
  for (const e of arr) {
    if (worked.includes(callback(e)) == false) {
      uniqArr.push(e)
      worked.push(callback(e))
    }
  }
}
return uniqArr;
},

keys: function(obj) {
  let result = [];
for (const key in obj) {
    result.push(key)
}
return result;
},

values: function(obj) {
  let result = [];
for (const key in obj) {
    result.push(obj[key])
}
return result;
},

    functions: function(obj) {
      const result = [];
      for (const key in obj) {
          const element = obj[key];
        typeof(element) == 'function' ? result.push(key) : false
      }

      return result.sort()
    },


  }
})()

fi.libraryMethod()
