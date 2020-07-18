const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, callback) {
      Object.values(obj).forEach(x => callback(x))
      return obj
    },

    map: function(obj, callback) {
      let newArray = []
      Object.values(obj).map(x => newArray.push(callback(x)))
      return newArray
    },

    reduce: function(collection = [], callback = () => {}, acc) { s
      let accumulator = acc
      let coll = collection

      if(!acc){
        accumulator = collection[0]
        coll = collection.splice(1)
      }

      coll.forEach(element => accumulator = callback(accumulator, element, coll))
      return accumulator
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()



