const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(obj, func) {
      if (typeof obj === "object") {
        for (let key in obj) {
          func(obj[key], key, obj);
        }
      } else {
        for (let i = 0; i < obj.length; i++) {
          func(obj[i], i, obj);
        }
      }
      return obj;
    },

    map: function(obj, func) {
      let returnObj = [];
      if (typeof obj === "object") {
        for (let key in obj) {
          returnObj.push(func(obj[key], key, obj));
        }
      } else {
        for (let i = 0; i < obj.length; i++) {
          returnObj.push(func(obj[i], i, obj));
        }
      }
      return returnObj;
    },

    reduce: function(obj, func, acc) {
      if (typeof(obj) === "object"){
        for (let key in obj){
          if (!acc) {
            acc = obj[key]
          } else{
            acc = func(acc, obj[key], obj);
          }
        }
      } else {
        let i = 0;
        if (!acc){
          acc = obj[i];
          i++;
        }
        while(i < obj.length){
          acc = func(acc, obj[i], obj);
          i++;
        }
      }
      return acc;
    },

    find: function(obj, func) {
      if (typeof(obj) === "object"){
        for (let key in obj){
          if (!!func(obj[key])){
            return obj[key];
          }
        }
      } else {
        for (let i = 0; i < obj.length; i++) {
          if (!!func(obj[i])){
            return obj[i];
          }
        }
      }
    },

    filter: function(obj, func) {
      let returnObj = [];
      if (typeof(obj) === "object"){
        for (let key in obj){
          if (!!func(obj[key])){
            returnObj.push(obj[key]);
          }
        }
      } else {
        for (let i = 0; i < obj.length; i++) {
          if (!!func(obj[i])){
            returnObj.push(obj[i]);
          }
        }
      }
      return returnObj;
    },

    size: function (obj) {
      if (typeof(obj) === "object"){
        return Object.keys(obj).length;
      } else {
        return obj.length;
      }
    },

    first: function (arr, n) {
      if (!!n){
        let returnArray = [];
        for (let i = 0; i < n; i++){
          returnArray.push(arr[i]);
        }
        return returnArray;
      } else {
        return arr[0];
      }
    },

    last: function(arr, n) {
      if (!!n) {
        let returnArray = [];
        for (let i = 0; i < n; i++){
          returnArray.unshift(arr.pop());
        }
        return returnArray;
      } else {
        return arr[arr.length - 1];
      }
    },

    compact: function(arr) {
      let returnArray = [];
      for (let i = 0; i < arr.length; i++) {
        if (!!arr[i]){
          returnArray.push(arr[i]);
        }
      }
      return returnArray;
    },

    sortBy: function(arr, func) {
      let returnArray = [...arr];
      return returnArray.sort(function(a, b) { return func(a) - func(b)});
    },

    flatten: function(arr, shallow) {
      if (!!shallow) {
        return arr.flat(1);
      } else {
        return arr.flat(Infinity);
      }
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
  };
})();

fi.libraryMethod();
