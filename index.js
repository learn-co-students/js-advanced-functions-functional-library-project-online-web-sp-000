const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, alert) {
      for (let element in obj) {
        alert(obj[element])
      }
      return obj
    },

    map: function(array, fn) {
      let newArr = []
      for (let element in array) {
        newArr.push(fn(array[element]))
      }
      return newArr
    },

    reduce: function(array, callback, start) {
      let memo
      if (start) {
        memo = start
        for (let i = 0; i < array.length; i++) {
          memo = callback(memo, array[i], array)
        }
      } else {
        memo = array[0]
        for (let i = 1; i < array.length; i++) {
          memo = callback(memo, array[i], array)
        }
      }
      return memo
    },

    find: function(array, test) {
      for (let e in array) {
        if (test(array[e])) {
          let result = array[e]
          return result
        }
      };
    },

    filter: function(array, test) {
      let result = []
      for (let e in array) {
        if (test(array[e])) {
          result.push(array[e])
        }
      }
      return result
    },

    size: function(obj) {
      let counter = 0
      for (let element in obj) {
        counter += 1
      }
      return counter
    },

    first: function(obj, n) {
      if (n) {
        return obj.slice(0, n)
      } else {
        return obj[0]
      }
    },

    last: function(obj, n) {
      if (n) {
        return obj.slice(obj.length - n, obj.length)
      } else {
        return obj[obj.length - 1]
      }
    },

    compact: function(array) {
      let result = []
      for (let e in array) {
        if (!!array[e] === true) {
          result.push(array[e])
        }
      }
      return result
    },

    sortBy: function(array, callback) {
      let result = array.slice()
      return result.sort( function(a, b) {return callback(a) - callback(b)} )
    },

    flatten: function(array, bool) {
      if (bool) {
        return array.reduce( (acc, element) => {return acc.concat(element)}, [])
      } else {
        return array.reduce((acc, element) => {
          return acc.concat( Array.isArray(element) ? fi.flatten(element) : element)
        }, [])
    }
    },

    uniq: function(array, issorted, callback) {
      let result = []
      
      function findCBGenerator(target) {
        return (function(currEl) { return target === currEl })
      }

      if (callback) {
        let transformed = []
        for (let e in array) {
          let element = callback(array[e])
          if ( fi.find(transformed, findCBGenerator(element)) !== undefined ) {
          } else {
            transformed.push(element)
            result.push(array[e])
          }
        }
        return result
      } else {
        for (let e in array) {
          if ( !fi.find(result, findCBGenerator(array[e])) ) {
            result.push(array[e])
          }
        }
        return result
      }
    },

    keys: function(obj) {
      let result = []
      for (let element in obj) {
        result.push(element)
      }
      return result
    },

    values: function(obj) {
      let result = []
      for (let element in obj) {
        result.push(obj[element])
      }
      return result
    },

    functions: function(obj) {
      let result = []
      for (let element in obj) {
        if (typeof obj[element] === "function") {
          result.push(element)
        }
      }
      return result.sort();
    },


  }
})()

fi.libraryMethod()
