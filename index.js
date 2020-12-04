const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let arrayCollection = Array.isArray(collection)? collection : Object.values(collection)
      arrayCollection.forEach((element,index,array)=>callback(element,index,array))
      return collection
    },

    map: function(collection, callback) {
      let arrayCollection = Array.isArray(collection)? collection : Object.values(collection)
      let newCollection = []
      arrayCollection.forEach((element,index,array)=>{
        newCollection.push(callback(element,index,array))
      })
      return newCollection
    },

    reduce: function(collection=[], callback=()=>{}, acc) {
      let arrayCollection = Array.isArray(collection)? collection.slice() : Object.values(collection)
      if(acc===undefined){acc = arrayCollection.shift()}
      arrayCollection.forEach((val,index, collection)=>{
        acc = callback(acc,val,collection)
      })
      return acc
    },

    find: function(collection, predicate) {
      let arrayCollection = Array.isArray(collection)? collection : Object.values(collection)
      for(const element of arrayCollection){
        if(predicate(element)){
          return element
        }
      }
      return undefined
    },
    //object?
    filter: function(collection, predicate){
      let arrayCollection = Array.isArray(collection)? collection : Object.values(collection)
      let filtedArray = []
      for(const element of arrayCollection){
        if(predicate(element)){
          filtedArray.push(element)
        }
      }
      return filtedArray
    },

    size: function(collection){
      let arrayCollection = Array.isArray(collection)? collection : Object.values(collection)
      return arrayCollection.length
    },

    first: function(array, n=1){
      if(n===1){
        return array[0]
      }else{
        return array.slice(0,n)
      }   
    },
    //if doesnt give n, what is n's value
    //array[-1]?
    last: function(array, n=1){
      if(n===1){
        return array[array.length-1]
      }else{
        return array.slice(-n)
      }
    },

    compact: function(array){
      let truthyArray = []
      array.forEach((e)=>{
        if(Boolean(e)){
          truthyArray.push(e)
        }
      })
      return truthyArray
    },

  
    sortBy: function(array, callback){ 
      let sortedArray = array.slice().sort((a,b)=>callback(a)-callback(b))
      //sort array by comparing callback(element)
      console.log(array, sortedArray)
      return sortedArray
      
    },

    //option argument
    flatten: function(array, shallow=false, flattenArray = []){
      //baseCase
      if(!Array.isArray(array)){
        return flattenArray.push(array)
      }
      //shallow flatten
      if(shallow===true){
        for (const value of array) {
          if(Array.isArray(value)){
            for(let i = 0; i< value.length; i++){
              flattenArray.push(value[i])
            }
          }else{
              flattenArray.push(value)}
          }
          return flattenArray
      }
      //deep flatten
      else{
        //each element in the array unpack it until it's value
        for(const element of array){
           this.flatten(element, false, flattenArray)}
        //return the flattenedArray
        return flattenArray
      }
    },

    uniq: function(array, isSorted=false, callback = (x)=>x){
      let uniqArray = []
      let callBackUniqArray = []
      // if(isSorted===false){
      //   for(const element of array){
      //     callback(element)===callback(uniqArray[uniqArray.length-1])? Array :uniqArray.push(element)
      //   }
      // }else{
        for(let i=0;i<array.length;i++){
         let element = callback(array[i])
         if(!callBackUniqArray.includes(element)){
          uniqArray.push(array[i]) 
          callBackUniqArray.push(element)
         }
        }
          return uniqArray
        },
    

  

    keys: function(object){
      let keys = []
      for(const property in object){
        keys.push(property)
      }
      return keys
    },

    values: function(object){
      let values = []
      for(const property in object){
        values.push(object[property])
      }
      return values
    },

    functions: function(object){
      let array = []
      for(const property in object){
        if(typeof object[property] == 'function'){
          array.push(property)
        }
      }

      return array
    }

  }
})()

fi.libraryMethod()
