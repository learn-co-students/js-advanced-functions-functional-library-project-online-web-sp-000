const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      
      if (Array.isArray(collection)) {
        for (let i=0; i< collection.length; i++){
          callback(collection[i]);
        } 

      }else {
       let coll = Object.values(collection);
        for (let i = 0; i < coll.length; i++){
            callback(coll[i])
            console.log(coll);
        }
      }
      return collection;
    },
   

    map: function(collection, callback) {
     let arr = []
      if (Array.isArray(collection)) {
        for (let i=0; i< collection.length; i++){
          arr.push(callback(collection[i]));
        }
      }else {

      let coll = Object.values(collection);
        for (let i = 0; i < coll.length; i++){
           arr.push(callback(coll[i]));
            console.log(coll);
        }
      }
      return arr;
    },

    reduce: function(collection, callback, acc) {
      // let total = acc;
      if (acc){
       for (let i = 0; i < collection.length; i++){
       acc = callback(acc, collection[i]);
       
      }
         return acc;
      }else {
        for(let i =0; i < collection.length; i++){
        acc = callback(collection[i], 8)
      }
         return acc;
      }
    
    },



    find: function(collection, predicate) {

      if (!(collection instanceof Array))
         collection = Object.values(collection)

          for (let i = 0; i < collection.length; i++){
          if (predicate(collection[i])) return collection[i];
          }

       return undefined;
    },


    filter: function(collection, predicate){
      if (!(collection instanceof Array))
       collection = Object.values(collection)
        
         const arr = [];
        for (let i = 0; i < collection.length; i++){
          if (predicate(collection[i])) arr.push(collection[i]);
        }
     return arr;
    },

    size: function(collection){
      let arr = [];
      if (Array.isArray(collection)) {
        for (let i=0; i< collection.length; i++){
         arr.push(collection[i]);
        } 

      }else {
       let coll = Object.values(collection);
        for (let i = 0; i < coll.length; i++){
            arr.push(coll[i])
            
        }
      }
      return arr.length;

    },

    first: function(array, n){
      if (array == null) 
      return void 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return [];
    return array.slice(0, n);
  },


  last: function(array, n){
    if (array == null)
    return void 0;
    if(n == null)
    return array[array.length -1];
    return array.slice(Math.max(array.length -n, 0));
  },

  compact: function(array){
    return array.filter(function (n) { 
      return n
  });
  },

sortBy: function(array, callback){
  const arr = [...array];
  return  arr.sort(function(a, b){
  
   return callback(a) - callback(b);
  })
  
},

flatten: function(array, shallow, newArr = []){
 
 if(shallow){

  for (let entry of array){
    if (Array.isArray(entry)){

      for (let arr of entry){
        newArr.push(arr);
      }
       }else {
        newArr.push(entry);
       }
    }
 }else {
  for (let arr2 of array) {
    if (Array.isArray(arr2)){
      fi.flatten(arr2, false, newArr)
    }else {
      newArr.push(arr2)
    }
  }

 }
  return newArr;
},


uniq: function(array, isSorted, callback){
if(callback){
  let org = [];
  let modifyVal = [];
  for(let i = 0; i < array.length; i++){
    let val = callback(array[i]);
 if (!modifyVal.includes(val)){
     modifyVal.push(val);
     org.push(array[i]);
  }
 

 }
 return org;
}else{
  let unique = [...new Set(array)];
  return unique;
  
}
  
},


keys: function(object){
  return Object.keys(object);
},

values: function(object){
  return Object.values(object);
},

functions: function(object){
  let arr = [];
 for (const property  in object){
  
  if (typeof object[property] === "function"){
    arr.push(property);
  }
  
 
 }
 console.log(arr.sort())
 return  arr.sort();
 
}



  }
})()

fi.libraryMethod()

