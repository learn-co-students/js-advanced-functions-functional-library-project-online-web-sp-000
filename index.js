const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        const newArray = Object.values(collection)
        for (let i = 0; i < newArray.length; i++) {
            callback(newArray[i]);       
        }
        return collection
    },

    map: function(collection, callback) {
        const newArray = []
        const values = Object.values(collection)

        for (let i = 0; i < values.length; i++) {
            newArray.push(callback(values[i]))    
        }
        return newArray
    },

    reduce: function(array, callback, acc) {
        let collection = array.slice(0)
        
        // if there's no acc, shorten the array, assign first element to acc
        if (!acc && acc !== 0) { // 0 is also false - this accounts for that
            acc = collection[0]
            collection = collection.slice(1)
        }
        let length = collection.length

        for (let i = 0; i < length; i++) {
            acc = callback(acc, collection[i], collection)   
        }
        return acc
    },

   


    // reduce: function(c = [], callback = () => {}, acc) {
    //     let collection = c.slice(0)

    //     if (!acc) {
    //         acc = collection[0]
    //         collection = collection.slice(1)
    //     }

    //     let len = collection.length;

    //     for (let i = 0; i < len; i++) {
    //         acc = callback(acc, collection[i], collection)
    //     }
    //     return acc;
    // }

    functions: function() {

    },


  }
})()

fi.libraryMethod()
