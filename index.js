const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(list, callback) {
      let rArr = []
      for (const i in list){
        let icon = list[i]
        callback(icon)
        rArr.push(icon)
      }
      return list
    },

    map: function(list, callback) {
      let rArr = []
      for (const i in list){
        let icon = list[i]
        icon = callback(icon)
        rArr.push(icon)
      }
      return rArr
    },

    reduce: function(list, callback, start = -2) {
      for (const i in list){
        let icon = list[i]
        start = callback(start, icon, list)
      }
      return start
    },

    find: function(list, isTrue) {
      let none = true
      for (const i in list){
        let icon = list[i]
        if (isTrue(icon) == true){
          none = false
          return icon
        }
      }
      if (none == true){
        return undefined
      }
    },

    filter: function(list, isTrue){
      let rArr = []
      for (const i in list){
        let icon = list[i]
        if (isTrue(icon) == true){
          rArr.push(icon)
        }
      }
      return rArr
    },

    size: function(list){
      let total = 0
      for (const i in list){
        total++
      }
      return total
    },

    first: function(list, n = 1){
      let rArr = []
      if (n == 1){
        return list[0]
      }
      else{
        let i = 0
        while (i < n){
          rArr.push(list[i])
          i++
        }
      }
      return rArr
    },

    last: function(list, n = 1){
      let rArr = []
      if (n == 1){
        return list[fi.size(list) - 1]
      }
      else{
        let i = 0
        while (i < n){
          rArr.unshift(list[fi.size(list) - i - 1])
          i++
        }
      }
      console.log(rArr)
      return rArr
    },

    compact: function(list) {
      let rArr = []
      for (const i in list){
        if (list[i] == "" || list[i] == false || list[i] == null ||  list[i] == undefined || list[i] == 0 || list[i] !== list[i] ){
        }
        else{
          rArr.push(list[i])
        }
      }
      return rArr
    },

    sortBy: function(arr, callback){
      let list = arr.slice()
      let rArr = list.sort(function (first, second){
        return callback(first) > callback(second)
      })
      return rArr
    },

    flatten: function(list, oneLevel = false){},

    uniq: function(list, isSorted, callback = function(x){ return x}){
      let rArr = []
      let val = ""
      console.log(list)
      if (isSorted){
        for (const i in list){
          if ( callback(val) != callback(list[i])){
            rArr.push(list[i])
          }
          val = list[i]
        }
      }
      else{
        let sorted = list.sort(function(x, y){ return callback(x) > callback(y)})
        for (const i in sorted){
          if ( callback(val) != callback(sorted[i])){
            rArr.push(sorted[i])
          }
          val = list[i]
        }
      }
      console.log(rArr)
      return rArr
    }




  }
})()

fi.libraryMethod()
