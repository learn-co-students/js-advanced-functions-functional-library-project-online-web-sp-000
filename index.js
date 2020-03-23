const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let collectionMod = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      collectionMod.map(c => callback(c))
      return collection
    },

    map: function(collection, callback) {
      let collectionMod = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      return collectionMod.map(c => callback(c))
    },

    reduce: function(c, callback, acc=0) {
      let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			for (let i = 0; i < collection.length; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
    },

    find: function(collection, predicate) {
      for (let idx = 0; idx < collection.length; idx++)
      if (predicate(collection[idx])) return collection[idx]

      return undefined
    },

    filter: function(collection, predicate){
      let truthyVals = []

      for (let idx = 0; idx < collection.length; idx++)
      if (predicate(collection[idx])) truthyVals.push(collection[idx])

      return truthyVals
    },

    size: function(collection){
      let collectionMod = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      return collectionMod.length
    },

    first: function(collection, n=1){
      let collectionMod = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let final = collectionMod.slice(0, n)
      return (final.length === 1) ? final[0] : final
    },

    last: function(collection, n=1){
      let collectionMod = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let final = collectionMod.slice(-1 * n)
      return (final.length === 1) ? final[0] : final
    },

    compact: function(array){
      return array.filter(c => ![false, null, 0, "", undefined, NaN].includes(c))
    },

    sortBy: function(array, callback){
      const newArr = [...array]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, shallow){
      if (shallow === true) {
        return array.flat()
      } else {
        return array.flat(Infinity)
      }
    },

    uniq: function(array, isSorted=false, callback=false){
      if (!callback) {
        return Array.from(new Set(array))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of array) {
          const moddedVal = callback(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },



    keys: function(obj){
        return Object.keys(obj)
    },

    values: function(obj){
        return Object.values(obj)
    },

    functions: function(obj){
      let array = Object.keys(obj)
      let functions = array.filter(e => {return typeof obj[e] === "function"})
      return functions.sort()
    },
  }
})()

fi.libraryMethod()
