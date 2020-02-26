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

    map: function(object, func) {
      const new_object = []
      for(const key in object){
        const done = func(object[key])
        new_object.push(done)
      }
      return new_object
    },

    reduce: function(object, func, val = 0) {
      let total = val
      for(const key in object){
        total = func(total, object[key])
      }
      return total
    },

    find: function(arr, func){
      return arr.find(s => func(s))
    },

    filter: function(array, func){
      return array.filter(s => func(s))
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

    compact: function(array){
      const new_array = []
      for(const key in array){
        if (array[key]){
          new_array.push(array[key])}
      }
      return new_array
    },

    sortBy: function(array, fun){
      const new_array = [...array]
      return new_array.sort((a,b) => fun(a)-fun(b))
    },

    flatten: function(array, boolean){
      function flatDeep(array){
        return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val), []);
      }

      if (boolean){
        return array.reduce((acc, val) => acc.concat(val), [])
      }
      else{
        return flatDeep(array)
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