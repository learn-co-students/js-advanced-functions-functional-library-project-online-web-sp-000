const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collect, callBack) {
      for(let i in collect) {
        callBack(collect[i])
      }
      return collect
    },

    map: function(collection, callBack) {
      let r = []
      for(let i in collection) {
        r.push(callBack(collection[i]))
      }
      return r
    },

    reduce: function(collection, callback, acc) {
      let i = 0
      if(acc === undefined) {
        acc = collection[0]
        i = 1
      }
      for(; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },
    
    find: function(collection, predicate) {
      for(let i in collection) {
        if(predicate(collection[i])) {
          return collection[i]
        }
      }
      return undefined
    },
    
    filter: function(collection, predicate) {
      let r = []
      for(let i in collection) {
        if(predicate(collection[i])) {
          r.push(collection[i])
        }
      }
      return r
    },
    
    size: function(collection) {
      return Object.keys(collection).length
    },
    
    first: function(array, n) {
      if(n === undefined) {
        return array[0]
      } else {
        return array.splice(0, n)
      }
    },
    
    last: function(array, n) {
      if(n === undefined) {
        return array[array.length - 1]
      } else {
        return array.slice(-n)
      }
    },
    
    compact: function(array) {
      let r = []
      for(let i in array) {
        if(!!array[i]) {
          r.push(array[i])
        }
      }
      return r
    },
    
    sortBy: function(array, callback) {
      let sorted = []
      for(let i in array) {
        sorted.push(array[i])
      }
      return sorted.sort((a, b) => callback(a) - callback(b))
    },
    
    flatten: function(array, shallow) {
      if(shallow) {
        for(let i = 0; i < array.length; i++) {
          let a = array.splice(i, 1)
          if(Array.isArray(a[0])) {
            for(let j = 0; j < a[0].length; j++) {
              array.splice(i + j, 0, a[0][j])
            }
            i = i + a[0].length - 1
          } else{
            array.splice(i, 0, a[0])
          }
        }
      } else {
        let l = array.length
        for(let i = 0; i < l; i++) {
          let a = array.splice(i, 1)
          if(Array.isArray(a[0])) {
            for(let j = 0; j < a[0].length; j++) {
              array.splice(i + j, 0, a[0][j])
            }
            if(Array.isArray(array[i])) {
              i--
            }
          } else{
            array.splice(i, 0, a[0])
          }
          
          l = array.length
        }
      }
      
      return array
    },
    
    uniq: function(array, isSorted, callback) {
      if(isSorted) {
        for(let i = 1; i < array.length; i++) {
          if(!!callback) {
            if(callback(array[i - 1]) === callback(array[i])) {
              array.splice(i, 1)
              i--
            }
          } else {
            if(array[i - 1] === array[i]) {
              array.splice(i, 1)
              i--
            }
          }
        }
      } else {
        for(let i = 0; i < array.length; i++) {
          for (let j = 0; j < array.length; j++) {
            if(!!callback) {
              if(callback(array[i]) === callback(array[j]) && i !== j) {
                array.splice(j, 1)
                j--
              }
            } else {
              if(array[i] === array[j] && i !== j) {
                array.splice(j, 1)
                j--
              }
            }
          }
        }
      }
      return array
    },
    
    keys: function(object) {
      let r = []
      for(let e in object) {
        r.push(e)
      }
      return r
    },
    
    values: function(object) {
      let r = []
      for(let e in object) {
        r.push(object[e])
      }
      return r
    },

    functions: function(object) {
      let r = []
      for(let a in object) {
        if(typeof object[a] == "function") {
          r.push(a)
        }
      }
      return r
    },
  }
})()

fi.libraryMethod()