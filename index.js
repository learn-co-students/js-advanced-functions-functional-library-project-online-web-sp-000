const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      //create a varaible called new collection (nonmute)
      // check to see if the collection is an Array
      const newCollection = (collection instanceof Array) ? 
      // if it is an array return the original array
      collection.slice()
      // else
      :
      // if it is not an array, turn the object value into an array (collection)
      Object.values(collection)

      // now iterate over the newCollection to execute the callback

      for(let i = 0; i < newCollection.length; i++)
        callback(newCollection[i])
        
        return collection
      },

    map: function (collection, callback) {
      //if collection instance is not the array
      if (!(collection instanceof Array))
        //make the object value the collection 
        collection = Object.values(collection)
      //create a new empty array 
      const newArr = []
      //iterate over the collection
      for (let i = 0; i < collection.length; i++)
      //push the result of using the 'callback' function on 
      //each element of the input new array.
        newArr.push(callback(collection[i]))
      //return a new array filled with the results 
      return newArr
    },

    reduce: function (c = [], callback = () => { }, something) {
      let collection = c.slice(0)

      if (!something) {
        something = collection[0]
        collection = collection.slice(1)
      }

      let len = collection.length;

      for (let i = 0; i < len; i++) {
        something = callback(something, collection[i], collection)
      }
      return something;
    },

    find: function (collection, callback) {
       //if collection instance is not the array
      if (!(collection instanceof Array))
       //make the object value the collection 
        collection = Object.values(collection)
      //iterate over the collection
      for (let i = 0; i < collection.length; i++)
        //if the callback runs on every element of the collection 
        //return the collection at index 
        if (callback(collection[i])) return collection[i]
      //return undefined if the value is not present 
      return undefined
    },

    filter: function (collection, callback) {
      //if the collection intance is not an array
      //collection object values equals the collection
      //make the object values the collection
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      
      const newArr = []

      for (let i = 0; i < collection.length; i++)
      //iterate over the collection
      //if the callback runs on each element of the collection
      //push the collection into the new array 
        if (callback(collection[i])) newArr.push(collection[i])
      //return the new array 
      return newArr
    },

    size: function (collection) {
      //if the collection instance is the array
      return (collection instanceof Array) ? 
      //return the collection length
      //else the object keys is the collection length 
      collection.length : Object.keys(collection).length
    },

    first: function (collection, stop = false) {
      //return false if the first element of the collection is false,
      //else the collection of the first element is true 
      return (stop) ? collection.slice(0, stop) : collection[0]
    },


    last: function (collection, start = false) {
      return (start) ? 
      collection.slice(collection.length - start, collection.length) : 
      collection[collection.length - 1]
    },

    compact: function (collection) {
      //create a new array with all the falsy values 
      const copyOfArr = new Set([false, null, 0, "", undefined, NaN])
      //return nonmutative array without the falsy values 
      return collection.filter(element => !copyOfArr.has(element))
    },

    sortBy: function (collection, callback) {
      //create new array and add the result of the array 
      //nonmutate the collection
      const newArr = [...collection]
      return newArr.sort(function (a, b) {
        //run the callback on the input of the sort method 
        return callback(a) - callback(b)
      })
    },

    unpack: function (collection, arr) {
      for (let val of arr)
        collection.push(val)
    },

    flatten: function (collection, shallow, newArr = []) {
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

    uniqSorted: function (collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx - 1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function (collection, sorted = false, iteratee = false) {
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

    keys: function (obj) {
      // keys equal empty array
      const keys = []
      //loop through the obj and let key in obj
      for (let key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function (obj) {
      const values = []
      for (let key in obj) {
        values.push(obj[key])
      }
      return values
    },

    functions: function (obj) {
      const name = []

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          name.push(key)
        }
      }

      return name.sort()
    },
    
  }
})()

fi.libraryMethod()
