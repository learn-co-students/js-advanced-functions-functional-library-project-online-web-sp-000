const fi = (function() {
    return {
        libraryMethod: function() {
            return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
        },

        each: function(collection, callback) {
            const collectionCopy = (collection instanceof Array) ? collection.slice() : Object.values(collection)

            for (let i = 0; i < collectionCopy.length; i++)
                callback(collectionCopy[i])
            return collection
        },

        map: function(collection, callback) {
            const collectionCopy = (collection instanceof Array) ? collection.slice() : Object.values(collection)
            let newArray = [];
            for (let i = 0; i < collectionCopy.length; i++)
                newArray.push(callback(collectionCopy[i]))
            return newArray
        },


        reduce: function(collection, callback, acc) {
            if (!acc) {
                acc = collection[0]
                collection = collection.slice(1)
            }
            for (let i = 0; i < collection.length; i++) { acc = callback(acc, collection[i], collection) }
            return acc

        },

        find: function(collection, predicate) {
            for (let i = 0; i < collection.length; i++) {
                if (predicate(collection[i])) {
                    return collection[i]
                }
            }
        },

        filter: function(collection, predicate) {
            let newArray = []
            for (let i = 0; i < collection.length; i++) {
                if (predicate(collection[i])) {
                    newArray.push(collection[i])
                }
            }
            return newArray
        },

        size: function(collection) {
            return (collection instanceof Array) ? collection.length : Object.keys(collection).length

        },

        first: function(array, n) {
            return (n) ? array.slice(0, n) : array[0]
        },

        last: function(array, n) {
            return (n) ? array.slice(-Math.abs(n)) : array[array.length - 1]
        },

        compact: function(collection) {
            let newArray = []
            for (let i = 0; i < collection.length; i++) {
                if (collection[i]) {
                    newArray.push(collection[i])
                }
            }
            return newArray
        },

        sortBy: function(array, callback) {
            const newArr = [...array]
            return newArr.sort((a, b) => callback(a) - callback(b))

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
            let newArray = []
            for (const key in object) {
                newArray.push(key)
            }
            return newArray

        },

        values: function(object) {
            let newArray = []
            for (const key in object) {
                newArray.push(object[key])
            }
            return newArray
        },



        functions: function(obj) {
            let functions = []

            for (let key in obj) {
                if (typeof obj[key] === "function") {
                    functions.push(key)
                }
            }

            return functions.sort()
        },

        unpack: function(receiver, arr) {
            for (let val of arr)
                receiver.push(val)
        },

        flatten: function(collection, shallow, newArr = []) {
            if (!Array.isArray(collection)) return newArr.push(collection)
            if (shallow) {
                for (let val of collection)
                    Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
            } else {
                for (let val of collection) {
                    this.flatten(val, false, newArr)
                }
            }
            return newArr
        },

    }
})()




fi.libraryMethod()