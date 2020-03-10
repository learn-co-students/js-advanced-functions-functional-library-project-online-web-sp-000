const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cbFunction) {
      Object.values(collection).forEach(x => cbFunction(x))
      return collection
    },

    map: function(collection, cbFunction) {
      let newArray = []
      Object.values(collection).forEach(x => newArray.push(cbFunction(x)))
      return newArray
    },

    reduce: function(collection, cbFunction, accumulator) {
      if (accumulator === undefined) {
        return collection.reduce(cbFunction)
      }

      else {
        return collection.reduce(cbFunction, accumulator)
      }
    },

    find: function(collection, predicate) {
      
      let values = Object.values(collection)
      let target = undefined
      
      for(let i = 0; i < values.length; i++){
        
        let index = values[i]
        if(predicate(index)){
          target = index
          break;
        }
      }
      
      return target
    },

    filter: function(collection, predicate){

      let values = Object.values(collection);
      let newArray = [];

      for(let i=0; i<values.length; i++){
        let index = values[i]
        if(predicate(index)){
          newArray.push(index)
        }
      }

      return newArray;
    },

    size: function(collection){
      return Object.values(collection).length
    },

    first: function(array, index = 1){

      let newArray = [];
      for(let i=0; i< index; i++){
        newArray.push(array[i])
      }

      if(newArray.length > 1){
        return newArray
      } else {
        return newArray[0]
      }
    },

    last: function(array, index=1){

      let newArray = [];
      for(let i=(array.length - index); i<array.length; i++){
        newArray .push(array[i])
      }

      if(newArray.length > 1){
        return newArray
      } else {
        return newArray[0]
      }
    },

    compact: function(array){

      let newArray = [];
      for(let i=0; i<array.length; i++){
        if(!!array[i]){
          newArray.push(array[i])
        }
      }
      return newArray;
    },

    sortBy: function(array, cbFunction){
      let newArray = [...array]
      newArray.sort( (a, b) => cbFunction(a) - cbFunction(b) )
      return newArray
    },

    flatten: function(array, shallow){
      
      const flattenOneLevel = function(){
        let newArray = [];

        for(let i=0; i<this.length; i++){
          
          let index = this[i]
          if(Array.isArray(index)){

            for(let j=0; j<index.length; j++){  
              newArray.push(index[j])
            }
          } 
          else {
            newArray.push(index)
          }
        };

        return newArray
      }

      const hasArray = function(){
        
        let has = false;
        for(var i=0; i<this.length; i++){
          if( Array.isArray(this[i]) ){
            has = true;
            break;
          }
        }
        return has;
      }

      let flatArray = [...array]

      while (hasArray.call(flatArray)){
        flatArray = flattenOneLevel.call(flatArray)
        if(shallow === true){ break; };
      }
      
      return flatArray;
    },

    uniq: function(array, isSorted, cbFunction){
      
      let transformedArray = [];

      if(cbFunction){
        for(let i=0; i<array.length; i++){
          transformedArray.push(cbFunction(array[i]))
        }
      } else {
        transformedArray = [...array]
      }

      let uniqueValues = [];
      let arrayToReturn = [];

      for(let i=0; i<transformedArray.length; i++){

        if(uniqueValues.indexOf(transformedArray[i]) === -1){
          uniqueValues.push(transformedArray[i])
          arrayToReturn.push(array[i])
        } 
      }

      if(isSorted){
        return arrayToReturn
      } else {
        return arrayToReturn.sort( (a,b) => a-b )
      }
    },

    keys: function(object){
      let allKeys = [];
      for (let key in object){
        allKeys.push(key)
      }
      return allKeys
    },

    values: function(object){
      let allValues = [];
      for(let key in object){
        allValues.push(object[key])
      }
      return allValues
    },

    functions: function(object) {
      let allFunctions = [];
      for(let key in object){
        if( typeof object[key] === 'function'){
          allFunctions.push(key)
        }
      }
      return allFunctions
    },
  }
})()

fi.libraryMethod()
