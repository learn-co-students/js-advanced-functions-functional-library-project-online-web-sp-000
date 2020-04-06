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




        functions: function() {

        },


    }
})()

fi.libraryMethod()