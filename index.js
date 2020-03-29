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

    map: function(collection, callback) {
      if(typeof collection === 'object') {
        const newCollection = Object.values(collection)
        return newCollection.map(x => callback(x))
      } else {
        return collection.map(x => callback(x))
      }
     
      //produces new array by mapping each value in collection through callback
      //returns new collection without modifying original
    },

    reduce: function(collection, callback, accumulator) {
      let r = (!!accumulator) ? accumulator : collection[0]
      let i = (!!accumulator) ? 0 : 1
      for (; i < collection.length; i++) {
        r = callback(r, collection[i])
      }
      return r
      //with reduce, would be collection.reduce(callback, accumulator)
    },

    find: function(collection, predicate) {
      if(typeof collection === 'object') 
        collection = Object.values(collection)

        for (let i = 0; i < collection.length; i++)
          if(predicate(collection[i])) return collection[i]
      
          return undefined
    },

    filter: function(collection, predicate) {
      if(typeof collection === 'object')
      collection = Object.values(collection)
      const newValues = []
      for (let i = 0; i < collection.length; i++) 
        if(predicate(collection[i])) 
        newValues.push(collection[i])
      return newValues  
    },

    size: function() {
      if(typeof collection === 'object')
      collection = Object.values(collection)
      return collection.length
    },

    first: function() {

    },

    last: function() {

    },

    compact: function() {

    }, 

    sortBy: function() {

    },




  }
})()

fi.libraryMethod()
