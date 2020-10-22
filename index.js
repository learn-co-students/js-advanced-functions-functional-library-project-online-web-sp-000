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

    functions: function() {

    },


  }
  })()

  fi.libraryMethod()
