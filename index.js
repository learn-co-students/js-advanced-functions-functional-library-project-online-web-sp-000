const fi = (function() {
<<<<<<< HEAD
    return {
        libraryMethod: function() {
            return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
        },

        each: function(collection, callback) {
            for (const key in collection) {
                callback(collection[key], key, collection)
            }

            return collection
        },

        map: function(collection, callback) {
            let newArray = []
            for (const key in collection) {
                newArray.push(callback(collection[key], key, collection))
            }
            return newArray
        },

        reduce: function(collection, callback, acc = 0) {
            // Reduce boils down a collection of values into a single value. 
            // Acc (short for accumulator) starts as the initial state of 
            // the reduction, and with each successive step it should be 
            // accumulate the return value of callback. The callback is passed 
            // three arguments: the acc, the current value in our iteration 
            // (the element in the array), and finally a reference to the entire 
            // collection.
            let returnVal = 0
            collection.forEach(element => {
                returnVal += callback(0, element, collection)
            })
            returnVal += acc
            return returnVal
        },

        find: function(collection, predicate) {
            let foundElement, element
            for (let i = 0; i < collection.length; i++) {
                foundElement = predicate(collection[i])
                if (foundElement) {
                    element = collection[i]
                    break
                }
            }
            return element
        },

        functions: function() {

        },


    }
=======
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const key in collection) {
        callback(collection[key], key, collection)
      }
      
      return collection
    },

    map: function(collection, callback) {
      let newArray = []
      for (const key in collection) {
        newArray.push(callback(collection[key], key, collection))
      }
      return newArray
    },

    reduce: function(collection, callback, acc = 0) {
      // Reduce boils down a collection of values into a single value. 
      // Acc (short for accumulator) starts as the initial state of 
      // the reduction, and with each successive step it should be 
      // accumulate the return value of callback. The callback is passed 
      // three arguments: the acc, the current value in our iteration 
      // (the element in the array), and finally a reference to the entire 
      // collection.
      let returnVal = 0
      collection.forEach(element => {
        returnVal += callback(0, element, collection)
      })
      returnVal += acc
      return returnVal
    },

    functions: function() {

    },


  }
>>>>>>> e3fccf84477ce63e3c593556573c16889288ac26
})()

fi.libraryMethod()