const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newArray
      if(typeof collection === 'object') {
       newArray = Object.values(collection)
      }
      else {
        newArray = collection
      }
      for (let i = 0; i < newArray.length; i++) {
        callback(newArray[i], i, newArray)
      }
      return collection
    },

    map: function(collection, callback) {
      let newArray
      //const newCollection = new Array()
      if(typeof collection === 'object') {
       newArray = Object.values(collection)
      }
      else {
        newArray = collection
      }
      for(let i = 0; newArray.length; i++) {
        callback(newArray[i], i, newArray)
         
      }
      return newArray
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
