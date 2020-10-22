const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(givenCollection, alert) {

      for (let val of Object.values(givenCollection)){
        alert(val);
      }

      return givenCollection

    },

    map: function(givenCollection){

      const callback = (x) => (x * 3)
      const newCollection = []

      for (let v of Object.values(givenCollection)){
          newCollection.push(callback(v))
      }
      
      return newCollection

    },

    reduce: function(givenCollection, callback, initialValue=0) {

      if (initialValue === 0){
        var accum = givenCollection[0]
        var arrayOfValues = givenCollection.slice(1)
      } else {
        var accum = initialValue
        var arrayOfValues = givenCollection
      }
      
      for (let v of Object.values(arrayOfValues)){
        accum = callback(accum, v, arrayOfValues)
      }

      return accum

    },

    find: function(givenCollection, callback) {

      for (const v of Object.values(givenCollection)){
        if (callback(v)){
          return v
        }
      }
    },


    filter: function(givenCollection, callback) {

      const foundItems = []
      for (const v of Object.values(givenCollection)){
        if (callback(v)){
          foundItems.push(v)
        }
      }
      return foundItems
    },


    size: function(givenCollection){

      return (givenCollection instanceof Array) ? givenCollection.length : Object.keys(givenCollection).length

    },  

    first: function(givenCollection, optionalArg=0){

      if (optionalArg===0){
        return givenCollection[0]
      } else {
        return givenCollection.slice(0, optionalArg)
      }

    }, 

    last: function(givenCollection, optionalArg=0){

      if (optionalArg===0){
        return givenCollection[givenCollection.length - 1]
      } else {
        return givenCollection.slice(-optionalArg)
      }

    }, 


    compact: function(givenCollection){

      const newCollection = []
      for (const v of Object.values(givenCollection)){
        if (v){
          newCollection.push(v)
        }
      }
      return newCollection
    },   


    sortBy: function(givenCollection, callback){

      const sortedCollection = givenCollection.sort(callback)

      return sortedCollection
    },   


    functions: function() {

    },


  }
  })()

  fi.libraryMethod()
