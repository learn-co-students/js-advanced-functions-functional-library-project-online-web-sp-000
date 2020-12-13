const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      let newArr = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newArr.length ; i++)
        alert(newArr[i])
        return collection
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
     collection = Object.values(collection)
      let newArr = []

      for (let i = 0; i < collection.length; i++)
       newArr.push(callback(collection[i]))

       return newArr
    },

    reduce: function(collection = [], callback = () => {}, acc) {
      let c = collection.slice(0)

      if (acc == null) {
        acc = c[0]
        c = collection.slice(1)
      }

      for (let i = 0; i < c.length; i++){
        acc = callback(acc, c[i], c)
      }
      return acc
    },

    find: function(collection, predicate) {
     if (!(collection instanceof Array))
       collection = Object.values(collection)

     for (let i = 0; i < collection.length; i++)
       if (predicate(collection[i])) return collection[i]

     return undefined
   },

   filter: function(collection, predicate) {
     let matches = []
     for (let i = 0; i < collection.length; i++)
     if (predicate(collection[i])) matches.push(collection[i])
     return matches
   },

   size: function(collection) {
     if (!(collection instanceof Array))
     collection = Object.values(collection)

     return collection.length
   },

   first: function(array, n) {
     if (n == null){
      return array[0]
    }
    else {
      return array.slice(0, n)
    }
  },

  last: function(array, n) {
    if (n == null){
      return array.slice(-1)[0]
    }
    else {
      return array.slice(Math.max(array.length -n, 1))
    }
  },

  compact: function(array) {
    let newArr = array
    let falseyArr = [false, null, 0, "", undefined, NaN]
    return newArr.filter(element => !falseyArr.includes(element))
  },

  sortBy: function(array, callback) {
    let newArray = [...array]
    return newArray.sort(function(a, b) {
      return callback(a) - callback(b)
    })
  },

  flatten: function(array, shallow, newArr=[]) {
    if (!Array.isArray(array)) return newArr.push(array)
     if (shallow) {
       for (let element of array)
        if (Array.isArray(element)) {
          //for every element in the elementarray, push to newArr
          for (let i = 0; i < element.length; i++)
            newArr.push(element[i])
        }
        else{
          newArr.push(element)
        }
         //Array.isArray(element) ? this[.unpack(newArr, element)] : newArr.push(element)
     } else {
       for (let element of array) {
         this.flatten(element, false, newArr)
       }
     }
     return newArr
  },

//maybe delete this
uSorted: function(collection, iteratee) {
  let sorted = [collection[0]]
  for (let i = 1; i < collection.length; i++){
    if (sorted[i-1] !==collection[i])
    sorted.push(collection[i])
  }
  return sorted
},

uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let element of collection) {
          const moddedVal = iteratee(element)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(element)
          }
        }
        return Array.from(uniqVals)
      }
    },
keys: function(object) {
  return Object.keys(object)
},


values: function(object) {
  return Object.values(object)
},

functions: function(object) {
  let objFunctions = (object) => Object.getOwnPropertyNames(object).filter(item => typeof object[item] === 'function').sort()
  return objFunctions(object)
}
  }
})()

fi.libraryMethod()
