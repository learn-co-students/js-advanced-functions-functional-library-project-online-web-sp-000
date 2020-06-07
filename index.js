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
      if (!(collection instanceof Array))
        collection = Object.values(collection)
        const newArray = []

      for (let i = 0; i < collection.length; i++)
        newArray.push(callback(collection[i]))

      return newArray
    },

    reduce: function(col = [], callback = () => {}, acc) {
      if (acc) { //when there is an accumulator....
        let r = col.reduce(callback, acc)
        return r
      }
      else { //when there isn't...
        acc = col[0]
        let r = col.slice(1)
        return r.reduce(callback, acc)
      }
    },
///predicate is a truth test
    find: function(collection, predicate) {
      if(!(collection instanceof Array))
        collection = Object.values(collection)
        //else
        for (let i = 0; i < collection.length; i++)
          if(predicate(collection[i])) return collection[i]
            return undefined  //else return undefined
    },

    filter: function(collection, predicate) {
      let arr = []
      if(!(collection instanceof Array))
        collection = Object.values(collection)
      //else
      for (let i = 0; i < collection.length; i++)
        if(predicate(collection[i])) arr.push(collection[i])
          return arr
    },

    size: function(collection) {
      if (!(collection instanceof Array)) {
        let objArray = Object.keys(collection)
          return objArray.length
      } else {
        let a = collection.length
        return a
      }
    },

    first: function(list, item) {
        if(item == null)
          return list[0];
        if(item != null)
          return list.slice(0, item)
    },

    last: function(list, item) {
      let newArray = []
      let lastItem = list[list.length -1]
      if(item == null)
        return lastItem;
      return list.slice(-1 * item)
    },

    compact: function(array) {
      const newArray = []
      for (let i = 0; i < array.length; i++)
        if (array[i]) {
        newArray.push(array[i])
      }
      return newArray
    },

    sortBy: function(array, callback){
    //   let newArray = []
    //   for (let i = 0; i < array.length; i++) {
    //     let newI = array[i].callback
    //     newArray.push(newI);
    // }
      const clonedArray = [...array];
      return clonedArray.sort(function(a, b){return callback(a) - callback(b)});

  },

  flatten: function(array, shallow) {
    return (shallow) ? array.flat(1) : array.flat(Infinity)
  },
  //

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
