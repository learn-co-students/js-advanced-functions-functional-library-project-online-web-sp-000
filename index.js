const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callbackFunc) {
        //const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
        const newCollection = Object.values(collection);
        
        for(let i = 0; i < newCollection.length; i++){
          callbackFunc(newCollection[i])
        }
        return collection
    },

    map: function(collection, callbackFunc){
        collection = Object.values(collection) 
        //documentation says this will pull array valus or object values, so I think to clean up code this is all that's necessary
    
      let newArray = []
      for(let i = 0; i < collection.length; i++){
          newArray.push(callbackFunc(collection[i]))
      }
      return newArray;
    },

    reduce: function(collection, callbackFunc, startPoint){
      let i = 0;
      let accumulatingVariable = 0;
      if (startPoint !== undefined){
          i = 0;
          accumulatingVariable = startPoint;
      } else {
          accumulatingVariable = collection[0];
          i = 1;
      }
      for(; i<collection.length; i++){
          accumulatingVariable = callbackFunc(accumulatingVariable, collection[i])
      }
      return accumulatingVariable; 

    },

    find: function(collection, searchCallback) {
      collection = Object.values(collection)
      for(let i = 0; i<collection.length; i++){
        if(!!searchCallback(collection[i])){
          return collection[i]
        }        
      }
    },

    filter: function(collection, searchCallback){
      collection = Object.values(collection)
      let collectMatches = [];
      for(let i = 0; i<collection.length; i++){
        if(!!searchCallback(collection[i])){
          collectMatches.push(collection[i])
        }
      }
      return collectMatches
    },

    size: function(collection){
      collection = Object.values(collection)
      return collection.length;
    },

    first: function(array, n){ //n is number of first elements to get
      let newArray = [];
      if (!!n){
        for(let i = 0; i<n; i++){
          newArray.push(array[i])
        }
        return newArray
      }else{
        return array[0];
      }

    },

    last: function(array, n){
      let newArray = [];
      if (!!n){
        for(let i = array.length - n; i < array.length; i++){
          newArray.push(array[i])
        }
        return newArray
      }else{
        return array[array.length - 1];
      }
    },

    compact: function(array){
      let newArray = [];
      for(let i = 0; i < array.length; i++){
        if (!!array[i]){
        newArray.push(array[i]);
        }
      }
      return newArray;
    },

    sortBy: function(arr, func) {
      let returnArray = [...arr];
      return returnArray.sort(function(a, b) { return func(a) - func(b)});
    },

    flatten: function (array, shallow) {
      let newArray = []
      while(array.length) {
        let val = array.shift()
        if(Array.isArray(val)) {
          if (shallow){
            newArray = newArray.concat(val)
          }
          else{
            array = val.concat(array)
          }
        }
        else {
          newArray.push(val)
        }
      }
      return newArray
    },

    uniq: function(arr, isSorted, func) {
      let uniqueArray = []
      if (!!func){
        let results = [];
        let originalValues = [];
        for (let i = 0; i < arr.length; i++){
          if (!results.includes(func(arr[i]))){
            results.push(func(arr[i]));
            originalValues.push(arr[i])
          }
        }
        uniqueArray = [...originalValues];
      } else {
        uniqueArray = [...new Set(arr)];
      }
      
      return uniqueArray;
    },

    keys: function(obj){
      return Object.keys(obj);
    },

    values: function(obj){
      return Object.values(obj);
    },

    functions: function(obj) {
      let returnArray = [];
      for (let key in obj) {
        if (typeof(obj[key]) === "function") {
          returnArray.push(key);
        }
      }
      return returnArray;
    }
  }
})()

fi.libraryMethod()
