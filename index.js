const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection);
        }
      } else {
        for (const key in collection){
          callback(collection[key], key, collection);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let newArray = [];
      if (Array.isArray(collection)){
        // let newArray = [];
        for (let i = 0; i < collection.length; i++){
          newArray[i] = callback(collection[i], i, collection);
        } 
        return newArray;
      } else {
        let j = 0;
        for (const key in collection){
          newArray[j] = callback(collection[key], key, collection);
          j++;
        }
        return newArray;
      }
    },

    reduce: function(collection, callback, acc = 0) {

      let total = acc;
      // console.log(collection);
      for (const value of collection){
        // console.log(value);
        total = callback(total, value, collection);
        // console.log(total);
        //callback is (acc, val, collection) => acc + val
      }
      return total;
    },

    find: function(collection, predicate){
      for (const value of collection){
        if (predicate(value)) return value;
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let newArr = []
      for (const value of collection) {
        if (predicate(value)) newArr.push(value)
      }
      return newArr;
    },

    size: function(collection) {
      if (Array.isArray(collection)){
        return collection.length;
      } else {
        let size = 0;
        for (const key in collection){
          size++;
        }
        return size;
      }
    },

    first: function(collection, size = 1){
      if (size === 1) {
        return collection[0];
      }
      let newArr = [];
      for (let i = 0; i < size; i ++){
        newArr.push(collection[i]);
      }
      return newArr;
    },

    last: function(collection, size = 1){
      if (size === 1) {
        return collection[collection.length - 1];
      }
      let newArr = [];
      let startIndex = collection.length - size;
      for (let i = startIndex; i < collection.length; i ++){
        // console.log(collection[collection.length - i])
        newArr.push(collection[i]);
      }
      return newArr;
    },

    compact: function(collection){
      let newArr = [];
      for (const value of collection) {
        if (!!value) newArr.push(value);
      }
      return newArr;
    },

    sortBy: function(collection, callback) {
      let newArr = [...collection]
      return newArr.sort(function(a,b) { return callback(a) - callback(b)});
    },

    flatten: function(collection, n = false) {
      let final = [];
      let curr = [];
      for (const value of collection) {
        curr.push(value);
      }
      if (n === true){
        while (curr.length !== 0){
          let next = curr.shift();
          if (Array.isArray(next)){
            for (const value of next){
              final.push(value);
            }
          } else {
            final.push(next);
          }
        }
        return final;
      }
      while (curr.length !== 0) {
        // console.log(curr);
        let next = curr.shift();
        if (Array.isArray(next)) {
          for (const value of next) {
            curr.push(value);
          }
        } else {
          final.push(next);
        }
      }
      // console.log(final);
      return final.sort(function(a,b) {return a-b});
    },

    uniq: function(collection, isSorted, callback){
      let newArr = [];
      if (callback === undefined) {
        let next;
        
        while (collection.length !== 0 ){
          next = collection.shift();
          // console.log(next);
          let uniq = true;
          for (const value of newArr) {
            if (value === next) uniq = false;
          }
          if (uniq) newArr.push(next);
          // next = collection.shift();
        }
        return newArr;
      } else {
        let next;
        while (collection.length !== 0 ){
          next = collection.shift();
          let uniq = true;
          for (const value of newArr){
            if (callback(value) === callback(next)) uniq = false;
          }
          if (uniq) newArr.push(next);
        }
        return newArr;
      }
    },

    keys: function(collection){
      let newArr = [];
      for (const key in collection) {
        newArr.push(key);
      }
      return newArr;
    },

    values: function(collection) {
      let newArr = [];
      for (const key in collection) {
        newArr.push(collection[key]);
      }
      return newArr;
    },

    functions: function(object) {
      let newArr = [];
      for (const funcName in object) {
        if (typeof(object[funcName]) === 'function') newArr.push(funcName);
      }
      // console.log(newArr);
      return newArr.sort();
    }


  }
})()

fi.libraryMethod()
