const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      const newArray = Object.values(collection)

      for(let i=0; i<newArray.length; i++){callback(newArray[i])}
      return collection

    },

    map: function(collection, callback) {
      const arrayValues = Object.values(collection)

      const newArray = []

      for(let i=0; i<arrayValues.length; i++){newArray.push(callback(arrayValues[i]))}
      return newArray
    },

    reduce: function(collection = [], callback = () => {}, acc) {
      let c = collection.slice(0)
      if (!acc){
        acc = c[0]
        c = c.slice(1)
      }

      let colLength = c.length
      for (let i=0; i<colLength; i++){
        acc = callback(acc, c[i], c)
      }
      return acc
    },

    find: function(collection, callFunc){
      if (!(collection instanceof Array)) collection = Object.values(collection)
      for (let idx = 0; idx < collection.length; idx++)
        if (callFunc(collection[idx])) return collection[idx]

    return undefined


      // for (let i = 0; i < collection.length; i++){

      //   console.log(collection[i])
      //   if (typeof(collection[i]) === object){
      //     console.log(collection[i].value)
      //   }

      //   // if (checkingEquality(collection[i] || collection{})){return collection[i].value}
      //   // else {return undefined}
      // }

    },
    filter: function(collection, thisFunc){
      if (!(collection instanceof Array))
      collection = Object.values(collection)

    const newArr = []

    for (let i = 0; i < collection.length; i++)
      if (thisFunc(collection[i])) newArr.push(collection[i])

    return newArr
  
    },
    size: function(collection,){
      return collection instanceof Array? collection.length : Object.keys(collection).length

      // if (!(collection instanceof Array)) collection = 
    }, 
    first: function(collection, when = false){
      return when? collection.slice(0, when) : collection[0]
    },
    last: function(collection, when = false){
      return when? collection.slice(-when) : collection[collection.length-1]
    },
    compact: function(collection){
      const newArr = []
      for (let i = 0; i <collection.length; i++){
        if (Boolean(collection[i])) newArr.push(collection[i])
      }
      return newArr

    },
    sortBy: function(collection, callback){
      const newArr = collection.slice()
      return newArr.sort((a,b)=> {return callback(a) - callback(b)})                                  

    },
    flatten: function(collection, notQuite, newArr = []){
       const unpack = function(receiver, arr) {
        for (let val of arr)
          receiver.push(val)
      }

      if (!Array.isArray(collection)) return newArr.push(collection)
      if (notQuite) {
        for (let val of collection)
          Array.isArray(val) ? unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },
      
    
    uniq: function(collection, sorted = false, thisFunc = false){
      const uniqSorted = function(collection, iteratee) {
        const sorted = [collection[0]]
        for (let idx = 1; idx < collection.length; idx++) {
          if (sorted[idx-1] !== collection[idx])
            sorted.push(collection[idx])
        }
        return sorted
      }

      if (sorted) {
        return uniqSorted(collection, thisFunc)
      } else if (!thisFunc) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = thisFunc(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
      // if sorted{
      //   return 
      // }
    },
    keys: function(item){
      const arr = []
      for( let key in item){arr.push(key)}
      return arr
    },

    values: function(item){
      const arr = []
      for(let key in item)(arr.push(item[key]))
      return arr
    },
    functions: function(obj) {
      const theseFuncs = []
      for(let key in obj){
        if(typeof obj[key] === 'function') theseFuncs.push(key)
      }
      return theseFuncs
    },


  }
})()

fi.libraryMethod()
