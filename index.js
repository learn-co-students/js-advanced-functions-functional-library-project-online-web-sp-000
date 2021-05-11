const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(col, callback) {
        let collection = (col instanceof Array) ? col.slice : Object.values(col)
        collection.forEach(e => callback(e))
        return col
      },

    map: function(col, callback) {
        if (!(col instanceof Array)) col = Object.values(col)
        let arr = []

        col.forEach(e => arr.push(callback(e)))

        return arr

    },

    reduce: function(collection, callback, acc) {
        let col = collection.slice()

        if (!acc) {
          acc = col[0]
          col = col.slice(1)
        }

        col.forEach(e => {
            acc = callback(acc, e, col)
        })

        return acc
    },
    find: function(col, callback) {
        if (!(col instanceof Array)) col = Object.values(col)

        for (let i = 0; i < col.length; i++) {
            if (callback(col[i])) return col[i]
        }
    },
    filter: function(col, callback) {
        if (!(col instanceof Array)) col = Object.values(col)
        let arr = []

        for (let i = 0; i < col.length; i++) {
            if (callback(col[i])) arr.push(col[i])
        }

        return arr
    },
    size: function(col) {
        if (!(col instanceof Array)) col = Object.values(col)

        return col.length
    },
    first: function(col, n = false) {
        return (n) ? col.slice(0, n) : col[0]
    },
    last: function(col, n = false) {
        let len = col.length
        return (n) ? col.slice(len - n, len) : col[len - 1]
    },
    compact: function(col) {
        let arr = []
        col.forEach(e => { if (e) arr.push(e) })
        return arr
    },
    sortBy: function(col, callback) {
        col = [...col]
        return col.sort((a, b) => callback(a) - callback(b))
    },
    flatten: function(col, deep, arr = []) {

        function unNest(arr, elm) {
            for (let val of elm)
                arr.push(val)
        }

        if (!Array.isArray(col)) return arr.push(col)
        if (deep) {
            for (let e of col) {
              Array.isArray(e) ? unNest(arr, e) : arr.push(e)
            }
        } else {
            for (let e of col) {
                this.flatten(e, false, arr)
            }
        }

        return arr
    },
    uniq: function(collection, sorted= false, it = false) {
        if (sorted) {
            const sorted = [collection[0]]
            for (let idx = 1; idx < collection.length; idx++) {
                if (sorted[idx-1] !== collection[idx])
                  sorted.push(collection[idx])
            }
            return sorted
        } else if (!it) {
            return Array.from(new Set(collection))
        } else {
            const modVals = new Set()
            const uniqVals = new Set()
            for (let val of collection) {
                const modVal = it(val)
                if (!modVals.has(modVal)) {
                    modVals.add(modVal)
                    uniqVals.add(val)
                }
            }
            return Array.from(uniqVals)
        }
    },
    keys: function(obj = {}) {
        const keys = []
        for (let key in obj) keys.push(key)
        return keys
    },
    values: function(obj = {}) {
        const vals = []
        for (let key in obj ) vals.push(obj[key])
        return vals
    },
    functions: function(obj) {
        const funcs = []
        for (let key in obj) {
            if (typeof obj[key] === 'function') {
                funcs.push(key)
            }
        }
        return funcs
    },


  }
})()

fi.libraryMethod()
