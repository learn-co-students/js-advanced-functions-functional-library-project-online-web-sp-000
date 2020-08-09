const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, alert) {
      let updatedCollection = (obj instanceof Array) ? obj.slice() : Object.values(obj)
      for (let i = 0; i < updatedCollection.length; i++) {
        alert(updatedCollection[i])
      }
      return obj
    },
    map: function(obj, callback) {
      let updatedCollection = (obj instanceof Array) ? obj.slice() : Object.values(obj)
      let newObj = []
      for (let i = 0; i < updatedCollection.length; i++) {
        newObj.push(callback(updatedCollection[i])) 
      }
      return newObj
    },
    reduce: function(myArray, callback, acc) {
      let total = 0
      if (typeof acc === 'undefined') {
        for (let i=1; i<myArray.length; i++) {
          total += myArray[i]
        }
        let acc1 = myArray[0]
        let sum1 = callback(acc1, total, myArray)
        return sum1
      } else {
          for (let i=0; i<myArray.length; i++) {
            total += myArray[i]
          }
        let sum2 = callback(acc, total, myArray)
        return sum2
      }
    },
    find: function(obj, callback) {
      let i = 0
      for (i; i<obj.length; i++) {
        if (callback(obj[i])) {
          obj[i]
          break
        }
      }
      return obj[i]
    },
    filter: function(obj, callback) {
      let col = []
      for (let i = 0; i<obj.length; i++) {
        if (callback(obj[i])) {
          col.push(obj[i])
        }
      }
      return col
    },
    size: function(obj) {
        let col = (obj instanceof Array) ? obj.slice().length : Object.entries(obj)
        return col.length
    },
    first: function(arr, n) {
      if (typeof n === 'undefined') {
        return arr[0]
      } else {
        return arr.slice(0, n)
      }
    },
    last: function(arr, n) {
      if (typeof n === 'undefined') {
        return arr[arr.length-1]
      } else {
        return arr.slice(n-2)
      }
    },
    compact: function(arr) {
      let col = []
      for (let i=0; i<arr.length; i++) {
        if (arr[i]) {
          col.push(arr[i])
        }
      }
      return col
    },
    sortBy: function(arr, callback) {
      let newArr = Array.from(arr)
      if (typeof newArr[0] === 'string') {
        return newArr.sort()
      } else {
        if (isArraySorted(newArr)) {
          let colObj = {}
          for (let n=0; n<newArr.length; n++) {
            colObj[newArr[n]] = callback(newArr[n])
          }
          return sortObj(colObj)
        } else {
            return newArr.sort(function(a, b) {return a-b})
          }
        }
      function isArraySorted(arr) {
        let sorted = true
        for (let i=0; i< arr.length-1; i++) {
          if (arr[i] > arr[i+1]) {
            sorted = false
            break
          }
        }
        return sorted
      }
      function sortObj(objs) {
        let newObj = []
        let returnArray = []
        for (const prop in objs) {
          newObj.push({key:prop, value: objs[prop]})
        }
        newObj.sort((a,b) => a.value - b.value)
        for (const e of newObj) {
          returnArray.push(parseInt(e.key))
        }
        return returnArray
      }
    },
    flatten: function(arr, boolean) {
      if (typeof boolean === 'undefined') {      
        let flatArr = arr.reduce((a,b) => a.concat(Array.isArray(b) ? this.flatten(b) : b), [])
        return flatArr
      } else {
        return arr.flat()
      }
    },
    uniq: function(arr, boolean, callback) {
      if (typeof boolean === 'undefined' && typeof callback === 'undefined') {      
        let returnArr = []
        for (let i=0; i<arr.length-1; i++) {
          if (returnArr.length === 0) {
            returnArr.push(arr[i])
          } else {
            if (typeof returnArr.find(a => a === arr[i]) === 'undefined') {
              returnArr.push(arr[i])
            }
          }
        }
        return returnArr
      } else {
        function fn(arr, callback) {
          let col = []
          for (let i = 0; i<arr.length; i++) {
            col.push({key: arr[i], value: callback(arr[i])})
          }
          return col
        }
        let objs = fn(arr, callback)
        
        function sort(objs) {
          let newObjArr = []
          for (const obj of objs) {
            if (newObjArr === 0) {
              newObjArr.push(obj)
            } else {
              if (typeof newObjArr.find(a => a.value === obj.value) === 'undefined') {
                newObjArr.push(obj)
              }
            }
          }
          return newObjArr
        }
        let ret = sort(objs).map(a => a.key)
        return ret
      }
    },
    keys: function(obj) {
      let keys = []
      for (const prop in obj) {
        keys.push(prop)
      }
      return keys
    },
    values: function(obj) {
      let values = []
      for (const prop in obj) {
        values.push(obj[prop])
      }
      return values
    },
    functions: function(fi) {
      let fn = []
      for (const obj in fi) {
        if (typeof fi[obj] !== 'string') {
          fn.push(obj)
        }
      }
      return fn
    }
  }
})()

fi.libraryMethod()

 