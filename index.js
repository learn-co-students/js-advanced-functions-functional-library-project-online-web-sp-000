const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, alert) {
      Object.values(array).forEach(x => alert(x))
      return array
    },

    map: function(array, callback) {
      let x = []
      Object.values(array).forEach(y => x.push(callback(y)))
      return x 
    },

    reduce: function(array, cb, start=(-2)) {
      Object.values(array).forEach(num => start = cb(start, num, array), 0)
      return start
    },

    find: function(array, predicate) {
      let values = Object.values(array)
      let target = undefined
      for(let i = 0; i < values.length; i++) {
        let index = values[i]
        if(predicate(index)) {
          target = index
          break;
        }
      }
      return target
    },

    filter: function(array, cb) {
      let x = []
      Object.values(array).forEach(y => {
        if(cb(y)) {
          x.push(y)
        }
      })
      return x 
    },

    size: function(array, cb) {
      let x = Object.values(array).length
      return x 
    },

    first: function(array, n=1) {
        if(n > 1) {
          return Object.values(array).slice(0, n)
        } else {
          let x = Object.values(array)[0]
          return x 
        }
    },

    last: function(array, n=1) {
      if(n > 1) {
        return Object.values(array).slice(-n)
      } else {
        let x = Object.values(array)[array.length - 1]
        return x 
      }
    },

    compact: function(array) {
      let arr = []
      Object.values(array).forEach(x => {
        if(x) {
        arr.push(x)
        }
      })
      return arr 
    },

    sortBy: function(array, cb) {
      let newArray = [...array]
      newArray.sort((a, b) => cb(a) - cb(b))
      return newArray
    },

    flatten: function(array, shallow) {
      const flattenOneLevel = function() {
        let newArray = [];
        for(let i = 0; i < this.length; i++) {

          let index = this[i]
          if(Array.isArray(index)) {

            for(let z = 0; z < index.length; z++) {
              newArray.push(index[z])
            }
          }
          else {
            newArray.push(index)
          }
        };
        return newArray
      }

      const hasArray = function() {
        let has = false;
        for(let i = 0; i < this.length; i ++) {
          if(Array.isArray(this[i])) {
            has = true;
            break;
          }
        }
        return has;
      }
      let flatArray = [...array]
      while(hasArray.call(flatArray)) {
        flatArray = flattenOneLevel.call(flatArray)
        if(shallow === true){ break; };
      }
      return flatArray;
    },

    uniq: function(array, isSorted, cb) {
      let transformedArray = [];
      if(cb) {
        for(let i = 0; i < array.length; i++){
        transformedArray.push(cb(array[i]))
        }
      } else {
        transformedArray = [...array]
      }

      let uniqueValues = [];
      let returnedArray = [];

      for(let i = 0; i < transformedArray.length; i++) {
        if(uniqueValues.indexOf(transformedArray[i]) === -1) {
          uniqueValues.push(transformedArray[i])
          returnedArray.push(array[i])
        }
      }

      if(isSorted) {
        return returnedArray
      } else {
        return returnedArray.sort((a, b) => a - b)
      }
    },

    keys: function(object) {
      let allKeys = [];
      for( let key in object) {
        allKeys.push(key)
      }
      return allKeys
    },

    values: function(object) {
      let allValues = [];
      for( let key in object) {
        allValues.push(object[key])
      }
      return allValues
    },

    functions: function(object) {
      let allFunctions = [];
      for(let key in object) {
        if(typeof object[key] === 'function') {
          allFunctions.push(key)
        }
      }
      return allFunctions 
    },


  }
})()

fi.libraryMethod()
