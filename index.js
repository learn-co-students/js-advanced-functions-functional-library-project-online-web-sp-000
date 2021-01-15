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
      if (n) {
        return collection.slice((collection.length - n))
      } else {return collection[-1]}
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
