const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (vals, fn) {
      for (const x in vals) {
        fn(vals[x])
      }
      return vals
    },

    map: function (vals, fn) {
      const r = []
      for (const x in vals) {
        r.push(fn(vals[x]))
      }
      return r
    },

    reduce: function (vals, fn, acc) {
      if (!acc) {
        acc = vals[0]
        vals = vals.slice(1)
      }
      for (const x in vals) {
        acc = fn(acc, vals[x])
      }
      return acc
    },

    find: function (vals, fn) {
      for (const x in vals) {
        if (fn(vals[x])) {
          return vals[x]
        }
      }
      return undefined
    },

    filter: function (vals, fn) {
      const r = []
      for (const x in vals) {
        if (fn(vals[x])) {
          r.push(vals[x])
        }
      }
      return r
    },

    size: function (vals) {
      let r = 0
      for (const x in vals) {
        r++
      }
      return r
    },

    first: function (vals, n = 1) {
      const r = []
      for (let i = 0; i < n; i++) {
        r.push(vals[i])
      }
      return r.length > 1 ? r : r[0]
    },

    last: function (vals, n = 1) {
      const r = []
      for (let i = 0; i < n; i++) {
        r.unshift(vals[vals.length - i - 1])
      }
      return r.length > 1 ? r : r[0]
    },

    compact: function (vals) {
      const r = []
      for (const x in vals) {
        vals[x] ? r.push(vals[x]) : false
      }
      return r
    },

    sortBy: function (vals, fn = x => x) {
      return [...vals].sort((a, b) => fn(a) - fn(b))
    },

    flatten: function (vals, shallow = false, r = []) {
      if (!Array.isArray(vals)) return r.push(vals)
      if (shallow) {
        return vals.flat()
      } else {
        for (const x of vals) {
          this.flatten(x, false, r)
        }
      }
      return r
    },

    uniq: function (vals, sorted = false, fn = x => x) {
      const r = []
      for (const x of vals) {
        r.find(e => fn(e) === fn(x)) ? true : r.push(x)
      }
      return r
    },

    keys: function (vals) {
      const r = []
      for (const x in vals) {
        r.push(x)
      }
      return r
    },

    values: function (vals) {
      const r = []
      for (const x in vals) {
        r.push(vals[x])
      }
      return r
    },

    functions: function (vals) {
      const r = []
      for (const x in vals) {
        typeof vals[x] === 'function' ? r.push(x) : false
      }
      return fi.sortBy(r)
    }
  }
})()

fi.libraryMethod()
