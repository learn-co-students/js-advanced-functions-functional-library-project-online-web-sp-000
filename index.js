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
          colObj
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
    }
  }
})()

fi.libraryMethod()


let objs = {
  '1': 0.8414709848078965,
  '2': 0.9092974268256817,
  '3': 0.1411200080598672,
  '4': -0.7568024953079282,
  '5': -0.9589242746631385,
  '6': -0.27941549819892586
}
function sortObj(objs) {
  newObj = []
  for (const prop in objs) {
    newObj.push({key:prop, value: objs[prop]})
  }
  newObj.sort((a,b) => a.value - b.value)
  console.log(newOjb[0].value)
}

sortObj(objs)


