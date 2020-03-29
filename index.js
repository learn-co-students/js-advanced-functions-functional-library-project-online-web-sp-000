const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      if(typeof collection === 'object') {
        const newCollection = Object.values(collection)
        for (let i = 0; i < newCollection.length; i++) {
          alert(newCollection[i])
        }
       } else {
          const newCollection = collection
          for (let i = 0; i < newCollection.length; i++) {
            alert(newCollection[i])
          }
        }
      return collection
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
