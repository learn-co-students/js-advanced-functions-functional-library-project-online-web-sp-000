const fi = (function() {
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

        filter: function(collection, predicate) {
            let passingValues = []
            let passesTest
            for (let i = 0; i < collection.length; i++) {
                passesTest = predicate(collection[i])
                if (passesTest) {
                    passingValues.push(collection[i])
                }
            }
            return passingValues
        },

        size: function(collection) {
            let numValues = 0
            for (const value in collection) {
                numValues++
            }
            return numValues
        },

        first: function(array, n) {
            // Returns the first element of an array. 
            // Passing n will return the first n elements 
            // of the array.
            if (n) {
                let firstNelements = []
                for (let i = 0; i < n; i++) {
                    firstNelements.push(array[i])
                }
                return firstNelements
            }
            return array[0]
        },

        last: function(array, n) {
            if (n) {
                let lastNelements = []
                let arrCopy = array.reverse()

                for (let i = 0; i < n; i++) {
                    lastNelements.push(arrCopy[i])
                }
                return lastNelements.reverse()
            }
            return array[array.length - 1]
        },

        compact: function(array) {
            const copyArray = [...array]
            for (let i = 0; i < copyArray.length; i++) {
                if (!copyArray[i]) {
                    copyArray.splice(i, 1)
                    i--
                }
            }
            return copyArray
        },

        sortBy: function(array, callback) {
            const sortedCopyArray = [...array]
            return sortedCopyArray.sort((val, nextVal) => callback(val) - callback(nextVal))
        },

        flatten: function(array, shallow = false) {
            let flattenedArray = []
            if (shallow) {
                // flatten a single level
                flattenedArray = flattenedArray.concat(...array)
            } else {
                do {
                    let value = array.shift()
                    if (Array.isArray(value)) {
                        array = value.concat(array)
                    } else {
                        flattenedArray.push(value)
                    }
                } while (array.length)
            }
            return flattenedArray
        },

        functions: function() {

        },


    }
})()

fi.libraryMethod()