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
    },

    sortBy: function(array, callback){
        //handle arrays of integer AND strings
        //assign the original array to newArray
        //use JS sort function on newArray
        //return newArray
        //I have to send sort my own function so it sorts integers
        //which are returned as values from its callback function
        let newArray = array.slice(0)
        return newArray.sort(function(a, b){
            return callback(a) - callback(b) // ascending order
        })
        
    },

    flatten: function(array, shallow){
        if (shallow) {
            return array.flat()
            
        } else {
            return array.flat(Infinity)
        }
    },

    uniq: function(array, isSorted, callback) {
         
        let newArray = array.slice(0)

        if (callback) {
            let uniqInputArray = new Set()
            let returnValueArray = new Set()

            for (let value of newArray) {
                let newValue = callback(value)
                if (!returnValueArray.has(newValue)) {
                    returnValueArray.add(newValue)
                    uniqInputArray.add(value)
                }
            }
        return (Array.from(uniqInputArray))   
        } else if (isSorted) {
            return newArray.filter((value, index, array) => array.indexOf(value) === index )
        } else {
            return newArray.filter((value, index, array) => array.indexOf(value) === index )
        }
    },

    keys: function(object) {
        return Object.keys(object)
    },

    values: function(object) {
        return Object.values(object)
    },

    functions: function(object) {
        let newArray = []
        //iterate over the object to see if the value of the keys is of type function
        // if true, push the value onto newArray
        // return newArray.sort()
        for (let key in object) {
            if (typeof (object[key]) === "function") {
                newArray.push(key)
            }
        }
        return newArray.sort()
    }
    

    }
})()

fi.libraryMethod()
