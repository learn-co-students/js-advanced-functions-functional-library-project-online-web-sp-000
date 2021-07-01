// Wrapping a library in code -> "The Module Pattern"
const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    // passing each ele in turn to a callback fn

    each: function(collection, callback) {
      const newCollection = (Array.isArray(collection)) ? collection : Object.values(collection); 
      // same as // (collection instanceof Array) ? collection : Object.values(collection)
      
      // calls callback fn with each element passed
      // calls callback fn properly on object values
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      // Returns og collection for chaining
      return collection;
    },

    map: function(collection, callback) {
      // successfully returns a correctly populated array
      const providedCollection = (Array.isArray(collection)) ? collection : Object.values(collection)
      const newArr = []
      // successfully returns a correctly populated array from modified object values
      for (let i = 0; i < providedCollection.length; i++) {
        newArr.push(callback(providedCollection[i]))
      }
      // return new collection for chaining w/o modifying og arr/ obj
      return newArr;
    },

    reduce: function(collection, callback, acc) {
      let c = collection.slice(0) // doesn't modify the original array
      // returns correct reduced value when/ not passed initial value
      if (!acc) {
        acc = collection[0];
        c = collection.slice(1);
      }
      for (let i = 0; i < c.length; i++) {
        // callback is passed acc, currentValue, ref to collection;
        acc = callback(acc, c[i], c)
      }
    return acc; //return value of acllbak
    },

    find: function(collection, predicate) {
      if (!Array.isArray(collection)) {
        collection = Object.values(collection);
      };
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) { 
          // returns as soon as it finds an acceptable element
          return collection[i] ;
        } 
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      if (!Array.isArray(collection)) {
        collection = Object.values(collection);
      };
      const filterdArr = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) { 
          // returns as soon as it finds an acceptable element
          filterdArr.push(collection[i]);
        } 
      }
      // filters array for values that the callback evaluates as true
      return filterdArr;
    },
    
    size: function(collection) {
      // return size of collection when an array is passed/ amt of keys if obj
      return (Array.isArray(collection)) ? collection.length : Object.keys(collection).length
    },
    
    // ARRAY FNS
    first: function(array, n) {
      return n ? array.slice(0,n) : array[0];
    },

    last: function(array, n) {
      return n ? array.slice(-n) : array[array.length - 1];
    },
    
    // returns a copy of the array with all falsy values removed
    compact: function(array) {
      return array.filter(ele => Boolean(ele)); //filter returns new arr with all eles that pass tests
      // const falsey = new Set([false, null, 0, "", undefined, NaN])
      // return array.filter(ele => !falsey.has(ele))
    },

    sortBy: function(array, callback) {
      //ES6 spread operator as parameter in fn - clone array
      const cloneArr = [...array];
      // numerically sort array by providing compare fn
      
      return cloneArr.sort(function(a,b){return callback(a) - callback(b)});
    },
    
    // flattens ludicrously nested array
    // e.g. fi.flatten([1, [2, 3], [[4, 5], 6, [7, [8, 9]]]])
    flatten: function(array, shallow, newArr=[]) {
      if (!Array.isArray(array)) { return newArr.push(array) }
      // flattens single level when a second argument of "true" is passed
      if (shallow) {
        for (let ele of array) {
          if(Array.isArray(ele)) { 
            for (let val of ele) { //single level
              newArr.push(val);
            };
          } else { // number
            newArr.push(ele);
          }
        }
      } else {
        for (let val of array) {
          // pass in val of array until all nested array is flattened
          console.log(`flattening ${val}`);
          this.flatten(val, false, newArr);
        };
      };
      return newArr;
    },
  
    
    uniq: function(array, isSorted=false, callback=false) {
      // output array will be made up of a subset of of array's values
      if (!callback) {
        // removes duplicate values from an array -> Set() obj
        // return [...new Set(collection)]
        return Array.from(new Set(array))
      // removes duplicate values from an array when an iteratee is applied
      } else {
        let transformedObj = new Set(); 
        let uniqValues = new Set();
        for (let ele of array) {
          let newEle = callback(ele);
          // If callback fn returns same value as previous execution of callback 
          // don't include that item in the return array
          if (!transformedObj.has(newEle)) {
            transformedObj.add(callback(newEle));
            uniqValues.add(ele);
          };
        };
        return Array.from(uniqValues);
      };
    },

    //FUNCTION - OBJ FNS
    // Retrieve all keys of object's own enumerable properties
    keys: function(object){
      const keys = [];
      for (let key in object) {
        keys.push(key);
      };
      return keys;
    },

    values: function(object){
      const values = [];
      for (let key in object) {
        values.push(object[key])
      };
      return values;
    },

    functions: function(object) {
      // returns sorted collection of names of every method in an obj
      const functionNames = [];
      for (const key in object) {
        if (typeof object[key] === 'function') {
          functionNames.push(key); 
        };
      };
      return functionNames.sort();
    },
  };
})()

fi.libraryMethod();

fi.flatten([1, [2], [3, [[4]]]]);