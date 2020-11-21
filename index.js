const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? [ ...collection ] : Object.values(collection);
      
      for(let i in newCollection) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? [ ...collection ] : Object.values(collection);

      let newArray = [];
      for(let i in newCollection) {
        newArray.push(callback(newCollection[i]));
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      let newCollection = Object.assign([], collection);

      if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
      }

      for(let i in newCollection) {
        acc = callback(acc, newCollection[i], newCollection);
      }
      return acc;
    },

    find: function(collection, callback){
      for (let i in collection) {
        if(callback(collection[i])){
           return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, callback) {
      let newArray = [];
      
      for(const i in collection) {
        if(callback(collection[i])){
          newArray.push(collection[i]);
        }
      }
      return newArray;
    },

    size: function(collection){
      if(!(collection instanceof Array)) {
        return Object.keys(collection).length;
      } else {
        return collection.length;
      }
    },

    first: function(collection, n=null){
      if(n){
        return collection.slice(0, n);
      } else {
        return collection[0];
      }
    },

    last: function(collection, n=null){
      if(n){
        return collection.slice(-n);
      } else {
        return collection.slice(-1)[0];
      }
    },

    compact: function(collection){
      const newArray = [];
      
      for(const i in collection){
          if(collection[i]){
            newArray.push(collection[i]);
          }
      }
      return newArray;
    },

    sortBy: function(collection, callback){
      const newArray = Object.assign([], collection);
      return newArray.sort((a, b) => {
        return callback(a) - callback(b);
      });
    },
    
    keys: function(collection){
      const newArray = [];
      for(const key in collection){
        newArray.push(key);
      }
      return newArray;
    },
  
    values: function(collection){
      const newArray = [];
      for(const key in collection){
        newArray.push(collection[key]);
      }
      return newArray;
    },

    functions: function(object){
      const functionNames = [];
      for(const key in object){
        if(typeof object[key] === "function")
        functionNames.push(key);
      }
      return functionNames.sort();
    },

    flatten: function(collection, nested, newArray = []){
      if(!Array.isArray(collection)){
        return newArray.push(collection);
      }
      
      if(!nested) {
        for(let val of collection) {
          this.flatten(val, false, newArray);
        }  
      } else {
        for(let val of collection) {
          if(Array.isArray(val)) { 
            for(let e of val){
              newArray.push(e);
            }
          } else {
           newArray.push(val);
          }
        }
      }
      return newArray;
    },

    sortedArray: function(collection, callback) {
      const sorted = [collection[0]];
      for(let i in collection){
        if(sorted[i-1] !== collection[i])
          sorted.push(collection[i]);
      }
      return sorted;
    },

    uniq: function(collection, sorted=false, callback=false) {
      if (sorted) {
        return this.sortedArray(collection, callback);
      } else if(!callback) {
        return Array.from(new Set(collection));
      } else {
        const modifiedVals = new Set();
        const uniqVals = new Set();
        for(let val of collection) {
          const moddedVal = callback(val);
          if(!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal);
            uniqVals.add(val);
          }
        }
        return Array.from(uniqVals);
      }
    },
  }
})();
