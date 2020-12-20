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
    find: function(collection, predicate) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i]
            }
        }
        return undefined
    },

    filter: function(collection,predicate){
        let newArray = []
      
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                newArray.push(collection[i])
            }    
        }
        return newArray

    },

    size: function(collection){
        return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, n = false){
        return (n) ? array.slice(0, n) : array[0]
    },

    last: function(array, n = false){
        return (n) ? array.slice(n * -1) : array[array.length - 1]
    },

    compact: function(array){
        let newArray = []
        for (let i = 0; i < array.length; i++) {
            if (Boolean(array[i])) {
                newArray.push(array[i])
            }          
        }
        return newArray
    }


  }
})()

fi.libraryMethod()
