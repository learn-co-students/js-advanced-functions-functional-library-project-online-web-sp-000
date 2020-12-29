const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(Array.isArray(collection)){
        for (let i=0; i < collection.length; i++){
          callback(collection[i], i, collection);
        }
      }else if (typeof(collection) === "object"){
        for (let i=0; i < Object.keys(collection).length; i++){
          callback(collection[Object.keys(collection)[i]], Object.keys(collection)[i], collection);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let mapCollection = [];
      if(Array.isArray(collection)){
        for (let i=0; i < collection.length; i++){
          mapCollection.push(callback(collection[i], i, collection));
        }
      }else if (typeof(collection) === "object"){
        for (let i=0; i < Object.keys(collection).length; i++){
          mapCollection.push(callback(collection[Object.keys(collection)[i]], Object.keys(collection)[i], collection));
        }
      }
      return mapCollection;
    },

    reduce: function(collection, callback, acc = 0) {
      if (acc === 0){
        acc = collection[0];
        for (let i = 1; i < collection.length; i++){
          acc = callback(acc ,collection[i], collection);
        }
      }else{
          for (let i = 0; i < collection.length; i++){
          acc = callback(acc, collection[i], collection);
          }
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      let filtered= [];
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          filtered.push(collection[i]);
        }
      }
      return filtered;
    },
    
    size: function(collection) {
      return Object.keys(collection).length;
    },
    
    first: function(array, n) {
      if (!n){
        return(array[0]);
      }else{
        return array.slice(0,n);
      }
    },
    
    last: function(array, n) {
      if (!n){
        return array[array.length-1];
      }else{
        return array.slice(-n);
      }
    },
    
    compact: function(array) {
      let smaller = [];
      for (let i = 0; i < array.length; i++){
        if (array[i]){
          smaller.push(array[i]);
        }
      }
        return smaller;
    },
    
    sortBy: function(array, callback) {
      let newArray = [...array]
      return newArray.sort((a, b) => {return callback(a) - callback(b)});
    },
    
    flatten: function(array, shallow = false) {
      let flatArray = []
      let level = 0
      let flattener = (e) => {
        if (Array.isArray(e)){
          level += 1
          if(shallow){
            e.forEach(v => {
              if (Array.isArray(v)){
                v.forEach(f => flatArray.push(f))
              }else{
                flatArray.push(v)
              }
            })
            return
          }
          return fi.each(e, flattener)
        }else{
          level -= 1
          flatArray.push(e)
        }
      }
      flattener(array)
      return flatArray
    },
    uniq: function(array, isSorted = false, callback) {
      let newArray = new Set()
      // let newArray = [...array]
      if(callback){
          const modifiedVals = new Set()
          const uniqVals = new Set()
          for (let val of array) {
            const moddedVal = callback(val)
            if (!modifiedVals.has(moddedVal)) {
              modifiedVals.add(moddedVal)
              uniqVals.add(val)
            }
          }
          return Array.from(uniqVals)
      }else{
        console.log(array)
        for (let val of array){
          if (!newArray.has(val)){
            newArray.add(val);
            console.log(val);
          }
          console.log(newArray)
        }
        // return Array.from(newArray)
      }
      // if (typeof newArray[0] === "object"){
      //   for (let i = 0;i < newArray.length; i ++){
      //     if((Object.keys(newArray[i]).join() === Object.keys(newArray[i+1]).join())){
      //       newArray.splice(i+1, i+2);
      //     }else if ((Object.keys(newArray[i]).join() === Object.keys(newArray[i+2]).join())){
      //         newArray.splice(i+2, i+3);
      //     }
      //     return newArray
      //   }
      // } else {
    //     if (isSorted === false){
    //       newArray = newArray.sort((a, b) => a - b)
    //     }
    //     for (let i = 0;i < newArray.length; i ++){
    //       if(newArray[i] === newArray[i+1]){
    //         newArray[i] = "x"
    //       }
    //     }
    //     newArray = newArray.filter(e => e != "x")
    //   // }
      return Array.from(newArray)
    },


    keys: function(array) {
      let keys =[]
      for (let key in array){
        keys.push(key)
      }
      return keys
    },
    values: function(obj) {
      let vals =[]
      for(let key in obj){
        vals.push(obj[key])
      }
      return vals
    },
    functions: function(obj) {
      let names =[]
      for (let key in obj){
        if(typeof obj[key] === "function"){
          names.push(obj[key])
        }
      }
      return names.sort()
    },
  }
})()

fi.libraryMethod()
