const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(elCollection, alert) {
      let newCollection = (elCollection instanceof Array) ? elCollection : Object.values(elCollection)

      for (let i = 0; i < newCollection.length; i++) {
        alert(newCollection[i])
        
      }
      return elCollection
    },

    map: function(theCollection, callBackAction) {
      let newCollection = (theCollection instanceof Array) ? theCollection : Object.values(theCollection)
      
      let newArray = []

      for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callBackAction(newCollection[i]))
      }
      return newArray
    },

    reduce: function(theCollection, callBackAction, acc) {
      let theNewCollection = theCollection
      if (!acc) {
        acc = theCollection[0]
        theNewCollection = theCollection.slice(1)
      }
      for (let i = 0; i < theNewCollection.length; i++) {
        acc = callBackAction(acc, theNewCollection[i], theNewCollection)
      }
      return acc
    },

    find: function(theCollection, predicate) {
      let valueFound = 0
      for (let i = 0; i < theCollection.length; i++) {
        if (predicate(theCollection[i])) {
          valueFound = theCollection[i]
          break
        } else {
          valueFound = undefined
        }
      }
      return valueFound
    },

    filter: function(theCollection, predicate) {
      let valueArray = []
      for (let i = 0; i < theCollection.length; i++) {
        if (predicate(theCollection[i])) {
          valueArray.push(theCollection[i])
        }
      }
      return valueArray
    },

    size: function(theCollection) {
      let newCollection = (theCollection instanceof Array) ? theCollection : Object.values(theCollection)
      return newCollection.length
    },

    first: function(array, n = 1) {
      let newArray = (n > 1) ? array.slice(0, n) : array[0]
      return newArray
    },

    last: function(array, n = 1) {
      const arrayLength = array.length
      let newArray = (n > 1) ? array.slice((arrayLength - n), arrayLength) : array[arrayLength - 1]
      return newArray
    },

    compact: function(array) {
      let newArray = []


      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callBackAction) {
      let newArray = [...array]

      return newArray.sort((a, b) => callBackAction(a) - callBackAction(b))
    }, 

    flatten: function (array, bool, newArray=[]) {
      if (!Array.isArray(array)) return newArray.push(array)
      
      if (bool) {
        for (let elem of array) {
          if (Array.isArray(elem)) {
            for (let elem2 of elem) {
              newArray.push(elem2)
            }
          } else {
            newArray.push(elem)
          } 
        }
 
        }
      else {
        for (let elem2 of array) {
          this.flatten(elem2, false, newArray)
      }
    }
    return newArray
    },


    uniq: function (array, sorted = false, callback = false) {
      if (sorted) {
        let newArray = [array[0]]
        for (let i = 1; i < array.length; i++) {
          if (newArray[i - 1] !== array[i]) {
            newArray.push(array[i])
          }
        }
        return newArray
      }

      else if (!callback) {

        return Array.from(new Set(array))
      }

      else {
        let modArray = []
        let newArray = []
        for (let elem of array) {
          let elemVal = callback(elem)
          if (!modArray.includes(elemVal) )
          { 
            modArray.push(elemVal)
            newArray.push(elem)
          }
        }
        return newArray
      }
    },
    
    keys: function(obj) {
      return Object.keys(obj)
    },

    values: function(obj) {
      return Object.values(obj)
    },
    
    functions: function(obj) {
      let functions = []
      let objKeys = Object.keys(obj)
      console.log(objKeys)
      for (let key of objKeys) {
        if (typeof obj[key] === "function") {
          functions.push(key)
        }
      }
      return functions.sort()

    },


  }
})()

fi.libraryMethod()