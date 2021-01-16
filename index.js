const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, cb) {
      let identifiers = (coll instanceof Array) ? [...Array(coll.length).keys()] : Object.keys(coll);
      for (const idx of identifiers) {
        cb(coll[idx], idx, coll)
      }
      return coll
    },

    map: function(c, cb) {
      let identifiers = (c instanceof Array) ? [...Array(c.length).keys()] : Object.keys(c);
      let result = [];

      for (const id of identifiers) {
        result.push(cb(c[id], id, c))
      }
      return result
    },

    reduce: function(collection, callback, acc) {
      let accumulator = acc;

      for (const item of collection) {
        if (accumulator === undefined) {
          accumulator = item
        } else {
          accumulator = callback(accumulator, item, collection);
        }
      }
      return accumulator
    },


    find: function (collection, predicate) {
      for (const item of collection) {
        if (predicate(item)) {
          return item
        }
      }
      
    },

    filter: function(collection, predicate) {
      let results = [];
      for (const item of collection) {
        if (predicate(item)) {
          results.push(item)
        }
      }
      return results      
    },

    size: function(collection) {
      let tally = 0;
      for (const item in collection) {tally += 1}
      return tally
    },

    first: function(collection, n) {
      if (n) {
        return collection.slice(0,n)
      } else {return collection[0]}
    },

    last: function(collection, n) {
      return n ? collection.slice((collection.length - n)) : collection[collection.length -1];
    },

    compact: function(collection) {
      let result = []
      for (const item of collection) {
        if (!!item) {result.push(item)}
      }
      return result
    },

    sortBy: function(collection, callback) {
      let result = [...collection];
      return result.sort(function(a,b) {return callback(a) - callback(b)})
    },

    flatten: function(arr, shallow) {
      let newArr = [];
      if (!Array.isArray(arr)) {
        return [arr]
      } else if (!!shallow) {
          for (const i of arr) {
            (Array.isArray(i)) ? newArr = newArr.concat(i) : newArr.push(i);
          }
      } else {
        for (const i of arr) {newArr = newArr.concat(fi.flatten(i))}
      }
      return newArr
    },

    uniq: function(array, sorted, callback) {
      if (callback) {
        let result = [];
        let prev = []
        for (const item of array) {
          let cbRes = callback(item)
          if (!prev.includes(cbRes)) {
            result.push(item)
            prev.push(cbRes)
          }
        }
        return result
      }
      return Array.from(new Set(array))
    },

    keys: function(obj) {
      let keys = [];
      for (const key in obj) {keys.push(key)}
      return keys
    },

    values: function(obj) {
      let values = [];
      for (const key in obj) {values.push(obj[key])}
      return values

    },


    functions: function(obj) {
      let funcKeys = [];
      for (const i in obj) {
        if (obj[i].name) { funcKeys.push(obj[i].name)}
      }
      return funcKeys
    },


  }
})()

fi.libraryMethod()
