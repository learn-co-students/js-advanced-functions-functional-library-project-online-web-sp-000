const fi = (function() {
  return {

 
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection) 
      let newArray = []
      for (let i = 0; i < newCollection.length; i++) { 
        newArray.push(callback(newCollection[i]))
      }
return newArray
    },

    reduce: function(collection, callback, acc) {
  if (!acc) { 
    let startingValue = collection[0] 
    
    for (let i = 1; i < collection.length; i++) { 
      startingValue = callback(startingValue, collection[i])
      //startingValue = startingValue + element * operation
    }
    return startingValue
  }
  else {
      for (let i = 0; i < collection.length; i++) { 
        acc = callback(acc, collection[i])
      }
      return acc
    }},

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) { 
        if (predicate(collection[i]) == true) { 
        return collection[i]}
      }
    },

    filter: function(collection, predicate) { 
    let filteredResults = []
      for (let i = 0; i < collection.length; i++) { 
        if (predicate(collection[i]) == true) { 
          filteredResults.push(collection[i])
        }
      }
      return filteredResults
    },

    size: function(collection) { 
const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
let size = 0 
for (let i = 0; i < newCollection.length; i++) { 
  size = i + 1
}
  return size
},

first: function(array, n) { 
  if (n) { 
  const changedArray = array.slice(0, n);
  return changedArray
  } 
  else {
  return array[0]
  }
},

last: function(array, n) {
if (n) { 
  const changedArray = array.slice(-n);
  return changedArray
  } 
  else {
  return array[array.length - 1]
  }
},

compact: function(array) { 
  let temporaryArray = []
  for (let i = 0; i < array.length; i++) { 
    if (Boolean(array[i]) == true) { 
        temporaryArray.push(array[i])
    }
  }
return temporaryArray

},

sortBy: function(array, callback) { 
  //if (typeof array[0] = "number") { }
  let newArray = [...array]
  return newArray.sort((a,b) => {return callback(a) - callback(b)})
},

uniq: function(array, isSorted, callback) { 
  console.log(callback)
  if (isSorted === false) { 
    const sortedArray = fi.sortBy(array, callback)
    const hash = {}, result = [];

  for (var i = 0; i < sortedArray.length; i++)
    for (var j = i + 1; j < arr.length; j++)
        if (arr[i] === arr[j])
        result.push(arr[i])

  }
  return array

}
  }
})()

//fi.libraryMethod()


// })()

// fi.libraryMethod()