
//wrapping library code is called a module pattern
const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

//instanceOf checks to see if the instance is in the collection
//?:
//if the instance is in the array then takes out the value using slice
//If not then return collection of values
each: function(collection, iteratee) {
   const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

   for (let idx = 0; idx < newCollection.length; idx++)
     iteratee(newCollection[idx])

   return collection
 },

 map: function(collection, iteratee) {
   if (!(collection instanceof Array))
     collection = Object.values(collection)

   const newArr = []

   for (let idx = 0; idx < collection.length; idx++)
     newArr.push(iteratee(collection[idx]))

   return newArr
 },


 reduce: function(c = [], callback = () => {}, acc) {
   let collection = c.slice(0)

   if (!acc) {
     acc = collection[0]
     collection = collection.slice(1)
   }

   let len = collection.length;

   for (let i = 0; i < len; i++) {
     acc = callback(acc, collection[i], collection)
   }
   return acc;
 },

 find: function(collection, predicate) {
   if (!(collection instanceof Array))
     collection = Object.values(collection)

   for (let idx = 0; idx < collection.length; idx++)
     if (predicate(collection[idx])) return collection[idx]

   return undefined
 },

 filter: function(collection, predicate){
    if (!(collection instanceof Array))
    collection = Object.values(collection)

    let newArr = []

    for (let i = 0; i < collection.length; i++)
    if (predicate(collection[i])) newArr.push(collection[i])

    return newArr
 },

 size: function(collection) {
     return (collection instanceof Array) ? collection.length : Object.keys(collection).length
   },

first: function(collection, stop = false) {
  return (stop) ? collection.slice(0, stop) : collection[0]
},

last: function(collection, start = false){
  return (start) ? collection.slice(collection.length-start, collection.length) :
  collection[collection.length-1]
},

//has() returns a boolean indicicating whether an element with the specified key
//exits or not
compact: function(collection) {
  const falseyValues = new Set([false, null, 0, "", undefined, NaN])
  return collection.filter(e => !falseyValues.has(e))
},

//... is spread operator
sortBy: function(collection, callback) {
  const newArr = [...collection]
  return newArr.sort(function(a, b){
    return callback(a) - callback(b)
  })
},

unpack: function(receiver, arr){
  for (let val of arr)
    receiver.push(val)
},

//contains all of the values of each nested collection in order
flatten: function(collection, shallow, newArr=[]){
  if (!Array.isArray(collection)) return newArr.push(collection)
  if (shallow){
    for (let val of collection)
      Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
    } else {
      for (let val of collection) {
        this.flatten(val, false, newArr)
      }
    }
    return newArr
  },

//uniq doesn't contain duplicate elements
uniqSorted: function(collection, iteratee){
  const sorted = [collection[0]]
  for (let i = 1; i < collection.length; i++){
    if (sorted[i-1] !== collection[i])
      sorted.push(collection[i])
  }
  return sorted
},

uniq: function(collection, sorted = false, iteratee = false){
  if (sorted){
    return fi.uniqSorted(collection, iteratee)
  } else if (!iteratee){
    return Array.from(new Set(collection))
  } else {
    const modifiedVals = new Set()
    const uniqVals = new Set()
    for (let val of collection){
      const moddedVal = iteratee(val)
      if (!modifiedVals.has(moddedVal)){
        modifiedVals.add(moddedVal)
        uniqVals.add(val)
      }
    }
    return Array.from(uniqVals)
  }
},

//retrieves all of the names of the object's enumerable properties
//this is a custom map method
keys: function(obj){
  const keys = []
  //here in is iterating through keys on an object and storing to an array keys
  for (let key in obj){
    keys.push(key)
  }
  return keys
},

//retrieves all of the values of the object's own properties
values: function(obj){
  const values = []
  for (let key in obj){
    values.push(obj[key])
  }
  return values
},

//returns a sorted collection of the names of every method in the
//object function
functions: function(obj){
  const functionNames = []

  for (let key in obj){
    if (typeof obj[key] === "function"){
      functionNames.push(key)
    }
  }

  return functionNames.sort()
}

}
  })()

fi.libraryMethod()
