const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      // Object.values(collection).forEach(callback)

      if (Array.isArray(collection)) {
        //debugger
        for (let i = 0; i < collection.length; i++) {
          //debugger
          callback(collection[0])
        }

      } else {
        for (const el in collection) {
          //debugger
          callback(collection[el])
        }
      }

      return collection
    },

    map: function(collection, callback) {

      let retArray = []

      if (Array.isArray(collection)) {
        for (const el of collection) {
          retArray.push(callback(el))
        }
      } else {
        for (const el in collection) {
          retArray.push(callback(collection[el]))
        }
      }

      return retArray

      //return Object.values(collection).map(callback)
    },

    reduce: function(collection, callback, acc = 0) {


      if (acc === 0) {
        for (let i = 0; i < collection.length; i++) {
          if (acc === 0) {
            acc = callback(collection[i], collection[i + 1], collection)
            i++
          } else {
            acc = callback(acc, collection[i], collection)
          }
          
          //debugger
        }
      } else {
        for (const el of collection) {
          acc = callback(acc, el, collection)
        }
      }

      return acc

    },

    find: function(collection, predicate) {

      for (const el of collection) {
        if (predicate(el)) {
          return el
        }
      }

    },

    filter: function(collection, predicate) {

      let retArray = []
      for (const el of collection) {
        if (predicate(el)) {
          retArray.push(el)
        }
      }

      return retArray
    },

    size: function(collection) {

      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }

    },

    first: function(collection, num = 0) {

      if (num === 0) {
        return collection[0]
      } else {
        
        return collection.slice(0, num)
      }
      
    },

    last: function(collection, num = -1) {

      if (num === -1) {
        return collection[collection.length - 1]
      } else {
        
        return collection.slice(collection.length - num, collection.length)
      }

    },

    compact: function(collection) {

      let retArray = []

      for (const el of collection) {
        if (el) {
          retArray.push(el)
        }
      }

      return retArray

    },

    sortBy: function(collection, func) {


      //debugger
      let retArray = collection.slice(0, collection.length)
      //debugger
      return retArray.sort(function(a, b) {
        return func(a) - func(b)
      })
      

    },

    flatten: function(collection, single = false) {

      let next = []

      let current = collection.slice(0, collection.length)

      let retArray = []

      //debugger

      let nested = true

      if (single === true) {
        return collection.reduce((acc, val) => acc.concat(val), []);
      }

      while (nested === true) {
        
        //debugger

        for (let i = 0; i < current.length; i++) {
          if (Array.isArray(current[i])) {
            current = current.reduce((acc, val) => acc.concat(val), [])
            nested = true
            break
          } else if (i === (current.length - 1) && !Array.isArray(current[i])) {
            nested = false
          }
        }
        
      }

      return current

      

      // function nest(array, currentArray) {
      //   if (Array.isArray(array[0])) {
      //     nest(array[0], current)
      //   } else {
          
      //     retArray.push(array[0])
      //     currentArray[0].shift()
      //     if (currentArray[0].length === 0) {
      //       current = currentArray.slice(1, currentArray.length)
      //     } else {
      //       current = [currentArray[0], currentArray.slice(1, currentArray.length)]
      //     }
          
      //     if (Array.isArray(current[0])) {
      //       nest(current[0], current)
      //     }
      //   }
      // }
      
      // while (current) {
      //   if (typeof current[0] === 'number') {
      //     retArray.push(current[0])
      //     next = current.slice(1, current.length)
      //     current = next
      //   } else  {
      //     nest(current)
      //   }
      // }





    },

    uniq: function(array, isSorted = false, callback) {

      let sortedValues = []
      let retArray = []

      sortedValues = array.sort(function (a, b) {
        return a - b
      })
      //debugger
      if (typeof array[0] === 'number' && callback === undefined) {
        retArray.push(sortedValues[0])
        for (let i = 1; i < sortedValues.length; i++) {
          if(sortedValues[i] === sortedValues[i - 1]) {
  
          } else {
            retArray.push(sortedValues[i])
          }
        }
  
        return retArray
      } else if (typeof array[0] === 'number') {
        retArray.push(sortedValues[0])
        for (let k = 1; k < sortedValues.length; k++) {
          //debugger
          if(retArray.find(match => callback(match) === callback(sortedValues[k]))) {
  
          } else {
            retArray.push(sortedValues[k])
          }
        }
  
        return retArray
      } else {
        retArray.push(array[0])
        //debugger
        for (let j = 1; j < array.length; j++) {
          
          //let results = true
          if (retArray.find(match => match === array[j])) {

          } else {
            retArray.push(array[j])
          }
        return retArray
        }

      }
    },

    keys: function(obj) {

      let retArray = []

      for (const [key, value] of Object.entries(obj)) {
        retArray.push(key)
      }

      return retArray
    },

    values: function(obj) {

      let retArray = []

      for (const [key, value] of Object.entries(obj)) {
        retArray.push(value)
      }

      return retArray

    },

    functions: function(obj) {

      let retArray = []

      for (const [key, value] of Object.entries(obj)) {

        if (value === "") {

        } else {
          retArray.push(key)
        }
        
      }
      //debugger
      return retArray

    },
  }
})()

fi.libraryMethod()
