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

        reduce: function(collection, callback = () => {}, acc) {
            // let returnVal = 0
            let tempCollection = collection.slice(0)
            if (!acc) {
                acc = tempCollection[0]
                tempCollection = tempCollection.slice(1)
            }
            let tempLength = tempCollection.length
            for (let i = 0; i < tempLength; i++) {
                acc = callback(acc, tempCollection[i], collection)
            }
            return acc
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

        uniqSorted: function(collection, iteratee) {
            const sorted = [collection[0]]
            for (let idx = 1; idx < collection.length; idx++) {
                if (sorted[idx - 1] !== collection[idx])
                    sorted.push(collection[idx])
            }
            return sorted
        },

        uniq: function(collection, sorted = false, iteratee = false) {
            if (sorted) {
                return fi.uniqSorted(collection, iteratee)
            } else if (!iteratee) {
                return Array.from(new Set(collection))
            } else {
                const modifiedVals = new Set()
                const uniqVals = new Set()
                for (let val of collection) {
                    const moddedVal = iteratee(val)
                    if (!modifiedVals.has(moddedVal)) {
                        modifiedVals.add(moddedVal)
                        uniqVals.add(val)
                    }
                }
                return Array.from(uniqVals)
            }
        },

        keys: function(object) {
            // Retrieve all the names of the object's 
            // own enumerable properties.
            let keys = []
            for (const key in object) {
                keys.push(key)
            }
            return keys
        },

        values: function(object) {
            // fi.values(object) Return all of the values 
            // of the object's own properties.
            let values = []
            for (const key in object) {
                values.push(object[key])
            }
            return values
        },

        functions: function(object) {
            // returns a sorted collection of the names of 
            // every method in an object
            let functionNames = []
            for (const functionName in object) {
                // check if type is not a function
                if (typeIsFunction(object[functionName])) {
                    functionNames.push(functionName)
                }
            }

            function typeIsFunction(functionToCheck) {
                return typeof functionToCheck !== 'string'
            }
            return functionNames
        },
    }
})()

fi.libraryMethod()