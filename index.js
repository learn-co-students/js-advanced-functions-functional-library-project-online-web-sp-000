const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, fun) {
      let vals = Object.values(array)
      for(let i = 0; i < vals.length; i++){
        fun(vals[i])
      }
      return array
    },

    map: function(obj, fun) {
      let array = [];
      let vals = Object.values(obj);
      for(let i = 0; i < vals.length; i++){
        array.push(fun(vals[i]))
      }
      return array;
    },

    reduce: function(array, fun, accumulator) {
      
      let a = (!!accumulator) ? accumulator : array[0];
      let i = (!!accumulator) ? 0 : 1;
        for(; i < array.length; i++){
          a = fun(a, array[i], array)// + a
        }
        return a
    },
    find: function(array, predicate){
      for(let i = 0; i < array.length; i++){
        if(predicate(array[i]) === true){
        return array[i];
        }
      }
    },
    filter: function(array, fun){
      let narray = [];
      for(let i = 0; i < array.length; i++){
        if(fun(array[i]) === true){
          narray.push(array[i])
        }
      }
      return narray
    },
    size: function(collection){
      let array = Object.keys(collection)
      let v = 0;
      for(let i = 0; i < array.length; i++){
        v++
      };
      return v
    },
    first: function(array, num){
      if(!num){
        return array[0];
      }else{
        let narray = [];
        for(let i = 0; i < num; i++){
          narray.push(array[i]);
        }
        return narray;
      }
    },
    last: function(array, num){
      if(!num){

        return array[array.length -1]
      }else{
        let narray = [];
        for(let i = num; i > 0; i--){
          narray.push(array[array.length -i])
        }
        return narray;
      }
    },
    compact: function(array){
      let narray = [];
      for(let i = 0; i < array.length; i++){
        if(!!array[i] === true){
          narray.push(array[i])
        }
      }
      return narray;
    },
    sortBy: function(array, fun){
      let sorted = array.slice();
     // console.log(sorted);
        sorted.sort(function(a, b){
          if(!!fun){
            return fun(a) - fun(b)
          }else{
            return a - b
          }});
        console.log(sorted)
        return sorted
      //}
    },
    flatten: function(array, s){
      let narray = [];
      if(s === true){
        array.forEach(function(e){
          if(Array.isArray(e)){
            narray = narray.concat(e)
          }else{
            narray.push(e);
          }
        })
        return narray;
      }else{
        function helper(array){
          for(let i = 0; i < array.length; i++){
            if(Array.isArray(array[i])){
              helper(array[i])
            }else{
              narray.push(array[i])
            }
          }
        }
        helper(array);
        return narray;
      }
      
      //return narray;
    },

    uniq: function(array, s, fun){
      let newArray = [];
      let funArray = [];
      for(let i = 0; i < array.length; i++){
        //console.log(!!fun)
        //console.log(fun(array[i]))
        if(!!fun){
          if(!funArray.includes(fun(array[i]))){
            funArray.push(fun(array[i]))
            newArray.push(array[i])
          }
        }
        else{
          if(!newArray.includes(array[i])){
            newArray.push(array[i]);
          }
        }
      }
      return newArray;
    },

    keys: function(obj){
      let keyray = [];
      for(let e in obj){
        keyray.push(e.key)

      }
      return keyray
    },
    values: function(obj){
      let valray = [];
      
      for(let e in obj){   
        console.log(e);
        valray.push(obj[e]);
      }
      return valray;
    },
    functions: function(obj) {
      let array = [];
      let ks = Object.keys(obj);
      for(let i = 0; i < ks.length; i++){
        console.log(typeof obj[ks[i]])
        if(typeof obj[ks[i]] === "function"){
          array.push(ks[i])
        }
      }
      //for(let e in obj){
        //console.log(obj[e])
        //if(typeof obj[e] === "Function"){
          //array.push(e)
        //}
      //}
      //console.log(array.sort());
      //console.log(ks.sort())
      //let sortedkeys = ks.sort();
      return array.sort();
      
      //values that are a function
      

    },


  }
})()

fi.libraryMethod()
