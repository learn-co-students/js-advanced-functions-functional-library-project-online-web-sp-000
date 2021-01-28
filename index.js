const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback='alert') {
      let array = (typeof (collection) === 'object') ? Object.values(collection) : collection.slice()
      for (const ele of array) {callback(ele)}
      return collection
    },

    map: function(collection, callback) {
      let array = (typeof (collection) === 'object') ? Object.values(collection) : collection.slice()
      let solution = []
      for (let ind = 0; ind < array.length; ind++) {
      solution.push(callback(array[ind]))
      }
    return solution
    },

    reduce: function(collection, callback, acc) {
      let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()
        if (!acc) {
          acc = array[0]
          array = array.slice(1)
        }

        for (let el of array) {
          acc = callback(acc, el, array)
        }
        return acc
      },

      find: function(collection, predicate) {
          let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()

          for (let el of array) {
            if (!!predicate(el)) { return el }
          }
        },


        filter: function(collection, predicate) {

          let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()


          let arr = []


          for (let el of array) {
            if (!!predicate(el)) { arr.push(el) }
          }
          return arr
        },

        size: function(collection) {

          let array = (typeof(collection) === 'object') ? Object.values(collection) : collection.slice()

          return array.length
        },

        first: function(array, n) {
          return !n ? array[0] : array.slice(0, n)
        },

        last: function(array, n) {
          return !n ? array[array.length-1] : array.slice(array.length-n)
        },

        compact: function(array) {
          let arr = []

          for (let el of array) {
            !!el ? arr.push(el) : undefined
          }
          return arr
        },

        sortBy: function(array, callback) {
          let arr = array.slice(0)

          return arr.sort(function(a, b){
            return callback(a) - callback(b)
          })
        },

        flatten : function(collection, shallow = false, arr=[]) {
          if (!Array.isArray(collection)) return arr.push(collection)

          function pushValues(memo, array) {
            for (let el of array) {
              memo.push(el)
            }
          }


          if (shallow) {
            for (let el of collection) {
              Array.isArray(el) ? pushValues(arr, el) : arr.push(el)
            }
          }
          else {
            for (let el of collection) {
              this.flatten(el, false, arr)
            }
          }
          return arr
        },

        uniq: function(arr, isSorted=false, callback=false) {

          if (isSorted) {
            return arr.filter((el, index) => {
              if (callback) {
                return (callback(el) !== callback(arr[index+1]))
              } else {
                return (el !== arr[index+1])
              }
            })
          }
          else if (!callback) {
            return Array.from(new Set(arr))
          }
          else {
            let modVals = []
            let vals = []
            for (let val of arr) {
              const mod = callback(val)
              if (modVals.indexOf(mod) === -1) {
                modVals.push(mod)
                vals.push(val)
              }
            }
            return Array.from(vals)
          }
        },

        keys: function(object) {
          let arr = []

          for (const key in object) {
            arr.push(key)
          }
          return arr
        },

        values: function(object) {
          let arr = []

          for (const key in object) {
            arr.push(object[key])
          }
          return arr
        },

        functions: function(object) {
          return Object.keys(object).filter(key => typeof(object[key]) === 'function').sort()
        },
      }
    })()

    fi.libraryMethod()

    fi.functions(fi);
