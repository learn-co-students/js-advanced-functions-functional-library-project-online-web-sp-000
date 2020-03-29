const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      if(typeof collection === 'object') {
        const newCollection = Object.values(collection)
        for (let i = 0; i < newCollection.length; i++) {
          alert(newCollection[i])
        }
       } else {
          const newCollection = collection
          for (let i = 0; i < newCollection.length; i++) {
            alert(newCollection[i])
          }
        }
      return collection
    },

    map: function(collection, callback) {
      if(typeof collection === 'object') {
        const newCollection = Object.values(collection)
        return newCollection.map(x => callback(x))
      } else {
        return collection.map(x => callback(x))
      }
     
      //produces new array by mapping each value in collection through callback
      //returns new collection without modifying original
    },

    reduce: function(collection, callback, accumulator) {
      let r = (!!accumulator) ? accumulator : collection[0]
      let i = (!!accumulator) ? 0 : 1
      for (; i < collection.length; i++) {
        r = callback(r, collection[i])
      }
      return r
      //with reduce, would be collection.reduce(callback, accumulator)
    },

    find: function(collection, predicate) {
      if(typeof collection === 'object') 
        collection = Object.values(collection)

        for (let i = 0; i < collection.length; i++)
          if(predicate(collection[i])) return collection[i]
      
          return undefined
    },

    filter: function(collection, predicate) {
      if(typeof collection === 'object')
      collection = Object.values(collection)
      const newValues = []
      for (let i = 0; i < collection.length; i++) 
        if(predicate(collection[i])) 
        newValues.push(collection[i])
      return newValues  
    },

    size: function(collection) {
      if(typeof collection === 'object')
      collection = Object.values(collection)
      return collection.length
    },

    first: function(array, n) {
      return (!!n) ? array.slice(0, n) : array[0]
    },

    last: function(array, n) {
      return (n) ? array.slice(array.length-n, array.length) : array[array.length-1]
    },

    compact: function(array) {
      return array.filter(Boolean)
    }, 

    sortBy: function(array, callback) {
      const newArray = [...array] //... or Object.assign - copies/spreads
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, shallow) {
      return (shallow) ? array.flat(1) : array.flat(Infinity)
    },

    uniq: function(array, isSorted, callback) {
      const newArray = [...array]
      if(callback) {
        const modifiedArray = new Set()
        const originalArray = new Set()

        for(let value of newArray) {
          const newValue = callback(value) 
          if(!modifiedArray.has(newValue)) {
            modifiedArray.add(newValue)
            originalArray.add(value)
          } 
        }
        return(Array.from(originalArray))
      } else if(isSorted) {
        return newArray.filter((value, index, array) => array.indexOf(value) === index)
      } else {
        return newArray.filter((value, index, array) => array.indexOf(value) === index)
      }
    },
//read Set()
//let of vs let in

    keys: function(object) {
      const keyArray = []
      for (const key in object) {
        keyArray.push(key)
      }
      return keyArray
    },

    values: function(object) {
      const valueArray = []
      for (const value in object) {
        valueArray.push(object[value])
      }
      return valueArray
    },

    functions: function(object) {
      const functionArray = []
      for (const key in object) {
        if(typeof object[key] === "function")
        functionArray.push(object[key])
      }
      return functionArray
    }

  }

})()

fi.libraryMethod()
