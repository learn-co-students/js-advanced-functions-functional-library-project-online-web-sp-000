const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(input, func) {
      //console.log(input)
      let array = input;
      if (Array.isArray(input)) {
        array = input;
      }
      else {
        //console.log(input)
        //console.log(Object.values(input))
        array = Object.values(input);
      }
      //console.log(array)
      for (let i = 0; i < array.length; i++) {
        func(array[i]);
      }
      return input;
    },

    map: function(input, func) {
      //console.log(input)
      let array = input;
      let outArr = []
      if (Array.isArray(input)) {
        array = input;
      }
      else {
        //console.log(input)
        //console.log(Object.values(input))
        array = Object.values(array);
      }
      //console.log(array)
      for (let i = 0; i < array.length; i++) {
        outArr.push(func(array[i]));
      }
      return outArr;
    },

    reduce: function(input, func, acc) {
      //console.log(input)
      let outVal
      if (acc !== undefined) {
          outVal = func(acc, input[0], input);
      }
      else {
          outVal = input[0];
      }
      for (let i = 1; i < input.length; i++) {
        outVal = func(outVal, input[i], input)
      }
      return outVal;
    },

    find: function(input, func) {
      let array = input;
      if (Array.isArray(input)) {
        array = input;
      }
      else {
        //console.log(input)
        //console.log(Object.values(input))
        array = Object.values(array);
      }
      //console.log(array)
      for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
          return array[i]
        }
      }
      return undefined;
    },

    filter: function(input, func) {
      let array = input;
      let outArr = [];
      if (Array.isArray(input)) {
        array = input;
      }
      else {
        //console.log(input)
        //console.log(Object.values(input))
        array = Object.values(array);
      }
      //console.log(array)
      for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
          outArr.push(array[i]);
        }
      }
      return outArr;
    },

    size: function(input) {
      let array = input;
      if (Array.isArray(input)) {
        array = input;
      }
      else {
        //console.log(input)
        //console.log(Object.values(input))
        array = Object.values(array);
      }
      return array.length;
    },

    first: function(input, n) {

      let array = input;
      if (typeof n !== 'undefined'){
        return array.slice(0,n)
      }
      else {
        return array[0]
      }
      
    },

    last: function(input, n) {
      let array = input;
      if (typeof n !== 'undefined'){
        return array.slice(array.length-n)
      }
      else {
        return array[array.length-1]
      }
    },

    compact: function(input) {
      let array = input;
      let outArr = [];
      if (Array.isArray(input)) {
        array = input;
      }
      else {
        //console.log(input)
        //console.log(Object.values(input))
        array = Object.values(array);
      }
      //console.log(array)
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
          outArr.push(array[i]);
        }
      }
      return outArr;
    },

    sortBy: function(input, func) {
      //console.log(input);
      //console.log(func);
      let array = input;
      let outArr = [];
      if (Array.isArray(input)) {
        array = input;
      }
      else {
        //console.log(input)
        //console.log(Object.values(input))
        array = Object.values(array);
      }
      //console.log(array)
      for (let i = 0; i < array.length; i++) {
       outArr.push(array[i])
      }
      return outArr.sort(function(a, b){return func(a)- func(b)});
    },

    flatten: function(input, firstOnly = false) {
      let outArr = []
      function forLoop(array) {
        for(let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
            if(firstOnly){
              for(let j = 0; j < array[i].length; j++){
                outArr.push(array[i][j])
              }
            }
            else {
              forLoop(array[i]);
            }
          }
          else {outArr.push(array[i])}
        }
      }
      forLoop(input);
      
      return outArr;
    },

    uniq: function(input, sorted, func) {
      
      function funcUniq(array, func = (x) => x){
        //console.log(`now sorting ${array} using ${func}`)
        let outArr = []
        for(let i = 0; i < array.length; i++) {
          let duplicate = false;
          for(let j = 0; j < outArr.length; j++) {
            if(func(array[i]) === func(outArr[j])){duplicate = true}
          }
          if(!duplicate) {outArr.push(array[i])}
          //console.log(outArr)
          //console.log(array[i])
        }
        return outArr
      }
      if(sorted){
        //console.log("sorted")
        let sortArr = []
        for(let i = 0; i < input.length; i++){
          if(sortArr[sortArr.length-1]!==input[i]){
            sortArr.push(input[i])
          }
          console.log(sortArr)
        }
        if(func) {return funcUniq(sortArr,func)}
        else {return sortArr}
      }
      else {
        //console.log("not sorted")
        return funcUniq(input,func)
      }
    },

    keys: function(object) {
      let outArr = []
      for(const key in object) {
        outArr.push(key)
      }
      return outArr
    },

    values: function(object) {
      let outArr = []
      for(const key in object) {
        outArr.push(object[key])
      }
      return outArr
    },

    functions: function(object) {
      let outArr = []
      for(const key in object) {
        if (typeof object[key] === "function") {outArr.push(this.keys)}
      }
      return outArr.sort()
    },

  }
})()

fi.libraryMethod()
