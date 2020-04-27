const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // console.log(collection)
    let newCollect;
     if(Array.isArray(collection)){
       newCollect = collection.slice()
     }else{
       newCollect = Object.values(collection)
     }
      for(let i = 0; i< newCollect.length; i++) {
       callback(newCollect[i])
       
      }
     return collection
      

    },

    map: function(collection, callback) {
    let newArray = []
      collection = Array.isArray(collection)? collection: Object.values(collection)
      // collection if its array give  us collection array if its object give us values collection of object as an array 
      for (let i = 0; i < collection.length; i++){
        
       newArray.push(callback(collection[i]))
       

      }
      return newArray
      // we have function call back and we are getting collection(array) and callback function
      // first we define in a new array then underneath we want to set a value of collection passed in and 
      // see if its in array we wanna set this array just be it self but if its not array we want to set value of what ever object has 
      // so collection have been pass  wheter is either in  array or object if its an array we just dont do anything just keep it like an array
      // if its an object we sgould extract to values from object and use that values  to iterate over 
      // then inside of foor loop  we wanna push in to new array what ever we created each of the items in this collection 
      // after they are return in our call back function we wanted pass them argument of our call back function 
      // and return value from call back function with our items from array passed in we gonna add that to new array and eventually 
      // after the loop we gonna return them to new array 

    },
    //reduce tips 
    /// not sure if we wanna get values back its gonna be a few more arg pass in colelction and call back and accum
    // accum is 0 or false something like that we need to set first value to get in 
    reduce: function(collection, callback, acc) {
//       let result
//       let i 
//      if (acc){
//        result = acc
//        i = 0 
//      } else {
//        result = collection[0]
//        i = 1
//      }

     
      let result = acc ? acc: collection[0]
      /// if there is no starting point start from collection[0] first element in collection array
      /// if acc hast starting point number result = acc else result = collection[0]
      // second time to iretation acc is undefined because test request reduce works either way  accum have starting point or not not
      // 
      
      let i = acc ? 0 : 1
      //its determine where we start iteration from collection array
      //if we start iteration from  first element of collection [0] or collection[1] element of array 
      // we starting from first element if acc is undefined we set i = 0 or i= 1 
      console.log(acc)
     for (i ; i < collection.length; i++){
    
    result = callback(result , collection[i])
    // we should pass in result instead of acc because acc is just a variable which is storing of starting point or nothing 
    // result either gonna have starting point or collection[0] which is our new starting point
    // as we loop around result is the thing keep getting updating thats why we nee dto pass result in callback 

     }
   return result 
    },

    find: function(collection, predicate) {
   
    //  const result =[]
     for(let item of collection){
       if(predicate(item)){
        //  result.push(predicate(item));
        return item;
       }
     }
    },
   
  filter: function (collection, predicate){
      let result = []
   
    for(let item of collection){
     if(predicate(item)){
    result.push(item)
     }
   }
 return result 
  },

  size: function (collection){
  collection = Array.isArray(collection)? collection: Object.values(collection)
  let newArray = []
  let  result  = 0 
    for(let value  of collection){
    result += 1  
    newArray.push(result)

    
    } 
    return result 
  },

 first: function(array,n){
   return n? array.slice(0,n):array[0]

   //its says if the second paramter  provided we wanna privide that number of elements
   // so if the number 3 provided we should return first 3 numbers. if not we can only return first 


  
     
  },
  last: function(array, n){
    return n? array.slice(array.length-n,array.length):array[array.length-1]
  },
  
  
  compact: function(array){
    let newArray = []
    let falsyArray = [false, null, 0, "", undefined, NaN]

   for(let i = 0 ; i < array.length; i++){
     !falsyArray.includes(array[i]) ? newArray.push(array[i]) : null
     
  
   }
   return newArray
   },

   sortBy: function(array,callback){
     let numbers = (a,b) => callback(a) - callback(b);
     let copy = [...array] //spread operator
     return copy.sort(numbers)
  },
  flatten: function(array, shallow){
    if (shallow === true) {
      return array.flat()
    } else {
      return array.flat(Infinity)
    }
  },
  
 uniq: function (array, isSorted = false , callback = false){
 
 let newSet =  new Set()
 let newArray = []
 
  for (let i = 0 ; i < array.length; i++){
    // callback(array[i]) ? newSet.add(callback(array[i])) : newSet.add(array[i])
    
    
    if (callback){
      // if (callback(array[i]))
      // check whether newSet already contains the value `callback(array[i])`
    if (!newSet.has(callback(array[i]))){
      
    
      // if it doesn't, add it (that's what's happening on the next line)
      newSet.add(callback(array[i]))
      // AND add the element itself (array[i]) to a separate array
      newArray.push(array[i])
    }
      // if it does, do nothing
    }else{
     return Array.from(new Set(array))
      //check whether newSet already contains array[i]
      // if(!newSet.has(array[i])){
      //  //if it doesn't do this:
      //   newSet.add(array[i])
      // }

      
    }
   
  
  
  }
  //this needs to be updated to work with either newArray created above OR newSet
  // let newArray =  Array.from(newSet)
  return newArray
 },

 keys: function(obj){
  return Object.keys(obj)
},

values: function(obj){
  return Object.values(obj)
},
functions: function(obj){
  let array = Object.keys(obj)
  let functions = array.filter(e => {return typeof obj[e] === "function"})
  return functions.sort()

},

  }
})()

fi.libraryMethod()
