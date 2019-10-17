const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(object, alert) {
      for(const key in object){
        alert(object[key])
      }
      return object
    },

    map: function(object, fun) {
      const new_object = []
      for(const key in object){
        const done = fun(object[key])
        new_object.push(done)
      }
      return new_object
    },

    reduce: function(object, fun, val = 0) {
      let total = val
      for(const key in object){
        total = fun(total, object[key])
      }
      return total
    },

    find: function(arr, fun){
      return arr.find(s => fun(s))
    },

    filter: function(arr, fun){
      return arr.filter(s => fun(s))
    },
    size: function(obj){
      return Object.keys(obj).length
    },

    first: function(obj, num){
      let ret = 0
      if (!!num){
        ret = obj.slice(0, num)}
      else {
        ret = obj[0]
      }
      return ret
    },

    last: function(obj, num){
      if (!!num){
        return obj.slice(-num)}
      else {
        return obj[obj.length-1]
      }
    },

    compact: function(arr){
      const new_array = []
      for(const key in arr){
        if (arr[key]){
          new_array.push(arr[key])}
      }
      return new_array
    },

    sortBy: function(arr, fun){
      const new_array = [...arr]
      return new_array.sort((a,b) => fun(a)-fun(b))
    },

    flatten: function(arr, boolean){
      function flatDeep(arr){
        return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val), []);
      }

      if (boolean){
        return arr.reduce((acc, val) => acc.concat(val), [])
      }
      else{
        return flatDeep(arr)
      }
    },

    uniq: function(arr, boolean = true, fun){
      const unique = (value, index, self) => {
          return self.indexOf(value) === index
      }
      if (boolean){
        return arr.filter(unique)
      }
      else {
        const new_array = arr.filter(fun)
        return new_array.filter(unique)
      }
    },

    keys: function(obj){
      return Object.keys(obj)
    },

    values: function(obj){
      const new_array = []
      for(const key in obj){
        new_array.push(obj[key])
      }
      return new_array
    },

    functions: function(obj){
      const new_array = []
      for(const key in obj){
        if (typeof obj[key] === 'function'){
          new_array.push(key)
        }
      }
      return new_array
    },
    narrtions: function() {
    },


  }
})()

fi.libraryMethod()
