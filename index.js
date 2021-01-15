const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      Object.values(collection).forEach(x => alert(x))
      return collection
    },

    map: function(array, callback) {
      let x = []
      Object.values(array).forEach(y => x.push(callback(y)))
      return x
    },

    reduce: function(array, cb, start=(-2)) {
      Object.values(array).forEach(num => start = cb(start, num, array), 0)
      return start
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

    filter: function(array, cb) {
      let fil = []
      Object.values(array).forEach(thing => {
        if (cb(thing)) {
          fil.push(thing)
        }
      })
      return fil
    },

    size: function(array, cb) {
      let x = Object.values(array).length
      return x
    },

    first: function(array, n= 1) {
      if(n > 1) {
        return Object.values(array).slice(0, n)
      }else {
       let x = Object.values(array)[0]
       return x
      }
    },

    last: function(array, n= 1 ) {
      if(n > 1) {
        return Object.values(array).slice(-n)
      }else {
       let x = Object.values(array)[array.length - 1]
       return x
      }
    },

    compact: function(array) {
      let arr = []
      Object.values(array).forEach(thing => {
        if(thing) {
          arr.push(thing)
        }
      })
      return arr
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